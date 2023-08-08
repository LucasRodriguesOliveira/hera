import { Box, Typography } from '@mui/material';
import { FC, useCallback, useMemo } from 'react';

interface GreetingProps {
  name: string;
}

const GreetingDictionary  = {
  DEFAULT: 'Hi',
  WELCOME_BACK: 'Welcome back',
  ITS_BEEN_A_WHILE: 'It\'s been a while',
  DAYTIME: 'Good',
  NICE_TO_SEE_YOU: 'Nice to see you again',
}

export const Greeting: FC<GreetingProps> = ({ name = '' }) => {
  const firstName = useMemo(() => {
    return name.split(' ')[0];
  }, [name]);

  const getGreetTextDaytime = useCallback((now: Date) => {
    const hours = now.getHours();

    if (hours >= 6 && hours < 12) {
      return `${GreetingDictionary.DAYTIME} morning`;
    }

    if (hours >= 12 && hours < 18) {
      return `${GreetingDictionary.DAYTIME} afternoon`;
    }

    if (hours >= 18 && hours <= 23) {
      return `${GreetingDictionary.DAYTIME} evening`;
    }

    return 'Noon';
  }, []);

  const greetName: keyof typeof GreetingDictionary = useMemo(() =>
    Object.getOwnPropertyNames(
      GreetingDictionary
    )[Math.floor(
        Math.random() * Object.getOwnPropertyNames(GreetingDictionary).length
      )
     ] as keyof typeof GreetingDictionary,
    []
  );

  let greetText = GreetingDictionary[greetName];

  if (greetName === 'DAYTIME') {
    greetText = getGreetTextDaytime(new Date());
  }

  return (
    <Box p={2}>
      <Typography variant='h6' textAlign={'center'}>
        {greetText}
      </Typography>
      <Typography variant='h5' textAlign={'center'}>
        {firstName}
      </Typography>
    </Box>
  );
};
