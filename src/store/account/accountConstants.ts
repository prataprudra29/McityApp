export const STORE_DATA_REQUEST = "SOTRE_DATA_REQUEST";
export const STORE_DATA_SUCCESS = "STORE_DATA_SUCCESS";
export const STORE_DATA_FAILIURE = "STORE_DATA_FAILIURE";
export const GET_CATEGORY_DATA = "GET_CATEGORY_DATA";

export enum ActionType {
  STORE_DATA_REQUEST = "STORE_DATA_REQUEST",
  STORE_DATA_SUCCESS = "STORE_DATA_SUCCESS",
  STORE_DATA_FAILIURE = "STORE_DATA_FAILIURE",
  GET_CATEGORY_DATA = "GET_CATEGORY_DATA",
}

interface actionPending {
  type: ActionType.STORE_DATA_REQUEST;
}

interface actionData {
  type: ActionType.GET_CATEGORY_DATA;
  payload: any
}

interface actionSuccess {
  type: ActionType.STORE_DATA_SUCCESS;
  payload: [];
}

interface actionFail {
  type: ActionType.STORE_DATA_FAILIURE;
  payload: string;
}

export type Action = actionPending | actionSuccess | actionFail | actionData;
