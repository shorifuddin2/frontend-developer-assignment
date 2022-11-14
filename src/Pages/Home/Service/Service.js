import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';
import heart from'../../../images/social/heart.svg'
import comment from'../../../images/social/comment.svg'

const Service = ({service}) => {
    const {id, title, body} = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id =>{
        navigate(`/service/${id}`);
    }

    const handelUpdate = (id) =>{
        navigate(`/${id}`);
    }
    return (
        <div className='service'>
            <button onClick={() => navigateToServiceDetail(id)} className='Delete  btn btn-primary'> Details</button>
            <button onClick={() => handelUpdate()} className='Edit btn btn-primary mx-2'>Edit</button>
            <h2>{title}</h2>
            <p> {id}</p>
            <p>{body}</p>
            <img className='w-10 mx-3' src={heart} alt="" />
            <img className='w-10 mx-3' src={comment} alt="" />
        </div>
    );
};

export default Service;