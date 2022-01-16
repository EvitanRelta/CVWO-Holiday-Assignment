import React from 'react';
import { Link } from "react-router-dom";


interface HomeProps {}

const Home = ({}: HomeProps) => (
    <>
    <h1>Home page</h1>
    <Link to='/login'>Login</Link>
    <br />
    <Link to='/signup'>Sign Up</Link>
    </>
);

export default Home;