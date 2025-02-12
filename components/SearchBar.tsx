"use client"
import { useState } from "react";
import React from "react";

import SearchManufacturer from "./SearchManufacturer"
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchButton = ({ otherClasses }: {otherClasses: string}) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      alt="search"
      src="/magnifying-glass.svg"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
)

function SearchBar() {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  //using the router to navigate to the search page
  const router = useRouter();
  //end

  // Define the function that will allow me to the input box with suggestions
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    //prevent from refreshing the page that is the "default behavior"
    e.preventDefault();

    if (manufacturer === '' && model === '') {
      return alert("Please fill in the search bar");
    };

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase())
  }

    const updateSearchParams = (model: string, manufacturer: string) => {
      //form new URL with the new search parameters
      const searchParams = new URLSearchParams(window.location.search);

      if (model) {
        searchParams.set('model', model)
      } else {
        searchParams.delete('model')
      }

      if (manufacturer) {
        searchParams.set("manufacturer", manufacturer)
      } else {
        searchParams.delete("manufacturer")
      }

      const newPathName = `${window.location.pathname}?${searchParams.toString()}`;
      router.push(newPathName);
    }



    return (
      <form className="searchbar" onSubmit={handleSearch}>
        <div className="searchbar__item">
          <SearchManufacturer
            manufacturer={manufacturer}
            setManufacturer={setManufacturer} />
          <SearchButton otherClasses='sm:hidden' />
        </div>
        <div className="searchbar__item">
          <Image
            alt="car model"
            src="/model-icon.png"
            width={25}
            height={25}
            className="absolute w-[20px] h-[20px] ml-4"
          />
          <input
            type="text"
            name="model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            placeholder="Tiguan"
            className="searchbar__input"
          />
          <SearchButton otherClasses="sm:hidden" />
        </div>
        <SearchButton otherClasses="max-sm:hidden" />
      </form>
    )
  }

export default SearchBar
