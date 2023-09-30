import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React from 'react'
import Login from './Login'
import Signup from './Signup'

const Homepage = () => {
    return (
        <Container maxWidth='xl' centerContent>
            <Box
                display="flex"
                justifyContent="center"
                p={3}
                bg="white"
                w="100%"
                m="40px 0 15px 0"
                borderRadius="7px"
                textColor="black"
                fontWeight="bold"
                fontSize="20px"
                fontFamily="arial-bold"
            >
                <Text>SUPER-CHAT</Text>
            </Box>
            <Box
                bg="white"
                w="100%"
                p={4}
                borderRadius="7px"
            >
                <Tabs variant='soft-rounded'>
                    <TabList mb="1em">
                        <Tab width="50%">Login</Tab>
                        <Tab width="50%">Sign Up</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Login />
                        </TabPanel>
                        <TabPanel>
                            <Signup />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Container>
    )
}

export default Homepage
