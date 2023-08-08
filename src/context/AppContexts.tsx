import { ReactNode, FC } from 'react';
import { BottomDrawerProvider } from './BottomDrawerContext';
import { QuickAccessProvider } from './QuickAccessContext';
import { SidebarProvider } from './SidebarContext';

interface AppContextsProps {
  children: ReactNode;
}

export const AppContexts: FC<AppContextsProps> = ({ children }) => (
  <QuickAccessProvider>
      <SidebarProvider>
        <BottomDrawerProvider>
          {children}
        </BottomDrawerProvider>
      </SidebarProvider>
    </QuickAccessProvider>
);
