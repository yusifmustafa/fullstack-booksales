import {
  Badge,
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../context/ProductContextProvider";

const ProductList = () => {
  const context = useContext(ProductContext);
  const { products } = context;

  useEffect(() => {
    context.getAllProduct();
  }, []);
  return (
    <Flex
      direction="column"
      justifyContent="center"
      maxW={{ xl: "1500px" }}
      m="0 auto"
      minH="100vh"
    >
      <Grid templateColumns="repeat(4,1fr)" gap={4}>
        {products.map((item, key) => (
          <Card key={item.id} mt="25px" mb="20px">
            <Box mt="25px" mb="20px">
              <Stack p={{ base: "0 2rem" }}>
                <Link to="/#">
                  <Image
                    objectFit="cover"
                    src={item?.image}
                    alt={item?.name}
                    borderRadius="15px"
                    height="400px"
                  />
                  <Badge ml="1" colorScheme="green">
                    20% Sale
                  </Badge>
                  <Text color="teal.600" textTransform="uppercase">
                    Author:{item?.author}
                  </Text>

                  <Heading
                    color="teal.300"
                    size="md"
                    textTransform="capitalize"
                  >
                    {item?.name}
                  </Heading>
                  <Box>
                    ${item?.price}{" "}
                    <Box as="span" color="gray.600" fontSize="sm">
                      {item?.genre}
                    </Box>
                  </Box>
                </Link>
                <Button colorScheme="blue">Add to basket</Button>
              </Stack>
            </Box>
          </Card>
        ))}
      </Grid>
    </Flex>
  );
};

export default ProductList;
