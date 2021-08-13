import React from 'react';
import { useForm } from 'react-hook-form';
const AddAdmin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        const makingAdmin = {
            name: data.name,
            email: data.email,
        }
        fetch(' https://serene-castle-61847.herokuapp.com/makingAdmin', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(makingAdmin)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    console.log(data)
                    alert('Doctor Added Successfully')
                    e.target.reset();
                }

            })
    }
    return (
        <section className="container-bg">
            <div className="container py-5">
                <div className="addDoctor-form ">
                <div className="py-3 text-info">
                        <h3>Making a Admin</h3>
                    </div> 
                    <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group mb-4">
                            <input type="text" name="name"  {...register("name", { required: true })} placeholder="Your Name" className="form-control" />
                            {errors.name && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="form-group mb-3">
                            <input type="text" name="email" {...register("email", { required: true })} placeholder="Email" className="form-control" />
                            {errors.email && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="form-group text-right">
                            <button type="submit" className="btn btn-primary">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddAdmin;