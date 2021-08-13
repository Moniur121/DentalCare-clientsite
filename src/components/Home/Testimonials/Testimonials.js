import React from 'react';
import './Testimonials.css';
const Testimonials = ({ testimonial }) => {
    return (
        <section>
            <div class="col common-card py-4 p-3">
                <div className="quote-area mb-3">
                    <p className="text-muted">{testimonial.quote}</p>
                </div>
                <div className="footer-area d-flex align-items-center">
                        <img className="mx-3" src={ testimonial.img} alt="" width="60"/>
                    <div className="mt-5">
                        <p style={{color: '#1CC7C1' }}>{testimonial.name}</p>
                        <p  className="mt">{testimonial.from}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;