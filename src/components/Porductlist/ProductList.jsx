import {
  Box,
  Button,
  Card,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const productList = ({ item, key }) => {
  return (
    // <Box
    //   borderWidth="1px"
    //   borderRadius="lg"
    //   overflow="hidden"
    //   p="3"
    //  >
    //   <Link to="/#">
    //     <Image src={item?.image} alt={item?.name} loading="lazy" />
    //     <Box p="6">
    //       <Box d="flex" alignItems="baseline">
    //         Author:{item?.author}
    //       </Box>
    //       <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
    //         <h3>{item?.name}</h3>
    //       </Box>
    //       <Box>${item.price}</Box>
    //     </Box>
    //   </Link>
    //   <Button colorScheme="blue">Add to basket</Button>
    // </Box>
    <Box mt="25px">
      <Stack p={{ base: "0 2rem" }}>
        <Link to="/#">
          <Image
            objectFit="cover"
            src={item?.image}
            alt={item?.name}
            borderRadius="15px"
          />
          <Text color="teal.600" textTransform="uppercase">
            Author:{item?.author}
          </Text>

          <Heading color="teal.300" size="md" textTransform="capitalize">
            {item?.name}
          </Heading>
          <Box>
            ${item.price}{" "}
            <Box as="span" color="gray.600" fontSize="sm">
              {item?.genre}
            </Box>
          </Box>
        </Link>
        <Button colorScheme="blue">Add to basket</Button>
      </Stack>
    </Box>
  );
};

export default productList;
