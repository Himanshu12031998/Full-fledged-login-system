import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {  Table, } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
// import { Button } from 'bootstrap'

const Main = () => {

  const [data, setData]=useState([])
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleShow = (i) =>{ 
    axios.delete('http://localhost:3000/users/'+i)
    .then(res=>{
      setShow(true);
      console.log('hero');
    }).catch(err=>console.log(err))
    
  }
// =============================================================
  /* fetching data from db.json*/ 
useEffect(()=>{
  axios.get("http://localhost:3000/contacts")
  .then(res=> setData(res.data))
  .catch(err=>console.log('error'))
},[])
// =============================================================
const handleDelete=(id)=>{
  // axios.delete('http://localhost:3000/users')
}


  return (
    <div className='d-flex flex-column  align-items-center  vh-90'>
     
      <Button className='m-4'><Link to={'/addcontact'} style={{color:"white", textDecoration:'none'}}>Add Contact</Link></Button>
      <div className='w-75 rounded bg-white border shadow p-4'>
      <Table table table-stipend >


          <thead className='bg-dark'>
            <tr >
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Number</th>
            
            <th>Action</th>
            </tr>

          </thead>
          <tbody>
            {
              data.map((item,index)=>(
                <tr>
                  <td>{index+1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.number}</td>
                  
                  <td>
                    <Button variant='primary' ><Link to={`/editcontact/${item.id}` } style={{color:'white', textDecoration:"none"}}>Edit</Link></Button>  &nbsp;

                    <Button variant="danger" onClick={()=>handleShow(item.id)}>
        Delete
      </Button>
      <Modal show={show} onHide={handleClose}>
      <Modal.Header id='modal-title'>
          <Modal.Title ><h4>Do you want to delete the Contact</h4></Modal.Title>
        </Modal.Header>
        
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>No </Button>
          <Button variant="danger" onClick={handleClose}> Yes</Button>
        </Modal.Footer>
      </Modal>
                  </td>
                </tr>
              ))
            }
            
          </tbody>
      </Table>
      </div>
      
    </div>
  )
}

export default Main