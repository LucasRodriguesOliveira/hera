import { FC } from 'react';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Items } from './Items';
import { Modules } from '../../constants';

export const DrawerItems: FC = () => {
  return (
    <List>
      {Items.map((item) => {
        const { icon: Icon, text } = Modules.get(item)!;

        return (
          <ListItem key={item}>
            <ListItemButton>
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
        )
      })}
    </List>
  );
};
