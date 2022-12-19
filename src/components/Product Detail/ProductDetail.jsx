import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
} from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { MdLocalShipping } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../../context/ProductContextProvider";

export default function ProductDetail() {
  const context = useContext(ProductContext);
  const { product } = context;
  console.log(product);
  const { id } = useParams();
  useEffect(() => {
    context.getProductById(id);
  }, [id]);

  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/paypalpage");
  };

  return (
    <Container maxW={"7xl"}>
      <Link>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Flex>
            <Image
              rounded={"md"}
              alt={product?.name}
              src={product?.image}
              fit={"cover"}
              align={"center"}
              w={"70%"}
              h={"100%"}
              // h={{ base: "100%", sm: "400px", lg: "500px" }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={"header"}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
              >
                {product?.name}
              </Heading>
              <Text
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight={300}
                fontSize={"2xl"}
              >
                ${product?.price} USD
              </Text>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.200", "gray.600")}
                />
              }
            >
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue("gray.500", "gray.400")}
                  fontSize={"2xl"}
                  fontWeight={"300"}
                >
                  {product?.genre}
                </Text>
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("yellow.500", "yellow.300")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Features
                </Text>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>Price</ListItem>
                    <ListItem>Product Name</ListItem>{" "}
                    <ListItem>Author</ListItem>
                  </List>
                  <List spacing={2}>
                    <ListItem>{product?.price} USD</ListItem>
                    <ListItem>{product?.name}</ListItem>
                    <ListItem>{product?.author}</ListItem>
                  </List>
                </SimpleGrid>
              </Box>
            </Stack>

            <Button
              rounded={"none"}
              w={"full"}
              mt={8}
              size={"lg"}
              py={"7"}
              bg={useColorModeValue("gray.900", "gray.50")}
              color={useColorModeValue("white", "gray.900")}
              textTransform={"uppercase"}
              _hover={{
                transform: "translateY(2px)",
                boxShadow: "lg",
              }}
             >
              Add to cart
            </Button>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent={"center"}
            >
              <MdLocalShipping />
              <Text>2-3 iş günü ərzində çatdırılma</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Link>
    </Container>
  );
}
