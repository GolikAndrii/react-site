import React from 'react';
import {Link} from 'react-router-dom';


const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Link to="/">Home <br /></Link>
            <Link to="/pricing">Price<br /></Link>
            <Link to="/signup">Signup<br /></Link>
        </div>
)
};

export default Home;