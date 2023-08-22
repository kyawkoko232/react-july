import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App.jsx';
import SearchUsers from './Api';


SearchUsers();


const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(<App/>);
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
