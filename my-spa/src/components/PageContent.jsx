import React from 'react';

const PageContent = ({ currentPage }) => {
  const renderContent = () => {
    switch (currentPage) {
      case 'Home':
        return <h1>Home Page</h1>;
      case 'About':
        return <h1>About Us</h1>;
      case 'Contact':
        return <h1>Contact Us</h1>;
      default:
        return <h1>Home Page</h1>;
    }
  };

  return (
    <div>
      {renderContent()}
    </div>
  );
};

export default PageContent;