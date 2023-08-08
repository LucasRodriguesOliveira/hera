import { blue } from '@mui/material/colors';
import { ModuleNamesEnum } from '../../enum/ModuleNames.enum';
import { IModule } from '../../interface/module.interface';
import PaymentsIcon from '@mui/icons-material/Payments';

export const InstallmentModule: IModule = {
  name: ModuleNamesEnum.INSTALLMENT,
  acronym: 'IN',
  color: blue[500],
  icon: PaymentsIcon,
  path: '/installment',
  text: 'Installment',
  canFavorite: true
};
