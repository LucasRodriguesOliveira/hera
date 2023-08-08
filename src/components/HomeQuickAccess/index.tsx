import { Avatar, Box, Card, CardHeader, IconButton } from '@mui/material';
import { FC } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { useQuickAccess } from '../../hooks/UseQuickAccess';

export const HomeQuickAccess: FC = () => {
  const { removeItem, items } = useQuickAccess();

  return (
    <Box padding={2}>
      {items.map((item) => (
        <Card sx={{ minWidth: 250, marginBottom: 2 }} key={item.name}>
          <CardHeader
            avatar={
              <Avatar
                sx={{ bgcolor: item.color }}
                aria-label={`Quick Access to ${item.name} page`}
              >
                {item.acronym}
              </Avatar>
            }
            title={item.text}
            titleTypographyProps={{
              variant: 'h5'
            }}
            action={
              <IconButton
                aria-label={`Remove ${item.name} from the quick access`}
                onClick={() => removeItem(item.name)}
              >
                <DeleteIcon color={'error'} />
              </IconButton>
            }
          />
        </Card>
      ))}
    </Box>
  );
};
