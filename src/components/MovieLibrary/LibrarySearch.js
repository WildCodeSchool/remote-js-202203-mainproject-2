import React from 'react';
import PropTypes from 'prop-types';

function LibrarySearch({searchResults, handleSearch}) {
    return (
        <fieldset>
            <input type="text" placeholder="The Matrix, Dune, ..." value={searchResults} onChange={handleSearch}/>
        </fieldset>
    );
}

LibrarySearch.propTypes = {
    searchResults: PropTypes.string,
    handleSearch: PropTypes.func
};

export default LibrarySearch;