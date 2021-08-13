
import Modal from 'react-modal';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AppointmentForm.css';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')
const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data ,e) => {
        data.service = appointmentOn;
        data.date = date;
        data.status = "pending";
        data.prescription = "view";
        data.visited ="visited";
        data.created = new Date();
        console.log(data);
        fetch('https://serene-castle-61847.herokuapp.com/bookAppointment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    closeModal();
                    alert('Appointment Successfully!')
                    
                }
            })
        
    }
    return (
        <div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 className="text-center  " style={{ color: '#10D0E9' }}>{appointmentOn}</h2>
                <p className="text-secondary text-center"><small>ON {date.toDateString()}</small></p>
                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mb-2">
                        <input type="text" name="name"  {...register("name", { required: true })} placeholder="Your Name" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group mb-2">
                        <input type="text" name="email" {...register("email", { required: true })} placeholder="Email" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group row mb-2">
                        <div className="col-6">
                            <input type="text" name="phone" {...register("phone", { required: true })} placeholder="Phone Number" className="form-control" />
                            {errors.phone && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="col-6">

                            <select className="form-control" name="schedule"  {...register("schedule", { required: true })}   >
                                <option disabled={true} value="Not set">Mid-day Schedule</option>
                                <option >3:00 PM</option>
                                <option disabled={true} value="Not set">Night Schedule</option>
                                <option >9:00 PM</option>
                            </select>
                            {errors.schedule && <span className="text-danger">This field is required</span>}
                        </div>
                    </div>
                    <div className="form-group row mb-2">
                        <div className="col-4">

                            <select className="form-control" name="gender"  {...register("gender", { required: true })}   >
                                <option disabled={true} value="Not set">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Not set">Other</option>
                            </select>
                            {errors.gender && <span className="text-danger">This field is required</span>}

                        </div>
                        <div className="col-4">
                            <input name="age" {...register("age", { required: true })} className="form-control" placeholder="Your Age" type="number" />
                            {errors.age && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="col-4">
                            <input {...register("weight", { required: true })} className="form-control" name="weight" placeholder="Weight" type="number" />
                            {errors.weight && <span className="text-danger">This field is required</span>}
                        </div>
                    </div>

                    <div className="form-group text-right">
                        <button type="submit" className="btn btn-primary">Send</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default AppointmentForm;