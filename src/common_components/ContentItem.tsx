import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
} from "@chakra-ui/react";

import { ContentItemProps } from "../types/content";

export default function ContentItem({ color,count,subheader,content }: ContentItemProps) {
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
          {content}
        </Stack>
      </Container>
    </>
  );
}