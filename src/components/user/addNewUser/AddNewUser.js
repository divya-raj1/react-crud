import React, { useRef } from 'react';
import {Form, Button} from 'react-bootstrap';
import { addUser } from '../../Data';

export default function AddNewUser({handleClose, getUsers}) {

    var email = useRef();
    var name = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addUser(email.current.value, name.current.value);
            getUsers();
            handleClose();
        } catch (error) {
            alert(error);
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control className="mb-3"
                    type="text"
                    placeholder="Name"
                    required
                    ref={name}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control className="mb-3"
                    type="email"
                    placeholder="Email"
                    required
                    ref={email}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}
