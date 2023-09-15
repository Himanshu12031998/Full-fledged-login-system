import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import '../styles/Modal.css';
import { NavLink } from 'react-bootstrap';
import { useState } from 'react';
import {  useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



function ChangePassword() {
  const navigate=useNavigate(); 

  const [show, setShow] = useState(true);
  const [oldPassword, setOldPassWord]=useState();
  const [newPassword, setNewPassword]=useState('')
  const [confirmPassword,setConfirmPassword]=useState('')

  const handleClose = () => {
    navigate('/home')
  }

const validation=()=>{
  // if()
}
   

const handleChangePassword=()=>{
  if(validation()){
    console.log('success');
  }else{
    toast.success('plz enter ')
  }

}

  return (
    <div
      className="modal show" style={{ display: 'block', position: 'initial' }}>
      <Modal.Dialog>
        <Modal.Header  id='modal-title'>
          <Modal.Title><h4>Changed Password</h4></Modal.Title>
        </Modal.Header>

        <Modal.Body id="modal-body">
        
      <Form.Floating>
        <Form.Control
          id="floatingPasswordCustom"
          type="password"
          placeholder="Old Password"
          onChange={(e)=>setOldPassWord(e.target.value)}
          
        />
        <label htmlFor="floatingPasswordCustom">Old Password</label>
      </Form.Floating>
     < Form.Floating>
        <Form.Control
          id="floatingPasswordCustom"
          type="password"
          placeholder="New Password"
          onChange={(e)=>setNewPassword(e.target.value)}
         
        />
        <label htmlFor="floatingPasswordCustom">New Password</label>
      </Form.Floating>
     < Form.Floating>
        <Form.Control
          id="floatingPasswordCustom"
          type="password"
          placeholder="Confirm new Password"
          onChange={(e)=>setConfirmPassword(e.target.value)}
         />
        <label htmlFor="floatingPasswordCustom">Confirm new Password</label>
      </Form.Floating>
          
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger" ><NavLink to='/home' onClick={handleClose}>Close</NavLink></Button>
          <Button variant="primary" onClick={handleChangePassword}>Changed</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default ChangePassword;