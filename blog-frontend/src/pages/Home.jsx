import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/posts")
      .then(res => setPosts(res.data))
      .catch(err => console.log(err));
  }, []);

  const deletePost = async (id) => {
    await axios.delete(`http://localhost:5000/api/posts/${id}`);
    setPosts(posts.filter(post => post._id !== id));
  };

  return (
    <div className={styles.container}>
      <h1>Blog Posts</h1>
      {posts.map(post => (
        <div key={post._id} className={styles.card}>
          <h2>{post.title}</h2>
          <p>{post.content.substring(0, 100)}...</p>
          <div className={styles.actions}>
            <Link to={`/view/${post._id}`} className={styles.button}>View</Link>
            <Link to={`/edit/${post._id}`} className={styles.button}>Edit</Link>
            <button onClick={() => deletePost(post._id)} className={`${styles.button} ${styles.delete}`}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
