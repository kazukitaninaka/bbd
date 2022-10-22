import {
  Heading,
  Text,
  Box,
  useColorModeValue,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Flex,
} from "@chakra-ui/react";
import ChartComponent from "components/Chart";
import { useRouter } from "next/router";
import { proposals } from "../../../../../constants";

const Result = () => {
  const router = useRouter();
  const { detailId } = router.query;
  const motion = proposals.find((p) => p.id === +detailId!);

  return (
    <div>
      <Heading fontSize="3xl" mb="5">
        Result
      </Heading>
      <Box mb="5">
        <Text fontSize="xl" mb="2">
          <Text
            fontWeight="bold"
            as="span"
            color={useColorModeValue("yellow.500", "yellow.300")}
          >
            68%
          </Text>{" "}
          of members voted for{" "}
          <Text
            fontWeight="bold"
            as="span"
            color={useColorModeValue("yellow.500", "yellow.300")}
          >
            Agree
          </Text>{" "}
          on the following proposed motion.
        </Text>
        <Text
          as="em"
          fontSize="lg"
          onClick={() => router.push(`${router.asPath.replace("/result", "")}`)}
          textDecoration="underline"
          cursor="pointer"
        >
          &gt; {motion?.title}
        </Text>
      </Box>
      {motion && <ChartComponent motion={motion} />}
    </div>
  );
};

export default Result;
