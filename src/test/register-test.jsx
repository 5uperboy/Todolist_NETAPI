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

const RegisterTest = () => {
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
              Register An Account
            </Heading>
            <FormControl isRequired mt="10">
              <FormLabel>Username</FormLabel>
              <Input type="text" bg="#FFFFFF" borderColor="#BCBCBC" />
              <FormLabel mt="3">Password</FormLabel>
              <Input type="password" bg="#FFFFFF" borderColor="#BCBCBC" />
              <FormLabel mt="3">Confirm Password</FormLabel>
              <Input type="password" bg="#FFFFFF" borderColor="#BCBCBC" />
              <Center mt="10">
                <Button width="125px" size="md" colorScheme="facebook">
                  Register
                </Button>
              </Center>
            </FormControl>
          </AbsoluteCenter>
        </Center>
      </Box>
    </Flex>
  );
}

export default RegisterTest;
