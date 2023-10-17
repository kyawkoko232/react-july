import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App.jsx';
import {Provider} from './context/books';



ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider>
    <App />
    </Provider>

)
