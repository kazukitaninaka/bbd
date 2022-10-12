import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

type Car = {
  id: number;
  name: string;
  image: string;
  price: number;
};

const Card = ({ car }: { car: Car }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/${car.id}`);
  };
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"188px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${car.image})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={188}
            width={282}
            objectFit={"cover"}
            src={car.image}
            alt="stuff"
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            {car.name}
          </Heading>
          <Text fontWeight={800} fontSize={"xl"}>
            ${car.price}
          </Text>
          <Button onClick={handleClick}>Pledge</Button>
        </Stack>
      </Box>
    </Center>
  );
};

export default Card;
