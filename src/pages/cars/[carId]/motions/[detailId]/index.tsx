import {
  Heading,
  Text,
  Box,
  useColorModeValue,
  Radio,
  RadioGroup,
  Stack,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { formatAddress } from "utils/helpers";
import { proposals } from "../../../../../constants";

const Detail = () => {
  const [isAgreed, setIsAgreed] = useState<string>("1");
  const router = useRouter();
  const { detailId } = router.query;
  const proposal = proposals.find((p) => p.id == +detailId!);
  return (
    <>
      <Heading fontSize="4xl" mb="2">
        {proposal?.title}
      </Heading>
      <Text color="gray" mb="8">
        Proposed by: {proposal && formatAddress(proposal.address)}
      </Text>
      <Box>
        <Text
          fontSize={{ base: "16px", lg: "18px" }}
          color={useColorModeValue("yellow.500", "yellow.300")}
          fontWeight={"500"}
          textTransform={"uppercase"}
          mb={"4"}
        >
          Details
        </Text>

        <Text>{proposal?.description}</Text>
        <Box my="12" />
        <Heading lineHeight={1.1} fontWeight={600} fontSize="3xl" mb="8">
          Want to vote?
        </Heading>
        <Text
          fontSize={{ base: "16px", lg: "18px" }}
          color={useColorModeValue("yellow.500", "yellow.300")}
          fontWeight={"500"}
          textTransform={"uppercase"}
          mb="4"
        >
          Select your choice
        </Text>
        <RadioGroup onChange={setIsAgreed} value={isAgreed}>
          <Stack direction="column">
            <Radio value="1">Agree</Radio>
            <Radio value="2">Disagree</Radio>
          </Stack>
        </RadioGroup>
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
          Vote
        </Button>
      </Box>
    </>
  );
};

export default Detail;
