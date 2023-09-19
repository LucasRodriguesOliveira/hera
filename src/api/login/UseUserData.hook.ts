import { useMutation } from 'react-query';
import { request } from '../utils/axios.utils';
import { IUser } from '../../interface/user.interface';

export const fetchUserData = (token: string) => {
  return request<IUser>({
    url: '/user/me',
    method: 'get',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const useUserSelfData = () => {
  return useMutation(fetchUserData);
};
