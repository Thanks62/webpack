import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import App from './App';
import './i18n';
//ReactDOM.render(<App />, document.getElementById('root'));

function component() {
    var element = document.createElement('div');
    element.innerHTML = '<div id="root"></div>';
    return element;
  }
  
 document.body.appendChild(component());
 
 render(
   <Provider store={store}>
     <App />
   </Provider>,
   document.getElementById('root')
 );