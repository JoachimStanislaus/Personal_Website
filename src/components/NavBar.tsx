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
            <Link >
            <Avatar name="Joachim Stanislaus" bg={useColorModeValue("gray.300","gray.700")} color={useColorModeValue("gray.700", "gray.300" )} />
            </Link>

            <Flex alignItems={"center"}>
                <Stack direction={"row"} spacing={7}>
                    {isLargerThanMD ? (
                        <>
                            <Button variant="ghost">
                                About
                            </Button>
                            <Button variant="ghost">
                                Experience
                            </Button>
                            <Button variant="ghost" >
                                Projects
                            </Button>
                            <Button variant="ghost" >
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
                                    <MenuItem icon={<HamburgerIcon />} command='⌘T'>
                                    About
                                    </MenuItem>
                                    <MenuItem icon={<HamburgerIcon />} command='⌘N'>
                                        Experience
                                    </MenuItem>
                                    <MenuItem icon={<HamburgerIcon />} command='⌘⇧N'>
                                        Projects
                                    </MenuItem>
                                    <MenuItem icon={<HamburgerIcon />} command='⌘O'>
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
