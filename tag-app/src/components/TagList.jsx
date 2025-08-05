import React, { useMemo } from 'react';

const TagList = ({ tags, filter }) => {
  const filteredTags = useMemo(() => {
    console.log('Filtering tags...');
    return tags.filter(tag => tag.toLowerCase().includes(filter.toLowerCase()));
  }, [tags, filter]);

  return (
    <ul>
      {filteredTags.map((tag, index) => (
        <li key={index}>{tag}</li>
      ))}
    </ul>
  );
};

export default React.memo(TagList);
