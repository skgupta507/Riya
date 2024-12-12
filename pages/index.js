import Header from "../components/Header";
import AnimeCard from "../components/AnimeCard";

export default function Home() {
  const animes = [
    { title: "Naruto", image: "/naruto.jpg" },
    { title: "One Piece", image: "/one-piece.jpg" },
    { title: "Attack on Titan", image: "/aot.jpg" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="max-w-4xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {animes.map((anime, index) => (
          <AnimeCard key={index} title={anime.title} image={anime.image} />
        ))}
      </div>
    </div>
  );
}
