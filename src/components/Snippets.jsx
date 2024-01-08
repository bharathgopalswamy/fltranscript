import React, { useState } from 'react';
import './css/Snippets.css';

const Snippets = () => {
 const [comments, setComments] = useState([]);

 const addComment = (event) => {
    event.preventDefault();
    const newComment = { id: Date.now(), content: event.target.elements.content.value };
    setComments([...comments, newComment]);
    event.target.elements.content.value = '';
 };

 return (
    <div>
      <div className="navbar">
        <div className="nav-item">H1 H2 H3</div>
        <div className="nav-item">BIUS</div>
        <div className="nav-item">Comments</div>
      </div>
      <form onSubmit={addComment}>
        <input type="text" name="content"/>
        <button type="submit">Add Comment</button>
      </form>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>{comment.content}</li>
        ))}
      </ul>
    </div>
 );
};

export default Snippets;
