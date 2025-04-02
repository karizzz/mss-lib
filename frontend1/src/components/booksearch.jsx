import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BookSearch() {
    const [query, setQuery] = useState("");
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // to naviagte to different component use , useNavigate

    async function searchBooks() {
        if (!query) {
            return console.log("No search term");
        }

        try {
            setLoading(true);
            setError(null);

            const response = await fetch(`http://localhost:5001/api/books/search?title=${encodeURIComponent(query)}`);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            setResult(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }
    
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            searchBooks();
        }
    };
    
    const viewBookDetails = (isbn) => {
        navigate(`/book/${isbn}`);
    };

    return (
        <div className="card p-4 shadow-lg">
            <h2 className="text-center">Search for a Book</h2>

            <div className="input-group mb-3">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Search for a book"
                    className="form-control"
                />
                <button
                    onClick={searchBooks}
                    className="btn btn-primary"
                >
                    Search
                </button>
            </div>

            {loading && <p className="text-muted">Loading...</p>}
            {error && <p className="text-danger">{error}</p>}

            <div className="mt-4">
                {result.length === 0 && !loading && query && <p>No books found.</p>}
                {result.map((book) => (
                    <div 
                        key={book.ISBN} 
                        className="border p-3 mb-3 rounded cursor-pointer hover-shadow"
                        onClick={() => viewBookDetails(book.ISBN)}
                        
                        style={{ cursor: 'pointer' }}
                    >
                        <h4>{book.Title}</h4>
                        <p><strong>Author:</strong> {book.Authors || "Unknown"}</p>
                        <p><strong>Publisher:</strong> {book.Publisher || "Unknown"}</p>
                        <p><strong>Language:</strong> {book.Language || "Unknown"}</p>
                        <p><strong>Pages:</strong> {book.Pages || "N/A"}</p>
                        <p>
                            <span className={`badge ${book.Quantity > 0 ? 'bg-success' : 'bg-danger'}`}>
                                {book.Quantity > 0 ? 'Available' : 'Not Available'}
                            </span>
                        </p>
                        <button className="btn btn-primary btn-sm">View Details</button>
                    </div>
                ))}
            </div>
        </div>
    );
}