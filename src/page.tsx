export default function Home() {
    return (
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to Cronmiller.net
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Exploring the heritage of the Cronmiller name and sharing cultural recommendations
          </p>
        </section>
  
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Name History</h2>
            <p className="text-gray-600 mb-4">
              Discover the origins and meaning of the Cronmiller name, its German roots,
              and how it spread across the world.
            </p>
            <a 
              href="/name-history" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Learn more about our name →
            </a>
          </div>
  
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Recommendations</h2>
            <p className="text-gray-600 mb-4">
              A curated collection of books, media, and cultural recommendations
              that might interest you.
            </p>
            <a 
              href="/recommendations" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              View recommendations →
            </a>
          </div>
        </div>
      </div>
    );
  }