import './App.css';
import Gamesdetails from './components/Gamesdetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
        <Search />
        <Gamesdetails />
    </div>
  );
}

export default App;
