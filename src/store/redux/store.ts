import {
  configureStore,
  combineReducers,
  PreloadedState,
} from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import usersReducer from './userSlice';
// eslint-disable-next-line import/no-cycle
import postsReducer from './postsSlice';

const rootReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
  });

// IMPORTANT
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
