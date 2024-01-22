/**
 /src/lib/utils/network/RequestFactory.ts
 RequestFactory.ts
 cml-narrative
 
 Created by Ian Thompson on August 15th 2023
 icthomp@g.clemson.edu
 
 https://idealab.sites.clemson.edu
 
*/

/**
 * Create a network POST request
 * @param url url of server you are attempting to request
 * @param body data to send to server
 * @param accessToken optional accessToken for requests that require an access token
 * @returns promise with JSON object
 */
// export const RequestFactory = async (url: string, body: any, accessToken?: string) => {
// 	return new Promise<any>(async (resolve, reject) => {
// 		// Initialize headers
// 		var headers = new Headers();
// 		headers.append('Content-Type', 'application/json');

// 		// If the optional accessToken param is passed, then we want to append
// 		// the access token to the headers of our request
// 		if (accessToken) {
// 			headers.append('x-access-token', accessToken);
// 		}

// 		// Initialize request options for a POST request
// 		var requestOptions: RequestInit = {
// 			method: 'POST',
// 			headers: headers,
// 			body: JSON.stringify(body),
// 			redirect: 'follow'
// 		};

// 		// Execute the POST request
// 		try {
// 			let response = await fetch(url, requestOptions);
// 			let result = await response.json();

// 			// console.log("result: ", response.text);

// 			resolve(result);
// 		} catch (error) {
// 			reject(error);
// 		}
// 	});
// };

export const RequestFactory = async (url: string, body: FormData | any, accessToken?: string) => {
	return new Promise<any>(async (resolve, reject) => {
		// Initialize headers
		var headers = new Headers();

		// If the optional accessToken param is passed, then we want to append
		// the access token to the headers of our request
		if (accessToken) {
			headers.append('x-access-token', accessToken);
		}

		// Initialize request options for a POST request
		var requestOptions: RequestInit = {
			method: 'POST',
			headers: headers,
			redirect: 'follow'
		};

		// Set the request body based on the type of body parameter
		if (body instanceof FormData) {
			// headers.append('Content-Type', 'multipart/form-data');
			requestOptions.body = body;
		} else {
			headers.append('Content-Type', 'application/json');
			requestOptions.body = JSON.stringify(body);
		}

		// Execute the POST request
		try {
			let response = await fetch(url, requestOptions);
			let result = await response.json();

			// console.log("result: ", response.text);

			resolve(result);
		} catch (error) {
			reject(error);
		}
	});
};
