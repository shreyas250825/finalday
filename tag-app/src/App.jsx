import React, { useState, useCallback } from 'react';
import TagList from './components/TagList';
import TagInput from './components/TagInput';

const App = () => {
  const [tags, setTags] = useState(['React', 'JavaScript', 'CSS']);
  const [filter, setFilter] = useState('');
  const [count, setCount] = useState(0); // unrelated state

  const onAddTag = useCallback(
    (newTag) => {
      setTags(prev => [...prev, newTag]);
    },
    [] // memoized
  );

  return (
    <div>
      <h1>Tag Manager</h1>

      <input
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter tags"
      />

      <TagInput onAddTag={onAddTag} />
      <TagList tags={tags} filter={filter} />

      <hr />
      <p>Unrelated state: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default App;
