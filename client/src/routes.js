import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inventory from './components/Inventory';
import Cart from './components/Cart';


export default (
    <Router>
        <Routes>
            <Route exact path='/' element={<Inventory />} />
            <Route exact path='/cart' element={<Cart />} />
        </Routes>
    </Router>
);