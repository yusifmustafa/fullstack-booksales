import {
  Badge,
  Box,
  Button,
  Heading,
  Text,
  useToast,
  Wrap,
} from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ProductContext } from "../../context/ProductContextProvider";
import Carousell from "./Carousel";
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
    toast({
      title: "Məhsul səbətə əlavə edildi!",
      description: "Məhsulu görüntüləmək üçün səbətə daxil olun",
      position: "top-right",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <>
      {products.length ? (
        <Carousell />
      ) : (
        <div class="cardd loading">
          <div class="imagee"></div>
          <div class="content">
            <h4></h4>
            <div class="description"></div>
          </div>
        </div>
      )}
      <div class="container">
        <Box className="container" mt="25px" mb="20px">
          <Stack className="row" p={{ base: "0 2rem" }}>
            <div class="row">
              <div className="products">
                {products ? (
                  products.map((item) => (
                    <div key={item.id} class="card mt-4 mb-4">
                      <Link to={`productdetail/${item.id}`}>
                        <div class="image-css">
                          <img
                            src={item?.image}
                            alt={item?.name}
                            class="card-img-top"
                          />
                          <i class="fa fa-heart" aria-hidden="true"></i>
                          <Badge ml="1" colorScheme="green">
                            20% ENDİRİM
                          </Badge>
                        </div>
                      </Link>
                      <div class="card-body">
                        <div style={{height:"100px"}}>
                          <Heading
                            color="teal.700"
                            size="md"
                            textTransform="capitalize"
                          >
                            {item?.name}
                          </Heading>
                          <hr />
                          <Text
                            fontWeight="750"
                            letterSpacing="1.1px"
                            color="teal.600"
                            textTransform="uppercase"
                            className="author-text"
                          >
                            Yazıçı:{item?.author}
                          </Text>
                          <Box>
                            <strong>₼{item?.price} </strong>
                            <Box as="span" color="gray.600" fontSize="sm">
                              {item?.genre}
                            </Box>
                          </Box>
                        </div>
                        <Wrap
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: "10%",
                          }}
                        >
                          <Button colorScheme="blue">SƏBƏTƏ ƏLAVƏ ET</Button>
                        </Wrap>
                      </div>
                    </div>
                  ))
                ) : (
                  <div class="cardd loading">
                    <div class="imagee"></div>
                    <div class="content">
                      <h4></h4>
                      <div class="description"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Stack>
        </Box>
      </div>
    </>
  );
};

export default ProductList;
