import React from 'react'
import "../css/stories.css"
const Stories = () => {
    const [data,setData]=React.useState([]);

    const getData=()=>{
      fetch('./page1.json'
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
          console.log(data.slider.title);
        });
    }
    React.useEffect(()=>{
      getData()
    },[]);

    return (
        <section className="testimonial">
            <h1>{data.slider.title}</h1>
            <article className="info">
                <div className="name">
                    <h2>Pete Zahut</h2>
                    <p>Chef @ Maniak</p>
                </div>
                <p className="review">
                "It's funny what memory does, isn't it? My favorite holiday tradition might 
                not have happened more than once or twice. But because it is such a good memory, 
                so encapsulating of everything I love about the holidays, in my mind it happened 
                every year. Without fail"
                </p>
            </article>
            <div className="slider">
                <p>1/4</p>
                <button>←</button>
                <button>→</button>
            </div>
        </section>
    )
}

export default Stories
