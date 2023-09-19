import * as Yup from 'yup';

export const validationSchema = Yup.object({
  username: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
  keepConnected: Yup.boolean().required().default(false),
});

export interface ISchema {
  username: string;
  password: string;
  keepConnected: boolean;
}
