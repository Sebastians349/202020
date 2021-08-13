import React from 'react';
import { ChakraProvider, Box, VStack, Grid } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Reloj from './components/main/Reloj';
import BotonReloj from './components/main/BotonReloj';

function App() {
  const theme = extendTheme({
    colors: {
      brand: {
        100: '#E76F51',
        200: '#F4A261',
        300: '#E9C46A',
        400: '#33C1B1',
        500: '#2FB1A2',
        600: '#2A9D8F',
        700: '#264653',
        800: '#335F70',
        900: '#2D5362',
      },
    },
  });
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Reloj />
            <BotonReloj></BotonReloj>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
