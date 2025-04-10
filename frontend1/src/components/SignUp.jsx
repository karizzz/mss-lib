import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
export default function SignUp() {
  const navigate = useNavigate();
  const [formErrors,setFormErrors] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreed: false
  });
  const [signupForm, setSignupForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreed: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSignupForm((prev) => ({
      ...prev,
      
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    let errors = {};
  
    if (!signupForm.firstName) errors.firstName = "First Name is required";
    if (!signupForm.lastName) errors.lastName = "Last Name is required";
    if (!signupForm.username) errors.username = "Username is required";
    if (!signupForm.email) errors.email = "Email is required";
    if (!signupForm.password) errors.password = "Password is required";
    if (!signupForm.confirmPassword) errors.confirmPassword = "Confirm Password is required";
    if (signupForm.password !== signupForm.confirmPassword) errors.confirmPassword = "Passwords do not match";
    if (!signupForm.agreed) errors.agreed = "You must agree to the terms";
  
    setFormErrors(errors);
  
    if (Object.keys(errors).length > 0) return;
  
    console.log("Form is valid. Proceeding to Supabase sign-up...");
    // TODO: Supabase sign-up goes here
  };
  


  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        width: "100vw",
      
      }}
    >
      <Link to="/" className="btn btn-light position-absolute" style={{ top: "20px", right: "110px", zIndex: 1000 }}>
  Home
</Link>
<Link to="/login" className="btn btn-light position-absolute" style={{ top: "20px", right: "20px", zIndex: 1000 }}>
  Sign In
</Link>

      <form
        onSubmit={handleSubmit}
        className="p-5"
        style={{
          maxWidth: "420px",
          width: "100%",
          backgroundColor: "#ffffff",
          borderRadius: "16px",
          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h2 className="text-center text-black fw-bold mb-1">Sign Up</h2>
        <p className="text-center text-muted mb-4">Create your account below</p>

        <div className="mb-3">
          <label className="form-label fw-semibold">First Name</label>
          <input
            type="text"
            name="firstName"
            className="form-control"
            placeholder="First Name"
            value={signupForm.firstName}
            onChange={handleChange}
            
          />
          {formErrors.firstName && (
            <small className="text-danger">{formErrors.firstName}</small>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Last Name</label>
          <input
            type="text"
            name="lastName"
            className="form-control"
            placeholder="Last Name"
            value={signupForm.lastName}
            onChange={handleChange}
            
          />
          {formErrors.lastName && (
            <small className="text-danger">{formErrors.lastName}</small>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Username</label>
          <input
            type="text"
            name="username"
            className="form-control"
            placeholder="Username"
            value={signupForm.username}
            onChange={handleChange}
            
          />
          {formErrors.username && (
            <small className="text-danger">{formErrors.username}</small>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email"
            value={signupForm.email}
            onChange={handleChange}
            
          />
          {formErrors.email && (
            <small className="text-danger">{formErrors.email}</small>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            value={signupForm.password}
            onChange={handleChange}
            
          />
          {formErrors.password && (
            <small className="text-danger">{formErrors.password}</small>
          )}
        </div>

        <div className="mb-4">
          <label className="form-label fw-semibold">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            className="form-control"
            placeholder="Confirm Password"
            value={signupForm.confirmPassword}
            onChange={handleChange}
            
          />
          {formErrors.confirmPassword && (
            <small className="text-danger">{formErrors.confirmPassword}</small>
          )}
        </div>
        <button type="submit" className="btn btn-dark w-100 mb-3">
          Sign Up
        </button>

        <p className="text-center text-muted">
          Already have an account?{" "}
          <Link to="/login" className="text-primary fw-semibold">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
}