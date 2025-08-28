'use client';

import { useState } from 'react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">

        {/* Navbar */}
        <header className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow z-50">
          <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
            <h1 className="text-2xl font-bold text-red-700 dark:text-red-400">
              Bella Vita
            </h1>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-8 font-medium">
              <li><a href="#home" className="hover:text-red-600 dark:hover:text-red-400">Home</a></li>
              <li><a href="#menu" className="hover:text-red-600 dark:hover:text-red-400">Menu</a></li>
              <li><a href="#about" className="hover:text-red-600 dark:hover:text-red-400">About</a></li>
              <li><a href="#reservations" className="hover:text-red-600 dark:hover:text-red-400">Reservations</a></li>
              <li><a href="#contact" className="hover:text-red-600 dark:hover:text-red-400">Contact</a></li>
            </ul>

            {/* Theme Toggle + Mobile Hamburger */}
            <div className="flex items-center space-x-4">
              
              <button
                className="md:hidden flex flex-col space-y-1"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="w-6 h-0.5 bg-black dark:bg-white"></span>
                <span className="w-6 h-0.5 bg-black dark:bg-white"></span>
                <span className="w-6 h-0.5 bg-black dark:bg-white"></span>
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden bg-white dark:bg-gray-900 shadow px-6 py-4 space-y-4">
              <a href="#home" className="block hover:text-red-600 dark:hover:text-red-400">Home</a>
              <a href="#menu" className="block hover:text-red-600 dark:hover:text-red-400">Menu</a>
              <a href="#about" className="block hover:text-red-600 dark:hover:text-red-400">About</a>
              <a href="#reservations" className="block hover:text-red-600 dark:hover:text-red-400">Reservations</a>
              <a href="#contact" className="block hover:text-red-600 dark:hover:text-red-400">Contact</a>
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

            {/* Responsive Buttons */}
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
          <p className="text-center max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 mb-12">
            Discover authentic Italian & Brazilian flavors crafted with the finest
            ingredients and traditional recipes passed down through generations.
          </p>

          {/* Menu Items */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border dark:border-gray-700 rounded-lg overflow-hidden shadow hover:shadow-md transition">
              <img
                src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
                alt="Bruschetta Classica"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold">Bruschetta Classica</h3>
                <p className="text-red-600 font-semibold">$12.00</p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Fresh tomatoes, basil, garlic, and olive oil on toasted artisan bread.
                </p>
              </div>
            </div>

            <div className="border dark:border-gray-700 rounded-lg overflow-hidden shadow hover:shadow-md transition">
              <img
                src="https://www.foodiecrush.com/wp-content/uploads/2018/06/Antipasto-Salad-Platter-foodiecrush.com-016.jpg"
                alt="Antipasto Misto"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold">Antipasto Misto</h3>
                <p className="text-red-600 font-semibold">$18.00</p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Selection of cured meats, cheeses, olives, and marinated vegetables.
                </p>
              </div>
            </div>

            <div className="border dark:border-gray-700 rounded-lg overflow-hidden shadow hover:shadow-md transition">
              <img
                src="https://images.unsplash.com/photo-1589302168068-964664d93dc0"
                alt="Pão de Queijo"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold">Pão de Queijo</h3>
                <p className="text-red-600 font-semibold">$8.00</p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Famous Brazilian cheese bread made with cassava flour.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-gray-50 dark:bg-gray-800 px-6 py-20 transition">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Welcome to Bella Vita, where authentic Italian traditions come alive in every dish.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://i.pinimg.com/originals/d2/35/47/d2354797cfb995122e8bf0248cb1fd76.png"
                alt="Chef cooking"
                className="rounded-xl shadow-xl w-full max-h-[500px] object-contain bg-gray-200 dark:bg-gray-700"
              />
              <div className="absolute -top-4 -left-4 w-full h-full border-4 border-red-600 rounded-xl -z-10"></div>
            </div>
          </div>
        </section>

 {/* Reservation Form */}
<section
  id="reservations"
  className="relative bg-[url('https://scdn.aro.ie/Sites/50/imperialhotels2022/uploads/images/FullLengthImages/Large/SB12129735_Bedford_Hotel_Interior__Reception._4500x3000.jpg')] bg-cover bg-center py-20 px-4"
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/70"></div>

  <div className="relative max-w-3xl mx-auto text-white">
    <h2 className="text-4xl font-bold text-center mb-8">Make a Reservation</h2>
    <form className="grid gap-6 bg-white/95 dark:bg-gray-800 shadow-lg p-8 rounded-xl text-gray-800 dark:text-gray-100">
      
      {/* Name + Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          placeholder="Full Name *"
          className="border border-gray-300 dark:border-gray-600 p-3 rounded-lg w-full dark:bg-gray-900"
          required
        />
        <input
          type="email"
          placeholder="Email Address *"
          className="border border-gray-300 dark:border-gray-600 p-3 rounded-lg w-full dark:bg-gray-900"
          required
        />
      </div>

      {/* Phone + Guests */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="tel"
          placeholder="Phone Number"
          className="border border-gray-300 dark:border-gray-600 p-3 rounded-lg w-full dark:bg-gray-900"
        />
        <input
          type="number"
          placeholder="Number of Guests *"
          min="1"
          className="border border-gray-300 dark:border-gray-600 p-3 rounded-lg w-full dark:bg-gray-900"
          required
        />
      </div>

      {/* Date + Time */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="date"
          className="border border-gray-300 dark:border-gray-600 p-3 rounded-lg w-full dark:bg-gray-900"
          required
        />
        <input
          type="time"
          className="border border-gray-300 dark:border-gray-600 p-3 rounded-lg w-full dark:bg-gray-900"
          required
        />
      </div>

      {/* Occasion */}
      <div>
        <label className="block mb-2 font-semibold">Occasion</label>
        <select
          className="border border-gray-300 dark:border-gray-600 p-3 rounded-lg w-full dark:bg-gray-900"
        >
          <option>Casual Dining</option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Business Meeting</option>
          <option>Other</option>
        </select>
      </div>

      {/* Seating Preference */}
      <div>
        <p className="font-semibold mb-2">Preferred Seating</p>
        <div className="flex gap-6">
          <label className="flex items-center gap-2">
            <input type="radio" name="seating" value="indoor" className="accent-red-600" />
            Indoor
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="seating" value="outdoor" className="accent-red-600" />
            Outdoor
          </label>
        </div>
      </div>

      {/* Allergies */}
      <textarea
        placeholder="Allergies / Dietary Restrictions"
        className="border border-gray-300 dark:border-gray-600 p-3 rounded-lg w-full h-20 dark:bg-gray-900"
      />

      {/* Special Requests */}
      <textarea
        placeholder="Special Requests"
        className="border border-gray-300 dark:border-gray-600 p-3 rounded-lg w-full h-20 dark:bg-gray-900"
      />

      {/* Newsletter */}
      <label className="flex items-center gap-2">
        <input type="checkbox" className="accent-red-600" />
        Subscribe to our newsletter
      </label>

      <button
        type="submit"
        className="w-full py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-500 transition duration-300"
      >
        Book Table
      </button>
    </form>
  </div>
</section>


        {/* Contact Section */}
        <section id="contact" className="bg-gray-50 dark:bg-gray-800 px-6 py-20 transition">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
              <p>📍 123 Little Italy Street, San Francisco</p>
              <p>📞 +1 (555) 123-4567</p>
            </div>
            <form className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow grid gap-4">
              <input type="text" placeholder="Your Name" className="border p-3 rounded dark:bg-gray-800 dark:border-gray-600" />
              <input type="email" placeholder="Your Email" className="border p-3 rounded dark:bg-gray-800 dark:border-gray-600" />
              <textarea placeholder="Your Message" className="border p-3 rounded dark:bg-gray-800 dark:border-gray-600" />
              <button className="px-6 py-3 bg-red-600 text-white rounded hover:bg-red-500">Send Message</button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 px-6 py-8">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Bella Vita</h3>
              <p>Experience authentic Italian taste since 1985.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-2">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#menu" className="hover:text-white">Our Menu</a></li>
                <li><a href="#reservations" className="hover:text-white">Reservations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-2">Contact Info</h4>
              <p>📍 San Francisco</p>
              <p>📞 +1 (555) 123-4567</p>
            </div>
          </div>
          <div className="text-center text-gray-500 mt-6">
            © 2025 Bella Vita. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}
