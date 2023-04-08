import SimpleComponent from './components/SimpleComponent/SimpleComponent';
import PropsComponent from './components/PropsComponent/PropsComponent';
import InteractionComponent from './components/InteractionComponent/InteractionComponent';
import FetchComponent from './components/FetchComponent/FetchComponent';
import HookComponent from './components/HookComponent/HookComponent';

function App() {
  const teams = [
    { team_id: 1, team_name: 'RealMadrid', team_country: 'Spain' },
    { team_id: 2, team_name: 'Barselona', team_country: 'Spain' },
    { team_id: 3, team_name: 'Chealsee', team_country: 'England' },
    { team_id: 4, team_name: 'Juventus', team_country: 'Italy' },
  ];

  return (
    <div className="container">
      <SimpleComponent />
      <PropsComponent teams={teams} />
      <InteractionComponent />
      <FetchComponent />
      <HookComponent />
    </div>
  );
}

export default App;
