import React, { useContext } from "react";
import {
  Box,
  Flex,
  Heading,
  Input,
  FormControl,
  FormLabel,
  Button,
} from "@chakra-ui/react";
import "./register.css";
import { ProductContext } from "../../context/ProductContextProvider";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
const RegisterPage = () => {
  const context = useContext(ProductContext);
  const { user, handleOnChange, registerSite } = context;

  const handleOnSubmitRegistered = (e) => {
    e.preventDefault();
    registerSite(user);
  };

  return (
    <div>
      {" "}
      <Flex align="center" width="full" justifyContent="center">
        <Box pt={10}>
          <Box textAlign="center">
            <Heading>Qeydiyyat</Heading>
          </Box>
          <Box my={5} textAlign="left">
            <form onSubmit={handleOnSubmitRegistered}>
              <FormControl>
                <FormLabel>Adınız</FormLabel>
                <Input
                  placeholder="Adınız"
                  name="name"
                  type="text"
                  size="md"
                  required
                  onChange={(event) => {
                    handleOnChange({
                      name: event.target.name,
                      value: event.target.value,
                    });
                  }}
                  value={user.name ? user.name : ""}
                />
              </FormControl>
              <FormControl mt={4}>
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
                  placeholder="Şifrəniz"
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
                Sign Up
              </Button>
            </form>
            <Box textAlign="center">
              Hesabınız varsa{" "}
              <Link style={{ color: "blue" }} to="/">
                Giriş
              </Link>{" "}
              edin
            </Box>
          </Box>
        </Box>
      </Flex>
      <ToastContainer />
    </div>
  );
};

export default RegisterPage;
