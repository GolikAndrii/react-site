import React from 'react';
import {Link} from "react-router-dom";

const SignupPage = () => {
    return (
        <div>
            <h1>SignupPage</h1>
            <Link to="/">Home <br /></Link>
            <Link to="/pricing">Price<br /></Link>
            <Link to="/signup">Signup<br /></Link>
        </div>
    )
};

export default SignupPage;