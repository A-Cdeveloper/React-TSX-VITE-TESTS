import { useContext } from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import userEvent from '@testing-library/user-event';

import { TeamContext, TeamContextProvider } from './teams-context';

const TestingComponent = () => {
  const { teams, add, remove } = useContext(TeamContext);

  return (
    <>
      <ul>
        {teams.map((team) => {
          return (
            <li key={team.team_id}>
              <h3>{team.team_name}</h3>
              <p>{team.team_country}</p>
              <button
                data-testid={team.team_id}
                type="button"
                onClick={() => remove(team.team_id)}
              >
                REMOVE
              </button>
            </li>
          );
        })}
      </ul>
      <button
        type="button"
        onClick={() =>
          add({
            team_id: Math.floor(Math.random() * 100),
            team_name: 'Crvena Zvezda',
            team_country: 'Serbia',
          })
        }
      >
        ADD
      </button>
    </>
  );
};

describe('Test Teams Context Provider', () => {
  test('initial render context', () => {
    render(
      <TeamContextProvider>
        <TestingComponent />
      </TeamContextProvider>
    );
    const teamList = screen.getAllByRole('listitem');
    expect(teamList).toHaveLength(4);
  });

  test('Add item test', async () => {
    render(
      <TeamContextProvider>
        <TestingComponent />
      </TeamContextProvider>
    );
    const addButton = screen.getByRole('button', { name: /add/i });
    await userEvent.click(addButton);
    const teamList = screen.getAllByRole('listitem');
    expect(teamList).toHaveLength(5);
  });

  test('Remove item test', async () => {
    render(
      <TeamContextProvider>
        <TestingComponent />
      </TeamContextProvider>
    );
    const removeButton = screen.getByTestId('1');
    await userEvent.click(removeButton);
    const teamList = screen.getAllByRole('listitem');
    expect(teamList).toHaveLength(3);
  });
});
