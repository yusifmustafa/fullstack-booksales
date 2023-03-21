import React, { useContext, useEffect } from "react";
import "./LoginPage.css";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../context/ProductContextProvider";
import { ToastContainer } from "react-toastify";

const LoginPage = () => {
  const context = useContext(ProductContext);
  const { user, handleOnChange, loginSite, isAuth } = context;
  console.log("isAuth:", isAuth);
  const handleLoginSite = (e) => {
    e.preventDefault();
    loginSite(user);
  };
  return (
    <div>
      <Flex align="center" width="full" justifyContent="center">
        <Box pt={10}>
          <Box textAlign="center">
            <Heading>Sign In</Heading>
          </Box>
          <Box my={5} textAlign="left">
            <form onSubmit={handleLoginSite}>
              <FormControl>
                <FormLabel>E-mail</FormLabel>
                <Input
                  placeholder="Email"
                  name="email"
                  type="email"
                  size="md"
                  required
                  onChange={(event) => {
                    handleOnChange({
                      name: event.target.name,
                      value: event.target.value,
                    });
                  }}
                  value={user.email ? user.email : ""}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input
                  size="md"
                  name="password"
                  type="password"
                  placeholder="Şifrə"
                  required
                  onChange={(event) => {
                    handleOnChange({
                      name: event.target.name,
                      value: event.target.value,
                    });
                  }}
                  value={user.password ? user.password : ""}
                />
              </FormControl>
              <Button mt={4} type="submit" width="full" colorScheme="orange">
                Sign In
              </Button>
            </form>       
            <Box>
              Hesabınız yoxdursa{" "}
              <Link style={{ color: "blue" }} to="/signup">
                Qeydiyyatdan
              </Link>{" "}
              keçin
            </Box>
          </Box>
        </Box>
      </Flex>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
