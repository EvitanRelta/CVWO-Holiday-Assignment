import React from 'react';
import { Login, TestRoutesHome, Signup, Home } from './pages';
import { Routes, Route } from "react-router-dom";

interface AppProps {}

const App = ({}: AppProps) => (
    <Routes>
        <Route path="/" element={<TestRoutesHome />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="home" element={<Home />} />
    </Routes>
);

export default App;