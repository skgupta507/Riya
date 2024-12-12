export default function AnimeCard({ title, image }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <h2 className="text-lg font-bold p-2">{title}</h2>
    </div>
  );
}
