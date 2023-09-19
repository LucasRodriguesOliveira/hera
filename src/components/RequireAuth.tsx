import { FC, ReactNode } from 'react';
import { useAuth } from '../hooks/UseAuth';
import { Navigate, useLocation } from 'react-router-dom';
import { Modules } from '../constants';
import { ModuleNamesEnum } from '../enum/ModuleNames.enum';

interface RequireAuthProps {
  children: ReactNode;
}

export const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();
  const module = Modules.get(ModuleNamesEnum.LOGIN)!;

  if (!auth.user) {
    return <Navigate to={module.path} state={{ path: location.pathname }} />
  }

  return children;
}
