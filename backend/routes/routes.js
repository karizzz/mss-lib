import express from "express";
import supabase from "../supabase.js";

const router = express.Router();

// Get All Books
router.get("/", async (req, res) => {
    const { data, error } = await supabase.from("books").select("*");

    if (error) return res.status(500).json({ error: error.message });

    res.json(data);
});

//  Search Books by Title 
router.get("/search", async (req, res) => {
    const { title } = req.query;  // Get search term from query params

    if (!title) {
        return res.status(400).json({ error: "Missing title parameter" });
    }

    const { data, error } = await supabase
        .from("books")
        .select("*")
        .ilike("Title", `%${title}%`);

    if (error) return res.status(500).json({ error: error.message });

    res.json(data);
});


// search author
router.get("/author", async (req, res ) => {
    const {author } = req.query
    if (!author) {
        return res.status(400).json({ error: "Missing author parameter" });
    }

    const{ data, error} = await supabase
        .from("books")
        .select("*")
        .ilike("Author", `%${author}%`);

    if (error) return res.status(500).json({ error: error.message });
    res.json(data)
});

export default router;