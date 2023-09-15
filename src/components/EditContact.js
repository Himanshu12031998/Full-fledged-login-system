
import { Button, FormFloating } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const EditContact = () => {

    const {id} =useParams()
    const [data, setData]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:3000/contacts/'+id)
        .then(res=>setData(res.data))
        .catch(err => console.log(err))

    },[])

  const navigate=useNavigate();

  const handleUpdateData=(e)=>{
    e.preventDefault();
    axios.put('http://localhost:3000/contacts/'+id,data)
    .then(res=>{
        toast.success('Update Successfully !')
        navigate('/home')
    })
  }
  const handleBack=()=>{
    navigate('/home')
  }

  return (
    <div className='d-flex flex-column  align-items-center bg-light vh-100 bg-dark'>
        
         <div className='w-30 mt-5 rounded bg-white border shadow p-3'>
         <h3>Edit Contact</h3>
         <Form>
         <Form.Floating className="mb-3">
        <Form.Control
          id="floatingInputCustom"
          type="text"
          value={data.name}
          onChange={(e)=>setData({...data, name: e.target.value})}
        />
        <label htmlFor="floatingInputCustom">Email Name</label>
      </Form.Floating>

      <Form.Floating className="mb-3">
        <Form.Control
          id="floatingInputCustom"
          type="email"
          value={data.email}
          onChange={(e)=>setData({...data, email: e.target.value})}
        />
        <label htmlFor="floatingInputCustom">Email Address</label>
      </Form.Floating>
      <Form.Floating>
        <Form.Control
          id="floatingPasswordCustom"
          type="Number"
          value={data.number}
          onChange={(e)=>setData({...data, number: e.target.value})}
        />
        <label htmlFor="floatingPasswordCustom">Enter Number</label>
      </Form.Floating>
      <FormFloating className='mt-4'>
      <Button variant='primary' onClick={handleBack}>Back</Button> &nbsp;&nbsp;&nbsp;&nbsp;
      <Button variant='danger'onClick={handleUpdateData} >Update</Button>
      </FormFloating>
   
      </Form>
      </div>
    </div>
  );
}

export default EditContact;
