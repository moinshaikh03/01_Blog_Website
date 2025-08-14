import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import styles from "../styles/Form.module.css";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/posts", { title, content });
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
        <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" required />
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
}
