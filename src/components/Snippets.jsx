import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
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

  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'list', 'link', 'undo', 'redo'],
      [{ 'header': [1, 2, 3] }],
    ],
  };

  return (
    <div>
      <ReactQuill className='react-quill'
        value={editorContent}
        onChange={(value) => setEditorContent(value)}
        modules={modules}
        placeholder="Type your comment"
      />
      <form onSubmit={addComment}>
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
