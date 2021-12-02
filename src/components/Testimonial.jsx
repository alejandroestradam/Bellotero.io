import React from 'react';
import "../css/testimonial.css";
import axios from 'axios';
import Slider  from './Slider';

const Testimonial = () => {
    const [post,setPost]=React.useState([]);

    React.useEffect(() => {
        axios.get("./page1.json")
        .then(res=>{
            setPost(res.data.slider);
        }).catch(err =>{
            console.log(err);
        })
    }, []);

    return (
        <section className="testimonial">
            <h1>{post.title}</h1>
            <Slider />
        </section>
    )
}

export default Testimonial;
