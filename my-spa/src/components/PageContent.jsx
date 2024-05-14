import React from 'react';
import contentData from '../data/data';
import posts from '../data/postsData';

const PageContent = ({ currentPage }) => {
  const content = contentData[currentPage];

  const renderPosts = () => {
    return posts.map(post => (
      <div key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.summary}</p>
      </div>
    ));
  };

  return (
    <div className="content">
      <h1>{content.title}</h1>
      <p>{content.text}</p>
      {currentPage === 'Home' && renderPosts()}
    </div>
  );
};

export default PageContent;