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
  Alert,
  AlertIcon,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const toast = useToast();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "https://localhost:7085/api/Account/register",
        {
          id: "",
          userName: username,
          email: email,
          password: password,
          confirmPassword: confirmPassword,
        }
      );

      if (response.data.flag) {
        console.log("Registration Successful!", response.data);
        toast({
          title: "Account created.",
          description: "New account has been created successfully!",
          position: "top-right",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate("/");
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setError("");
      } else {
        setError("Error registering account: " + response.data.message);
      }
    } catch (error) {
      setError("Error creating account: " + error.response.message);
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
              Register An Account
            </Heading>
            <form onSubmit={handleRegister}>
              <FormControl isRequired mt="10">
                <FormLabel htmlFor="Iusername">Username</FormLabel>
                <Input
                  id="Iusername"
                  type="text"
                  bg="#FFFFFF"
                  borderColor="#BCBCBC"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <FormLabel mt="3" htmlFor="Iemail">
                  Email
                </FormLabel>
                <Input
                  id="Iemail"
                  type="text"
                  bg="#FFFFFF"
                  borderColor="#BCBCBC"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <FormLabel mt="3" htmlFor="Ipass">
                  Password
                </FormLabel>
                <Input
                  id="Ipass"
                  type="password"
                  bg="#FFFFFF"
                  borderColor="#BCBCBC"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <FormLabel mt="3" htmlFor="Iconfirmpass">
                  Confirm Password
                </FormLabel>
                <Input
                  id="Iconfirmpass"
                  type="password"
                  bg="#FFFFFF"
                  borderColor="#BCBCBC"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <Center mt="10">
                  <Button
                    type="submit"
                    width="125px"
                    size="md"
                    colorScheme="facebook"
                  >
                    Register
                  </Button>
                </Center>
              </FormControl>
              {error && (
                <Alert status="error" mt="4">
                  <AlertIcon />
                  {error}
                </Alert>
              )}
            </form>
          </AbsoluteCenter>
        </Center>
      </Box>
    </Flex>
  );
};

export default Register;
