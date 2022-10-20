import React, { useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import { editUser } from '../../Data';

export default function EditUser({ values , handleEditClose, getUsers}) {

    const [name, setName] = useState(values.name);
    const [email, setEmail] = useState(values.email);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await editUser(values.id, name, email);
            getUsers();
            handleEditClose();
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
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control className="mb-3"
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
  )
}
