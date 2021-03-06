import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Header, MainPage, WorkPage, HomePage, StuckPage, AntPage, Footer, AboutPage} from './components'
import { HashRouter as Router, HashRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from "./serviceWorker";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     {/* <App text="{hello}" /> */}
//     <Header />
//     <MainPage />
//     <WorkPage />
//   </React.StrictMode>
  
// );

ReactDOM.render(
  <Router>
    {/* <React.StrictMode> */}

    <Header />
    <Routes>
    
    {/* <HashRouter> */}
      <Route path="/" element={<HomePage />}/>
      <Route path="/stuck" element={<StuckPage />}/>
      <Route path="/ant" element={<AntPage />}/>
      <Route path="/about" element={<AboutPage />}/>
    </Routes>
    {/* </HashRouter> */}
    <Footer />
    {/* </React.StrictMode>, */}
</Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
