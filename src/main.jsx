import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom'
import sparkle from './assets/sparkle.gif'
import favicon from './assets/marriage.png'


document.body.style.backgroundImage = `url(${sparkle})`;

const link = document.createElement('link');
link.rel = 'icon';
link.href = favicon;
document.head.appendChild(link);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
)
