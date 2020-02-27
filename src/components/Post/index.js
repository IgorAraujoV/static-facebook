import React from 'react';

import profile from '../../assets/my_profile.jpg';
import Comment from '../Comment';
import './style.css'

function Post({ data }) {

  return (
    <div className="post">
      <div className="profile">
        <img src={data.author.avatar} alt="profile"/>
        <div>
          <span className="profileName">{data.author.name}</span>
          <span className="postDate">{data.date}</span>
        </div>
      </div>
      <p>{data.content}</p>
      <hr />

      {data.comments.map(comment =>
        <Comment key={comment.id} data={comment}/>
      )}
    </div>
  );
}

export default Post;
