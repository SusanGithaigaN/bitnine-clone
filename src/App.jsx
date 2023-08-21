// import { useState } from 'react'

import './App.css'
// import react router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// import components
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Products from './components/Products/Products';

const Dashboard = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
      </Routes>
      <Footer />
    </div>
  );
};



function App() {
  return(
    <div className='app'>
      <Router>
        <Dashboard />
      </Router>
    </div>
  )

}

export default App
