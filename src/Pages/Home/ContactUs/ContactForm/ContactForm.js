import { Box } from '@mui/system';
import React from 'react';
import axios from 'axios';
import {useForm} from "react-hook-form";
import './ContactForm.css';

const ContactForm = () => {
  const {register, handleSubmit, reset} = useForm();
    const onSubmit = data => {
        console.log(data);
        axios
            .post('', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully');
                    reset();
                }
            })
    }
  return (
    <Box sx={{margin:"50px 0"}}>
      <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="name" type="text" {...register("name", { required: true, maxLength: 40 })} placeholder="Name"/>
                    
                    <input className="email" type="email" {...register("email")} placeholder="Email"/>

                    <input type="text" {...register("sub")} placeholder="Subject"/>

                    <textarea {...register("message")} placeholder="Message"/>
                    
                    <input type="submit"/>
                </form>
    </Box>
  );
};

export default ContactForm;