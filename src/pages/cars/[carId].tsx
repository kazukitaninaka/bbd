import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
} from "@chakra-ui/react";
import PledgeForm from "components/PledgeForm";
import { useRouter } from "next/router";
import { cars } from "../../constants";

const Car = () => {
  const router = useRouter();
  const { carId } = router.query;
  const car = cars.find((car) => car.id === +carId!);

  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"car image"}
            src={car?.image || ""}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {car?.name}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
            >
              {car?.price}
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
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore
              </Text>
              <Text fontSize={"lg"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                aliquid amet at delectus doloribus dolorum expedita hic, ipsum
                maxime modi nam officiis porro, quae, quisquam quos
                reprehenderit velit? Natus, totam.
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
                  <ListItem>Chronograph</ListItem>
                  <ListItem>Master Chronometer Certified</ListItem>{" "}
                  <ListItem>Tachymeter</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>Anti‑magnetic</ListItem>
                  <ListItem>Chronometer</ListItem>
                  <ListItem>Small seconds</ListItem>
                </List>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Product Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Year:
                  </Text>{" "}
                  1953
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Body Style:
                  </Text>{" "}
                  4DR SPOR
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Vehicle Type:
                  </Text>{" "}
                  Automible
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Color:
                  </Text>{" "}
                  White
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Engine Type:
                  </Text>{" "}
                  3.0L 6
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    CCylinders:
                  </Text>{" "}
                  6
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Transmission:
                  </Text>{" "}
                  Automatic{" "}
                </ListItem>
              </List>
            </Box>
          </Stack>
          <Box my="24" />
          {car && <PledgeForm custodians={car?.custodians} />}
        </Stack>
      </SimpleGrid>
    </Container>
  );
};
export default Car;
