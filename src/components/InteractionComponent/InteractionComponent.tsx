import React, { useState } from 'react';
import { TeamsType, TeamType } from '../../types/AppTypes';

const InteractionComponent = () => {
  const [team2, setTeams2] = useState<TeamType[]>([]);

  const deleteHandler = (tid: number) => {
    setTeams2((prevState: TeamType[]) => {
      return prevState.filter((el: TeamType) => el.team_id !== tid);
    });
  };

  const addHandler = (team: TeamType) => {
    setTeams2((prevState: TeamType[]) => {
      return [...prevState, team];
    });
  };

  return (
    <div className="section">
      <h1>InteractionComponent</h1>
      {team2.length !== 0 ? (
        <ul>
          {team2.map((team) => {
            return (
              <li
                key={team.team_id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '45%',
                }}
              >
                <h3>{team.team_name}</h3>
                <p>{team.team_country}</p>
                <button
                  data-testid={team.team_id}
                  type="button"
                  onClick={() => deleteHandler(team.team_id)}
                >
                  DELETE
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <h4>No teams</h4>
      )}

      <div>
        <button
          type="button"
          onClick={() =>
            addHandler({
              team_id: Math.floor(Math.random() * 100),
              team_name: 'Roma',
              team_country: 'Italy',
            })
          }
        >
          Add New
        </button>
      </div>
    </div>
  );
};

export default InteractionComponent;
