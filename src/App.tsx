import React from 'react';
  
import About from './Sections/About/index.tsx';
import Header from './Sections/Header/index.tsx';
import './style.css';
import Footer from './Sections/Footer/index.tsx';
import Form from './Sections/Form/index.tsx';

function App() {
  document.body.id = 'background'
   
  return (
    <div>
      <Header/>
      <br></br>
      <br></br>
      <About/>
      <Form/>
      <br></br>
      <div id="textresultdiv">
      </div>
      <div id="mapdiv">
      </div>      
      <br></br>
      <br></br>
      <Footer/>
    </div>
  );
}

export default App;
