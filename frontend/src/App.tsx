import React from 'react';
import { Login, Home, Signup } from './pages';
import { Routes, Route } from "react-router-dom";

interface AppProps {}

const App = ({}: AppProps) => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
    </Routes>
);

export default App;