export function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            © 2022 My Website. All Rights Reserved.
          </p>
          <div className="mt-4 space-x-4">
            <a href="#" className="text-white hover:text-gray-400 transition duration-300">Privacy Policy</a>
            <a href="#" className="text-white hover:text-gray-400 transition duration-300">Terms of Service</a>
            <a href="#" className="text-white hover:text-gray-400 transition duration-300">Contact Us</a>
          </div>
        </div>
      </footer>
    );
  }