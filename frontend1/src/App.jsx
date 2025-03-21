import React from "react";
import BookSearch from "./components/booksearch";

export default function App() {
  return (
    <div className="p-3 mb-2 bg-success text-white min-vh-100">
      <h1 className="text-center my-4">Library Management System</h1>
      <div className="d-flex justify-content-center">
        <BookSearch />
      </div>
    </div>
  );
}