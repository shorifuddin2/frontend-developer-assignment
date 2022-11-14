import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useUpdate from '../../../hooks/useUpdate';
import { useForm } from "react-hook-form";


const Update = () => {
    const {id }= useParams();
    const [ edit, setEdit]= useUpdate(id)
    const { register, handleSubmit } = useForm();

    const onSubmit = data =>{
        const service={
        body: data.body,
        title: data.title,
        img: data.img,
        }
        fetch(`https://service-4bth.onrender.com/service/${id}`,{
            method: 'PUT',
            headers:{'content-type':'application/json'},
            body: JSON.stringify(service)
        })
        .then(res => res.JSON())
        .then(data => {
            alert('Update Successfully')
        })
        
        

    }

    const [isReload, ]= useState(false)
    useEffect(() => {
        const url = `https://service-4bth.onrender.com/service/${id}`;
        console.log(url)
        fetch(url)
        .then(res => res.json())
        .then(data => setEdit(data))

    }, [isReload])
    return (

        <div className='w-50 mx-auto'>
        <h2>Please add a service</h2>
        <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
            <input className='mb-2' defaultValue={edit.title} placeholder='Title' {...register("title", { required: true, maxLength: 20 })} />
            <textarea className='mb-2'defaultValue={edit.body} placeholder='body' {...register("body")} />
            <input className='mb-2' placeholder='id' type="number" {...register("_id")} />
             <input className='mb-2'defaultValue={edit.img} placeholder='Photo URL' type="text" {...register("img")} /> 
            <input type="submit" value="Add Update" />
        </form>
    </div>
    );
};

export default Update;