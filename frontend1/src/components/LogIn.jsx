import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
export default function SignUp() {
  const navigate = useNavigate();

  const [loginForm, setloginForm] = useState({
   
    email: "",
    password: "",
    
  });
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setloginForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  
  const handleLogin = () =>{
    let errors = {};
    if (!loginForm.email){
      errors.email = "Email is required";

    }
    if(!loginForm.password){
      errors.password = "Password is required"
    }
    setFormErrors(errors);

    if (Object.keys(errors).length === 0){
      navigate("/search");
    }
  }

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
        
        className="p-5"
        style={{
          maxWidth: "400px",
          width: "100%",
          backgroundColor: "#ffffff",
          borderRadius: "16px",
          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h2 className="text-center text-black fw-bold mb-2">Sign in</h2>
        <p className="text-center text-muted mb-4">Sign in to get started!</p>

        <div className="mb-3">
          <label className="form-label fw-semibold">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter your email"
            value={loginForm.email}
            onChange={handleChange}
          />
          {formErrors.email && (
            <small className="text-danger">{formErrors.email}</small>
          )}
        </div>

        <div className="mb-4">
          <label className="form-label fw-semibold">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter your password"
            value={loginForm.password}
            onChange={handleChange}
          />
          {formErrors.password && (
            <small className="text-danger">{formErrors.password}</small>
          )}
        </div>

        <button
          type="button"
          className="btn btn-dark w-100 mb-3"
          onClick={() => handleLogin()}
        >
        Sign In
        </button>

        <p className="text-center text-muted mb-0">
          Not a member?{" "}
          <Link to="/signup" className="text-primary fw-semibold">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}