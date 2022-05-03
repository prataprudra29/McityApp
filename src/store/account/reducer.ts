import { Action, ActionType } from "./accountConstants";

interface StoreData { }

interface State {
  storeData?: StoreData[];
  getData?: any,
  loading?: boolean;
  error?: string | null;
}

const initialState: any = {
  storeData: [],
  getData: {},
  loading: false,
  error: null,
};

export const storeDataReducer = (
  state: State = initialState,
  action: Action
): State => {
  switch (action.type) {
    case ActionType.STORE_DATA_REQUEST:
      return { loading: true };

    case ActionType.STORE_DATA_SUCCESS:
      return { loading: false, storeData: action.payload };

    case ActionType.STORE_DATA_FAILIURE:
      return { loading: false, error: "error" };

    case ActionType.GET_CATEGORY_DATA:
      return { loading: false, getData: action.payload };

    default:
      return state;
  }
};
