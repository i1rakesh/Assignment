import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { Button, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./FormData.css";


function FormData () {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [PhoneNo, setPhoneNo] = useState('')
  const navigate = useNavigate();
  const handle = () =>{
    localStorage.setItem("Name",name)
    localStorage.setItem("email",email)
    localStorage.setItem("Phone",PhoneNo)
    
    
  }
  const handleSubmit = e => {
    e.preventDefault();
    navigate('Fetch');
  };
  return (
    <div className="container">
      <Card sx={{ borderRadius: 2, padding: 8 }}>
        <h1>Contact Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <TextField required value={name} placeholder="Name" type="text" className="form-control"  onChange={(e)=>setName(e.target.value)}  />
          </div>
          <div className="form-group">
            <label>Email</label>
            <TextField required placeholder="Email" value={email} type="email" className="form-control"  onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <TextField required placeholder="Phone" value={PhoneNo} type="tel" className="form-control" onChange={(e)=>setPhoneNo(e.target.value)} />
          </div>
          <Button sx={{ float: "right" }} onClick={handle} variant="contained" type="submit">
            Submit
          </Button>
        </form>
      </Card>
    </div>
  
  );
 
};
export default FormData;
