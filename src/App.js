import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookContainer from './components/bookContainer';
import './index.css';
import Navbar from './components/navBar';
import Categories from './pages/categories';

const App = () => (
  <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<BookContainer />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
