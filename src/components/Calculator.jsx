import React from 'react';
import '../css/calculator.css';
import Slider from '@mui/material/Slider';

const Calculator = (props) => {
    const [data, setData] = React.useState('0');
    function handleChangeMoney(event){
        setData(event.target.value);
      }
    return (
        <figure className="calculator">
        <div className="money">
            <span>{props.text}</span>
            <div className={props.classes}>
                <p style={{display: props.opacity }}>$</p>
                <span id={props.name}>{data.toLocaleString(props.localString)}</span>
            </div>
        </div>
        <Slider value= {data}
        onChange = {handleChangeMoney}
        defaultValue={props.defaultValue} min={0}max={props.max}
        aria-label="Default" valueLabelDisplay="auto" />
    </figure>
    )
}

export default Calculator;
