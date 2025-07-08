'use client';
import React, { useEffect, useState } from 'react';
import QuoteCard from "../../../components/QuoteCard";
import SearchBar from "../../../components/SearchBar";

export default function Home() {
  const [quotes, setQuotes] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchQuotes() {
      const res = await fetch('/quotes.json');
      const data = await res.json();
      setQuotes(data);
      setFiltered(data.slice(0, 3));
      setLoading(false);
    }
    fetchQuotes();
  }, []);

  const handleSearch = (text) => {
  setQuery(text);

  const lower = text.toLowerCase();

  const filtered = quotes.filter((q) =>
    (q.text?.toLowerCase().includes(lower) ||
     q.author?.toLowerCase().includes(lower))
  );

  setFiltered(filtered.slice(0, 10));
};


  return (
    <main className="max-w-xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4 text-center py-10">Quote Generator</h1>
      <SearchBar query={query} onSearch={handleSearch} />
      {loading ? <p>Loading...</p> : (
        <div className="space-y-4 mt-4">
          {filtered.map((quote, idx) => (
            <QuoteCard key={idx} quote={quote} />
          ))}
        </div>
      )}
    </main>
  );
}