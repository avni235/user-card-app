import React from 'react';
import './UserCard.css';

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} className="avatar" />
      <h2 className="user-name">{`${user.first_name} ${user.last_name}`}</h2>
      <p className="email">Email: {user.email}</p>
    </div>
  );
};

export default UserCard;
