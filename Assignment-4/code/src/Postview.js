import React from 'react';
import React, { useState } from 'react';
import axios from 'axios';
import './Postview.css';


const Postview=()=> {
import logo from './logo.svg';
import camera_icon from "./Images/camera_icon.jpg"
import threedot from "./Images/three-dot.png"
import share_Button from "./Images/shareButton.png"
import like_Button from "./Images/likeButton.png"
const Postview = () => {
  const [posts, setPosts] = useState([])
  React.useEffect(() => {
    axios.get("http://localhost:3004/user")
      .then(res => {
        setPosts(res.data);
      })
  }, [])
  return (
    <div className="site-container">
    <div>
      <div className='top-header'>
        <div className='top-most'>
          <img className='logo' src={logo} alt="logo-1" />
          <h1>InstaClones</h1>
          <div className='camera'>
          <img className='Camera-icon' src={camera_icon} alt="camera" />
          </div>
        </div>
      </div>
      {posts.map((post, idx) => {
        return (
          <div className="post-container">
            <div className='post-container-first'>
              <div className="container-post-details">
                <div className='name-details'>
                <strong>{post.name}</strong>
                <label>{post.location}</label>
                </div>
              <img id="threedot" src={threedot} alt="three-dot" />
              </div>
            </div>
            <div className='post-container-img'>
              <img src={post.PostImage} alt="main-image" width="395" height="320" />
            </div>
            <div className='post-container-third'>
              <div className='first'>
                <div className='like-share-button'>
                  <img  id='like'src={like_Button} alt="like-button" />
                  <img id="share" src={share_Button} alt="share-button" />
                </div>
                <div className='date-post'>
                  <label>{post.date}</label>
                </div>
              </div>
              <div className='like-count'>
                <label>{post.likes} likes</label>
              </div>
              <div className='third'>
                <strong>{post.description}</strong>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default Postview;
  )
}
export default Postview; 


