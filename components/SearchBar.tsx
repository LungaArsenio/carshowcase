"use client"
import { useState } from "react";

import SearchManufacturer from "./SearchManufacturer"

function SearchBar() {
  const [manufacturer, setManufacturer] = useState("");
  // Define the function that will allow me to the input box with suggestions
  const handleSearch = () => { };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={ setManufacturer } />
      </div>
    </form>
  )
}

export default SearchBar
