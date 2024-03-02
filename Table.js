// src/Table.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Table = () => {
  // State variables
  const [data, setData] = useState([]);
  const [sortedColumn, setSortedColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 20;

  // Fetch data from the backend API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/data'); // Replace with your actual backend API endpoint
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that the effect runs only once after the initial render

  // Calculate pagination indexes
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);

  // Sort data based on the selected column and direction
  const sortData = (columnName) => {
    if (sortedColumn === columnName) {
      // If already sorted by the same column, reverse the order
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      // If sorting by a different column, set the new column and default to ascending order
      setSortedColumn(columnName);
      setSortDirection('asc');
    }
  };

  // Perform sorting based on the selected column and direction
  const sortedRecords = currentRecords.sort((a, b) => {
    const aValue = sortedColumn ? a[sortedColumn] : null;
    const bValue = sortedColumn ? b[sortedColumn] : null;

    if (sortDirection === 'asc') {
      return aValue.localeCompare(bValue, undefined, { numeric: true, sensitivity: 'base' });
    } else {
      return bValue.localeCompare(aValue, undefined, { numeric: true, sensitivity: 'base' });
    }
  });

  return (
    <div>
      {/* Render the table with sorted records */}
      <table>
        {/* ... (Same as before) */}
      </table>

      {/* Pagination buttons */}
      <div>
        {/* ... (Same as before) */}
      </div>
    </div>
  );
};

export default Table;
