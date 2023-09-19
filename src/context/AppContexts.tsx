import { ReactNode, FC } from 'react';
import { BottomDrawerProvider } from './BottomDrawerContext';
import { QuickAccessProvider } from './QuickAccessContext';
import { SidebarProvider } from './SidebarContext';
import { AuthProvider } from './AuthContext';
import { QueryClient, QueryClientProvider } from 'react-query';

interface AppContextsProps {
  children: ReactNode;
}

export const AppContexts: FC<AppContextsProps> = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <QuickAccessProvider>
          <SidebarProvider>
            <BottomDrawerProvider>
              {children}
            </BottomDrawerProvider>
          </SidebarProvider>
        </QuickAccessProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
