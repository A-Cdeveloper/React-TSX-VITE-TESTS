import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { PostType, PostsType } from '../../types/AppTypes';
// eslint-disable-next-line import/no-cycle
import { RootState } from './store';
import { getPosts } from '../../utils/posts';

export const fetchPosts = createAsyncThunk<PostType[]>(
  'posts/fetchPosts',
  async () => getPosts()
);

const initialState: PostsType = {
  postsList: [],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchPosts.fulfilled, (state, { payload }) => {
      state.postsList.push(...payload);
    });
  },
});

export default postsSlice.reducer;
export const selectPosts = (state: RootState) => state.posts.postsList;
