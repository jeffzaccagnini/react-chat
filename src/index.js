import React from 'react';
import { render } from 'react-dom';
import './scss/index.scss';
import App from './containers/app';

const rootElement = document.getElementById('root');

render(<App />, rootElement);