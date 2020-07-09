import './index.css'
import img from './logo192.png'
import {print} from './print.js'
function component() {
    var element = document.createElement('div');
    var btn=document.createElement('button');
    btn.innerText='print';
    element.innerHTML = 'hello webpack';
    element.classList.add('title');
    var logo=new Image();
    logo.src=img;
    btn.addEventListener('click',print);
    element.appendChild(logo);
    element.appendChild(btn);
    return element;
  }
  
  document.body.appendChild(component());
