// import { fetchAuthorizationMailApi } from "../../api";
import axios from 'axios';

const fetchUserStarted = () => ({
  type: 'GET_USER_DATA_START',
});

const fetchUserSuccess = (user: any) => ({
  type: 'GET_USER_DATA_SUCCESS',
  payload: user,
});

const fetchUserFailed = (error: any) => ({
  type: 'GET_USER_DATA_FAILED',
  payload: error,
});

export const fetchUserAuthorization = () => (dispatch: any) => {
  dispatch(fetchUserStarted());

  const token = localStorage.getItem('token');

  axios
    .post(
      'http://api.memory-lane.ru/db/setAccount',
      {},
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${token}`,
        },
      },
    )
    .then((res) => {
      dispatch(fetchUserSuccess(res.data));
    })
    .catch((error) => dispatch(fetchUserFailed(error.message)));
};
