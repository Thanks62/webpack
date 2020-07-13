import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store/index'
import App from './App'
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
 )