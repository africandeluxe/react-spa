import React from 'react';
import contentData from '../data';

const PageContent = ({ currentPage }) => {
  const content = contentData[currentPage];

  return (
    <div className="content">
      <h1>{content.title}</h1>
      <p>{content.text}</p>
    </div>
  );
};

export default PageContent;