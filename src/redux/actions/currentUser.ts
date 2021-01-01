import axios from 'axios';

import { setUser } from '../reducers/currentUser';
// import { RegistrationApi, LoginApi } from '../../utils/api';
import { IauthProps } from '../../types';

export const registration = ({ email, password, firstName }: IauthProps) => {
  return async () => {
    console.log(email, password, firstName);
    try {
      // const response = await RegistrationApi.post(email, password, firstName).then({ data });
      // alert(response.data.result);
    } catch (e) {
      // alert(e.response.data.message);
      alert(e.message);
    }
  };
};

export const login = ({ email, password }: IauthProps) => {
  return async (dispatch: any) => {
    try {
      const response = await axios.post(`http://localhost:5000/api/auth/login`, {
        email,
        password,
      });
      dispatch(setUser(response.data.user));
      localStorage.setItem('token', response.data.token);
    } catch (e) {
      // alert(e.response.data.message);
      alert(e.message);
    }
  };
};

export const auth = () => {
  return async (dispatch: any) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/auth/auth`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      dispatch(setUser(response.data.user));
      localStorage.setItem('token', response.data.token);
    } catch (e) {
      // alert(e.response.data.message);
      alert(e.message);
      localStorage.removeItem('token');
    }
  };
};

// export type ActionsTypes = InferActionsTypes<typeof actions>;