import React from 'react';
import './style.css';

type PartProps = {
    part: number;
    imageSource: string;
    protagonistFName: string;
    protagonistSName: string
  };


const PartCheckBox = (props: PartProps) => {

    return (<div className="partCheckBox">
              <input type="checkbox" name = {"Part_"+props.part} value = {props.part} id={"Part" + props.part} className="part_check"></input>
              <img src={props.imageSource} className="part_img" alt={props.protagonistFName+' '+props.protagonistSName}/>
              <label htmlFor={"Part_"+props.part} className="part_label"> {"Part "+ props.part} </label>
              <br></br>
              <p className="part_desc"> {props.protagonistFName+' '+props.protagonistSName} </p>
            </div>
    );
}

export default PartCheckBox;