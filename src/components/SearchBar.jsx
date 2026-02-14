import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search by title or author..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
            />
        </div>
    );
};

export default SearchBar;
