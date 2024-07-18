import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {

 const [users, setUsers] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);

 useEffect(() => {

  axios.get('/api/users').then(response => {

    setUsers(response.data);
    setLoading(false);

   }).catch(error => {

    setError(error);
    setLoading(false);

   });

 }, []);

 if (loading) return <div>Loading...</div>;
 if (error) return <div>Error loading users: {error.message}</div>;

 return (

  <div>

   <h1>User List</h1>
   <ul>

    {users.map(user => (

     <li key={user.id}>
      <h2>{user.username}</h2>
      <p>Email: {user.email}</p>
      <p>Wallet ID: {user.walletId}</p>
     </li>

    ))}

   </ul>

  </div>

 );

};

export default UserList;