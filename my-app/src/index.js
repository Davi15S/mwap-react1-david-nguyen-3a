import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header.js';
import reportWebVitals from './reportWebVitals';
import Footer from './Footer';
import Content from './Content';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Footer />
    <Content />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
