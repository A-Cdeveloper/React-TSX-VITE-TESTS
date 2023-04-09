import { describe, expect, test } from 'vitest';
import reducer, { fetchUsers, removeUser, addUser } from './userSlice';
import { UserType } from '../../types/AppTypes';

const TestUsers: UserType[] = [
  {
    id: 1,
    name: 'John',
    username: 'Doe',
    email: 'test@test.org',
  },
  {
    id: 2,
    name: 'Jane',
    username: 'Doe',
    email: 'test-second@test.org',
  },
];

const NewUser: UserType = {
  id: 100,
  name: 'Aleksandar',
  username: 'alex789',
  email: 'test@test.org',
};

describe('usersSlice', () => {
  test('initial', () => {
    const state = reducer(undefined, { type: undefined });
    expect(state).toEqual({ usersList: [] });
  });

  test('fetch users', () => {
    const action = { type: fetchUsers.fulfilled.type, payload: TestUsers };
    const initState = reducer(undefined, { type: undefined });
    const state = reducer(initState, action);
    expect(state).toEqual({ usersList: TestUsers });
  });

  test('remove user', () => {
    const action = { type: removeUser.type, payload: 2 };
    const previousState = {
      usersList: [...TestUsers],
    };
    const state = reducer(previousState, action);
    expect(state.usersList).toHaveLength(1);
  });

  test('add user', () => {
    const action = { type: addUser.type, payload: NewUser };
    const previousState = {
      usersList: [...TestUsers],
    };
    const state = reducer(previousState, action);
    expect(state.usersList).toHaveLength(3);
  });
});
