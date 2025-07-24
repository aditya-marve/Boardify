import React, { useState } from "react";
import axios from "axios";
import "./form.css"; // assuming you want to style this form

const AddStudent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/students", formData);
      if (res.data.success) {
        setSuccessMessage("Student added successfully!");
        setErrorMessage("");
        setFormData({ name: "", email: "", contact: "" });
      } else {
        setErrorMessage("Failed to add student.");
        setSuccessMessage("");
      }
    } catch (err) {
      setErrorMessage("Error: " + err.response?.data?.message || err.message);
      setSuccessMessage("");
    }
  };

  return (
    <div className="form-container">
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter student name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter student email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label>Contact</label>
        <input
          type="text"
          name="contact"
          placeholder="Enter contact number"
          value={formData.contact}
          onChange={handleChange}
          required
        />

        <button type="submit">Add Student</button>
      </form>

      {successMessage && <p className="success-msg">{successMessage}</p>}
      {errorMessage && <p className="error-msg">{errorMessage}</p>}
    </div>
  );
};

export default AddStudent;
