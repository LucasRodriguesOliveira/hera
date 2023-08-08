import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useSidebar } from '../hooks/UseSidebar';
import { useBottombar } from '../hooks/UseBottombar';

export const Navbar = () => {
  const { toggleOpen: toggleSidebar } = useSidebar();
  const { toggleOpen: toggleBottombar } = useBottombar();

  return (
    <AppBar position='sticky'>
      <Toolbar>
        <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='menu'
          sx={{ mr: 2 }}
          onClick={toggleSidebar}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant='h6'
          component={'div'}
          sx={{ flexGrow: 1 }}
          textAlign={'center'}
        >
          Home
        </Typography>
        <IconButton
          size='large'
          aria-label='account of current user'
          color='inherit'
          onClick={toggleBottombar}
        >
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
