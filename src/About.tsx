import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
} from "@chakra-ui/react";

interface HeaderProps {
  color: string;
  count: string;
  subheader: string;
  content: React.ReactNode;
}

export default function About({ color,count,subheader,content }: HeaderProps) {
  return (
    <>
      <Container maxW={"3xl"} id={subheader}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" px={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                {count}
              </Text>
              <Text fontWeight={800}>{subheader}</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Text color={"gray.600"} fontSize={"xl"} px={4}>
            {content}
          </Text>
        </Stack>
      </Container>
    </>
  );
}