import axios from "../utils/AxiosCustomize.jsx";
const postLogin = (userEmail, userPassword) => {
  return axios.post(`api/v1/login`, {
    email: userEmail,
    password: userPassword,
  });
};
const postSignUp = (userEmail, userPassword, userName) => {
  return axios.post(`api/v1/register`, {
    email: userEmail,
    password: userPassword,
    username: userName,
  });
};
export { postLogin, postSignUp };
