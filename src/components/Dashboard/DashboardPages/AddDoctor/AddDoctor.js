import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './AddDoctor.css'
import axios from 'axios';
const AddDoctor = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imgUrl, setImgUrl] = useState(null)
    console.log(imgUrl)
    const onSubmit = (data,e) => {
        const addingDoctor = {
            name: data.doctorName,
            authorTitle: data.doctorTitle,
            collegeName: data.medicalCollege,
            phone: data.phone,
            imgUrl: imgUrl
        }
        fetch(' https://serene-castle-61847.herokuapp.com/addDoctor',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(addingDoctor)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data){
                e.target.reset();
                console.log(data)
                alert('Doctor Added Successfully')
            }
            
        })
    }
    const imgUpload = (file) => {
        console.log(file)
        const imgData = new FormData();
        imgData.set('key', 'fa0671d09ed646de7785a0b91b3d0f5d')
        imgData.append('image',file[0])
        axios.post('https://api.imgbb.com/1/upload', imgData)
            .then(function (response) {
                setImgUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    return (
        <section className="container-bg">
            <div className="container py-5">
                <div className="addDoctor-form ">
                    <div className="py-3 text-info">
                        <h3>Add a Doctor</h3>
                    </div> 
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <input className="form-control" type="text" name="doctorName" placeholder="Doctor Name" {...register("doctorName", { required: true })} />
                                {errors.doctorName && <span className="text-danger">This field is required</span>}
                            </div>

                            <div className="mb-3">
                                <input className="form-control" type="text" name="doctorTitle" placeholder="Doctor Title" {...register("doctorTitle", { required: true })} />
                                {errors.doctorTitle && <span className="text-danger">This field is required</span>}
                            </div>

                            <div className="mb-3">
                                <input className="form-control"  type="text" name="medicalCollege" placeholder="Medical College Name" {...register("medicalCollege", { required: true })} />
                                {errors.medicalCollege && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="mb-3">
                                <input className="form-control" type="number" name="phone" placeholder="Phone Number" {...register("phone", { required: true })} />
                                {errors.phone && <span className="text-danger">This field is required</span>}
                            </div>

                            <div className="mb-3">
                                <input className="form-control" onChange={(e)=>imgUpload(e.target.files)} type="file" name="doctorImage"  />
                            </div>

                            <input className="btn btn-info" type="submit" />
                        </form> 
                </div>
            </div>
        </section>
    );
};

export default AddDoctor;