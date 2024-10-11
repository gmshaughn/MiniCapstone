export function Header() {
    return (
      <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 shadow-lg">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-xl">My Website</div>
          <div className="space-x-8">
            <a href="#" className="text-white hover:text-gray-300 transition duration-300">Home</a>
            <a href="#" className="text-white hover:text-gray-300 transition duration-300">Link</a>
          </div>
        </nav>
      </header>
    );
  }