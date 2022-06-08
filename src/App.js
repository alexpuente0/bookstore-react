import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import BookContainer from './components/bookContainer';
import './index.css';
import Navbar from './components/navBar';
import Categories from './pages/categories';

import store from './redux/configureStore';

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/" element={<BookContainer />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);

export default App;
