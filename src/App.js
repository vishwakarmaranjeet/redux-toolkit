import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Counter from './counter/Counter';
// import User from "./User/User";
// import FilterableProductTable from './ProductFilter/FilterableProductTable';
import NavHeader from './components/NavHeader';
import CAGRCalculator from './components/CagrCalculator';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';

// const PRODUCTS = [
//   { category: "Fruits", price: "$3", stocked: true, name: "Apple" },
//   { category: "Fruits", price: "$2", stocked: true, name: "Dragonfruit" },
//   { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
//   { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
//   { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
//   { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
// ];

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
