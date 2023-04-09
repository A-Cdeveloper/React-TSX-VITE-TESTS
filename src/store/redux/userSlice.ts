import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUsers } from '../../utils/users';
import { UserType } from '../../types/AppTypes';

// eslint-disable-next-line import/no-cycle
import { RootState } from './store';

export const fetchUsers = createAsyncThunk<UserType[]>(
  'users/fetchUsers',
  async () => getUsers()
);

type UsersListType = {
  usersList: UserType[];
};

const initialState: UsersListType = {
  usersList: [],
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.usersList = [payload, ...state.usersList];
    },
    removeUser: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.usersList = state.usersList.filter((user) => user.id !== payload);
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, { payload }) => {
      state.usersList.push(...payload);
    });
  },
});

export default userSlice.reducer;
export const selectUsers = (state: RootState) => state.users.usersList;
export const { addUser, removeUser } = userSlice.actions;
