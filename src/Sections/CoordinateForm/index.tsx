import React from 'react';
import './style.css';

const CoordinateForm = () => {
    
    return(
        <div className='coordinateForm'>
            <div>
                <label htmlFor="latitude"> Latitude :</label>
                <input type="text" name="latitude" id="latitude" placeholder="41.8"></input>
            </div>
            <br></br>
            <div>
                <label htmlFor="longitude"> Longitude :</label>
                <input type="text" name="longitude" id="longitude" placeholder="12.4"></input>
            </div>
            <br></br>
        </div>
    )
}

export default CoordinateForm;
