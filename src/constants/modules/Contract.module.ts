import { green } from '@mui/material/colors';
import { ModuleNamesEnum } from '../../enum/ModuleNames.enum';
import { IModule } from '../../interface/module.interface';
import DescriptionIcon from '@mui/icons-material/Description';

export const ContractModule: IModule = {
  name: ModuleNamesEnum.CONTRACT,
  acronym: 'CT',
  canFavorite: true,
  color: green[800],
  icon: DescriptionIcon,
  path: '/contract',
  text: 'Contract',
};
