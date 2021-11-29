import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import History from './routes/History'
import LogTemplates from './routes/LogTemplates'
import LogTemplate from './routes/LogTemplate'
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById("root");
ReactDOM.render(  
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="history" element={<History />} />
          <Route path="log" element={<LogTemplates />}>
            <Route
              index
              element={             
                  <p>Select a template</p>              
              }
            />
            <Route path=":templateName" element={<LogTemplate />} />
            {/* todo: possibly pass entry id via a property instead of a URL param */}
          </Route>
          <Route
            path="*"
            element={              
                <p>Hmmm. There's nothing here.</p>              
            }
          />
        </Route>        
      </Routes>
    </Router>
  </React.StrictMode>,  
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
