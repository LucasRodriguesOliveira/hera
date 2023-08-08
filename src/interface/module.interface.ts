import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { ModuleNamesEnum } from '../enum/ModuleNames.enum';

export interface IModule {
  name: ModuleNamesEnum;
  acronym: string;
  text: string;
  path: string;
  icon: OverridableComponent<SvgIconTypeMap<unknown, "svg">> & {
    muiName: string;
  };
  color: string;
  canFavorite: boolean;
}
