export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-black dark:to-gray-900 text-gray-800 dark:text-gray-100 px-6 py-12">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold">
          Welcome to the <span className="text-black">Quote Generator</span>
        </h1>

        <p className="text-lg leading-relaxed">
          Discover and explore timeless quotes from great thinkers, writers, and creators.
          This app allows you to view random quotes, search by keyword, and get inspired.
        </p>

        <div className="pt-6">
          <a
            href="/search"
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition duration-200"
          >
            Get Inspired →
          </a>
        </div>

        <div className="border-t border-gray-300 dark:border-gray-700 pt-8">
          <h2 className="text-2xl font-semibold mb-2">About Me</h2>
          <p className="text-base leading-relaxed">
            Hi! I'm <strong className="text-black">Saim Virk</strong>, a passionate Computer Science student from FAST-NUCES.
            This quote generator is a part of my Nexium internship project where I explored React, Next.js, and UI libraries like ShadCN.
          </p>
        </div>

        
      </div>
    </main>
  );
}
