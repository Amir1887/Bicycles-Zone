'use client'

import { useRouter } from "next/navigation";
import React from "react";



function SearchBar() {

  const router = useRouter();  
  function handleSearch(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;

    if (name) {
      router.push(`/search?name=${name}`);
    }
  }

  return (
    <form 
      onSubmit={handleSearch}
      role="search"
      className="flex items-center border border-gray-300 rounded-full overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent"
    >
      <input
        type="text"
        name = 'name'
        placeholder="Search bicycles..."
        aria-label="Search bicycles"
        className="py-2 px-4 outline-none w-full max-w-[200px] sm:max-w-none"
      />
      <button 
        type="submit"
        aria-label="Search"
        className="px-3 py-2 cursor-pointer bg-gray-100 hover:bg-gray-200 transition-colors"
      >
        🔍
      </button>
    </form>
  );
}

export default SearchBar;