import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <div>
        <CountriesList />
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="country/:alpha3Code" element={<CountryDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
