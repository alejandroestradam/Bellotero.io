import React from 'react';
import '../css/solutions.css';
import Slider from '@mui/material/Slider';

const Solutions = () => {
    const [money, setMoney] = React.useState('0');
    const [employees, setEmployees] = React.useState('0');
    const [data,setData]=React.useState([]);

  const getData=()=>{
    fetch('./page2.json'
    ,{  headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    ).then(function(response){
        return response.json();
      }
      ).then(function(myJson) {
        setData(myJson);
      });
  }
  React.useEffect(()=>{
    getData()
  },[]);

    function handleChangeMoney(event){
      setMoney(event.target.value);
    }
    function handleChangeEmployees(event){
        setEmployees(event.target.value);
      }

    return (
        <section className="configurator">
            <article className="inf">
                <h1 className="save">{data.calculator.title}</h1>
                <p>{data.calculator.description}</p>
            </article>
            <article className="calculators">
                <div className="both">
                <figure className="calculator">
                    <div className="money">
                        <span>Monthly ingredient spending</span>
                        <div className="number">
                            <p>$</p>
                            <span>{money.toLocaleString('de-DE')}</span>
                        </div>
                    </div>
                    <Slider value= {money}
                    onChange = {handleChangeMoney}
                    defaultValue={36211} min={0}max={100000}
                    aria-label="Default" valueLabelDisplay="auto" />
                </figure>
                <figure className="calculator">
                    <div className="money">
                        <span>Full-time employees that process invoices</span>
                        <span id="span">{employees}</span>
                    </div>
                    <Slider value= {employees}
                    onChange = {handleChangeEmployees}
                    defaultValue={8} min={0}max={10}
                    step={1}
                    aria-label="Default" valueLabelDisplay="auto" />
                </figure>
                </div>
                <figure className="results">
                    <div className="result">
                        <div className="cost">
                            <span className="dollar">$</span>
                            <span className="num">8.611</span>
                        </div>
                        <span className="sub">Estimated cost food saving</span>
                    </div>
                    <div className="result">
                        <div className="cost">
                            <span className="dollar">$</span>
                            <span className="num">36.211</span>
                        </div>
                        <span className="sub">Your estimated annual savings</span>
                    </div>
                </figure>
            </article>
        </section>
    )
}

export default Solutions;
