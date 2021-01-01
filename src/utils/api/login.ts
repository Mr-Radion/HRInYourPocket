import axios from 'axios';

export default {
  post: (props: any) =>
    axios.post(`http://localhost:5000/api/auth/login`, {
      ...props,
    }),
};


