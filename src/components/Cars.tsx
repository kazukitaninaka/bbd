import { SimpleGrid } from "@chakra-ui/react";
import Card from "./Card";

const Cars = () => {
  const length = 6;
  return (
    <SimpleGrid minChildWidth={"330px"}>
      {[...Array(length)].map((_, i) => {
        return <Card key={i} />;
      })}
    </SimpleGrid>
  );
};

export default Cars;
