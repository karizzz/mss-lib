import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BookDetails() {
    const { isbn } = useParams();
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [borrowed, setBorrowed] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5001/api/books/${isbn}`)
            .then(res => res.json())
            .then(setBook)
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, [isbn]);

    const borrowBook = async () => {
        const confirm = window.confirm("Do you want to borrow this book?");
        if (!confirm) return;

        const res = await fetch(`http://localhost:5001/api/books/${isbn}/borrow`, {
            method: "POST"
        });

        const result = await res.json();
        if (res.ok) {
            alert("Book borrowed successfully");
            setBook(prev => ({ ...prev, Quantity: prev.Quantity - 1 }));
            setBorrowed(true);
        } else {
            alert(result.error || "Could not borrow the book");
        }
    };

    if (loading) return <p>Loading book details...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!book) return <p>Book not found</p>;

    return (
        
        <div className="card p-4 shadow-lg">
             {/* Back Button at the Top */}
        <div className="mb-3">
            <button onClick={() => navigate(-1)} className="btn btn-secondary">
                ← Back to Search
            </button>
        </div>
            <h2>{book.Title}</h2>
            <p><strong>Authors:</strong> {book.Authors || "Unknown"}</p>
            <p><strong>Publisher:</strong> {book.Publisher || "Unknown"}</p>
            <p><strong>Published:</strong> {book.Published || "N/A"}</p>
            <p><strong>Pages:</strong> {book.Pages || "N/A"}</p>
            <p><strong>Language:</strong> {book.Language || "N/A"}</p>
            <p><strong>Description:</strong> {book.Description || "No description"}</p>
            <p><strong>Available:</strong> {book.Quantity > 0 ? book.Quantity : "Not Available"}</p>
            <button onClick={borrowBook} className="btn btn-success mt-3" disabled={book.Quantity <= 0 || borrowed}>
                {book.Quantity > 0 ? (borrowed ? "Borrowed" : "Borrow") : "Unavailable"}
            </button>
        </div>
    );
}