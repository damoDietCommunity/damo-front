if (typeof global === 'undefined') {
  window.global = window;
}

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {store} from './redux/store'
import {Provider} from 'react-redux'
import {BrowserRouter} from "react-router-dom";
import 'animate.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
