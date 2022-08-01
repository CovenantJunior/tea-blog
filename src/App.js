//import logo from './logo.svg';
import './App.css';
import './Quicksand.css';
import Navbar from './Navbar';
import Home from './Home';
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  const title = "Welcome Tea once more";
  const likes = 50;
  const link = "https://asecretword.com";
  const [cartIsEmpty, addCart] = useState(true);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <h1>{title}</h1>
          <br />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/create' element={<Create />} />
            <Route path='/blogs/:id' element={<BlogDetails />} />
            <Route path='/test' element={(
              <div>
                <h2>Test Page</h2>
                <br />
                <p>Hello, React</p>
              </div>
            )} />
            <Route path='/redirect' element={<Navigate to='/home' />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
