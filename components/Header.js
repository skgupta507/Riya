import { useState } from "react";

export default function Header({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <header className="bg-gray-800 text-white py-4 flex justify-between items-center px-4">
      <h1 className="text-3xl font-bold">Anime Stream</h1>
      <form onSubmit={handleSearch} className="flex">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search anime..."
          className="p-2 rounded-l-md border-none focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-700"
        >
          Search
        </button>
      </form>
    </header>
  );
}
