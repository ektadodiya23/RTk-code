import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/example/Navbar';
import {BrowserRouter , Routes , Route} from 'react-router-dom'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="*" element={<Navbar />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
