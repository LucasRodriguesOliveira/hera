import { Global } from '@emotion/react';
import { Box, SwipeableDrawer } from '@mui/material';
import { FC } from 'react';
import { Puller } from './Puller';
import { DrawerItems } from './DrawerItems';
import { useBottombar } from '../../hooks/UseBottombar';

export const BottomDrawer: FC = () => {
  const { isOpen, setIsOpen } = useBottombar();

  const toggleDrawer = (newOpen: boolean) => () => {
    setIsOpen(newOpen);
  }

  return (
    <>
    <Global
      styles={{
        '.MuiDrawer-root .MuiDrawer-paperAnchorBottom': {
          overflow: 'visible',
        },
      }}
    />
    <SwipeableDrawer
      anchor='bottom'
      open={isOpen}
      onOpen={toggleDrawer(true)}
      onClose={toggleDrawer(false)}
      swipeAreaWidth={40}
      disableSwipeToOpen={false}
      ModalProps={{
        keepMounted: true,
      }}
    >
      <Box sx={{
        position: 'absolute',
        top: -40,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        visibility: 'visible',
        right: 0,
        left: 0,
      }}>
        <Puller />
      </Box>
      <Box
        sx={{
          px: 2,
          pb: 2,
          height: '100%',
          overflow: 'auto',
        }}
      >
        <DrawerItems />
      </Box>
    </SwipeableDrawer>
    </>
  );
};
