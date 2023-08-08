import { purple } from '@mui/material/colors';
import { ModuleNamesEnum } from '../../enum/ModuleNames.enum';
import { IModule } from '../../interface/module.interface';
import BusinessIcon from '@mui/icons-material/Business';

export const CompanyModule: IModule = {
  name: ModuleNamesEnum.COMPANY,
  acronym: 'CO',
  color: purple[500],
  icon: BusinessIcon,
  path: '/company',
  text: 'Company',
  canFavorite: true,
};
