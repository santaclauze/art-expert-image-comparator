import React from 'react';
import { Link } from 'react-router-dom';

const LoginView = () => {
    return (
        <div>
            Login
            <Link to={'/comparator'}>Go to comparator</Link>
        </div>
    );
};

export default LoginView;
