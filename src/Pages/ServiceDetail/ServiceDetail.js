import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { _id } = useParams();
    const [service, setServices] = useState({});

    useEffect( () =>{
        const url = `https://service-4bth.onrender.com/service${_id}`;
        console.log(url);
        fetch(url)
        .then(res=> res.json())
        .then(data => setServices(data));

    }, [])

    return (
        <div className='w-50 m-auto'>
            <h2>You are about to book: {service.title}</h2>
            <p>{service.body}</p>
            <div className='text-center'>
                <Link to="/manageService">
                    <button className='btn btn-primary'>Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;