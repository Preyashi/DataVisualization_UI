import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Components from './Components/index';
import Range from './Components/Range/index';
import HeatMap from './Components/HeatMap/index';
import RouteApp from './route.js'



ReactDOM.render(<RouteApp/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

