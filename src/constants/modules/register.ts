import { ModuleNamesEnum } from '../../enum/ModuleNames.enum';
import { IModule } from '../../interface/module.interface';

export const register = (modules: IModule[]): [ModuleNamesEnum, IModule][] => {
  return modules.map((module: IModule) => [module.name, module]);
}
