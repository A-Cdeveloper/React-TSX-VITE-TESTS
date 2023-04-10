import { describe, expect, test } from 'vitest';
import reducer, { fetchPosts } from './postsSlice';
import { PostType } from '../../types/AppTypes';

const TestPosts: PostType[] = [
  {
    userId: 23,
    id: 1,
    title: 'Post 1',
    body: 'Body of post 1',
  },
  {
    userId: 28,
    id: 2,
    title: 'Post 2',
    body: 'Body of post 2',
  },
];

describe('postsSlice', () => {
  test('initial', () => {
    const state = reducer(undefined, { type: undefined });
    expect(state.postsList).toHaveLength(0);
  });
  test('fetch posts', () => {
    const action = { type: fetchPosts.fulfilled.type, payload: TestPosts };
    const previousState = {
      postsList: [],
    };
    const state = reducer(previousState, action);
    expect(state.postsList).toHaveLength(2);
  });
});
