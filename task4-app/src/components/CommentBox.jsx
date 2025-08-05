import { useState } from 'react';

const CommentBox = ({ onPost }) => {
  const [text, setText] = useState('');

  const handlePost = () => {
    if (text.trim()) {
      onPost(text);
      setText('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        placeholder="Write a comment..."
        onChange={(e) => setText(e.target.value)}
        data-testid="comment-input"
      />
      <button onClick={handlePost}>Post</button>
    </div>
  );
};

export default CommentBox;
