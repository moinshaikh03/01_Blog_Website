const express = require("express");
const Blog = require("../models/Blog");
const router = express.Router();

// CREATE a blog post
router.post("/", async (req, res) => {
    try {
        const { title, content } = req.body;
        const newBlog = new Blog({ title, content });
        await newBlog.save();
        res.status(201).json(newBlog);
    } catch (err) {
        res.status(500).json({ error: "Failed to create blog post" });
    }
});

// READ all blog posts
router.get("/", async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 });
        res.json(blogs);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch blog posts" });
    }
});

// READ a single blog post
router.get("/:id", async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) return res.status(404).json({ error: "Post not found" });
        res.json(blog);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch blog post" });
    }
});

// UPDATE a blog post
router.put("/:id", async (req, res) => {
    try {
        const { title, content } = req.body;
        const updatedBlog = await Blog.findByIdAndUpdate(
            req.params.id,
            { title, content },
            { new: true }
        );
        if (!updatedBlog) return res.status(404).json({ error: "Post not found" });
        res.json(updatedBlog);
    } catch (err) {
        res.status(500).json({ error: "Failed to update blog post" });
    }
});

// DELETE a blog post
router.delete("/:id", async (req, res) => {
    try {
        const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
        if (!deletedBlog) return res.status(404).json({ error: "Post not found" });
        res.json({ message: "Blog post deleted" });
    } catch (err) {
        res.status(500).json({ error: "Failed to delete blog post" });
    }
});

module.exports = router;
