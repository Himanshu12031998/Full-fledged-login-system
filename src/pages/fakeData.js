
// import React, { useState,useEffect } from "react";
// import axios from "axios";
// import { Container, Form, Button, Alert } from 'react-bootstrap';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { NavLink, useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLogin,setIsLogin]=useState(true);
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState('');

//   const navigate = useNavigate();


//   const handleUsernameChange = (e) => {
//     setError('');
//     const value = e.target.value;
//     // below if code is know as regular expression. this is used for validation of username. you can not type another anything except this a-zA-Z0-9@$
//     if (/^[a-zA-Z0-9@$]+$/g.test(value)) {
//       setUsername(value);
//     }
//   };

//   const handlePasswordChange = (e) => {
//     setError('');
//     const value = e.target.value;
//     setPassword(value);
//   };

//   // this function is used for clear the username
//   const handleClearUsername = () => {
//     setUsername('');
//   };
//  // this function is used for clear the password
//   const handleClearPassword = () => {
//     setPassword('');
//   };
//  // this function is used for show and hide the password
//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

  



//   const precedLogin = (e) => {
//     e.preventDefault();
  
//     // if (validate()) {
//       axios
//         .get("http://localhost:3000/users")
//         .then((response) => {
//           console.log(response.data);
//           response.data.map((item) => {
//             if (item.username === username && item.password === password) {
//               toast.success("login succesfully");
//               localStorage.setItem('login',true);
//               localStorage.setItem('user',JSON.stringify(item))

//               navigate("/home");
//             } else {
//               console.log("incorrect username or paasword");
//               setIsLogin(false);
//             }
//           });
//         })
//         .catch((err) => {
//           toast.error('error')
          
//         });
//     // }


//   };

//   return (
//     <div className="main">
//       <div className="login-container">
//         <h3>Login</h3>
//         <form>
//           <div>
//           <input
//             type="text"
//             placeholder="Enter user ID"
//                value={username}
//               onChange={handleUsernameChange}
//           />
            
//             </div>
//             <div>
//                         <input
            
//             placeholder="Enter Password"
//             type={showPassword ? "text" : "password"}
//             value={password}
//             onChange={handlePasswordChange}
//           />
          
//             <span className="eye-icon" onClick={togglePasswordVisibility}>
//               {showPassword ? <FaEyeSlash /> : <FaEye />}
//             </span>
//             </div>

//           <div>
//           <button
//             type="submit"
//             className="btn btn-primary"
//             onClick={(e) => precedLogin(e)}
//           >
//             Login
//           </button>
//           {error && (
//           <Alert variant="danger" className="login-btn">
//             {error}
//           </Alert>
//         )}
//         </div>
//           <p>
//             if you are new <NavLink to={"/register"}>register</NavLink>
//           </p>
//         </form>
//       </div>
     
//     </div>
//   );
// };

// export default Login;



// add 
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const navigate=useNavigate();

  const submitRegister = (e) => {
    e.preventDefault();
    const allobj = { name, email, number };

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(allobj),
    })
      .then((res) => {
        toast.success("Add Succesfully");
        navigate('/home')
      })
      .catch((err) => {
        toast.error("Failed :" + err.message);
      });
  };
  return (
    <div className="main">
      <div className="register-container">
        <h3>Register</h3>
        <form onSubmit={submitRegister}>
          <input
            type="text"
            placeholder="Enter Name"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="Email"
            placeholder="Enter Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="Number"
            placeholder="Enter Number"
            required
            onChange={(e) => setNumber(e.target.value)}
          />

          <br />
          <Button type="submit">
            Add
          </Button>

        </form>
      </div>

    </div>
  );
};
export default AddContact