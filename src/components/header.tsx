//src/components/header.tsx
import NextLink from "next/link";
import {
  Flex,
  Button,
  useColorModeValue,
  Spacer,
  Heading,
  LinkBox,
  LinkOverlay,
  Box,
} from "@chakra-ui/react";
import { formatAddress } from "utils/helpers";

const siteTitle = "DAPP";
export default function Header() {
  return (
    <Flex
      as="header"
      bg={useColorModeValue("gray.100", "gray.900")}
      p={4}
      alignItems="center"
    >
      <LinkBox>
        <NextLink href={"/"} passHref>
          <LinkOverlay>
            <Heading size="md">{siteTitle}</Heading>
          </LinkOverlay>
        </NextLink>
      </LinkBox>
      <Spacer />
    </Flex>
  );
}
