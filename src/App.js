import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './pages/home';
import './index.css';
import Navbar from './components/navBar';
import Categories from './pages/categories';

import store from './redux/configureStore';

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);

export default App;
