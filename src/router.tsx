import { FC } from 'react';
import { Routes } from 'react-router-dom';
import { HomeRoute } from './pages/Home/route';
import { LoginRoute } from './pages/Login/route';
import { NotFoundRoute } from './pages/NotFound/route';

export const Router: FC = () => {
  return (
    <Routes>
      {HomeRoute()}
      {LoginRoute()}
      {NotFoundRoute()}
    </Routes>
  );
}
