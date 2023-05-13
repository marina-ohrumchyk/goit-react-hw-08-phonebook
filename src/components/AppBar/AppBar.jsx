import { AuthNav } from 'components/AutheNav/AutheNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from '../../hooks/useAuth';
import { Box, Flex, Spacer } from '@chakra-ui/react';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box
      bgGradient="linear(to-l, #0096FF, #0096FF)"
      color="white"
      py={2}
      px={4}
    >
      <Flex alignItems="center">
        <Navigation />
        <Spacer />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Flex>
    </Box>
  );
};
