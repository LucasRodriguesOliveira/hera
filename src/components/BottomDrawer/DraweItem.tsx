import { FC } from 'react';
import { ModuleNamesEnum } from '../../enum/ModuleNames.enum';
import { Modules } from '../../constants';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

interface ItemProps {
  module: ModuleNamesEnum;
  handleClick: () => void;
}

export const DrawerItem: FC<ItemProps> = ({ module, handleClick }) => {
  const { text, icon: Icon } = Modules.get(module)!;

  return (
    <ListItem>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <ListItemText primary={text}
          primaryTypographyProps={{
            variant: 'h5',
          }}
        />
      </ListItemButton>
    </ListItem>
  );
};
