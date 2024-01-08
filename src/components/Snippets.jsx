import React, { useState } from 'react';

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
      <h1>H1 H2 H3</h1>
      <h2>BIUS</h2>
      <h3>Comments</h3>
      <form onSubmit={addComment}>
        <input type="text" name="content" placeholder="Type your comment" />
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