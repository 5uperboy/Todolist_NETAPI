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
  FormErrorMessage,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://localhost:7085/api/Account/login",
        {
          email: email,
          password: password,
        }
      );
      if (response.data.flag) {
        navigate("/todo");
        console.log("Login Successful!", response.data);
        localStorage.setItem("token", response.data.token);
      } else {
        setError("Error logging in: " + response.data.message);
      }
    } catch (error) {
      setError("Error logging in: " + error.response.data);
    }
  };

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
            <form onSubmit={handleSubmit}>
              <FormControl isRequired mt="10">
                <FormLabel htmlFor="Iemail">Email</FormLabel>
                <Input
                  id="Iemail"
                  type="text"
                  bg="#FFFFFF"
                  borderColor="#BCBCBC"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <FormErrorMessage>{error}</FormErrorMessage>
                <FormLabel htmlFor="Ipass">Password</FormLabel>
                <Input
                  id="Ipass"
                  type="password"
                  bg="#FFFFFF"
                  borderColor="#BCBCBC"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <FormErrorMessage>{error}</FormErrorMessage>
                <Center mt="10">
                  <Button
                    type="submit"
                    width="125px"
                    size="md"
                    colorScheme="facebook"
                  >
                    Sign In
                  </Button>
                </Center>
              </FormControl>
              {error && (
                <Alert status="error" mt="4">
                  <AlertIcon />
                  Invalid Email/Password
                </Alert>
              )}
            </form>
          </AbsoluteCenter>
        </Center>
      </Box>
    </Flex>
  );
};

export default Login;
