import { Box, Text, VStack } from '@chakra-ui/react';

const SidebarTest = () => {
  return (
    <Box bg="gray.200" w="200px" h="100vh" p={4}>
      <VStack spacing={4} align="start">
        <Text fontSize="xl">Menu Item 1</Text>
        <Text fontSize="xl">Menu Item 2</Text>
        <Text fontSize="xl">Menu Item 3</Text>
      </VStack>
    </Box>
  );
};

export default SidebarTest;
