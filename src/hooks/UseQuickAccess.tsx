import { useContext } from 'react';
import { QuickAccessContext } from '../context/QuickAccessContext';

export const useQuickAccess = () => {
  return useContext(QuickAccessContext);
};
