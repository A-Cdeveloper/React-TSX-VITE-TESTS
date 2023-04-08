import React from 'react';
import { TeamsType } from '../../types/AppTypes';

const PropsComponent = ({ teams }: TeamsType) => {
  return (
    <div className="section">
      <h1>PropsComponent</h1>
      {teams && (
        <ul>
          {teams.map((team) => {
            return (
              <li key={team.team_id}>
                <h3>{team.team_name}</h3>
                <p>{team.team_country}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default PropsComponent;
