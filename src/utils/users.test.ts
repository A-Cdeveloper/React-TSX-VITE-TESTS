import { describe, expect, test } from 'vitest';
import { rest } from 'msw';
import { getUsers } from './users';
import server from '../mocks/server';

describe('test fetch users function', () => {
  test('users fetched', async () => {
    const data = await getUsers();
    expect(data).toHaveLength(2);
  });

  // test('users fetched error', async () => {
  //   server.use(
  //     rest.get(
  //       'https://jsonplaceholder.typicode.com/users',
  //       (req, res, ctx) => {
  //         return res(ctx.status(404),ctx.);
  //       }
  //     )
  //   );

  //   expect(await getUsers()).toThrow();
  // });
});
