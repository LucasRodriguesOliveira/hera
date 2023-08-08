import { red } from '@mui/material/colors';
import { IModule } from '../../interface/module.interface';
import { ModuleNamesEnum } from '../../enum/ModuleNames.enum';
import PersonIcon from '@mui/icons-material/Person';

export const ClientModule: IModule = {
  name: ModuleNamesEnum.CLIENT,
  text: 'Client',
  acronym: 'CL',
  path: '/client',
  icon: PersonIcon,
  color: red[500],
  canFavorite: true,
};
