import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  return (
    <nav className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <a className="flex items-center space-x-3">
                <Image 
                  src="/images/cronmiller-crest.png"
                  alt="Cronmiller Crest"
                  width={64} // Specify width
                  height={64} // Specify height
                  className="transform hover:scale-105 transition-transform duration-200"
                />
                <span className="text-white text-xl font-light">cronmiller.net</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
