import React from 'react';
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import { useState } from 'react'


const Login = () => {

    const [logCredentials, setLogCredentials] = useState({ log_email: "", log_password: "" })
    const [show, setShow] = useState(false)


    const onChange = (e) => {
        setLogCredentials({ ...logCredentials, [e.target.name]: e.target.value });
    };

    const handleShow = () => setShow(!show)

    const submitHandler = () => { }


    return (
        <VStack spacing="10px">
            <FormControl id='log_email' isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                    placeholder='xyz@gmail.com'
                    onChange={onChange}
                    value={logCredentials.log_email}
                    name='log_email'>
                </Input>
            </FormControl>
            <FormControl id='log_password' isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input
                        type={show ? "text" : "password"}
                        placeholder='Password...'
                        onChange={onChange}
                        value={logCredentials.log_password}
                        name='log_password'>
                    </Input>
                    <InputRightElement>
                        <Button h={"1.75rem"} size={"sm"} backgroundColor={"white"} marginRight={"3px"}
                            onClick={handleShow}>{show ? "Hide" : "Show"}</Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>


            <Button
                colorScheme='blue'
                width={"100%"}
                style={{ marginTop: 15 }}
                onClick={submitHandler}>Login</Button>
            <Button
                colorScheme='red'
                width={"100%"}
                onClick={() => {
                    setLogCredentials({ log_email: "guest@gmail.com", log_password: "123456" })
                }}>Guest user Login</Button>
        </VStack>
    )
}

export default Login
