import {
  Badge,
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Heading,
  Image,
  Skeleton,
  Stack,
  Text,
  useToast,
  Wrap,
} from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../context/ProductContextProvider";
import "./ProductList.css";
const ProductList = () => {
  const context = useContext(ProductContext);
  const { products } = context;

  useEffect(() => {
    context.getAllProduct();
  }, []);
  const toast = useToast();
  const handleAddProductBasket = (id) => {
    context.sendToBasketProducts(id);
  };

  return (
    <Flex direction="column" justifyContent="center" m="0 auto">
      <Grid templateColumns="repeat(4,1fr)" gap={4}>
        {products.length ? (
          products.map((item) => (
            <Card key={item.id} mt="25px" mb="20px">
              <Box className="container" mt="25px" mb="20px">
                <Stack className="row" p={{ base: "0 2rem" }}>
                  <Link to={`productdetail/${item.id}`}>
                    <Image
                      objectFit="cover"
                      src={item?.image}
                      alt={item?.name}
                      borderRadius="15px"
                      height="400px"
                      className="image-fluid"
                    />
                    <Badge ml="1" colorScheme="green">
                      20% ENDİRİM
                    </Badge>
                    <Text color="teal.600" textTransform="uppercase">
                      Yazıçı:{item?.author}
                    </Text>

                    <Heading
                      color="teal.300"
                      size="md"
                      textTransform="capitalize"
                    >
                      {item?.name}
                    </Heading>
                    <Box>
                      <strong>₼{item?.price} </strong>
                      <Box as="span" color="gray.600" fontSize="sm">
                        {item?.genre}
                      </Box>
                    </Box>
                  </Link>
                  <Wrap>
                    <Button
                      colorScheme="blue"
                      onClick={() => {
                        handleAddProductBasket(item.id);
                        toast({
                          title: "Məhsul səbətə əlavə edildi!",
                          description:
                            "Məhsulu görüntüləmək üçün səbətə daxil olun",
                          position: "top-right",
                          status: "success",
                          duration: 9000,
                          isClosable: true,
                        });
                      }}
                    >
                      SƏBƏTƏ ƏLAVƏ ET
                    </Button>
                  </Wrap>
                </Stack>
              </Box>
            </Card>
          ))
        ) : (
          <div class="card loading">
            <div class="image"></div>
            <div class="content">
              <h4></h4>
              <div class="description"></div>
            </div>
          </div>
        )}
      </Grid>
    </Flex>
  );
};

export default ProductList;
