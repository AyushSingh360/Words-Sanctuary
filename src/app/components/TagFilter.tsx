'use client';

import React from 'react';
import './TagFilter.css';

interface TagFilterProps {
  tags: string[];
  activeTag: string;
  onTagSelect: (tag: string) => void;
}

const TagFilter: React.FC<TagFilterProps> = ({ tags, activeTag, onTagSelect }) => {
  return (
    <div className="tag-filter-container">
      {tags.map((tag) => (
        <button
          key={tag}
          className={`tag-pill ${activeTag === tag ? 'active' : ''}`}
          onClick={() => onTagSelect(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default TagFilter;
