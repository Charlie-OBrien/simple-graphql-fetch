import useLaunches from './useLaunches';  
import './App.css';

function App() {
  const launches = useLaunches()
  return (
    <div className="App">
      <header className="App-header">
        <h1>Launches</h1>
      </header>
      <div>
        <ul >
          {launches.map(launch => (
            <li key={launch.id}>{launch.mission_name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
