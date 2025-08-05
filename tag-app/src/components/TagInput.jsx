import React, { useState } from 'react';

const TagInput = ({ onAddTag }) => {
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim()) {
      onAddTag(input.trim());
      setInput('');
    }
  };

  console.log('Rendering TagInput...');

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a tag"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default React.memo(TagInput);
