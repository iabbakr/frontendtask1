import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const page = (
  <div className="">
    <div className>
      <h1>
        Fun facts about React:
      </h1>
      <ul>
        <li>hello</li>
        <li>suwaidah</li>
        <li>abubakar</li>
        <li>ibrahim</li>
      </ul>
    </div>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(page);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
