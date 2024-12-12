import { useState } from "react";
import Header from "../components/Header";
import AnimeCard from "../components/AnimeCard";

export default function Home() {
  const [animes, setAnimes] = useState([
    { title: "Naruto", image: "/naruto.jpg" },
    { title: "One Piece", image: "/one-piece.jpg" },
    { title: "Attack on Titan", image: "/aot.jpg" },
  ]);

  const [filteredAnimes, setFilteredAnimes] = useState(animes);

  const handleSearch = (query) => {
    const filtered = animes.filter((anime) =>
      anime.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredAnimes(filtered);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header onSearch={handleSearch} />
      <div className="max-w-4xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredAnimes.map((anime, index) => (
          <AnimeCard key={index} title={anime.title} image={anime.image} />
        ))}
      </div>
    </div>
  );
}
