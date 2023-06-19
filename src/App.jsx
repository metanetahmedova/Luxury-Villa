import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import FixedComponents from "./Router/FixedComponents";
import AboutPage from './Pages/AboutPage';
import HomePage from './Pages/HomePage';
import TestPage from './Pages/TestPage';
import Categories from './Pages/Categories';
import RentalsPage from './Pages/RentalsPage';






function App() {
 
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<FixedComponents />}>
          <Route index={true} path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/rentals' element={<RentalsPage />} />
          <Route path='/test' element={<TestPage/>} />
          <Route path='/categories/:id' element={<Categories/>} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;



