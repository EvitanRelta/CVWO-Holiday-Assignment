import React from 'react';
import { Login, TestRoutesHome, Signup } from './pages';
import { Routes, Route } from "react-router-dom";

interface AppProps {}

const App = ({}: AppProps) => (
    <Routes>
        <Route path="/" element={<TestRoutesHome />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
    </Routes>
);

export default App;