import { useState } from 'react';

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Пост 1', likes: 0 },
    { id: 2, title: 'Пост 2', likes: 0 },
    { id: 3, title: 'Пост 3', likes: 0 },
  ]);

  const handleLike = postId => {
    setPosts(prevPosts => prevPosts.map(post => (post.id === postId ? { ...post, likes: post.likes + 1 } : post)));
  };

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>Likes: {post.likes}</p>
            <button onClick={() => handleLike(post.id)}>Like!</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
