/**
 /src/lib/utils/api/index.ts
 index.ts
 cml-narrative
 
 Created by Ian Thompson on June 5th 2023
 icthomp@g.clemson.edu
 
 https://idealab.sites.clemson.edu
 
*/

import type { StudentAuthData } from '$lib/types/StudentData';
import { PUBLIC_BACKEND_API_URL } from '$env/static/public';
import { RequestFactory } from '../network/RequestFactory';
import { get } from 'svelte/store';
import { accessTokenStore } from '../stores/store';
import type { UserData } from '$lib/types/UserData';
import { error } from '@sveltejs/kit';

/**
 * Handles and contains all of the authentication logic
 */
const Auth = {
	/**
	 * TODO: Implement signup
	 * @param username
	 * @param email
	 * @param password
	 * @returns
	 */

	signUp: async (profileData: UserData) => {
		return new Promise(async (resolve, reject) => {
			console.log("i'm here.");
			profileData = generateCredentials(profileData);
			console.log(profileData);
			let response = await fetch(`${PUBLIC_BACKEND_API_URL}/api/auth/signup`, {
				method: 'POST',
				body: JSON.stringify(profileData),
				headers: {
					'Content-Type': 'application/json'
				}
			});

			let result = await response.json();

			resolve(result);
			console.log('let see if im getting tokens after: ', result);
			const accessToken = result['accessToken'];
			accessTokenStore.set(result['accessToken']);
			console.log('ikkada kotti chudham ', get(accessTokenStore));
			let agentResponse = await fetch(`${PUBLIC_BACKEND_API_URL}/api/addAgent`, {
				method: 'POST',
				body: JSON.stringify(getAgentBody(profileData)),
				headers: {
					'Content-Type': 'application/json',
					'x-access-token': accessToken
				}
			});

			let agentResult = await agentResponse.json();
			console.log('agentResult: ', agentResult);
			resolve(agentResult);
		});
	},
	/**
	 * Sign in a user with a credential
	 *
	 * This function is a WIP but will check with the back end to determine if the user has been created, and then
	 * "sign"the user in. To do this, we will create a user store and set the appropriate data. We can also look into
	 * persisting this store and having it be saved as a cookie.
	 *
	 * @param credential StudentAuthData credential to sign in with
	 * @returns promise wheter or not the user has been signed in or not
	 */
	signIn: async (credential: StudentAuthData) => {
		return new Promise<void>(async (resolve, reject) => {
			console.log('Attempting to sign in user with data: ', credential);

			try {
				let res = await RequestFactory('/api/auth/signin', {
					credentials: {
						// agentName: credential.agentName,
						password: credential.password,
						email: credential.email
					}
				});

				if (res) {
					resolve(res);
				} else {
					reject(res);
				}
			} catch (error) {
				reject(error);
			}

			// throw new Error("Could not validate ID. Please make sure you are scanning your AGENT ID badge provided by Mission Control");
		});
	}
};

