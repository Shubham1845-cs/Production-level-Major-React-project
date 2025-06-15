import React,{useState,useEffect} from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


 export default function Protected({children,authentication=true0}) {
   const [loader,setloader]=useState(true);
   const navigate=useNavigate();
   const authStatus=useSelector((state)=>state.auth.status)
   
    useEffect(()=>
    {
        if(authentication && authStatus !==authentication)
        {
            navigate('/login');

        }
        else if(!authentication && authStatus !== authentication)
        {
           navigate('/');

        }
        setloader(false);
    },[authStatus,authentication,navigate])

   
  return loader? <h1>...Loading</h1> :<>{children}</>
}


