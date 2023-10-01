import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import Process from './components/process/process';
import { Provider } from 'react-redux';
import store from './components/store';
function App() {
  
  return (
    <>
    
    <Provider store={store}>
      <Router>
      
      
      <Routes>
        
          <Route path='/' element={<Home />}/>
          <Route path='home' element={<Home />}/>
          <Route path='process' element={<Process />}/>
          
      </Routes >
      
    </Router>
    </Provider>
    </>
  );
}

export default App;
