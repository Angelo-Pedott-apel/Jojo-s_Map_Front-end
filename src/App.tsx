import React from 'react';

import PartCheckBox from './Sections/PartCheckBox/index.tsx';
import About from './Sections/About/index.tsx';
import CoordinateForm from './Sections/CoordinateForm/index.tsx';
import Header from './Sections/Header/index.tsx';
import './style.css';
import Footer from './Sections/Footer/index.tsx';

function App() {
  document.body.id = 'background'
  return (
    <div>
      <Header/>
      <br></br>
      <br></br>
      <About/>
      <form action="/Request" method="GET">
        <div className='partBlock'>
          <PartCheckBox part={1} imageSource='img/Jonathan_scale.png' protagonistFName='Jonathan' protagonistSName='Joestar' />
          <PartCheckBox part={2} imageSource='img/Joseph_scale.png' protagonistFName='Joseph' protagonistSName='Joestar' />
          <PartCheckBox part={3} imageSource='img/Jotaro_scale.png' protagonistFName='Jotaro' protagonistSName='Kujo' />
          <PartCheckBox part={4} imageSource='img/Josuke_scale.png' protagonistFName='Josuke' protagonistSName='Higashikata' />
          <PartCheckBox part={5} imageSource='img/Giorno_scale.png' protagonistFName='Giorno' protagonistSName='Giovanna' />
          <PartCheckBox part={6} imageSource='img/Jolyne_scale.png' protagonistFName='Jolyne' protagonistSName='Kujo' />
        </div>
        <br></br>
        <CoordinateForm/>
      </form>
      <br></br>
      <br></br>
      <Footer/>
    </div>
  );
}

export default App;
