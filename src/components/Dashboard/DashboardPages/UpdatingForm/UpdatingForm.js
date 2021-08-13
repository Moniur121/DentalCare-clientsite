import Modal from 'react-modal';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
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
const UpdatingForm = ({ modalIsOpen, closeModal, id }) => {
    const {phone} =id
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        closeModal()
        data.preventDefault();
    }
   

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="text-info text-center p-3">Updating Prescription</h3>
                    <div className="form-group mb-2">
                        <select className="form-control" name="update" required  {...register("update", { required: true })}   >
                            <option disabled={true} value="Not set">Select Action</option>
                            <option value="view">view</option>
                            <option value="not added">Not Added</option> 
                        </select>
                        {errors.update && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="form-group text-right">
                        <button  type="submit" className="btn btn-success">Update</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default UpdatingForm;