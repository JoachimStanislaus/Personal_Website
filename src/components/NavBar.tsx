import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    useMediaQuery,
    useColorMode,
    Flex,
    Stack,
    Button,
    Link,
    Avatar,
    useColorModeValue,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";

export default function Nav() {
    const [isLargerThanMD] = useMediaQuery("(min-width: 48em)");
    const { colorMode, toggleColorMode } = useColorMode();

    const scrollToAbout = () => {
        const aboutSection = document.querySelector("#About");
        aboutSection?.scrollIntoView({ behavior: "smooth", block: "end" });
    };
    const scrollToExperience = () => {
        const experienceSection = document.querySelector("#Experience");
        experienceSection?.scrollIntoView({ behavior: "smooth", block: "end" });
    };
    // const scrollToProjects = () => {
    //     const projectsSection = document.querySelector("#Projects");
    //     projectsSection.scrollIntoView({ behavior: "smooth", block: "end" });
    // };
    const scrollToContact = () => {
        const contactSection = document.querySelector("#Contact");
        contactSection?.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToHero = () => {
        const heroSection = document.querySelector("#hero");
        heroSection?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <Flex
            bg={useColorModeValue("gray.100", "gray.900")}
            px={4}
            h={16}
            // boxShadow={scroll ? "base" : "none"}
            zIndex="sticky"
            position="fixed"
            as="header"
            alignItems={"center"}
            justifyContent={"space-between"}
            w="100%"
        >
            <Link onClick={scrollToHero}>
                <Avatar name="Joachim Stanislaus" bg={useColorModeValue("gray.300", "gray.700")} color={useColorModeValue("gray.700", "gray.300")} />
            </Link>

            <Flex alignItems={"center"}>
                <Stack direction={"row"} spacing={7}>
                    {isLargerThanMD ? (
                        <>
                            <Button variant="ghost" onClick={scrollToAbout}>
                                About
                            </Button>
                            <Button variant="ghost" onClick={scrollToExperience}>
                                Experience
                            </Button>
                            {/* <Button variant="ghost" onClick={scrollToProjects}>
                                Projects
                            </Button> */}
                            <Button variant="ghost" onClick={scrollToContact}>
                                Contact
                            </Button>
                        </>
                    ) : (
                        <>
                            <Menu>
                                <MenuButton
                                    as={IconButton}
                                    aria-label='Options'
                                    icon={<HamburgerIcon />}
                                    variant='outline'
                                />
                                <MenuList>
                                    <MenuItem onClick={scrollToAbout}>
                                        About
                                    </MenuItem>
                                    <MenuItem onClick={scrollToExperience}>
                                        Experience
                                    </MenuItem>
                                    {/* <MenuItem onClick={scrollToProjects}>
                                        Projects
                                    </MenuItem> */}
                                    <MenuItem onClick={scrollToContact}>
                                        Contact
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </>

                    )
                    }
                    <Button onClick={toggleColorMode}>
                        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                    </Button>

                </Stack>
            </Flex>
        </Flex>
    );
}
