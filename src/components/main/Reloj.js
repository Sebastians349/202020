import React from 'react';
import { Box, Circle, CircularProgress } from '@chakra-ui/react';

const Reloj = () => {
  /*   function tiempo() {
    const inicio = new Date();
    const segundos = inicio.getSeconds();
    const minutos = segundos * 60;
  }
  setInterval(tiempo, 1000); 
   FIX 
  */

  return (
    <Box>
      <Circle
        size="20rem"
        bg="transparent"
        borderWidth=".5rem"
        borderColor="brand.500"
        color="black.500"
      >
        <CircularProgress value={35} size="xs" />
      </Circle>
    </Box>
  );
};

export default Reloj;
