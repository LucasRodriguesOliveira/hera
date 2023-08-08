import { Drawer } from '@mui/material';
import { FC } from 'react';
import { useSidebar } from '../../hooks/UseSidebar';
import { SidebarHeader } from './Header';
import { SidebarItems } from './Items';
export const Sidebar: FC = () => {
  const { isOpen, setIsOpen } = useSidebar();

  return (
    <Drawer
      anchor='left'
      open={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <SidebarHeader />
      <SidebarItems />
    </Drawer>
  );
}
