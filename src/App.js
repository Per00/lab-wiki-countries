import './App.css';
import { NavBar } from './components/NavBar';
import { countries } from './countries.json';
import { CountriesList } from './components/CountriesList';
import { CountryDetails } from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
