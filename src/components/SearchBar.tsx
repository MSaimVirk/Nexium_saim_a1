export default function SearchBar({ query, onSearch }) {
  return (
    <input
  type="text"
  value={query}
  onChange={(e) => onSearch(e.target.value)}
  placeholder="Search a quote topic..."
  className="w-full p-2 border rounded shadow-sm transition-all duration-200 hover:border-blue-500 hover:shadow-md"
/>

  );
}
