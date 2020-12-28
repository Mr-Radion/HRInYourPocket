// import { fetchRegistration, fetchLogin } from "../../api";
import axios from 'axios';
import { setUser } from '../reducers/currentUser';

interface IauthProps {
  firstName?: string;
  email: string;
  password: string;
}

export const registration = ({ firstName, email, password }: IauthProps) => {
  return async () => {
    console.log(firstName, email, password);
    try {
      const response = await axios.post(`http://localhost:5000/api/auth/registration`, {
        firstName,
        email,
        password,
      });
      alert(response.data.result);
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

