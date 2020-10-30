import React from "react";

function Search(props) {
  let { findPartName, findFilm } = props;
  return (
    <form action="#" className="films__search search">
      <input
        onChange={findPartName}
        type="text"
        className="search__panel"
        placeholder="Search for a movie..."
      />
      <button onClick={findFilm} className="search__btn">
        Search
      </button>
    </form>
  );
}

export default Search;
