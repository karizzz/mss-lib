import React from "react";
import {Routes, Route} from "react-router-dom"
import BookSearch from "./components/booksearch";
import BookDetails from "./components/booksdetail";
import SignUp from "./components/SignUp";
import LandingPage from "./components/LandingPage";
import Login from "./components/LogIn";


export default function App() {
  return (
    <div className="p-3 mb-2 bg-success text-white min-vh-100">
      
      <div className="d-flex justify-content-center">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<BookSearch />} />
          <Route path="/book/:isbn" element={<BookDetails />} />
        </Routes>
      </div>
    </div>
  );
}