import { FC, ReactNode, createContext, useCallback, useState } from 'react';
import { ModuleNamesEnum } from '../enum/ModuleNames.enum';
import { IModule } from '../interface/module.interface';
import { Modules } from '../constants';

export interface QuickAccessContextProps {
  items: IModule[];
  maxSize: number;
  addItem: (module: ModuleNamesEnum) => void;
  removeItem: (module: ModuleNamesEnum) => void;
  exists: (module: ModuleNamesEnum) => boolean;
}

export const QuickAccessContext = createContext<QuickAccessContextProps>({
  items: [],
  maxSize: 5,
  addItem: () => {},
  removeItem: () => {},
  exists: () => false,
});

export interface QuickAccessProviderProps {
  children: ReactNode;
}

export const QuickAccessProvider: FC<QuickAccessProviderProps> = ({
  children,
}) => {
  const [items, setItems] = useState<IModule[]>([]);

  const addItem = useCallback((module: ModuleNamesEnum) => {
    if (!Modules.has(module)) {
      return;
    }

    const newItems = [...items, Modules.get(module)!];
    setItems(newItems);
  }, [items]);

  const removeItem = useCallback((module: ModuleNamesEnum) => {
    const itemIndex = items.findIndex((item) => item.name === module);

    if (itemIndex < 0) {
      return;
    }

    const newItems = [...items];
    newItems.splice(itemIndex, 1);

    setItems(newItems);
  }, [items]);

  const exists = useCallback((module: ModuleNamesEnum) => {
    return items.findIndex((item) => item.name === module) >= 0;
  }, [items]);

  const value: QuickAccessContextProps = {
    items,
    maxSize: 5,
    addItem,
    removeItem,
    exists,
  };

  return (
    <QuickAccessContext.Provider value={value}>
      {children}
    </QuickAccessContext.Provider>
  );
}
