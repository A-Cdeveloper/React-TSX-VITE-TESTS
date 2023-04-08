import { render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import HookComponent from './HookComponent';

describe('Hook Component', () => {
  test('render list of users', async () => {
    render(<HookComponent />);
    const listOfUsers = await screen.findAllByRole('listitem');
    expect(listOfUsers).toHaveLength(2);
  });
});
