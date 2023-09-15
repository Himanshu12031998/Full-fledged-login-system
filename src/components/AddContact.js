

import { Button, FormFloating } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const navigate = useNavigate();

  const submitRegister = (e) => {
    e.preventDefault();
    const allobj = { name, email, number };

    fetch("http://localhost:3000/contacts", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(allobj),
    })
      .then((res) => {
        toast.success("Add Succesfully");
        navigate("/home");
      })
      .catch((err) => {
        toast.error("Failed :" + err.message);
      });
  };

  const handleBack = () => {
    navigate("/home");
  };

  return (
    <div className="d-flex flex-column  align-items-center bg-light vh-100 bg-dark">
      <div className="w-30 mt-5 rounded bg-white border shadow p-3">
        <h3>Add Contact (+)</h3>
        <Form>
          <Form.Floating className="mb-3">
            <Form.Control
              id="floatingInputCustom"
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Your Name"
            />
            <label htmlFor="floatingInputCustom">Enter Name</label>
          </Form.Floating>

          <Form.Floating className="mb-3">
            <Form.Control
              id="floatingInputCustom"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
            />
            <label htmlFor="floatingInputCustom">Email Address</label>
          </Form.Floating>
          <Form.Floating>
            <Form.Control
              id="floatingPasswordCustom"
              type="Number"
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Enter Your Number"
            />
            <label htmlFor="floatingPasswordCustom">Enter Number</label>
          </Form.Floating>
          <FormFloating className="mt-4">
            <Button variant="primary" onClick={handleBack}>
              Back
            </Button>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant="danger" onClick={submitRegister}>
              Update
            </Button>
          </FormFloating>
        </Form>
      </div>
    </div>
  );
};

export default AddContact;
