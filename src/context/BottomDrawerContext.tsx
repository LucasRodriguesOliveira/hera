import { FC, ReactNode, createContext, useCallback, useState } from 'react';

export interface BottomDrawerContextProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  toggleOpen: () => void;
}

export const BottomDrawerContext = createContext<BottomDrawerContextProps>({
  isOpen: false,
  setIsOpen: () => {},
  toggleOpen: () => {},
});

interface BottomDrawerProviderProps {
  children: ReactNode;
}

export const BottomDrawerProvider: FC<BottomDrawerProviderProps> = ({
  children
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = useCallback(() => {
    setIsOpen(() => !isOpen);
  }, [isOpen]);

  const value: BottomDrawerContextProps = {
    isOpen,
    setIsOpen,
    toggleOpen,
  }

  return (
    <BottomDrawerContext.Provider value={value}>
      {children}
    </BottomDrawerContext.Provider>
  );
}
