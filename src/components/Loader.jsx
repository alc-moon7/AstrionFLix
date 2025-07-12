import React from 'react';

const Loader = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="loader" id="loader">
      <div className="spinner"></div>
    </div>
  );
};

export default Loader;
