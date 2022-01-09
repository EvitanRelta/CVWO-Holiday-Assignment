import React from 'react';
import { Login, Home, Signup } from './routes';
import { Routes, Route } from "react-router-dom";

const App = ({ client }) => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login client={client} />} />
        <Route path="signup" element={<Signup client={client} />} />
    </Routes>
);

export default App;