import React from 'react';
import { Box, Circle, CircularProgress } from '@chakra-ui/react';
const Reloj = () => {
  return (
    <Box>
      <Circle
        size="20rem"
        bg="transparent"
        borderWidth=".5rem"
        borderColor="black.500"
        color="black.500"
      >
        <CircularProgress value={40} size="xs" />
      </Circle>
    </Box>
  );
};

export default Reloj;
