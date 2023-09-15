
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import {  ToastContainer } from "react-toastify";
import Profile from './components/Profile';
import ChangePassword from './modal/ChangePassword';
import AddContact from './components/AddContact'
import EditContact from './components/EditContact'
import Protected from './components/Protected';



function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
     <Routes>
      <Route path='/' element= {<Login />} />
      <Route path='/register' element={<Register/>} />
      <Route path='/home' element = {<Protected Component={Home} />} />
      <Route path='/profile' element={<Protected Component={Profile} />} />
      <Route path='changePassword' element={<Protected Component={ChangePassword} />} />
      <Route path='addcontact' element={<Protected Component={AddContact} />} />
      <Route path='editcontact/:id' element={<Protected Component={EditContact} />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
