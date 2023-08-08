import { useContext } from 'react';
import { BottomDrawerContext } from '../context/BottomDrawerContext';

export const useBottombar = () => {
  return useContext(BottomDrawerContext);
};
