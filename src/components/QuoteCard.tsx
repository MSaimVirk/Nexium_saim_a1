type Quote = {
  text: string;
  author?: string;
};

export default function QuoteCard({ quote }: { quote: Quote }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 hover:border hover:border-gray-100 dark:bg-black">
      <p className="text-lg italic"> {quote.text} </p>
      <p className="text-right mt-2 font-semibold">— {quote.author || 'Unknown'}</p>
    </div>
  );
}