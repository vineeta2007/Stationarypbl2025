import { Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-yellow-300 via-pink-300 to-purple-400 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-lg">
            <Sparkles className="w-5 h-5 text-pink-500 mr-2" />
            <span className="text-purple-600 font-semibold">Your Creative Journey Starts Here!</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Awesome Stationery for
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Creative Teens
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white mb-10 drop-shadow">
            Discover the coolest pens, notebooks, and art supplies to express yourself and ace your studies!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToProducts}
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 hover:text-purple-700 transition transform hover:scale-105 shadow-xl"
            >
              Shop Now
            </button>
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition transform hover:scale-105"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
