import { Box, Button, Stack, Typography } from '@mui/material';
import { grey, red } from '@mui/material/colors';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

export const NotFoundPage: FC = () => {
  const navigation = useNavigate();
  const handleClick = () => {
    navigation(-1);
  };

  return (
    <Box sx={{ p: 2, mt: 8 }}>
      <Stack direction={'column'} spacing={4} gap={4}>
        <Typography variant='h2'
          textAlign={'center'}
          color={grey[500]}
          sx={{
            textShadow: '2px 0 rgb(0 0 0 / 0.5)',
          }}
        >
          Oh no!
        </Typography>
        <Stack direction={'row'}
          spacing={2}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Typography variant='h4'
            color={red[500]}
          >
            404
          </Typography>
          <Typography variant='h6'
            color={grey[800]}
          >
            Page Not Found
          </Typography>
        </Stack>
        <Stack alignItems={'center'}>
          <Button variant='contained' onClick={handleClick}>Go back</Button>
        </Stack>
      </Stack>
    </Box>
  );
};
