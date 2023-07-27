import React from 'react';
import ReactDOM from 'react-dom/client';
import ActiveVsMattersCard from '././Components/Graphs/ ActiveVsMattersCard '; 
import './index.css';

// Your code for the other file here
import './index.css';

// import App from './App';

// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {<ActiveVsMattersCard />}
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
