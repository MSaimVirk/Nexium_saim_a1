type Quote = {
  text: string;
  author?: string;
};

export default function QuoteCard({ quote }: { quote: Quote }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 border border-gray-200">
      <p className="text-lg italic"> {quote.text} </p>
      <p className="text-right mt-2 font-semibold">— {quote.author || 'Unknown'}</p>
    </div>
  );
}