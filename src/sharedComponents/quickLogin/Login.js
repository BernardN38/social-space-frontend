import React, {useState, useEffect} from "react";
import LoginForm from "./LoginForm";
import {Box} from "@mui/material";
import axios from 'axios';
export default function Login(){
    const [formData,setFormData] = useState({});
    const [loading, setLoading] = useState(false);
    // useEffect(()=>{
    //     console.log(formData);
    // },[formData]);
    return (
        <Box sx={{width:"400px"}}>
            <LoginForm loading={loading} setLoading={setLoading} formData={formData} setFormData={setFormData}/>
        </Box>
    )
}