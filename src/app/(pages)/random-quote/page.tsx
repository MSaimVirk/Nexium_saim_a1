"use client";
import { useState, useEffect } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogHeader,
} from "../../../components/ui/alert-dialog";
import { Button } from "../../../components/ui/button";
import React from "react";

const QuoteDisplay = React.memo(function QuoteDisplay({ quote }) {
  return (
    <AlertDialogHeader>
      <AlertDialogTitle>Random Quote</AlertDialogTitle>
      <AlertDialogDescription>
        <p className="text-lg italic mb-2">{quote?.text}</p>
        <p className="text-right font-semibold">— {quote?.author}</p>
      </AlertDialogDescription>
    </AlertDialogHeader>
  );
});

export default function RandomQuote() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    async function fetchQuotes() {
      const res = await fetch("/quotes.json");
      const data = await res.json();
      setQuotes(data);

      const random = data[Math.floor(Math.random() * data.length)];
      setQuote(random);
    }
    fetchQuotes();
  }, []);

  const generateRandomQuote = () => {
    if (quotes.length === 0) return;
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(random);
  };

  return (
    <AlertDialog>
      
      <div className="flex justify-center items-center h-screen">
        <AlertDialogTrigger asChild>
        <Button variant="outline" className="bg-black text-white hover:bg-white hover:text-black px-8 py-8 backdrop-brightness-50 text-lg rounded-xl">Generate Random Quote</Button>
        </AlertDialogTrigger>
      </div>

      <AlertDialogContent>
        {quote && <QuoteDisplay quote={quote} />}
        <AlertDialogFooter>
          <AlertDialogCancel onClick={generateRandomQuote}>Close</AlertDialogCancel>
          <AlertDialogAction asChild>
            <button
                onClick={(e) => {
                e.preventDefault(); // stops auto-closing the dialog
                generateRandomQuote(); // your quote generation logic
                }}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
                Next
            </button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}