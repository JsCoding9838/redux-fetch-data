import './App.css';
import { Todos } from './components/Todos';

function App() {
  return (
    <div className="App">
      <h2>React-Redux fetch Data</h2>
      <Todos />
    </div>
  );
}

export default App;

// step1: install packages
// step2: constants define
// step3: async action creator
// step4: reducer
// step5: create store
// step6: provide store
// step7: use store
// step8: adding css