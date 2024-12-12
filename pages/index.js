import { useState } from "react";
import Header from "../components/Header";
import AnimeCard from "../components/AnimeCard";
import Pagination from "../components/Pagination";

export default function Home() {
  const animes = [
    { title: "Naruto", image: "/naruto.jpg" },
    { title: "One Piece", image: "/one-piece.jpg" },
    { title: "Attack on Titan", image: "/aot.jpg" },
    // Add more data as needed
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(animes.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const displayedAnimes = animes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header onSearch={() => {}} />
      <div className="max-w-4xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {displayedAnimes.map((anime, index) => (
          <AnimeCard key={index} title={anime.title} image={anime.image} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
