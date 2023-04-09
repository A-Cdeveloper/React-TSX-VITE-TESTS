import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/redux/hooks';
import {
  removeUser,
  selectUsers,
  fetchUsers,
} from '../../store/redux/userSlice';

let init = true;

const ReduxComponent = () => {
  const usersRdx = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();

  const removeHandler = (id: number) => {
    dispatch(removeUser(id));
  };

  useEffect(() => {
    if (init) {
      dispatch(fetchUsers());
    }
    init = false;
  }, [dispatch]);

  return (
    <div className="section">
      <h1>Redux Component</h1>
      <ul>
        {usersRdx.map((user) => {
          return (
            <li key={user.id}>
              <h3>{user.name}</h3>
              <p>{user.username}</p>
              <p>{user.email}</p>
              <button type="button" onClick={() => removeHandler(user.id)}>
                REMOVE
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ReduxComponent;
