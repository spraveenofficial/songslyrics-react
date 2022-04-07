import { useReducer } from "react";
import { requestNewSong } from "../actions/request";
import { RequestSong } from "../reducers/request";

export const useRequest = () => {
  const initialState = {
    loading: false,
    error: null,
    message: null,
    success: false,
  };

  const [state, dispatch] = useReducer(RequestSong, initialState);
  const userRequestNewSong = async (data) => {
    requestNewSong(dispatch, data);
  };
  const { loading, error, message, success } = state;
  return { loading, error, message, success, request: userRequestNewSong };
};
