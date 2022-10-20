import {
  Input,
  Button,
  useColorModeValue,
  RadioGroup,
  Radio,
  Stack,
  Text,
  Heading,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";

const PledgeForm = ({
  custodians,
}: {
  custodians: { id: number; name: string }[];
}) => {
  const [pledgeAmount, setPledgeAmount] = useState<string>("");
  const [custodian, setCustodian] = useState<string>(
    custodians[0].id.toString()
  );
  const router = useRouter();
  const handlePledge = () => {
    router.push("/thanks");
  };
  return (
    <>
      <Heading
        lineHeight={1.1}
        fontWeight={600}
        fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
      >
        Want to Pledge?
      </Heading>
      <Text
        fontSize={{ base: "16px", lg: "18px" }}
        color={useColorModeValue("yellow.500", "yellow.300")}
        fontWeight={"500"}
        textTransform={"uppercase"}
      >
        Enter the amount you want to pledge
      </Text>
      <Input
        variant={"solid"}
        borderWidth={1}
        color={"gray.800"}
        _placeholder={{
          color: "gray.400",
        }}
        borderColor={useColorModeValue("gray.300", "gray.700")}
        type={"text"}
        required
        placeholder={"$1,000"}
        aria-label={"amount of pledge"}
        value={pledgeAmount}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPledgeAmount(e.target.value)
        }
      />
      <Text
        fontSize={{ base: "16px", lg: "18px" }}
        color={useColorModeValue("yellow.500", "yellow.300")}
        fontWeight={"500"}
        textTransform={"uppercase"}
      >
        Choose Custodian
      </Text>
      <RadioGroup onChange={setCustodian} value={custodian}>
        <Stack direction="column">
          {custodians.map((custodian) => (
            <Radio
              key={`${custodian.name}-${custodian.id}`}
              value={custodian.id.toString()}
              defaultChecked={custodian.id === custodians[0].id}
            >
              {custodian.name}
            </Radio>
          ))}
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
        onClick={handlePledge}
      >
        Pledge
      </Button>
    </>
  );
};

export default PledgeForm;
