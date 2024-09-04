"use client"

import { useState } from 'react';
import {SearchManifacture} from './';
import Image from 'next/image';
import { useRouter } from "next/navigation";


const SearchButton=({otherClasses}:{otherClasses:string})=>(
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image src="glass.svg" alt="maginifying glass" width={40} height={40} className="object-contain"/>
  </button>
)

const SearchBar = () => {
    
const [manufacturer, setManifacture] = useState('');

const [model, setModel] = useState('');

const router=useRouter();

const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (manufacturer === "" && model === "") {
    return alert("Please provide some input");
  }

  updateSearchParams(model.toLowerCase(),manufacturer.toLowerCase());
};

const updateSearchParams = (model: string, manufacturer: string) => {
  
  const searchParams = new URLSearchParams(window.location.search);

  if (model) {
    searchParams.set("model", model);
  } else {
    searchParams.delete("model");
  }

  
  if (manufacturer) {
    searchParams.set("manufacturer", manufacturer);
  } else {
     searchParams.delete("manufacturer");
  }

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  router.push(newPathname);
};

const handleClick=()=>{}

  return (
    <form className="searchbar" onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchManifacture
            manufacturer={manufacturer}
            setManifacture={setManifacture}
            />
        </div>
        <div className="searchbar__item">
        <Image
          src="/model.png" width={20} height={20} alt="model" className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e)=>setModel(e.target.value)}
          placeholder='Tiguan'
          className="searchbar__input"
        />
        </div>
        <div className="ml-10">
        <SearchButton otherClasses="max-sm:hidden"></SearchButton>
        </div>
    </form>
  )
}

export default SearchBar