import { teal } from '@mui/material/colors';
import { ModuleNamesEnum } from '../../enum/ModuleNames.enum';
import { IModule } from '../../interface/module.interface';
import PersonPinIcon from '@mui/icons-material/PersonPin';

export const UserTypeModule: IModule = {
  name: ModuleNamesEnum.USER_TYPE,
  acronym: 'UT',
  canFavorite: true,
  color: teal[500],
  icon: PersonPinIcon,
  path: '/user-type',
  text: 'User Type',
};
