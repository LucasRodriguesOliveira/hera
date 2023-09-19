import { FC, ReactNode, createContext, useState } from 'react';
import { IUser } from '../interface/user.interface';
import { LoginData, useLogin } from '../api/login/UseLogin.hook';
import { useUserSelfData } from '../api/login/UseUserData.hook';

export interface AuthContextProps {
  user?: IUser | null;
  login: (loginData: LoginData) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  login: () => {},
  logout: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const { mutateAsync: getToken } = useLogin();
  const { mutateAsync: getMe } = useUserSelfData();

  const login = async (loginData: LoginData) => {
    const { data: token } = await getToken(loginData);
    const { data: me } = await getMe(token);

    console.log(me);

    setUser({
      id: me.id,
      name: me.name,
    });
  };

  const logout = () => {
    setUser(null);
  };

  const value: AuthContextProps = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
