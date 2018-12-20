import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import './style/index.scss';
import App from './App';

// const jwt = require('express-jwt');
// const jwksRsa = require('jwks-rsa');

// const checkJwt = jwt({
//     secret: jwksRsa.expressJwtSecret({
//         cache: true,
//         rateLimit: true,
//         jwksRequestsPerMinute: 5,
//         jwksUri: `https://the-sesh.auth0.com/.well-known/jwks.json`
//     }),

//     // Validate the audience and the issuer.
//     audience: 'fb125a8bxXz2tX8ebnv742DgeG85FKO1',
//     issuer: `https://the-sesh.auth0.com/`,
//     algorithms: ['RS256']
// });

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('root'));

