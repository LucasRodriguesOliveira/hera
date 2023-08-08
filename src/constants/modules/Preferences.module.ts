import { grey } from '@mui/material/colors';
import { ModuleNamesEnum } from '../../enum/ModuleNames.enum';
import { IModule } from '../../interface/module.interface';
import SettingsIcon from '@mui/icons-material/Settings';

export const PreferencesModule: IModule = {
  name: ModuleNamesEnum.PREFERENCES,
  acronym: '',
  canFavorite: false,
  color: grey[700],
  path: '/preferences',
  text: 'Preferences',
  icon: SettingsIcon,
};
