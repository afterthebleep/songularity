import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Cards from './components/cards';

ReactDOM.render(<Cards />, document.getElementById('root'));

serviceWorker.unregister();
