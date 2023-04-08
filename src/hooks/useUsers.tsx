import React, { useState, useEffect } from 'react';
import { UserType } from '../types/AppTypes';

const useUsers = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [loadUsers, setLoadUsers] = useState(false);

  useEffect(() => {
    const fetchUsersHandler = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const data = await response.json();
      setUsers(data);
      setLoadUsers(true);
    };
    fetchUsersHandler();
  }, []);

  return {
    users,
    loadUsers,
  };
};

export default useUsers;
