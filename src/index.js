import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ShopContextProvider from './Context/Shopcontext';


//var age = 9;
//var display = <h1 style={{color: "RED"}}>{age>18? "ELIGIBLE.": "NOT ELIGIBLE. "}</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ShopContextProvider>
    <App></App>
    </ShopContextProvider>);