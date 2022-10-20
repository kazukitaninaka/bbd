import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { formatAddress } from "utils/helpers";
import { cars, proposals } from "../../../../constants";

const Proposals = () => {
  const router = useRouter();
  const { carId } = router.query;
  const car = cars.find((car) => car.id === +carId!);
  return (
    <>
      <Heading fontSize="2xl" mb="8">
        Proposals on {car?.name}
      </Heading>
      <VStack gap="3">
        {proposals.map((proposal, index) => {
          return (
            <ProposalCard
              proposal={proposal}
              key={`${proposal.title}-${index}`}
            />
          );
        })}
      </VStack>
    </>
  );
};

const ProposalCard = ({
  proposal,
}: {
  proposal: { id: number; title: string; description: string; address: string };
}) => {
  const router = useRouter();
  return (
    <Box
      role={"group"}
      p={6}
      w={"full"}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"2xl"}
      rounded={"lg"}
      pos={"relative"}
      zIndex={1}
      _hover={{
        transform: "translateY(-2px) translateX(-2px)",
        transition: "0.2s ease-in-out",
        boxShadow: "2xl",
      }}
      cursor="pointer"
      onClick={() => router.push(`${router.asPath}/${proposal.id}`)}
    >
      <Heading fontSize="2xl" fontWeight="bold" mb="3">
        {proposal.title}
      </Heading>
      <Text textOverflow="ellipsis" overflow="hidden" whiteSpace="nowrap">
        {proposal.description}
      </Text>
      <Text fontSize="xs" color="gray" mt="2">
        Proposed by: {formatAddress(proposal.address)}
      </Text>
    </Box>
  );
};

export default Proposals;
