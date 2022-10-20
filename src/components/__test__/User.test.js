import {users, addUser, fetchUsers, editUser, deleteUser } from '../Data';

describe("React CRUD", () => {

    // Test case for fetching users
    test('fetch users', async () => {
        const title = await fetchUsers();
        expect(title).toEqual(users);
    });
    
    // Test case for creating or adding a user
    test('Create a user', async () => {
        const name="Sweta";
        const email="sweta@gmail.com"
        const data = await addUser(email, name);
        expect(data).toBe(true);
    });
    
    // Test case for editing a user
    test('Edit a user', async () => {
        users.splice(0, users.length);
        users.push(
            {
                userId: 1235, username: "Divya", email: "divya@example.com", avatar:"image"
            },
            {
                userId: 1234, username: "Divya", email: "divya@example.com", avatar:"image"
            }
        );
        const id =1235;
        const name="Sweta";
        const email="sweta@gmail.com";
        const data = await editUser(id, name, email);
        expect(data).toBe(true);
    });

    // Test case for deleting a user
    test('Delete a user', async () => {
        users.splice(0, users.length);
        users.push(
            {
                userId: 1235, username: "Divya", email: "divya@example.com", avatar:"image"
            },
            {
                userId: 1234, username: "Divya", email: "divya@example.com", avatar:"image"
            }
        );
        const id =1235;
        const data = await deleteUser(id);
        expect(data).toBe(true);
    });

    // Test case for deleting multiple users
    test('Delete multiple users', async () => {
        users.splice(0, users.length);
        users.push(
            {
                userId: 1235, username: "Divya", email: "divya@example.com", avatar:"image"
            },
            {
                userId: 1234, username: "Divya", email: "divya@example.com", avatar:"image"
            },
            {
                userId: 1236, username: "Divya", email: "divya@example.com", avatar:"image"
            }
        );
        const id =[1235, 1236];
        const data = await deleteUser(id);
        expect(data).toBe(true);
    });
})
