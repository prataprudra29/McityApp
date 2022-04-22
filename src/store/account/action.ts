import { Dispatch } from "redux";
import { APIClient } from "../../framework/network/APIClient";
import { APIMethod } from "../../framework/network/APIMethod";
import { APIUrl } from "../../framework/network/APIUrl";
import { Action, ActionType } from "./accountConstants";

export const getStoreData = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.STORE_DATA_REQUEST,
    });

    try {
      APIClient.request(
        APIMethod.POST,
        APIUrl.SERVER_BASE_URL + "shops/details?id=2",
        "",
        {}
      ).then((res) => {
        // Sending User Data to Local State Management
        dispatch({
          type: ActionType.STORE_DATA_SUCCESS,
          payload: res.data,
        });
      });
    } catch (err) {
      dispatch({
        type: ActionType.STORE_DATA_FAILIURE,
        payload: "err",
      });
    }
  };
};
