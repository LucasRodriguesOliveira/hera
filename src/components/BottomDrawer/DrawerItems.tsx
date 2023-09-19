import { List } from '@mui/material';
import { FC } from 'react';
import { ModuleNamesEnum } from '../../enum/ModuleNames.enum';
import { DrawerItem } from './DraweItem';
import { useAuth } from '../../hooks/UseAuth';

export const DrawerItems: FC = () => {
  const auth = useAuth();

  return (
    <List>
      <DrawerItem module={ModuleNamesEnum.PROFILE}
        handleClick={() => {}}
      />
      <DrawerItem module={ModuleNamesEnum.PREFERENCES}
        handleClick={() => {}}
      />
      <DrawerItem module={ModuleNamesEnum.LOGOUT}
        handleClick={auth.logout}
      />
    </List>
  );
};
