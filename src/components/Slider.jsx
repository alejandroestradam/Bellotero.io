import React from 'react';
import axios from 'axios';
import '../css/Slider.css';
const Slider = () => {
    const [post,setPost]=React.useState([]);
    const [current, setCurrent] = React.useState(0);
    const length = post.length;

    const nextSlide = () =>{
        setCurrent(current === length -1 ? 0 : current + 1);
    }
    const prevSlide = () =>{
        setCurrent(current === 0 ? length -1 : current - 1);
    }

    React.useEffect(() => {
        axios.get("./page1.json")
        .then(res=>{
            setPost(res.data.slider.reviews);
        }).catch(err =>{
            console.log(err);
        })
    }, []);

    return (
        <div className="container">
            <div className="sliders">
                {post.map((obj,index) => {
                    return (
                    <article className={index === current ? 'slide active' : 'slide'} key={index}>
                        <div className="name">
                            <h2>{post[index].name}</h2>
                            <p>{post[index].position}</p>
                        </div>
                        <p className="review">{post[index].comment}</p>
                    </article>
                    )
                })}
            </div>
        <div className="slider">
                <p>{current + 1 + '/' + length}</p>
                <button onClick={prevSlide}>←</button>
                <button onClick={nextSlide}>→</button>
            </div>
        </div>
    )
}

export default Slider;
