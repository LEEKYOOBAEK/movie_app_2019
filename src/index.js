import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Mycomponent from './Mycomponent';
import Mycomponent2 from './Mycomponent2';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Mycomponent/>
    <Mycomponent2/>
  </React.StrictMode>,
  document.getElementById('root')
);