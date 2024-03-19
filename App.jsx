import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Program from './components/Program/Program';
import Title from './components/Title/Title';
import About from './components/About/About';
import Campus from './components/campus/Campus';
import Testmonial from './components/Testmonials/Testmonial';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Chatbot from './components/Chatbot/Chatbot';
import Vedio from './components/Videoplayer/Video';
// import Home from '../src/Home';
const App = () => {
  const [playState , setPlayState] = useState(false)
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subtitle='OUR PROGRAM' title='WHAT WE OFFER' />
        <Program />
      </div>
      {/* <Login /> */}
      <About setPlayState ={setPlayState} />
      <Title subtitle='Gallery' title='Campus Photos' />
      <Campus />
      <Title subtitle='Testmonials' title='WHAT STUDENT SAYS' />
      <Testmonial/>
      <Title subtitle='Please feel free to' title='CONTACT US' />
      <Contact/>
      <Chatbot/>
      {/* <Login/> */}
      <Footer/>
      <Vedio playState={playState} setPlayState={setPlayState}/>
    </div>
  );
};

export default App;
