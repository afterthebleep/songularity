import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from './components/cards/cards';

ReactDOM.render(<Card />, document.getElementById('root'));

serviceWorker.unregister();
