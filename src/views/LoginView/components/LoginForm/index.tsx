import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../../ui/Button/styles';
import { ActionWrapper, Container, Input, Label, Form, FormInput } from './styles';

const LoginForm = () => {
    return (
        <Container>
            <Form>
                <FormInput>
                    <Label htmlFor="username">Username</Label>
                    <Input type="text" name="username"/>
                </FormInput>
                <FormInput>
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" name="password" />
                </FormInput>
                <ActionWrapper>
                    <Button as={Link} to={'/comparator'}>Login</Button>
                </ActionWrapper>
            </Form>
        </Container>
    );
};

export default LoginForm;