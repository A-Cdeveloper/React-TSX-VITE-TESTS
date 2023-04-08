import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

import server from './src/mocks/server';

expect.extend(matchers);

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
