import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import { ProductsPage } from './pages/Products';
import { NewProductPage } from './pages/NewProduct'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<ProductsPage/>} />
        <Route exact path='/newproduct' element={<NewProductPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
