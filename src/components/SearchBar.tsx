'use client'
function SearchBar() {
  return (
    <form 
      role="search"
      className="flex items-center border border-gray-300 rounded-full overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent"
    >
      <input
        type="text"
        placeholder="Search bicycles..."
        aria-label="Search bicycles"
        className="py-2 px-4 outline-none w-full max-w-[200px] sm:max-w-none"
      />
      <button 
        type="submit"
        aria-label="Search"
        className="px-3 py-2 bg-gray-100 hover:bg-gray-200 transition-colors"
      >
        🔍
      </button>
    </form>
  );
}

export default SearchBar;