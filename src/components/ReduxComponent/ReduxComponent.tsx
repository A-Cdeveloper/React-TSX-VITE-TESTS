import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/redux/hooks';
import {
  addUser,
  removeUser,
  selectUsers,
  fetchUsers,
} from '../../store/redux/userSlice';
import { selectPosts, fetchPosts } from '../../store/redux/postsSlice';

let init = true;

const ReduxComponent = () => {
  const usersRdx = useAppSelector(selectUsers);
  const postsRdx = useAppSelector(selectPosts);
  const dispatch = useAppDispatch();

  const addUserHandler = () => {
    dispatch(
      addUser({
        id: Math.floor(Math.random() * 100),
        name: 'Aleksandar',
        username: 'alex',
        email: 'test@test.org',
      })
    );
  };

  const removeUserHandler = (id: number) => {
    dispatch(removeUser(id));
  };

  useEffect(() => {
    if (init) {
      dispatch(fetchUsers());
      dispatch(fetchPosts());
    }
    init = false;
  }, [dispatch]);

  return (
    <div className="section">
      <h1>Redux Component</h1>
      <div className="parts">
        <div className="part">
          <h2>Users</h2>
          <hr />
          <button type="button" onClick={addUserHandler}>
            Add New User
          </button>
          <hr />
          <ul>
            {usersRdx.slice(0, 5).map((user) => {
              return (
                <li key={user.id}>
                  <h3>{user.name}</h3>
                  <p>{user.username}</p>
                  <p>{user.email}</p>
                  <button
                    type="button"
                    onClick={() => removeUserHandler(user.id)}
                  >
                    REMOVE
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="part">
          <h2>Posts</h2>
          {/* <hr />
          <button type="button"> Add New Post</button>
          <hr /> */}
          <ul>
            {postsRdx.slice(0, 5).map((post) => {
              return (
                <li key={post.id}>
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                  {/* <button
                    type="button"
                    onClick={() => removeUserHandler(post.id)}
                  >
                    REMOVE
                  </button> */}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ReduxComponent;
