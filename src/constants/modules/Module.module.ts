import { ModuleNamesEnum } from '../../enum/ModuleNames.enum';
import { IModule } from '../../interface/module.interface';
import { brown } from '@mui/material/colors';
import ListIcon from '@mui/icons-material/List';

export const ModuleModule: IModule = {
  name: ModuleNamesEnum.MODULE,
  acronym: 'MO',
  canFavorite: true,
  color: brown[500],
  icon: ListIcon,
  path: '/module',
  text: 'Module',
};
