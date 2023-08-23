import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import UserGrid from './UserGrid';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getUsers = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('https://reqres.in/api/users?page=1');
      setUsers(response.data.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app">
      <Navbar onGetUsers={getUsers} />
      {isLoading ? (
        <div className="loader-container">
          <div className="loader">Loading...</div>
        </div>
      ) : (
        <UserGrid users={users} />
      )}
    </div>
  );
};

export default App;
