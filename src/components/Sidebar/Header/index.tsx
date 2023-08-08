import CloseIcon from '@mui/icons-material/Close';
import { Box, Divider, IconButton, Typography } from '@mui/material';
import { useSidebar } from '../../../hooks/UseSidebar';
import { DrawerHeader } from './DrawerHeader';

export const SidebarHeader = () => {
  const { toggleOpen } = useSidebar();

  return (
    <Box>
      <DrawerHeader>
        <Typography variant='h6' component={'div'}>
          Menu
        </Typography>
        <IconButton
          size='large'
          aria-label='menu close button'
          onClick={toggleOpen}
        >
          <CloseIcon />
        </IconButton>
      </DrawerHeader>
      <Divider></Divider>
    </Box>
  );
};
