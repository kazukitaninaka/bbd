// src/components/layout.tsx
import React, { ReactNode } from "react";
import {
  Text,
  Center,
  Container,
  useColorModeValue,
  Flex,
  Grid,
} from "@chakra-ui/react";
import Header from "./header";

type Props = {
  children: ReactNode;
};

export function Layout(props: Props) {
  return (
    <Grid templateRows="auto 1fr auto" templateColumns="100%" minH="100vh">
      <Header />
      <Container maxW="container.md" py="8" flex="1">
        {props.children}
      </Container>
      <Center as="footer" bg={useColorModeValue("gray.100", "gray.700")} p={6}>
        <Text fontSize="md">BBD DAPP - 2022</Text>
      </Center>
    </Grid>
  );
}
