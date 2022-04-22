export const STORE_DATA_REQUEST = "SOTRE_DATA_REQUEST";
export const STORE_DATA_SUCCESS = "STORE_DATA_SUCCESS";
export const STORE_DATA_FAILIURE = "STORE_DATA_FAILIURE";

export enum ActionType {
  STORE_DATA_REQUEST = "STORE_DATA_REQUEST",
  STORE_DATA_SUCCESS = "STORE_DATA_SUCCESS",
  STORE_DATA_FAILIURE = "STORE_DATA_FAILIURE",
}

interface actionPending {
  type: ActionType.STORE_DATA_REQUEST;
}

interface actionSuccess {
  type: ActionType.STORE_DATA_SUCCESS;
  payload: string;
}

interface actionFail {
  type: ActionType.STORE_DATA_FAILIURE;
  payload: string;
}

export type Action = actionPending | actionSuccess | actionFail;
