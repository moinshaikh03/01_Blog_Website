import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function EditPost() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // axios.get(`http://localhost:5000/api/posts/${id}`)
    //   .then(res => {
    //     setTitle(res.data.title);
    //     setContent(res.data.content);
    //   });
    axios.get(`https://zero1-blog-website.onrender.com/api/posts/${id}`)
      .then(res => {
        setTitle(res.data.title);
        setContent(res.data.content);
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // await axios.put(`http://localhost:5000/api/posts/${id}`, { title, content });
    await axios.put(`https://zero1-blog-website.onrender.com/api/posts/${id}`, { title, content });
    navigate("/");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Edit Post</h1>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} required />
        <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
        <button type="submit">Update Post</button>
      </form>
    </div>
  );
}
