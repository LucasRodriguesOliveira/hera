import { useMutation } from 'react-query';
import { request } from '../utils/axios.utils';

export interface LoginData {
  username: string;
  password: string;
  remember: boolean;
}

export const requestLogin = (loginData: LoginData) => {
  return request<string>({
    url: '/auth/login',
    method: 'post',
    data: loginData,
  });
};

export const useLogin = () => {
  return useMutation(requestLogin);
}
