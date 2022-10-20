import React, { useState, useEffect } from 'react';
import { Button , Table, Modal} from 'react-bootstrap';
import Sidebar from './sidebar/Sidebar';
import ReactPaginate from 'react-paginate';
import AddNewUser from './addNewUser/AddNewUser';
import { fetchUsers, deleteUser} from '../Data';
import './user.css';
import ViewUser from './viewUser/ViewUser';
import EditUser from './editUser/EditUser';

export default function User() {

    const [user, setUser] = useState([]);
    const [addUser, setAddUser] = useState(false);
    const [viewUser, setViewUser] = useState({id:'', email: '', name: '', avatar:'', flag: false});
    const [pageNumber, setPageNumber] = useState(0);
    const [editUser, SetEditUser] = useState({id:'', email: '', name: '', flag: false});

    const usersPerPage = 6;
    const currentLastUser = pageNumber * usersPerPage;
    const pageCount = Math.ceil(user.length/usersPerPage);

    useEffect(() => {
        getUsers();
        setUser(JSON.parse(localStorage.getItem('user')));
    }, []);

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(user));
    });

    const getUsers = async () => {
        try {
            const data = await fetchUsers();
            setUser(data);
        } catch (error) {
            alert(error);
        }
    };

    // Handling display of add user modal
    const handleShow = () =>  setAddUser(true);

    const handleClose = () => setAddUser(false);

    // Handling display of edit user modal
    const handleEdit = (id,email,name) => {
        SetEditUser({id:id, email:email, name:name, flag:true});
    }

    const handleEditClose = () => SetEditUser({...editUser, flag:false});

    // Handling display of view user modal
    const viewUserShow = (id,email,name,avatar) => {
        setViewUser({id:id, email:email, name:name, avatar:avatar, flag:true});
    }
    
    const viewUserHide = () => setViewUser({...viewUser, flag:false});

    //delete handling
    const handledelete = async (id) => {
        try {
            const keys = [];
            user.map( user => user.isChecked ? keys.push(user.userId) : null);
            const value = keys.length>0 ? keys : id;
            await deleteUser(value);
            getUsers();
        } catch (error) {
            alert(error);
        }
    }

    //checkbox change event
    const handleChange = (e) => {
        const {name, checked} = e.target;
        if(name === "selectall") {
            let tempUser = user.map( user => { return {...user, isChecked : checked}});
            setUser(tempUser); 
        } else {
            let tempUser = user.map( user => user.userId === name ? {...user, isChecked : checked} : user);
            setUser(tempUser);
        }
    }

    //display users dynamically in table
    const showUsers = user.slice(currentLastUser, currentLastUser + usersPerPage).map(user => {
        return (
            <tr key={user.userId} className="items">
                <td>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" checked={user?.isChecked || false} name={user.userId} onChange={handleChange} />
                    </div>
                </td>
                <td className="item-image"><img src={user.avatar} alt="Profile of user"/> {user.username}</td>
                <td>{user.email}</td>
                <td>
                    <div className="action-icon">
                        <span className="material-icons" onClick={(e) => viewUserShow(user.userId,user.email,user.username,user.avatar)}>visibility</span>
                        <span className="material-icons" onClick={(e) => handleEdit(user.userId,user.email,user.username)}>edit</span>
                        <span className="material-icons" onClick={(e) => handledelete(user.userId)}>delete</span>
                    </div>
                </td>
            </tr>
        )
    })

    const nextPage = ({ selected }) => {
        setPageNumber(selected);
    }

    return (
        <div>
            <Sidebar getUsers={getUsers}/>
            <div className="user-container">
                <div className="user-header">
                    <div className="user-title">
                        <span>Users</span>
                    </div>
                    <Button onClick={handleShow} className="add-button"><span className="material-icons">add</span>Add User</Button>
                </div>
                <Table striped responsive>
                    <thead>
                        <tr>
                            <th>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1" name="selectall" checked={user.filter(user => user?.isChecked !== true).length < 1} onChange={handleChange}/>
                                </div>
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {showUsers}
                        <tr>
                            <td colSpan={4}>
                                <ReactPaginate
                                    previousLabel={"Previous"}
                                    nextLabel={"Next"}
                                    pageCount={pageCount}
                                    onPageChange={nextPage}
                                    containerClassName={"paginate-container"}
                                    previousLinkClassName={"paginate-previous"}
                                    nextLinkClassName={"paginate-next"}
                                    disabledClassName={"paginate-disabled"}
                                />
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <Modal show={addUser} onHide={handleClose} backdrop="static" keyboard={false} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Add User</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddNewUser handleClose={handleClose} getUsers={getUsers}/>
                    </Modal.Body>
                </Modal>
                <Modal show={viewUser.flag} onHide={viewUserHide} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>User Info</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ViewUser viewUser={viewUser}/>
                    </Modal.Body>
                </Modal>
                <Modal show={editUser.flag} onHide={handleEditClose} backdrop="static" keyboard={false} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit User</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <EditUser values={editUser} handleEditClose={handleEditClose} getUsers={getUsers}/>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    )
}
