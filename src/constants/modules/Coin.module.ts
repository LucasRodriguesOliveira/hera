import { yellow } from '@mui/material/colors';
import { ModuleNamesEnum } from '../../enum/ModuleNames.enum';
import { IModule } from '../../interface/module.interface';
import PaidIcon from '@mui/icons-material/Paid';

export const CoinModule: IModule = {
  name: ModuleNamesEnum.COIN,
  acronym: 'CN',
  color: yellow[800],
  path: '/coin',
  text: 'Coin',
  icon: PaidIcon,
  canFavorite: true,
};
