import { APIMethod } from "./APIMethod";

export default class NetworkConstants {
  // this is api header the required to inform network that which type of
  // headers you should accepts
  static API_HEADER_ACCEPTS = "application/json";

  // this is api content type the required to inform network that
  // which type of content ytpe you should accepts
  static API_CONTENT_TYPE = "application/json;charset=UTF-8";

  // this is the api timeout to handle how long can every api get called.
  static API_TIMEOUT = 100000;

  // this is the api retry count:
  // this ensures to how many time can a single api can try to call in case of errors .
  static API_RETRY_COUNT = 3;

  // this is the api retry delay in Milliseconds:
  // this ensures the delay in between the retry call. (in Milliseconds)
  static API_RETRY_DELAY = 100;

  // you need to define method those you want to retry,
  // currently it gets all the methods that api uses.
  static METHODS_TO_RETRY = Object.values(APIMethod);

  // these are the api codes that you want to retry.
  static STATUS_CODES_TO_RETRY = [
    [100, 199],
    [429, 429],
    [500, 599],
  ];
}
