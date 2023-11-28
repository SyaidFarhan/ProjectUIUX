// Filter.js

import React, { useEffect } from 'react';

const Filter = ({
    query,
    isLoading,
    setQuery,
    selectedFilter,
    setFilter,
    filterRecipes,
}) => {
    const filterOptions = ["All", "Seafood", "Beef", "Other"];

    useEffect(() => {
        // Trigger the filterRecipes function when selectedFilter changes
        filterRecipes();
    }, [selectedFilter, query]);

    return (
        <form>
            <select
                value={selectedFilter}
                onChange={(event) => setFilter(event.target.value)}
                disabled={isLoading}
            >
                {filterOptions.map((option) => (
                    <option key={option} value={option.toLowerCase()}>
                        {option}
                    </option>
                ))}
            </select>
        </form>
    );
};

export default Filter;