const Data = {
	// setProfileData: async (data) => {
	// 	return new Promise<void>((resolve, reject) => {
	// 		console.log('Attempting to save profile data with data: ', data);
	// 		resolve();
	// 	});
	// },
	/**
	 * Handles the submission of the post training survey.
	 * @param surveyResponse an object containing the questions and responses of the post survey
	 * @returns promise
	 */
	submitPostSurvey: async (surveyResponse: {}) => {
		return new Promise<void>(async (resolve, reject) => {
			console.log('attempting to submit post survey with data: ', surveyResponse);

			let token;
			accessTokenStore.subscribe((value) => {
				token = value;
			});

			console.log('token ikkada: ', token);
			const body: TravelLogBody = {
				description: `level-zero-post-survey`,
				data: surveyResponse
			};

			try {
				let res = await RequestFactory(`${PUBLIC_BACKEND_API_URL}/api/travellogs`, body, token);
				resolve();
			} catch (error) {
				reject(error);
			}
		});
	},
	submitFreeResponse: async (id: string, data: any) => {
		return new Promise<void>(async (resolve, reject) => {
			let token;
			accessTokenStore.subscribe((value) => {
				token = value;
			});
			console.log('token ikkada: ', token);
			const body: TravelLogBody = {
				description: `level-zero-what-is-${id}-free-response`,
				data: data
			};
			try {
				let res = await RequestFactory(`${PUBLIC_BACKEND_API_URL}/api/travellogs`, body, token);
				resolve();
			} catch (error) {
				reject(error);
			}
		});
	},
	uploadVideoToS3: async (mediaPath: string, fileName: string) => {
		return new Promise<string>(async (resolve, reject) => {
			let token;
			accessTokenStore.subscribe((value) => {
				token = value;
			});

			console.log('token ikkada: ', token);
			try {
				const formData = new FormData();

				const response = await fetch(mediaPath);
				const fileBlob = await response.blob();

				formData.append('file', fileBlob, fileName); // Append the file name with extension
				console.log('the form data', formData);
				console.log('the token', token);

				let res = await RequestFactory(
					`${PUBLIC_BACKEND_API_URL}/api/uploadContent`,
					formData,
					token
				);
				console.log(res.url);
				resolve(res.url);
			} catch (error) {
				console.error('upload media to s3 error: ', error);
				reject(error);
			}
		});
	},
	uploadImageOrSvgToS3: async (mediaPath: string | HTMLOrSVGElement, type: string) => {
		return new Promise<string>(async (resolve, reject) => {
			let fileName = generateImageOrSvgFileName(type);

			let token;
			accessTokenStore.subscribe((value) => {
				token = value;
			});

			if (typeof mediaPath !== 'string') {
				try {
					let svgElement = mediaPath;
					if (svgElement instanceof SVGElement) {
						let serializer = new XMLSerializer();
						let svgString = serializer.serializeToString(svgElement);
						let svgBlob = new Blob([svgString], { type: 'image/svg+xml' });
						let fileName = generateImageOrSvgFileName(type);

						const formData = new FormData();
						formData.append('file', svgBlob, fileName);

						let res = await RequestFactory(
							`${PUBLIC_BACKEND_API_URL}/api/uploadContent`,
							formData,
							token
						);

						console.log(res);
						resolve(res.url);
					}
				} catch (error) {
					console.error('upload media to s3 error: ', error);
					reject(error);
				}
			} else {
				try {
					const formData = new FormData();

					const response = await fetch(mediaPath);
					const fileBlob = await response.blob();

					formData.append('file', fileBlob, fileName); // Append the file name with extension

					let res = await RequestFactory(
						`${PUBLIC_BACKEND_API_URL}/api/uploadContent`,
						formData,
						token
					);

					console.log(res);
					resolve(res.url);
				} catch (error) {
					console.error('upload media to s3 error: ', error);
					reject(error);
				}
			}
		});
	},
	uploadResponseImages: async (id: string, data: string | string[], type: string) => {
		return new Promise<void>(async (resolve, reject) => {
			let token;
			accessTokenStore.subscribe((value) => {
				token = value;
			});

			console.log('token ikkada: ', token);
			console.log(`Attempting to submit an response image for id ${id} with data: `, data);
			let tlBody = getTravelLogBody(data, id, type);
			try {
				let res = await RequestFactory(`${PUBLIC_BACKEND_API_URL}/api/travellogs`, tlBody, token);
				resolve();
			} catch (error) {
				reject(error);
			}
		});
	},
	submitHelpfulOrHarmfulResponse: async (data: any) => {
		return new Promise<void>(async (resolve, reject) => {
			let token;
			accessTokenStore.subscribe((value) => {
				token = value;
			});
			console.log('token ikkada: ', token);
			const body: TravelLogBody = {
				description: `level-zero-helpful-or-harmful`,
				data: data
			};
			console.log('body ikkada: ', body);
			try {
				let res = await RequestFactory(`${PUBLIC_BACKEND_API_URL}/api/travellogs`, body, token);
				resolve();
			} catch (error) {
				reject(error);
			}
		});
	}
};

/**
 * DataService is the manager for all of the communication between the frontend and the backend
 */
const DataService = {
	Auth,
	Data
};

export default DataService;

function generateEmail(profileData: any): string {
	console.log('generateEmail: ', profileData);
	let firstName = profileData.name.first;
	let agentName = profileData.agentName;

	// Generate a random number between 0 and 9999
	const randomNumber = Math.floor(Math.random() * 100);

	// Combine the first name, agent name, and random number to create the email
	const email = `${firstName.toLowerCase()}.${agentName.toLowerCase()}${randomNumber}@spotagency.com`;

	return email;
}
function generateCredentials(profileData: any): any {
	// hardcode the email, password for now
	profileData['email'] = generateEmail(profileData);
	profileData['password'] = 'password';
	return profileData;
}

interface UserBody {
	name: {
		first: string;
		last: string;
	};
	email: string;
	password: string;
}

interface AgentBody {
	age: number;
	interests: string[];
	agentName: string;
}

interface TravelLogBody {
	data: any;
	description: string;
}

function getUserBody(profileData: any): UserBody {
	return {
		name: {
			first: profileData.firstName,
			last: profileData.lastName
		},
		email: profileData.email,
		password: profileData.password
	};
}

function getAgentBody(profileData: any): AgentBody {
	return {
		age: profileData.age,
		interests: profileData.interests,
		agentName: profileData.agentName
	};
}

function getTravelLogBody(data: string | string[], id: string, type: string): TravelLogBody {
	return {
		description: `level-zero-what-is-${id}-${type}`,
		data: data
	};
}

function generateImageOrSvgFileName(type: string) {
	const date = new Date();
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();
	const extension = type === 'image' ? 'png' : 'svg';
	return `${year}-${month}-${day}-${hours}-${minutes}-${seconds}.${extension}`;
}
