import { Box, Heading, Text } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <Box maxW="300px" mx="auto" my="4">
      <Heading
        as="h1"
        size="xl"
        mb="4"
        bgGradient="linear(to-l, #0096FF, #0096FF)"
        bgClip="text"
        fontSize="2xl"
        fontWeight="extrabold"
      >
        Welcome to phonebook!
      </Heading>
      <Text fontSize="lg" lineHeight="tall">
       
      </Text>
    </Box>
  );
};

export default HomePage;
