import {
  Avatar,
  Box,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { FaRegStickyNote, FaRegStar, FaSearch, FaSignOutAlt } from "react-icons/fa";
import './sideBar-Test.css';

const SidebarTest = () => {
  return (
    <Flex direction="column" w="200px" h="100vh" borderRight="#BCBCBC solid 1px">
      <Box bg="orange.200" h="20" w="100%" p={3}>
        <Flex alignItems="center">
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          <Text fontSize="xl" ml={2} noOfLines={[1, 2]} color="#0D3B66" fontWeight="semibold">
            User Name
          </Text>
        </Flex>
      </Box>
      <VStack spacing={10} align="start" p={3} h="100%">
        <HStack>
          <InputGroup>
            <InputLeftElement>
              <Icon as={FaSearch} color="#BCBCBC" />
            </InputLeftElement>
            <Input type="text" placeholder="Search task" w="100%" borderColor="#BCBCBC" borderRadius="15px"/>
          </InputGroup>
        </HStack>
        <HStack className="sidebar-btn" w="100%">
          <Icon as={FaRegStickyNote} boxSize={5} />
          <Text fontSize="xl">Add New Task</Text>
        </HStack>
        <HStack className="sidebar-btn">
          <Icon as={FaRegStar} boxSize={5} />
          <Text fontSize="xl" >Important</Text>
        </HStack>
        <Spacer />
        <HStack mb={5} className="sidebar-btn">
          <Icon as={FaSignOutAlt} boxSize={5} />
          <Text fontSize="xl" >Sign Out</Text>
        </HStack>
      </VStack>
    </Flex>
  );
};

export default SidebarTest;
