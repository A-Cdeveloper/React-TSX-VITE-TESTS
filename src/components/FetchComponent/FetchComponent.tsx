import React, { useState } from 'react';
import { UserType } from '../../types/AppTypes';

function FetchComponent() {
  const [users, setUsers] = useState<UserType[]>([]);
  const [loadUsers, setLoadUsers] = useState(false);

  const fetchUsersHandler = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    setUsers(data);
    setLoadUsers(true);
  };

  return (
    <div className="section">
      <h1>Fetch Component</h1>
      <button type="button" onClick={fetchUsersHandler}>
        Fetch Users
      </button>
      <button type="button" onClick={() => setLoadUsers(false)}>
        Clear Users
      </button>
      {users && loadUsers && (
        <ul>
          {users.map((user) => {
            return (
              <li key={user.id}>
                <h3>{user.name}</h3>
                <p>{user.username}</p>
                <p>{user.email}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default FetchComponent;
