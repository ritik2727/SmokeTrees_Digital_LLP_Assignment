// src/components/RegistrationForm.js

import React, { useState } from "react";
import axios from 'axios'; // Import Axios
import { toast } from 'react-toastify'; // Import toast

function Form() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/users', { name, address });
      
      if (response.status === 201) {
        console.log('User registered successfully');
        setName('');
        setAddress('')
        toast.success('User registered successfully'); // Show success message
        // Handle success, e.g., redirect to a thank-you page
      } else {
        console.error('Failed to register user');
        // toast.error('User with the same name already exists '); 
        toast.error('Failed to register user'); // Show error message
        // Handle error, e.g., display an error message
      }
    } catch (error) {
      // console.error('Failed to communicate with the server',error);
      toast.error('User with the same name already exists '); // Show network error message
      // Handle network error
    }
  };
  return (
    <div>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" style={{ display: "block", textAlign: "left" }}>
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{
              width: 300,
              height: 20,
              border: "2px solid #61dafb",
              borderRadius: 12,
              padding: 10,
            }}
            placeholder="Enter Name"
          />
        </div>
        <div>
          <label
            htmlFor="name"
            style={{ display: "block", textAlign: "left", marginTop: 10 }}
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            style={{
              width: 300,
              height: 20,
              border: "2px solid #61dafb",
              borderRadius: 12,
              padding: 10,
            }}
            placeholder="Enter Address"
          />
        </div>
        <button
          type="submit"
          style={{
            width: 200,
            height: 40,
            marginTop: 30,
            borderRadius: 10,
            backgroundColor: "#61dafb",
            fontSize: 20,
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Form;
