import React, { useState } from 'react';
import {
  Box,
  Button,
  Circle,
  CircularProgress,
  CircularProgressLabel,
} from '@chakra-ui/react';

const Reloj = () => {
  const [tiempo, setTiempo] = useState(0);

  return (
    <Box>
      <Circle
        size="20rem"
        bg="transparent"
        borderWidth=".5rem"
        borderColor="brand.500"
        color="black.500"
      >
        <CircularProgress value={tiempo} size="xs" />
        <CircularProgressLabel fontSize="2xl">
          {setTiempo}%
        </CircularProgressLabel>
      </Circle>
      <Button
        size="md"
        mt="4"
        height="48px"
        width="150px"
        border="2px"
        borderColor="brand.500"
        onClick={() => setTiempo()}
      >
        START
      </Button>
    </Box>
  );
};

export default Reloj;
