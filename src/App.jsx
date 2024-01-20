import React from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './Pages/About';
import Project from './Pages/Project';
import Service from './Pages/Service';
import Contact from './Pages/Contact';
import Faq from './Pages/Faq';


const App = () => {
  return (
    <div className='bg-gradient-to-r from-red-500 to-blue-500 '>
     <Header/>
     <Banner/> 
     <About/>
     <Service/>
     <Project/>
     <Faq/>
     <Contact/>
    </div>
  )
}

export default App;
