import { renderHook, waitFor } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import useUsers from './useUsers';

describe('useUsers Hook', () => {
  test('initial state of hook - empty users array', async () => {
    const { result } = renderHook(useUsers);
    expect(result.current.users).toHaveLength(0);
    expect(result.current.loadUsers).toBeFalsy();
  });

  test('State of hook - get users', async () => {
    const { result } = renderHook(useUsers);
    await waitFor(() => expect(result.current.users).toHaveLength(2));
    await waitFor(() => expect(result.current.loadUsers).toBeTruthy());
  });
});
