import React, { useContext } from 'react';
import { TeamContext } from '../../store/context/teams-context';

export const ContextComponent2 = () => {
  const { teams, remove, add } = useContext(TeamContext);

  return (
    <div className="section">
      <h1>Context Component 2</h1>
      {teams && (
        <>
          <ul>
            {teams.map((team) => {
              return (
                <li key={team.team_id}>
                  <h3>{team.team_name}</h3>
                  <p>{team.team_country}</p>
                  <div
                    role="button"
                    tabIndex={0}
                    onKeyDown={() => remove(team.team_id)}
                    onClick={() => remove(team.team_id)}
                  >
                    REMOVE
                  </div>
                </li>
              );
            })}
          </ul>
          <div
            role="button"
            tabIndex={0}
            onKeyDown={() =>
              add({
                team_id: Math.floor(Math.random() * 100),
                team_name: 'Crvena Zvezda',
                team_country: 'Serbia',
              })
            }
            onClick={() =>
              add({
                team_id: Math.floor(Math.random() * 100),
                team_name: 'Crvena Zvezda',
                team_country: 'Serbia',
              })
            }
          >
            ADD
          </div>
        </>
      )}
    </div>
  );
};

export default ContextComponent2;
