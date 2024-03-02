// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// src/SearchAndPaginate.js

import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Pagination from './Pagination';
import Table from './Table';

const SearchAndPaginate = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = (term) => {
    setSearchTerm(term);
    // You may perform search-related actions here
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // You may perform pagination-related actions here
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <Table searchTerm={searchTerm} currentPage={currentPage} />
      <Pagination currentPage={currentPage} totalPages={10} onPageChange={handlePageChange} />
    </div>
  );
};

export default SearchAndPaginate;
