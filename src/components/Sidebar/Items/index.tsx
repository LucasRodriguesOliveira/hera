import { Box, List } from '@mui/material';
import { MenuItem } from './MenuItem';
import { Items } from './items';
import { useCallback } from 'react';
import { useQuickAccess } from '../../../hooks/UseQuickAccess';
import { ModuleNamesEnum } from '../../../enum/ModuleNames.enum';

export const SidebarItems = () => {
  const { addItem, removeItem } = useQuickAccess();

  const toggleBookmark = useCallback((
    module: ModuleNamesEnum,
    isSelected: boolean,
  ) => {
    if (isSelected) {
      addItem(module);
      return;
    }

    removeItem(module);
  }, [addItem, removeItem]);

  return (
    <Box
      sx={{ width: 250 }}
      role='presentation'
    >
      <List>
        {Items.map((item) => (
          <MenuItem key={item}
            module={item}
            onClick={toggleBookmark}
          />
        ))}
      </List>
    </Box>
  );
};
