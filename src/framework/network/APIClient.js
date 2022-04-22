import { APIMethod } from "./APIMethod";
import { APIUrl } from "./APIUrl";
import NetworkConstants from "./NetworkConstants";
const rax = require("retry-axios");
const axios = require("axios").default;
// do not remove this it attached the retry lib to axios.
const interceptorId = rax.attach();

// this class will handle all the api request.
export class APIClient {
  // common function to handle requests,
  // you need to pass
  // FIRST: method of your api
  // SECOND: endpoint only (without base url)
  // THIRD: params of API URL
  // FOURTH: payload data if post request
  static request(method, endpoint, params, data) {
    const { access_token, queryParams } = params || "";
    const options = {
      baseURL: APIUrl.SERVER_BASE_URL,
      url: endpoint,
      method: method,
      params: queryParams,
      timeout: NetworkConstants.API_TIMEOUT,
      headers: {
        Authorization: "Bearer " + access_token,
      },
      data: data,
      raxConfig: {
        // Retry 3 times on requests that return a response (500, etc) before giving up.  Defaults to 3.
        retry: NetworkConstants.API_RETRY_COUNT,

        // Retry twice on errors that don't return a response (ENOTFOUND, ETIMEDOUT, etc).
        noResponseRetries: 2,

        // Milliseconds to delay at first.  Defaults to 100. Only considered when backoffType is 'static'
        retryDelay: NetworkConstants.API_RETRY_DELAY,

        // HTTP methods to automatically retry.  Defaults to:
        // ['GET', 'HEAD', 'OPTIONS', 'DELETE', 'PUT']
        httpMethodsToRetry: NetworkConstants.METHODS_TO_RETRY,

        // The response status codes to retry.  Supports a double
        // array with a list of ranges.  Defaults to:
        // [[100, 199], [429, 429], [500, 599]]
        statusCodesToRetry: NetworkConstants.STATUS_CODES_TO_RETRY,

        // You can detect when a retry is happening, and figure out how many
        // retry attempts have been made
        onRetryAttempt: (err) => {
          const cfg = rax.getConfig(err);
          console.log(`Retry attempt #${cfg.currentRetryAttempt}`);
        },
      },
    };

    return axios(options);
  }

  // // this method handle the common api erro
  // static apiError(error) {
  // 	console.log(`Fetch Error =\n`, error)
  // 	if (error == 'TypeError: Network request failed') {
  // 		alert('Please check your network and try again')
  // 	} else {
  // 	}
  // }

  // // this function parse the response if its status is 200
  // // else return the response as it is for all the post requests.
  // static parseRes(res) {
  // 	if (res.status) {
  // 		switch (res.status) {
  // 			case 200:
  // 				const contentType = res.headers.get("content-type");
  // 				if (contentType && contentType.indexOf("application/json") !== -1) {
  // 					return res.json()
  // 				} else {
  // 					// if not json
  // 					return res;
  // 				}
  // 			default:
  // 				return res;
  // 				// this.statusError(res)
  // 				break;
  // 		}
  // 	}
  // }

  // // this function create options for all the post requests
  // static postOptions(postData, type) {
  // 	return {
  // 		method: type ? type : "POST", // POST, PUT, DELETE, etc.
  // 		headers: this.getHeaderObj(),
  // 		body: JSON.stringify(postData)
  // 	}
  // }

  // // this function provides all the required options for all the requests
  // static getOptions() {
  // 	return {
  // 		method: "GET",
  // 		headers: this.getHeaderObj()
  // 	}
  // }

  // // this function creates the coommon header obj for all requests
  // static getHeaderObj() {
  // 	return {
  // 		"Content-Type": "application/json",
  // 	}
  // }

  // #############################################################################################
  // 										API METHODS START
  // #############################################################################################

  // sample for get request

  // static getPrescriptions(userID) {
  // 	if (userID) {
  // 		const url = APIUrl.GET_PRESCRIPTIONS_URL + userID;
  // 		return fetch(url, this.getOptions())
  // 			.then(res => this.parseRes(res))
  // 			.catch(error => this.apiError(error));
  // 	}
  // }

  // sample function for post request

  // static addUserByPhoneNumber(phNumber) {
  // 	if (phNumber) {
  // 		const postData = {
  // 			"registration_type": "OTP",
  // 			"phone_number": phNumber
  // 		}
  // 		const url = APIUrl.ADD_UPDATE_USER_URL;
  // 		return fetch(url, this.postOptions(postData))
  // 			.then(res => this.parseRes(res))
  // 			.catch(error => this.apiError(error));
  // 	}
  // }
}
