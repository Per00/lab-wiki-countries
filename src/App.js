import './App.css';
import { NavBar } from './components/NavBar';
import { Routes, Route} from "react-router-dom"
import { CountriesList } from './components/CountriesList';
import  CountryDetails  from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <div className="row">
          
            <CountriesList />
            <Routes>
              <Route path={'/:alpha3Code'} element={<CountryDetails />} />
            </Routes>
          
        </div>
      </div>
    </div>
  );
}

export default App;
