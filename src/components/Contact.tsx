import {
    Stack,
    Text,
    Container,
    Box,
    HStack,
    Heading,
    Center,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

interface HeaderProps {
    color: string;
}

export default function Contact({ color }: HeaderProps) {
    const linkedin = () => {
        window.open("https:/www.linkedin.com/in/joachimstanislaus", "_blank", "noreferrer,noopener");
    };
    const github = () => {
        window.open("https://www.github.com/JoachimStanislaus", "_blank", "noreferrer,noopener");
    };
    const email = () => {
        window.open(`mailto:${"hello@joachimstanislaus.com"}`, "_blank", "noreferrer,noopener");
    };
    return (
        <>
            <Container maxW={"3xl"} id="contact">
                <Stack
                    as={Box}
                    textAlign={"center"}
                    spacing={{ base: 8, md: 14 }}
                    pb={{ base: 20, md: 36 }}
                >
                    <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
                        <Heading fontSize={"3xl"}>Let's stay in touch!</Heading>
                        <Text color={"gray.600"} fontSize={"xl"} px={4}>
                        I'd love to hear what I can help you with! 
                        </Text>
                        <Text color={`${color}.500`} fontWeight={600} fontSize={"lg"} px={4}>
                            hello@joachimstanislaus.com
                        </Text>
                        <Center>
                            <HStack pt={4} spacing={4}>
                                <FaLinkedin onClick={linkedin} size={28} />
                                <FaGithub onClick={github} size={28} />
                                <FaEnvelope onClick={email} size={28} />
                            </HStack>
                        </Center>
                    </Stack>
                </Stack>
            </Container>
        </>
    );
}