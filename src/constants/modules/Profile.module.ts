import { lightBlue } from '@mui/material/colors';
import { ModuleNamesEnum } from '../../enum/ModuleNames.enum';
import { IModule } from '../../interface/module.interface';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const ProfileModule: IModule = {
  name: ModuleNamesEnum.PROFILE,
  acronym: '',
  canFavorite: false,
  color: lightBlue[500],
  path: '/profile',
  text: 'Profile',
  icon: AccountCircleIcon,
};
