import React from 'react';
import {
  Box,
  Circle,
  CircularProgress,
  CircularProgressLabel,
} from '@chakra-ui/react';

const Reloj = (props) => {
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
        <CircularProgress value={40} size="xs" />
        <CircularProgressLabel size="md">40%</CircularProgressLabel>
      </Circle>
    </Box>
  );
};

export default Reloj;
