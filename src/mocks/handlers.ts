import { rest } from 'msw';

const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/users', (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: '1',
          name: 'Aleksandar',
          username: 'aleksandar',
          email: 'aleksandar@e-seo.info',
        },
        {
          id: '2',
          name: 'Biljana',
          username: 'bilja',
          email: 'biljana@gmail.com',
        },
      ])
    );
  }),
];

export default handlers;
