import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { FaTimes, FaEye, FaEyeSlash } from "react-icons/fa";
import "../styles/Login.css";
// for use this in your project react-bootstrap and react-icons should be install
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleUsernameChange = (e) => {
    setError("");
    const value = e.target.value;
    // below if code is know as regular expression. this is used for validation of username. you can not type another anything except this a-zA-Z0-9@$
    if (/^[a-zA-Z0-9@$]+$/g.test(value)) {
      setUsername(value);
    }
  };

  const handlePasswordChange = (e) => {
    setError("");
    const value = e.target.value;
    setPassword(value);
  };

  // this function is used for clear the username
  const handleClearUsername = () => {
    setUsername("");
  };
  // this function is used for clear the password
  const handleClearPassword = () => {
    setPassword("");
  };
  // this function is used for show and hide the password
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      setError("Both Fields are required!");
    } else if (!/^[a-zA-Z0-9@$]+$/g.test(username)) {
      setError("Invalid username format");
    }
    // this is used for passwrod validation. password should be 10 digits and it should contains one uppercase letter and one lowercase letter and one symbol and one number
    else if (
      !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&]).{10,}$/g.test(password)
    ) {
      setError(
        "Invalid password format. Password must include at least one uppercase letter, one lowercase letter, one symbol, and one number."
      );
    } else {
      setError("");
      alert("Login Successfull!");
    }
  };

  return (
    <Container className="login-container">
      <h2 className="text-center mb-4">Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <div className="input-container">
            <Form.Control
              type="text"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Enter username"
            />
            {username && (
              <FaTimes className="clear-icon" onClick={handleClearUsername} />
            )}
          </div>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <div className="input-container">
            <Form.Control
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter password"
            />
            {password && (
              <FaTimes className="clear-icon" onClick={handleClearPassword} />
            )}
            <span className="eye-icon" onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </Form.Group>
        <Button className="login-btn" variant="primary" type="submit" block>
          Login
        </Button>
        {error && (
          <Alert variant="danger" className="login-btn">
            {error}
          </Alert>
        )}
      </Form>
    </Container>
  );
};
export default Login;
