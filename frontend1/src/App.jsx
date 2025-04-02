import React from "react";
import {Routes, Route} from "react-router-dom"
import BookSearch from "./components/booksearch";
import BookDetails from "./components/booksdetail";


export default function App() {
  return (
    <div className="p-3 mb-2 bg-success text-white min-vh-100">
      <h1 className="text-center my-4">Library Management System</h1>
      <div className="d-flex justify-content-center">
        <Routes>
          <Route path="/" element={<BookSearch />} />
          <Route path="/book/:isbn" element={<BookDetails />} />
        </Routes>
      </div>
    </div>
  );
}