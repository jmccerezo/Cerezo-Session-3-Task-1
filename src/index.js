require('file-loader?name=[name].[ext]!./index.html');
import React from "react";
// import ReactDOM from "react-dom";
import App from './App';
// ReactDOM.render(<App />, document.getElementById('app'));

import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab="home" />);