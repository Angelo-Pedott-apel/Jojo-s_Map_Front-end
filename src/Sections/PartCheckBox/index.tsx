import React, { useState } from 'react';
import './style.css';

type PartProps = {
    part: number;
    imageSource: string;
    protagonistFName: string;
    protagonistSName: string
  };


const PartCheckBox = (props: PartProps) => {

  const [part, setPart] = useState(0);

  const handleCheckChange = (e) => {
    if ( part === 0){
      setPart(1)}
    else setPart(0);
  };

    return (<div className="partCheckBox">
              <input type="checkbox" name = {"Part_"+props.part} value = {part} id={"Part" + props.part} className="part_check" onChange={handleCheckChange}></input>
              <img src={props.imageSource} className="part_img" alt={props.protagonistFName+' '+props.protagonistSName}/>
              <label htmlFor={"Part_"+props.part} className="part_label"> {"Part "+ props.part} </label>
              <br></br>
              <p className="part_desc"> {props.protagonistFName+' '+props.protagonistSName} </p>
            </div>
    );
}

export default PartCheckBox;