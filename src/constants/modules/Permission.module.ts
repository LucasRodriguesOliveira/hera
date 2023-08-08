import { orange } from '@mui/material/colors';
import { ModuleNamesEnum } from '../../enum/ModuleNames.enum';
import { IModule } from '../../interface/module.interface';
import ShieldIcon from '@mui/icons-material/Shield';

export const PermissionModule: IModule = {
  name: ModuleNamesEnum.PERMISSION,
  acronym: 'PE',
  color: orange[500],
  icon: ShieldIcon,
  path: '/permission',
  text: 'Permission',
  canFavorite: true,
};
