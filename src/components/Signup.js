import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

const Signup = () => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", check: "" })
    const [show, setShow] = useState(false)


    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleShow = () => setShow(!show)

    const postDetails = (pics) => { }

    const submitHandler = () => { }


    return (
        <VStack spacing="10px">
            <FormControl id='first-name' isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                    placeholder='Enter Name'
                    onChange={onChange}
                    value={credentials.name}
                    name='name'>
                </Input>
            </FormControl>
            <FormControl id='email' isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                    placeholder='xyz@gmail.com'
                    onChange={onChange}
                    value={credentials.email}
                    name='email'>
                </Input>
            </FormControl>
            <FormControl id='password' isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input
                        type={show ? "text" : "password"}
                        placeholder='Password...'
                        onChange={onChange}
                        value={credentials.password}
                        name='password'>
                    </Input>
                    <InputRightElement>
                        <Button h={"1.75rem"} size={"sm"} backgroundColor={"white"} marginRight={"3px"}
                            onClick={handleShow}>{show ? "Hide" : "Show"}</Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <FormControl id='check' isRequired>
                <FormLabel>Confirm password</FormLabel>
                <InputGroup>
                    <Input
                        type={show ? "text" : "password"}
                        placeholder='Confirm password...'
                        onChange={onChange}
                        value={credentials.check}
                        name='check'>
                    </Input>
                    <InputRightElement>
                        <Button h={"1.75rem"} size={"sm"} backgroundColor={"white"} marginRight={"3px"}
                            onClick={handleShow}>{show ? "Hide" : "Show"}</Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <FormControl id='pic'>
                <FormLabel>Upload your image</FormLabel>
                <Input
                    type='file'
                    accept='image/*'
                    name='pic'
                    onChange={(e) => { postDetails(e.target.files[0]) }}>
                </Input>
            </FormControl>

            <Button
                colorScheme='blue'
                width={"100%"}
                style={{ marginTop: 15 }}
                onClick={submitHandler}>Sign Up</Button>
        </VStack>
    )
}

export default Signup
