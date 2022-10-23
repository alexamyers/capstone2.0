import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inventory from './components/Inventory';
import Cart from './components/Cart';
import About from './components/About';


export default (
    <Router>
        <Routes>
            <Route exact path='/' element={<Inventory />} />
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path='/about' element={<About />} />
        </Routes>
    </Router>
);