import { Route } from 'react-router-dom';
import { Modules } from '../../constants';
import { ModuleNamesEnum } from '../../enum/ModuleNames.enum';
import { LoginPage } from '.';

export const LoginRoute = () => {
  const module = Modules.get(ModuleNamesEnum.LOGIN)!;

  return (
    <Route path={module.path} element={<LoginPage />} />
  );
};
