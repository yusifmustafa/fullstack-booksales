import { Flex, Grid } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../context/ProductContextProvider";
import ProductList from "../Porductlist/ProductList";

const Card = () => {
  useEffect(() => {
    context.getAllProduct();
  }, []);

  const context = useContext(ProductContext);
  const { productList } = context;
  return (
    <Flex
      direction="column"
      justifyContent="center"
      maxW={{ xl: "1500px" }}
      m="0 auto"
      minH="100vh"
    >
      <Grid templateColumns="repeat(4,1fr)" gap={4}>
        {productList.map((item, key) => (
          <ProductList item={item} key={key} />
        ))}
      </Grid>
    </Flex>
  );
};

export default Card;
