import React, {Suspense, lazy} from 'react';
import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<CountriesList />} />
          <Route path="/country/:name" element={<CountryDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
