import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css'; // Import the styles
import './css/Snippets.css';

const Snippets = () => {
  const [comments, setComments] = useState([]);
  const [editorContent, setEditorContent] = useState('');

  const addComment = (event) => {
    event.preventDefault();
    const newComment = { id: Date.now(), content: editorContent };
    setComments([...comments, newComment]);
    setEditorContent('');
  };

  const handleCommand = (command, value = null) => {
    document.execCommand(command, false, value);
  };

  return (
    <div>
      <div className="navbar">
        <button onClick={() => handleCommand('bold')}>B</button>
        <button onClick={() => handleCommand('italic')}>I</button>
        <button onClick={() => handleCommand('underline')}>U</button>
        <button onClick={() => handleCommand('formatBlock', 'h1')}>H1</button>
        <button onClick={() => handleCommand('formatBlock', 'h2')}>H2</button>
        <button onClick={() => handleCommand('formatBlock', 'h3')}>H3</button>
        <button onClick={() => handleCommand('insertUnorderedList')}>List</button>
        <button onClick={() => handleCommand('createLink', prompt('Enter the URL:'))}>Link</button>
        <button onClick={() => handleCommand('undo')}>Undo</button>
        <button onClick={() => handleCommand('redo')}>Redo</button>
        <div className="nav-item">Comments</div>
      </div>
      <form onSubmit={addComment}>
        <div
          contentEditable
          name="content"
          className="editor"
          placeholder="Type your comment"
          onInput={(e) => setEditorContent(e.target.innerHTML)}
        ></div>
        <button className='btn btn-primary commentbtn' type="submit">Add Comment</button>
      </form>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default Snippets;
