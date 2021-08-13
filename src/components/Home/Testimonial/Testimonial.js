import React from 'react';
import wilson from '../../images/wilson.png';
import ema from '../../images/ema.png';
import aliza from '../../images/aliza.png';
import Testimonials from '../Testimonials/Testimonials';
import './Testimonial.css';
const testimonialData = [
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Wilson Harry',
        from : 'California',
        img : wilson
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Ema Gomez',
        from : 'California',
        img : ema
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Aliza Farari',
        from : 'California',
        img : aliza
    }
]
const Testimonial = () => {
    return (
         <section className="testimonials py-5 homeSection-containerBg" id="testimonial">
             <div className="container">
                 <div className="section-header py-5 my-5">
                        <h4 style={{color: '#7FFFD4' }}>TESTIMONIAL</h4>
                        <h2 style={{color: '#203047'}}>What is Our Patients<br/>Says</h2>
                 </div>
                 <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            testimonialData.map(testimonial=> <Testimonials testimonial={testimonial}></Testimonials>)
                        }
                 </div>
             </div>
         </section>
    );
};

export default Testimonial;