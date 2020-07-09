import './index.css'
import img from './logo192.png'
import {print} from './print.js'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//ReactDOM.render(<App />, document.getElementById('root'));

function component() {
    var element = document.createElement('div');
    var btn=document.createElement('button');
    btn.innerText='print';
    element.innerHTML = '<div id="root"></div>';
    element.classList.add('title');
    var logo=new Image();
    logo.src=img;
    btn.addEventListener('click',print);
    return element;
  }
  
  document.body.appendChild(component());
  ReactDOM.render(<App />, document.getElementById('root'));
