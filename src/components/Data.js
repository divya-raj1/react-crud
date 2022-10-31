import { faker } from '@faker-js/faker';

export let users =[
    {
        userId: faker.datatype.uuid().slice(0, 8),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar()
    },
    {
        userId: faker.datatype.uuid().slice(0, 8),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar()
    },
    {
        userId: faker.datatype.uuid().slice(0, 8),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar()
    },
    {
        userId: faker.datatype.uuid().slice(0, 8),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar()
    },
    {
        userId: faker.datatype.uuid().slice(0, 8),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar()
    },
    {
        userId: faker.datatype.uuid().slice(0, 8),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar()
    },
    {
        userId: faker.datatype.uuid().slice(0, 8),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar()
    },
    {
        userId: faker.datatype.uuid().slice(0, 8),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar()
    },
    {
        userId: faker.datatype.uuid().slice(0, 8),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar()
    },
    {
        userId: faker.datatype.uuid().slice(0, 8),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar()
    },
    {
        userId: faker.datatype.uuid().slice(0, 8),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar()
    },
    {
        userId: faker.datatype.uuid().slice(0, 8),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar()
    }
]

//function for fetching all users
export const fetchUsers = () => {
    return (new Promise((resolve, reject) => {
        if(!users){
            reject(new Error('No user found'));
        }
        else {
            setTimeout(resolve(Object.values(users)), 250);
        }
    }))
}

//funtion for creating or adding a new user
export const addUser = (email, username) => {
    return (new Promise((resolve, reject) => {
        if (!email || !username) {
            reject(new Error('Please provide email and username'));
        }
        else {
            const userId = faker.datatype.uuid().slice(0, 8);
            const avatar = faker.image.avatar();
            const newUser = { userId, username, email, avatar};
        
            users.push(newUser);
            setTimeout(resolve(true), 250);
        }
    }));
}

//function for editing a user
export const editUser = (id, name, email) => {
    return (new Promise((resolve, reject) => {
        var count = 0;
        users.forEach(data => {
            if(data.userId === id) {
                data.username = name;
                data.email = email;
                count ++;
            }
        })
        if(count === 0) {
            reject(new Error('Not valid'));
        } else {
            setTimeout(resolve(true), 250);
        }
    }))
}

//function for deleting a user
export const deleteUser = (id) => {
    return (new Promise((resolve, reject) => {
        if(!id) {
            reject(new Error('No users selected'));
        }
        else if (Array.isArray(id)) {
            for (var i = 0; i < Object.values(users).length; i++) {
                for(var j = 0; j < id.length; j++) {
                    if (id[j] === Object.values(users)[i].userId){
                        users.splice(users.indexOf(Object.values(users)[i]),1);
                    }
                }
            }
        } else {
            users.map( data => data.userId === id ? users.splice(users.indexOf(data),1) : null) 
        }
        setTimeout(resolve(true), 250);
    }))
}