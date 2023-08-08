import { blue } from '@mui/material/colors';
import { ModuleNamesEnum } from '../../enum/ModuleNames.enum';
import { IModule } from '../../interface/module.interface';
import HomeIcon from '@mui/icons-material/Home';

export const HomeModule: IModule = {
  name: ModuleNamesEnum.HOME,
  acronym: '',
  canFavorite: false,
  color: blue[300],
  icon: HomeIcon,
  path: '/',
  text: 'Home',
};
