import { render, screen } from '@testing-library/react';
import PropsComponent from './PropsComponent';
import { describe } from 'vitest';

describe('Component with props', () => {
  test('render header corractly', () => {
    render(<PropsComponent teams={[]} />);
    const headline = screen.getByRole('heading', { level: 1 });
    expect(headline).toBeInTheDocument();
  });

  test('list empty if no teams', () => {
    render(<PropsComponent teams={[]} />);
    const teamsList = screen.queryAllByRole('listitem');
    expect(teamsList.length).toBe(0);
  });

  test('list not empty', () => {
    const testTeams = [
      { team_id: 1, team_name: 'RealMadrid', team_country: 'Spain' },
    ];

    render(<PropsComponent teams={testTeams} />);
    const teamsList = screen.queryAllByRole('listitem');
    expect(teamsList.length).toBe(1);
  });
});
