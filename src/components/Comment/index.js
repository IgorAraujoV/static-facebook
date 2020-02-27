import React from 'react'

import profile from '../../assets/my_profile.jpg';
import './style.css';

function Comment({ data }) {
  return (
    <div className="comment">
      <aside>
        <img src={data.author.avatar} alt="profile"/>
      </aside>
      <main>
        <p> <strong>{data.author.name}</strong> {data.content}</p>
      </main>
    </div>
  );
}

export default Comment;
