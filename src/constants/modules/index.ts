import { IModule } from '../../interface/module.interface';
import { ClientModule } from './Client.module';
import { CoinModule } from './Coin.module';
import { CompanyModule } from './Company.module';
import { ContractModule } from './Contract.module';
import { HomeModule } from './Home.module';
import { InstallmentModule } from './Installment.module';
import { LoginModule } from './Login.module';
import { LogoutModule } from './Logout.module';
import { ModuleModule } from './Module.module';
import { PermissionModule } from './Permission.module';
import { PreferencesModule } from './Preferences.module';
import { ProfileModule } from './Profile.module';
import { ServicePackModule } from './ServicePack.module';
import { UserModule } from './User.module';
import { UserTypeModule } from './UserType.module';
import { register } from './register';

export const Modules = new Map<string, IModule>(register([
  HomeModule,
  ClientModule,
  CoinModule,
  CompanyModule,
  InstallmentModule,
  PermissionModule,
  ServicePackModule,
  ModuleModule,
  UserModule,
  ContractModule,
  UserTypeModule,
  ProfileModule,
  PreferencesModule,
  LogoutModule,
  LoginModule,
]));
