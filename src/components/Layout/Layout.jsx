import { Box } from '@chakra-ui/react';
import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <Box
      bgGradient="linear(to-r, #F0FFFF, #F0FFFF)"
      minH="100vh"
      px="8"
    >
      <AppBar />
      <Outlet />
    </Box>
  );
};
