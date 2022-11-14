import { useEffect, useState } from "react";

const useUpdate = id =>{
    const [edit, setEdit] =  useState({});
    useEffect(() => {
        
        const url =`https://service-4bth.onrender.com/service/${id}`;
        fetch(url)
        console.log(url)
        .then(res => res.json())
        .then(data => setEdit(data))

    }, [id])
    return [edit, setEdit]
}

export default useUpdate;