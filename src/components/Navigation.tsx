export default function Navigation() {
    return (
      <nav className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4">
              <a href="/" className="flex items-center space-x-3">
                <img 
                  src="/images/cronmiller-crest.png"
                  alt="Cronmiller Crest"
                  className="h-16 w-auto transform hover:scale-105 transition-transform duration-200"
                />
                <span className="text-white text-xl font-light">cronmiller.net</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }