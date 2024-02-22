import {
  Flex,
  Box,
  Center,
  AbsoluteCenter,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";

const Login = () => {
  return (
    <Flex
      width="100vw"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        bg="#FAF0CA"
        height="600px"
        width="550px"
        borderRadius="10px"
        borderEndStartRadius="70px"
        shadow="md"
      >
        <Center height="100%">
          <AbsoluteCenter>
            <Heading
              size="lg"
              fontFamily="'Kodchasan', sans-serif"
              fontSize="40px"
            >
              Login to Create a Task
            </Heading>
            <FormControl isRequired mt="10">
              <FormLabel>Username</FormLabel>
              <Input type="text" bg="#FFFFFF" borderColor="#BCBCBC" />
              <FormLabel>Password</FormLabel>
              <Input type="password" bg="#FFFFFF" borderColor="#BCBCBC" />
              <Center mt="10">
                <Button width="125px" size="md" colorScheme="facebook">
                  Sign In
                </Button>
              </Center>
            </FormControl>
          </AbsoluteCenter>
        </Center>
      </Box>
    </Flex>
  );
};

export default Login;
