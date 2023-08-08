import { red } from '@mui/material/colors';
import { ModuleNamesEnum } from '../../enum/ModuleNames.enum';
import { IModule } from '../../interface/module.interface';
import RequestPageIcon from '@mui/icons-material/RequestPage';

export const ServicePackModule: IModule = {
  name: ModuleNamesEnum.SERVICE_PACK,
  acronym: 'SP',
  canFavorite: true,
  color: red[700],
  icon: RequestPageIcon,
  path: '/service-pack',
  text: 'Service Pack',
};
