import React from "react";
import "./LoginPage.css";
import {
  Box,
  Flex,
  Heading,
  Input,
  FormControl,
  FormLabel,
  Button,
} from "@chakra-ui/react";
const LoginPage = () => {
  return (
    <div>
      <Flex align="center" width="full" justifyContent="center">
        <Box pt={10}>
          <Box textAlign="center">
            <Heading>Sign Up</Heading>
          </Box>
          <Box my={5} textAlign="left">
            <form>
              <FormControl>
                <FormLabel>E-mail</FormLabel>
                <Input placeholder="Email" size="md" />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input size="md" placeholder="password" />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Confirm Password</FormLabel>
                <Input placeholder="Confirm Password" size="md" />
              </FormControl>
              <Button mt={4} type="submit" width="full">
                Sign Up
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </div>
  );
};

export default LoginPage;
