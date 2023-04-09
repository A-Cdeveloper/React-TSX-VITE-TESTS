import { createContext, useState } from 'react';
import { TeamType } from '../../types/AppTypes';

type ContextType = {
  teams: TeamType[];
  remove: (id: number) => void;
  add: (team: TeamType) => void;
};

type ContextProviderType = {
  children: React.ReactNode;
};

export const TeamContext = createContext<ContextType>({
  teams: [],
  remove: () => {},
  add: () => {},
});

export const TeamContextProvider = ({ children }: ContextProviderType) => {
  const [data, setData] = useState<TeamType[]>([
    { team_id: 1, team_name: 'RealMadrid', team_country: 'Spain' },
    { team_id: 2, team_name: 'Barselona', team_country: 'Spain' },
    { team_id: 3, team_name: 'Chealsee', team_country: 'England' },
    { team_id: 4, team_name: 'Juventus', team_country: 'Italy' },
  ]);

  const addHandler = (team: TeamType) => {
    setData((prevTeams) => {
      return [...prevTeams, team];
    });
  };

  const removeHandler = (id: number) => {
    setData((prevTeams) => {
      return prevTeams.filter((el) => el.team_id !== id);
    });
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value: ContextType = {
    teams: data,
    remove: removeHandler,
    add: addHandler,
  };
  return <TeamContext.Provider value={value}>{children}</TeamContext.Provider>;
};
