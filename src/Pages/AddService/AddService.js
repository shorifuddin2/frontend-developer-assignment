import React from 'react';
import { useForm } from "react-hook-form";


const AddService = () => {
    const { register, handleSubmit } = useForm();
    
    const onSubmit = data => {
        console.log(data);
        const url = `https://service-4bth.onrender.com/service/`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result =>{
            console.log(result);
        } )
    };


    return (
        <div className='w-50 mx-auto'>
            <h2>Please add a service</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Title' {...register("title", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='body' {...register("body")} />
                <input className='mb-2' placeholder='id' type="number" {...register("_id")} />
                 <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} /> 
                <input type="submit" value="Add Service" />
            </form>
        </div>
    );
};

export default AddService;