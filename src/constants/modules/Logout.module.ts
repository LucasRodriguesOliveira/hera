import { red } from '@mui/material/colors';
import { ModuleNamesEnum } from '../../enum/ModuleNames.enum';
import { IModule } from '../../interface/module.interface';
import LogoutIcon from '@mui/icons-material/Logout';

export const LogoutModule: IModule = {
  name: ModuleNamesEnum.LOGOUT,
  acronym: '',
  canFavorite: false,
  color: red[700],
  path: '/logout',
  text: 'Logout',
  icon: LogoutIcon,
};
