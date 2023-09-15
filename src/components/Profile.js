
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Table } from 'react-bootstrap'

const Profile = () => {
    const navigate=useNavigate()
    const back=()=>{
        navigate('/home')
    }
  return (
    <div className='d-flex flex-column  align-items-center vh-100 bg-primary'>
        
        <div className='w-75 rounded bg-white border shadow p-4 mt-4'>
        <h3>Welcome, {JSON.parse(localStorage.getItem("user")).name} </h3>
            <Table className='table table-stipend' variant="dark">
                <thead className='bg-dark' variant="dark">
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Number</td>
                        <td>UseName</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>{JSON.parse(localStorage.getItem("user")).name}</td>
                    <td><td>{JSON.parse(localStorage.getItem("user")).email}</td></td>
                    <td>{JSON.parse(localStorage.getItem("user")).number}</td>
                    <td>{JSON.parse(localStorage.getItem("user")).username}</td>
                    
                    </tr>
                </tbody>
                
            </Table>
            <Button onClick={back} >Back to Home</Button>
        </div>
    </div>
  )
}

export default Profile