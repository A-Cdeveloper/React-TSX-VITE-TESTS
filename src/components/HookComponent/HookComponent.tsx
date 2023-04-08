import React from 'react';
import useUsers from '../../hooks/useUsers';

const HookComponent = () => {
  const { users, loadUsers } = useUsers();

  return (
    <div className="section">
      <h1>Hook Component</h1>
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
};

export default HookComponent;
