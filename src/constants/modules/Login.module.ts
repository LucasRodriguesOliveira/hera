import { blue } from '@mui/material/colors';
import { ModuleNamesEnum } from '../../enum/ModuleNames.enum';
import { IModule } from '../../interface/module.interface';
import LoginIcon from '@mui/icons-material/Login';

export const LoginModule: IModule = {
  name: ModuleNamesEnum.LOGIN,
  acronym: '',
  canFavorite: false,
  color: blue[500],
  icon: LoginIcon,
  path: '/login',
  text: 'Login',
};
