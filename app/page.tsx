'use client';

import { useState } from 'react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white text-gray-900 transition-colors duration-300">

      {/* Navbar */}
      <header className="fixed top-0 w-full bg-white shadow z-50">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold text-red-700">Bella Vita</h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 font-medium">
            <li><a href="#home" className="hover:text-red-600">Home</a></li>
            <li><a href="#menu" className="hover:text-red-600">Menu</a></li>
            <li><a href="#about" className="hover:text-red-600">About</a></li>
            <li><a href="#reservations" className="hover:text-red-600">Reservations</a></li>
            <li><a href="#contact" className="hover:text-red-600">Contact</a></li>
          </ul>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <span className="text-3xl font-bold">&times;</span> // "X"
            ) : (
              <div className="flex flex-col space-y-1">
                <span className="w-6 h-0.5 bg-black"></span>
                <span className="w-6 h-0.5 bg-black"></span>
                <span className="w-6 h-0.5 bg-black"></span>
              </div>
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow px-6 py-4 space-y-4">
            <a href="#home" className="block hover:text-red-600" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#menu" className="block hover:text-red-600" onClick={() => setIsOpen(false)}>Menu</a>
            <a href="#about" className="block hover:text-red-600" onClick={() => setIsOpen(false)}>About</a>
            <a href="#reservations" className="block hover:text-red-600" onClick={() => setIsOpen(false)}>Reservations</a>
            <a href="#contact" className="block hover:text-red-600" onClick={() => setIsOpen(false)}>Contact</a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="h-screen bg-[url('https://images.unsplash.com/photo-1600891964092-4316c288032e')] bg-cover bg-center relative"
      >
        <div className="bg-black/60 w-full h-full flex flex-col items-center justify-center text-center text-white px-4">
          <h2 className="text-5xl font-bold mb-4">Bella Vita Ristorante</h2>
          <p className="text-xl mb-6">Authentic Italian Cuisine with Passion</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#menu"
              className="px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-semibold rounded"
            >
              View Our Menu
            </a>
            <a
              href="#reservations"
              className="px-6 py-3 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold rounded"
            >
              Make a Reservation
            </a>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Our Menu</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="border rounded-lg overflow-hidden shadow hover:shadow-md transition">
            <img
              src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
              alt="Bruschetta Classica"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold">Bruschetta Classica</h3>
              <p className="text-red-600 font-semibold">$12.00</p>
              <p className="text-gray-600 mt-2">
                Fresh tomatoes, basil, garlic, and olive oil on toasted artisan bread.
              </p>
            </div>
          </div>

          <div className="border rounded-lg overflow-hidden shadow hover:shadow-md transition">
            <img
              src="https://www.foodiecrush.com/wp-content/uploads/2018/06/Antipasto-Salad-Platter-foodiecrush.com-016.jpg"
              alt="Antipasto Misto"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold">Antipasto Misto</h3>
              <p className="text-red-600 font-semibold">$18.00</p>
              <p className="text-gray-600 mt-2">
                Selection of cured meats, cheeses, olives, and marinated vegetables.
              </p>
            </div>
          </div>

          <div className="border rounded-lg overflow-hidden shadow hover:shadow-md transition">
            <img
              src="https://images.unsplash.com/photo-1589302168068-964664d93dc0"
              alt="Pão de Queijo"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold">Pão de Queijo</h3>
              <p className="text-red-600 font-semibold">$8.00</p>
              <p className="text-gray-600 mt-2">
                Famous Brazilian cheese bread made with cassava flour.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-50 px-6 py-20 transition">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 mb-6">
              Welcome to Bella Vita, where authentic Italian traditions come alive in every dish.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://i.pinimg.com/originals/d2/35/47/d2354797cfb995122e8bf0248cb1fd76.png"
              alt="Chef cooking"
              className="rounded-xl shadow-xl w-full max-h-[500px] object-contain bg-gray-200"
            />
            <div className="absolute -top-4 -left-4 w-full h-full border-4 border-red-600 rounded-xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section id="reservations" className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Reserve a Table</h2>
        <form className="bg-white shadow rounded-lg p-8 space-y-6">
          <div>
            <label className="block font-medium mb-1">Full Name</label>
            <input type="text" className="w-full border rounded px-4 py-2" required />
          </div>
          <div>
            <label className="block font-medium mb-1">Email Address</label>
            <input type="email" className="w-full border rounded px-4 py-2" required />
          </div>
          <div>
            <label className="block font-medium mb-1">Phone Number</label>
            <input type="tel" className="w-full border rounded px-4 py-2" required />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block font-medium mb-1">Date</label>
              <input type="date" className="w-full border rounded px-4 py-2" required />
            </div>
            <div>
              <label className="block font-medium mb-1">Time</label>
              <input type="time" className="w-full border rounded px-4 py-2" required />
            </div>
          </div>
          <div>
            <label className="block font-medium mb-1">Number of Guests</label>
            <input type="number" min="1" className="w-full border rounded px-4 py-2" required />
          </div>
          <div>
            <label className="block font-medium mb-1">Special Requests</label>
            <textarea className="w-full border rounded px-4 py-2" rows={3}></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-red-600 text-white font-semibold rounded hover:bg-red-500 transition"
          >
            Confirm Reservation
          </button>
        </form>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-100 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
          <p className="text-gray-700 mb-6">
            📍 123 Main Street, Rome, Italy  
            <br />
            📞 +39 123 456 7890  
            <br />
            ✉️ info@bellavita.com
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-700 text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} Bella Vita. All rights reserved.</p>
      </footer>
    </div>
  );
}
