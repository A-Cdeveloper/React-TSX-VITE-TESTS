import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import userEvent from '@testing-library/user-event';
import FetchComponent from './FetchComponent';

describe('Fetch Users Component', () => {
  test('render list of users', async () => {
    render(<FetchComponent />);
    const fetchButton = screen.getByRole('button', { name: 'Fetch Users' });
    await userEvent.click(fetchButton);
    const listOfUsers = await screen.findAllByRole('listitem');
    expect(listOfUsers).toHaveLength(2);
  });

  test('Clear users list on button click', async () => {
    render(<FetchComponent />);
    const clearButton = screen.getByRole('button', { name: 'Clear Users' });
    await userEvent.click(clearButton);
    const listOfUsers = screen.queryByRole('list');
    expect(listOfUsers).not.toBeInTheDocument();
  });
});
