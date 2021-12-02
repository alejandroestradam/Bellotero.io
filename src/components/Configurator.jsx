import React from 'react';
import '../css/configurator.css';
import axios from 'axios';
import Calculator from './Calculator';

const Configurator = () => {
    const [post,setPost]=React.useState([]);

   React.useEffect(() => {
        axios.get("./page2.json")
        .then(res=>{
            setPost(res.data.calculator);
        }).catch(err =>{
            console.log(err);
        })
    }, []);

    return (
        <section className="configurator">
            <article className="inf">
                <h1 className="save">{post.title}</h1>
                <p>{post.description}</p>
            </article>
            <article className="calculators">
                <div className="both">
                    <Calculator 
                    text="Monthly ingredient spending" 
                    defaultValue = "36211" max="100000" step="1"
                    localString = "de-DE" opacity = "flex" name="" classes="number"/>
                    <Calculator 
                    text="Full-time employees that process invoices" 
                    defaultValue = "8" max="10" step="1"
                    localString = "de-DE" opacity = "none" name="span" classes="smallNumber"/>
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

export default Configurator;
