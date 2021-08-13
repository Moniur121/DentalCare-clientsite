import React from 'react';
import { useForm } from 'react-hook-form';
import './Contact.css';
const Contact = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data,e) =>{
        //   console.log('hello');
        e.target.reset();
    }
    return (
        <section className="  homeSection-containerBg" id="contact">
            <div className="contact ">
                <div className="container   py-5">
                    <div className="section-header text-center text-white mb-5">
                        <h5 className="text-primary">Contact</h5>
                        <h1>Always  connect with us</h1>
                    </div>
                    <div className="col-md-9 mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <input   className="form-control" type="text" name="name" placeholder="Enter Your Name" {...register("name", { required: true })} />
                            {errors.name && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="mb-3">
                            <input   className="form-control" type="email" name="email" placeholder="Enter Your Email" {...register("email", { required: true })} />
                            {errors.email && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="mb-3">
                            <input   className="form-control" type="text" name="subject" placeholder="Subject" {...register("subject", { required: true })} />
                            {errors.subject && <span className="text-danger">This field is required</span>}
                        </div>
                        
                        <div class="mb-3">
                            <textarea class="form-control" id="exampleFormControlTextarea1" name="description" placeholder="Enter Description Here" rows="3" {...register("description", { required: true })}></textarea>
                            {errors.description && <span className="text-danger">This field is required</span>}
                        </div>

                        <input className="common-btn" type="submit" />
                    </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;