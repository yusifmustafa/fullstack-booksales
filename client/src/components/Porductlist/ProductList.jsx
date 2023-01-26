import {
  Alert,
  AlertIcon,
  Badge,
  Box,
  Button,
  Heading,
  Text,
  useToast,
  Wrap,
} from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import Footer from "../../pages/Footer Page/Footer";
import { Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ProductContext } from "../../context/ProductContextProvider";
import Carousell from "./Carousel";
import Api from "../../utils/Api";
import "./ProductList.css";
const ProductList = () => {
  const context = useContext(ProductContext);
  const { products } = context;
  useEffect(() => {
    context.getAllProduct();
  }, []);
  const handleAddProductBasket = (id) => {
    context.sendToBasketProducts(id);
  };

  return (
    <>
      {products.length ? (
        <Carousell />
      ) : (
        <div className="cardd loading">
          <div className="imagee"></div>
          <div className="content">
            <h4></h4>
            <div className="description"></div>
          </div>
        </div>
      )}
      <div className="container">
        <Box className="container" mt="25px" mb="20px">
          <Stack className="row" p={{ base: "0 2rem" }}>
            <div className="row">
              <div className="products">
                {products ? (
                  products.map((item) => (
                    <div key={item.id} className="card mt-4 mb-4">
                      <Link to={`productdetail/${item.id}`}>
                        <div className="image-css">
                          <img
                            src={item?.image}
                            alt={item?.name}
                            className="card-img-top"
                          />
                          <i
                            onClick={() => {
                              console.log("click");
                            }}
                            className="fa fa-heart"
                            aria-hidden="true"
                          ></i>
                          <Badge ml="1" colorScheme="green">
                            20% ENDİRİM
                          </Badge>
                        </div>
                      </Link>
                      <div className="card-body">
                        <div style={{ height: "100px" }}>
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
                            marginTop="0.55rem"
                            className="author-text"
                          >
                            Yazıçı:{item?.author}
                          </Text>
                          <Box marginTop="0.75rem">
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
                          <Button
                            onClick={() => handleAddProductBasket(item.id)}
                            colorScheme="orange"
                          >
                            SƏBƏTƏ ƏLAVƏ ET
                          </Button>
                        </Wrap>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="cardd loading">
                    <div className="imagee"></div>
                    <div className="content">
                      <h4></h4>
                      <div className="description"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Stack>
        </Box>
      </div>
      <Footer />
    </>
  );
};

export default ProductList;
