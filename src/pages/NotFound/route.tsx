import { Route } from 'react-router-dom';
import { NotFoundPage } from '.';

export const NotFoundRoute = () => {
  return (
    <Route path='*' element={<NotFoundPage />} />
  );
}
