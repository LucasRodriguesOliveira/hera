import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { grey } from '@mui/material/colors';

export const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[500] : grey[300],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));
