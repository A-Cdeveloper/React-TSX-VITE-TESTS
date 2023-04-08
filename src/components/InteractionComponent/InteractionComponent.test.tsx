import { render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import InteractionComponent from './InteractionComponent';
import userEvent from '@testing-library/user-event';

describe('Interaction user action component', () => {
  test('render component corractly', () => {
    render(<InteractionComponent />);
    const headline = screen.getByRole('heading', { level: 1 });
    expect(headline).toBeInTheDocument();
    const noHeadline = screen.queryByRole('heading', { level: 4 });
    expect(noHeadline).toBeInTheDocument();
  });

  test('list initial rendering', () => {
    render(<InteractionComponent />);
    const teamsList = screen.queryAllByRole('listitem');
    expect(teamsList.length).toBe(0);
  });

  test('Add Team button click', async () => {
    render(<InteractionComponent />);
    const addHandler = vi.fn();
    await addHandler();
    const addButton = screen.getByRole('button', { name: 'Add New' });
    await userEvent.click(addButton);
    expect(addHandler).toHaveBeenCalledTimes(1);
    const teamsList = await screen.findAllByRole('listitem');
    expect(teamsList).toHaveLength(1);
  });

  test('Delete button click', async () => {
    render(<InteractionComponent />);

    const deleteHandler = vi.fn();
    await deleteHandler();
    const deleteButton = screen.queryByRole('button', { name: 'DELETE' });
    deleteButton && (await userEvent.click(deleteButton));
    expect(deleteHandler).toHaveBeenCalledTimes(1);
    const teamsList = screen.queryAllByRole('listitem');
    if (teamsList.length !== 0) {
      expect(teamsList).toHaveLength(teamsList.length - 1);
    } else {
      expect(teamsList).toHaveLength(0);
    }
  });
});
