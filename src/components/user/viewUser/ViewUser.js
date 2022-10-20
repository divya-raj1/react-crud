import React from 'react';

export default function ViewUser({ viewUser }) {
  return (
    <div className="view-container">
        <img src={viewUser.avatar} alt="Profile of user"/>
        <div className="view-name">{viewUser.name}</div>
        <div className="view-email">{viewUser.email}</div>
    </div>
  )
}
