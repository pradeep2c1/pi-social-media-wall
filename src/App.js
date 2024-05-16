import logo from './logo.svg';
import './App.css';

import MenuBar from './myComponents/MenuBar.js';
import PostForm from './myComponents/PostForm.js';
import PostList from './myComponents/PostList.js';
import { useCallback, useState } from 'react';
import ChatSection from './myComponents/ChatSection.js';

function App() {
  const [posts, setPosts] = useState([]);

  const handlePost = (text) => {
    const newPosts = [text, ...posts];
    setPosts(newPosts);
  };

  const handleDelete = (index) => {
    const updatedPosts = [...posts];
    updatedPosts.splice(index, 1); // Remove the post at the specified index
    setPosts(updatedPosts);
  };

  return (
    <>
      <MenuBar />
      <h1 className="main-heading">My Social Media App</h1>
      <PostForm onPost={handlePost} />
      <PostList posts={posts} onDelete={handleDelete} />
      <ChatSection />
    </>
  );
}

export default App;
