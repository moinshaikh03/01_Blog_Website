import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styles from "../styles/ViewPost.module.css";

export default function ViewPost() {
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    // axios.get(`http://localhost:5000/api/posts/${id}`)
    //   .then(res => setPost(res.data))
    //   .catch(err => console.log(err));
    axios.get(`https://zero1-blog-website.onrender.com/api/posts/${id}`)
      .then(res => setPost(res.data))
      .catch(err => console.log(err));
  }, [id]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.content}>{post.content}</p>
    </div>
  );
}
