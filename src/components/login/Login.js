import React, { useState } from 'react';
import {Button, Col, Form, Row, FloatingLabel} from 'react-bootstrap';
import './login.css';
import { useNavigate } from 'react-router-dom'; 
import {addUser} from '../Data';
import { faker } from '@faker-js/faker';

export default function Login() {

    const navigate = useNavigate();
    const userEmail = "user@example.com";
    const userPassword = 'abc123'
    const [email, setEmail] = useState('user@example.com');
    const [password, setPassword] = useState('abc123');

    const handleLogin = async () => {
        if( email === userEmail && password === userPassword ) {
            try {
                await addUser(email, faker.internet.userName());
                navigate("/users");
            } catch (error) {
                alert(error);
            }
        }
        else {
            alert("Incorrect email or password");
        }
    }

    return (
        <Form className="login-form">
            <h1 className="mb-4">LOGIN</h1>
            <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-4">
                <Form.Control type="email" placeholder="user@example.com" value={email} required onChange={(e) => setEmail(e.target.value)}/>
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="Password">
                <Form.Control type="password" placeholder="abc123" value={password} required onChange={(e) => setPassword(e.target.value)}/>
            </FloatingLabel>

            <Form.Group as={Row} className="mt-4">
                <Col sm={{ span: 10}}>
                    <Button type="button" onClick={handleLogin}>Sign in</Button>
                </Col>
            </Form.Group>
        </Form>
    )
}
