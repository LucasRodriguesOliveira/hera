import { Box, Paper, Stack, Typography } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import { FC, useCallback } from 'react';
import { useAuth } from '../../hooks/UseAuth';
import { LoginForm } from './Form';
import { ISchema } from './Form/schema';
import { FormikHelpers } from 'formik';
import { useNavigate } from 'react-router-dom';

export const LoginPage: FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const handleLogin = useCallback(async ({
    username,
    password,
    keepConnected
  }: ISchema) => {
    await login({
      username,
      password,
      remember: keepConnected
    });

    navigate('/');
  }, [login, navigate]);
  const handleSubmit = (
    loginData: ISchema,
    onSubmittingProps: FormikHelpers<ISchema>
  ) => {
    onSubmittingProps.setSubmitting(false);
    handleLogin(loginData);
  }

  return (
    <Box sx={{ p: 4 }}>
      <Stack direction={'column'}>
        <Typography variant='h1'
          textAlign={'center'}
          color={blue[500]}
          fontWeight={'bold'}
          sx={{
            textShadow: '1px 1px rgb(0 0 0 / 0.25)'
          }}
        >
          Zeus
        </Typography>
        <Typography variant='subtitle1'
          textAlign={'center'}
          color={grey[600]}
          letterSpacing={8}
        >
          The Almigthy
        </Typography>
      </Stack>
      <Box sx={{ mt: 2 }}>
        <Paper elevation={1}>
          <LoginForm handleSubmit={handleSubmit} />
        </Paper>
      </Box>
    </Box>
  );
}
