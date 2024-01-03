import React from 'react';
import './style.css';
import PartCheckBox from '../PartCheckBox';
import CoordinateForm from '../CoordinateForm';

const Form = () => {

    function search(formData) {
        const query = formData.get("query");
        alert(`You searched for '${query}'`);
    }
    
    return(
        <form action={search}>
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
    )
}

export default Form;
