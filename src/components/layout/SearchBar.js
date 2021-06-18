import React from 'react';

const SearchBar = () => {
  return (
    <div className="shadow bg-body rounded">
      <nav
        style={{ marginBottom: '30px' }}
        className="navbar navbar-expand-lg navbar-dark bg-primary "
      >
        <div className="container">
          <a className="navbar-brand w-100 m-auto" href="/">
            <i className="bi bi-search"></i>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default SearchBar;
