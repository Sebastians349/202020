import React, { useState } from 'react';
import { Button } from '@chakra-ui/button';

const BotonReloj = () => {
  function tiempo() {
    const inicio = new Date();
    const segundos = inicio.getSeconds();
    console.log(segundos);
  }

  return (
    <Button
      size="md"
      height="48px"
      width="150px"
      border="2px"
      borderColor="brand.500"
      onClick={() => tiempo()}
    >
      START
    </Button>
  );
};

export default BotonReloj;
