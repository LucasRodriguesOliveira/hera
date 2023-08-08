import { amber } from '@mui/material/colors';
import { ModuleNamesEnum } from '../../enum/ModuleNames.enum';
import { IModule } from '../../interface/module.interface';
import PeopleIcon from '@mui/icons-material/People';

export const UserModule: IModule = {
  name: ModuleNamesEnum.USER,
  acronym: 'US',
  canFavorite: true,
  color: amber[500],
  icon: PeopleIcon,
  path: '/user',
  text: 'User',
};
