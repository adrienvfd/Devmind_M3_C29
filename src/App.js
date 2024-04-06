import './App.css';
import HomeComponent from './component/HomeComponent';
import RepoComponent from './component/RepoComponent';
import Navigate from './component/Navigate';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a>
          <Navigate />
          <HomeComponent />
          <RepoComponent />
        </a>
      </header>
    </div>
  );
}

export default App;
