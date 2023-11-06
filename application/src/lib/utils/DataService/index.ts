/**
 /src/lib/utils/api/index.ts
 index.ts
 cml-narrative
 
 Created by Ian Thompson on June 5th 2023
 icthomp@g.clemson.edu
 
 https://idealab.sites.clemson.edu
 
*/

import type { StudentAuthData } from '$lib/types/StudentData';
import { RequestFactory } from '../network/RequestFactory';
import { get } from 'svelte/store';
import { accessTokenData } from '../stores/store';

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

	signUp: async (profileData) => {
		const API_URL = 'http://44.208.184.61:8001';
		return new Promise(async (resolve, reject) => {
			console.log("i'm here.");
			profileData = generateCredentials(profileData);
			console.log(profileData);
			let response = await fetch(`${API_URL}/api/auth/signup`, {
				method: 'POST',
				body: JSON.stringify(profileData),
				headers: {
					'Content-Type': 'application/json'
				}
			});

			let result = await response.json();

			console.log('letseewhatsthis: ', result);

			resolve(result);
			const accessToken = result['accessToken'];
			accessTokenData.set(result['accessToken']);
			console.log('ikkada kotti chudham ', get(accessTokenData));
			let agentResponse = await fetch(`${API_URL}/api/addAgent`, {
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
	setProfileData: async (data) => {
		return new Promise<void>((resolve, reject) => {
			console.log('Attempting to save profile data with data: ', data);
			resolve();
		});
	},
	/**
	 * Handles the submission of the post training survey.
	 * @param surveyResponse an object containing the questions and responses of the post survey
	 * @returns promise
	 */
	submitPostSurvey: async (surveyResponse: {}) => {
		return new Promise<void>(async (resolve, reject) => {
			console.log('attempting to submit post survey with data: ', surveyResponse);
			let token: string = '';
			accessTokenData.subscribe((value) => {
				token = value;
			});

			console.log('token ikkada: ', token);
			const body: TravelLogBody = {
				description: `level-zero-post-survey`,
				data: surveyResponse
			};

			try {
				let res = await RequestFactory('http://44.208.184.61:8001/api/travellogs', body, token);
				resolve();
			} catch (error) {
				reject(error);
			}
		});
	},
	submitFreeResponse: async (id: string, data: any) => {
		return new Promise<void>(async (resolve, reject) => {
			let token: string = '';
			accessTokenData.subscribe((value) => {
				token = value;
			});
			const body: TravelLogBody = {
				description: `level-zero-what-is-${id}-free-response`,
				data: data
			};
			try {
				let res = await RequestFactory('http://44.208.184.61:8001/api/travellogs', body, token);
				resolve();
			} catch (error) {
				reject(error);
			}
		});
	},
	uploadResponseImages: async (id: string, data: HTMLImageElement[] | HTMLOrSVGImageElement) => {
		return new Promise<void>(async (resolve, reject) => {
			let token: string = '';
			accessTokenData.subscribe((value) => {
				token = value;
			});
			console.log(`Attempting to submit an response image for id ${id} with data: `, data);
			let tlBody = getTravelLogBody(data, id);
			try {
				let res = await RequestFactory('http://44.208.184.61:8001/api/travellogs', tlBody, token);
				resolve();
			} catch (error) {
				reject(error);
			}
		});
	},
	submitHelpfulOrHarmfulResponse: async (data: {}) => {
		return new Promise<void>(async (resolve, reject) => {
			let token: string = '';
			accessTokenData.subscribe((value) => {
				token = value;
			});
			const body: TravelLogBody = {
				description: `level-zero-helpful-or-harmful`,
				data: data
			};
			try {
				let res = await RequestFactory('http://44.208.184.61:8001/api/travellogs', body, token);
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

function generateCredentials(profileData: any): any {
	// hardcode the email, password for now
	profileData['email'] = 'spot-agent@idealab.com';
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

function getTravelLogBody(
	data: HTMLOrSVGImageElement | HTMLImageElement[],
	id: string
): TravelLogBody {
	// assumed that if it's an array, it's an array of images
	let imageStrings: string[] = [];
	if (data instanceof Array) {
		data.forEach((image) => imageStrings.push(serializeToString(image)));
		let body: TravelLogBody = {
			description: `level-zero-what-is-${id}-images`,
			data: imageStrings
		};
		return body;
	}
	let body: TravelLogBody = {
		description: `level-zero-what-is-${id}-svg`,
		data: serializeToString(data)
	};
	return body;
}

function serializeToString(data: HTMLOrSVGImageElement | HTMLImageElement): string {
	let serializer = new XMLSerializer();
	return serializer.serializeToString(data);
}
