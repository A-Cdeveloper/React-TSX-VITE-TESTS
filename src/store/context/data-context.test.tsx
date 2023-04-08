import { useContext } from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { DataContext, DataContextProvider } from './data-context';

const TestingComponent = () => {
  const { status, login, logout } = useContext(DataContext);
  return (
    <>
      <p>You are: {status ? 'login' : 'logout'}</p>
      <button type="button" onClick={() => login()}>
        LOGINbtn
      </button>
      <button type="button" onClick={() => logout()}>
        LOGOUTbtn
      </button>
    </>
  );
};

describe('Test Data Context Provider', () => {
  test('get initial values from context', () => {
    render(
      <DataContextProvider>
        <TestingComponent />
      </DataContextProvider>
    );
    const statusEl = screen.getByText(/logout/);
    expect(statusEl).toBeInTheDocument();
  });

  test('test login/logout', async () => {
    render(
      <DataContextProvider>
        <TestingComponent />
      </DataContextProvider>
    );
    const loginBtn = screen.getByRole('button', { name: 'LOGINbtn' });
    const statusEl1 = screen.getByText(/logout/);
    await userEvent.click(loginBtn);
    expect(statusEl1).toHaveTextContent('login');

    const logoutBtn = screen.getByRole('button', { name: 'LOGOUTbtn' });
    const statusEl2 = screen.getByText(/login/);
    await userEvent.click(logoutBtn);
    expect(statusEl2).toHaveTextContent('logout');
  });
});
