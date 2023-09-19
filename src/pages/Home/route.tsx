import { Route } from 'react-router-dom';
import { HomePage } from '.';
import { Modules } from '../../constants';
import { ModuleNamesEnum } from '../../enum/ModuleNames.enum';
import { RequireAuth } from '../../components/RequireAuth';

export const HomeRoute = () => {
  const module = Modules.get(ModuleNamesEnum.HOME)!;

  return (
    <Route path={module.path}
      element={
        <RequireAuth>
          <HomePage />
        </RequireAuth>
      }
    />
  );
}
