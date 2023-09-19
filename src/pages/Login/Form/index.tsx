import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, IconButton, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import { FormikHelpers, useFormik } from 'formik';
import { FC, useState } from 'react';
import { Modules } from '../../../constants';
import { ModuleNamesEnum } from '../../../enum/ModuleNames.enum';
import { ISchema, validationSchema } from './schema';

interface LoginFormProps {
  handleSubmit: (
    values: ISchema,
    onSubmittingProps: FormikHelpers<ISchema>,
  ) => void;
}

const initialValues: ISchema = {
  username: '',
  password: '',
  keepConnected: false,
};

export const LoginForm: FC<LoginFormProps> = ({
  handleSubmit = () => {},
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const module = Modules.get(ModuleNamesEnum.LOGIN)!;
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Typography variant='h4'
        padding={2}
        color={blue[400]}
        fontWeight={'bold'}
      >
        {module.text}
      </Typography>
      <Stack padding={2} gap={3}>
        <TextField id='username'
          name='username'
          label={'Username'}
          required
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
        />
        <FormControl variant='outlined'>
          <TextField id='password'
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment:
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={() => setShowPassword(() => !showPassword)}
                    onMouseDown={(e: React.MouseEvent<HTMLButtonElement>) => e.preventDefault()}
                    edge='end'
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
            }}
            label='Password'
            required
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          ></TextField>
        </FormControl>
        <Stack alignItems={'center'}>
          <FormGroup>
            <FormControlLabel control={<Checkbox />}
              id={'keepConnected'}
              name='keepConnected'
              label={'Keep me connected'}
              value={formik.values.keepConnected}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </FormGroup>
        </Stack>
        <Stack alignItems={'flex-end'}>
          <Button variant='contained'
            startIcon={<module.icon />}
            size='large'
            type='submit'
            sx={{ maxWidth: 150 }}
            disabled={!formik.isValid || formik.isSubmitting}
          >
            Login
          </Button>
        </Stack>
      </Stack>
    </form>
  );
};
