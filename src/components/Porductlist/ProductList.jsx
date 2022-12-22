import { Badge, Button, Text, useToast, Wrap } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
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
      <Carousell />

      {/* {products.length ? (
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
                        }}
                      >
                        SƏBƏTƏ ƏLAVƏ ET
                      </Button>
                    </Wrap>
                  </Stack>
                </Box>
              </Card>
            ))
          ) : ( */}

      {/* <div class="card loading">
              <div class="image"></div>
              <div class="content">
                <h4></h4>
                <div class="description"></div>
              </div>
            </div> */}
      {/* )} */}
      <div class="container">
        <div class="row">
          <div className="products">
            {products ? (
              products.map((item) => (
                <div key={item.id} class="card mt-4 mb-4">
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
                  <div class="card-body">
                    <Text
                      fontWeight="750"
                      letterSpacing="1.1px"
                      color="teal.600"
                      textTransform="uppercase"
                    >
                      Yazıçı:{item?.author}
                    </Text>
                    <h3 class="card-text">Author: {item?.author}</h3>
                    <hr />
                    <h2>Casuals</h2>
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
      </div>
    </>
  );
};

export default ProductList;
