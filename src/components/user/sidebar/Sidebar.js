import React, { useState } from 'react';
import './sidebar.css';
import { useNavigate } from 'react-router-dom';
import { Button, Modal} from 'react-bootstrap';

export default function Sidebar({ getUsers }) {

  const navigate = useNavigate();

  const [logout, setlogout] = useState(false);

  const handleLogOut = () => setlogout(true);
  const handleClose = () => setlogout(false);

  return (
    <>
    <div className="sidebar">
      <div className="sidebar-title">
        <span className="material-icons">supervisor_account</span>Profile
      </div>
      <div className="menu-contents">
        <div className="sidebar-menu-item" onClick={() => getUsers()}>
          Dashboard
        </div>
        <div className="sidebar-menu-item" onClick={handleLogOut}>
          Log Out <span className="material-icons">logout</span>
        </div>
      </div>
    </div>
    <Modal show={logout} backdrop="static" onHide={handleClose} centered>
        <Modal.Body>
           <div className="logout-content">
            <span className="material-icons">help</span>
            <span className="confirm-text">Are you sure you want to log out?</span>
            <div>
              <Button className="logout-confirm" onClick={() => navigate("/react-crud/login")}>Yes</Button>
              <Button onClick={handleClose}>Cancel</Button>
            </div>
           </div>
        </Modal.Body>
    </Modal>
    </>
  )
}

