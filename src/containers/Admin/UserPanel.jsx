import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TokenStorageService from '../../_services/TokenStorageService';
import UserService from '../../_services/UserService';

export default function UserPanel() {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        getAllUsers();
    },[]);

    const getAllUsers = async () => {
        try {
          const res = await UserService.getAllUsers();
          setUsers(res.data.data);
        } catch (error) {
          console.log(error.message || error);
        }
      };

      const handleLogout=()=>{
        TokenStorageService.logOut();
        navigate("/");
      }

  return (
    <div>
      <h2>Gestión de; usuarios</h2>

      <div>
        {users.map((user) => (
          <div key={user._id}>{user.name}</div>
        ))}
      </div>

      <button onClick={handleLogout}>Logout </button>
    </div>
  );
}
