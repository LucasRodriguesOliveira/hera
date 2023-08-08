import SelectedBookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkIcon from '@mui/icons-material/BookmarkBorder';
import { IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { yellow } from '@mui/material/colors';
import { FC, useMemo, useState } from 'react';
import { Modules } from '../../../constants';
import { ModuleNamesEnum } from '../../../enum/ModuleNames.enum';
import { useQuickAccess } from '../../../hooks/UseQuickAccess';

interface MenuItemProps {
  module: ModuleNamesEnum;
  onClick: (name: ModuleNamesEnum, isSelected: boolean) => void;
}

export const MenuItem: FC<MenuItemProps> = ({
  module,
  onClick = () => {},
}) => {
  const { exists } = useQuickAccess();
  const [isBookmarked, setIsBookmarked] = useState<boolean>(exists(module));
  const text = useMemo(() => Modules.get(module)!.text, [module]);
  const Icon = Modules.get(module)!.icon;

  const handleClick = () => {
    setIsBookmarked(() => !isBookmarked);
    onClick(module, !isBookmarked);
  };

  return (
    <ListItem disablePadding
      secondaryAction={
        <IconButton
          edge='end'
          aria-label='mark for quick access'
          onClick={handleClick}
          disabled={!Modules.get(module)!.canFavorite}
        >
          {isBookmarked
            ? <SelectedBookmarkIcon sx={{ color: yellow[500] }} />
            : <BookmarkIcon />
          }
        </IconButton>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <Icon sx={{ color: Modules.get(module)!.color }} />
        </ListItemIcon>
        <ListItemText
          primary={text}
          primaryTypographyProps={{
            variant: 'h6',
            component: 'div'
          }}
        />
      </ListItemButton>
    </ListItem>
  );
};
