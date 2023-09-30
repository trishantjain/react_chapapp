import { FormControl, FormLabel, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

const Signup = () => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", confirmPassword: "", pic: "" })


    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
        console.log('Updated name:', credentials.name);
    };
    

    return (
        <VStack spacing="5px">
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
                    placeholder='Enter Name'
                    onChange={onChange}
                    value={credentials.email}
                    name='email'>
                </Input>
            </FormControl>
            <FormControl id='password' isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                    type="password"
                    placeholder='Enter Name'
                    onChange={onChange}
                    value={credentials.password}
                    name='password'>
                </Input>
            </FormControl>
            <FormControl id='confirm-password' isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <Input
                    placeholder='Enter Name'
                    onChange={onChange}
                    value={credentials.confirmPassword}
                    name='confirm-password'>
                </Input>
            </FormControl>
            <FormControl id='pic'>
                <FormLabel>Pic</FormLabel>
                <Input
                    placeholder='Enter Name'
                    onChange={onChange}
                    value={credentials.pic}
                    name='pic'>
                </Input>
            </FormControl>
        </VStack>
    )
}

export default Signup
