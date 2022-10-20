import { SimpleGrid } from "@chakra-ui/react";
import Card from "./Card";
import { cars } from "../constants";

const Cars = () => {
  return (
    <SimpleGrid minChildWidth={"330px"}>
      {cars.map((car, i) => {
        return <Card key={i} car={car} />;
      })}
    </SimpleGrid>
  );
};

export default Cars;
