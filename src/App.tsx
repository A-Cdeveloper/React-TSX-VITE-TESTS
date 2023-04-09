import { Provider } from 'react-redux';
import SimpleComponent from './components/SimpleComponent/SimpleComponent';
// import PropsComponent from './components/PropsComponent/PropsComponent';
// import InteractionComponent from './components/InteractionComponent/InteractionComponent';
// import FetchComponent from './components/FetchComponent/FetchComponent';
// import HookComponent from './components/HookComponent/HookComponent';
// import ContextComponent1 from './components/ContextComponent/ContextComponent-1';
// import ContextComponent2 from './components/ContextComponent/ContextComponent-2';
import { DataContextProvider } from './store/context/data-context';
import { TeamContextProvider } from './store/context/teams-context';

import ReduxComponent from './components/ReduxComponent/ReduxComponent';

// const teams = [
//   { team_id: 1, team_name: 'RealMadrid', team_country: 'Spain' },
//   { team_id: 2, team_name: 'Barselona', team_country: 'Spain' },
//   { team_id: 3, team_name: 'Chealsee', team_country: 'England' },
//   { team_id: 4, team_name: 'Juventus', team_country: 'Italy' },
// ];

export const ContentApp = () => {
  return (
    <div className="container">
      <SimpleComponent />
      {/* <PropsComponent teams={teams} />
      <InteractionComponent />
      <FetchComponent />
      <HookComponent /> 
      <ContextComponent1 />
      <ContextComponent2 /> */}
      <ReduxComponent />
    </div>
  );
};

const App = () => {
  return (
    <DataContextProvider>
      <TeamContextProvider>
        <ContentApp />
      </TeamContextProvider>
    </DataContextProvider>
  );
};

export default App;
