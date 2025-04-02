import express from "express";
import supabase from "../supabase.js";

const router = express.Router();

// Get All Books
router.get("/", async (req, res) => {
    const { data, error } = await supabase.from("books").select("*");
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
});

// Search Books by Title
router.get("/search", async (req, res) => {
    const { title } = req.query;
    if (!title) return res.status(400).json({ error: "Missing title parameter" });

    const { data, error } = await supabase
        .from("books")
        .select("*")
        .ilike("Title", `%${title}%`);

    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
});

// Get single book by ISBN
router.get("/:isbn", async (req, res) => {
    const { isbn } = req.params;
    const { data, error } = await supabase
        .from("books")
        .select("*")
        .eq("ISBN", isbn)
        .single();

    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
});

// Borrow a book by ISBN
router.post("/:isbn/borrow", async (req, res) => {
    const { isbn } = req.params;

    const { data: book, error: fetchError } = await supabase
        .from("books")
        .select("Quantity")
        .eq("ISBN", isbn)
        .single();

    if (fetchError) return res.status(500).json({ error: fetchError.message });
    if (!book || book.Quantity <= 0) {
        return res.status(400).json({ error: "Book is not available" });
    }

    const { error: updateError } = await supabase
        .from("books")
        .update({ Quantity: book.Quantity - 1 })
        .eq("ISBN", isbn);

    if (updateError) return res.status(500).json({ error: updateError.message });
    res.json({ message: "Book borrowed successfully" });
});

export default router;