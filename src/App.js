import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavHeader from './components/NavHeader';
import CAGRCalculator from './components/CagrCalculator';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
// import Counter from './counter/Counter';
// import User from "./User/User";
// import FilterableProductTable from './ProductFilter/FilterableProductTable';

function App() {
  return (
    <>
      <Router>
        <NavHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<CAGRCalculator />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
