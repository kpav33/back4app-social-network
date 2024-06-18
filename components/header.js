import NextLink from "next/link";
import {
  Box,
  Container,
  Divider,
  Heading,
  HStack,
  Link,
} from "@chakra-ui/react";

export default function Header() {
  return (
    <Box py={4}>
      <Container
        maxW="container.lg"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Heading as="h1" size="md">
          <Link as={NextLink} href="/">
            back4app-social-network
          </Link>
        </Heading>
        <HStack spacing="1em">
          <Heading size="sm">
            <Link as={NextLink} href="/login">
              Log in
            </Link>
          </Heading>
          <Heading size="sm">
            <Link as={NextLink} href="/signup">
              Sign up
            </Link>
          </Heading>
        </HStack>
      </Container>
      <Divider my={4} />
    </Box>
  );
}
