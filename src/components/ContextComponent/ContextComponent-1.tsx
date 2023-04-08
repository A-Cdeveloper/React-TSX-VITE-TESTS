import React, { useContext } from 'react';
import { DataContext } from '../../store/context/data-context';

export const ContextComponent1 = () => {
  const ctx = useContext(DataContext);

  const loginFn = () => {
    ctx.login();
  };

  const logoutFn = () => {
    ctx.logout();
  };

  return (
    <div className="section">
      <h1>Context Component 1</h1>
      <p>You are: {ctx.status ? 'login' : 'logout'}</p>
      {ctx.status && (
        <button type="button" onClick={logoutFn}>
          LOGOUT
        </button>
      )}
      {!ctx.status && (
        <button type="button" onClick={loginFn}>
          LOGIN
        </button>
      )}
    </div>
  );
};

export default ContextComponent1;
