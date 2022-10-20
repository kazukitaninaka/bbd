import { Box, Heading, Text } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

const Thanks = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <CheckCircleIcon boxSize={"50px"} color={"green.500"} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Pledging process completed
      </Heading>
      <Text color={"gray.500"}>
        You will own a part of the asset once the amount of all pledges reaches
        a threshold.
      </Text>
      <Text color={"gray.500"}>Be patient till the moment!</Text>
    </Box>
  );
};

export default Thanks;
