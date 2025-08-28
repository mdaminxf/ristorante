'use client';

import { useState } from 'react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
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

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col space-y-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow px-6 py-4 space-y-4">
            <a href="#home" className="block hover:text-red-600">Home</a>
            <a href="#menu" className="block hover:text-red-600">Menu</a>
            <a href="#about" className="block hover:text-red-600">About</a>
            <a href="#reservations" className="block hover:text-red-600">Reservations</a>
            <a href="#contact" className="block hover:text-red-600">Contact</a>
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

          {/* Desktop Buttons */}
          <div className="">
            <div className="">
              <a
                href="#menu"
                className="px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-semibold"
              >
                View Our Menu
              </a>
              <a
                href="#reservations"
                className="px-6 py-3 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold"
              >
                Make a Reservation
              </a>
            </div>
          </div>
        
        </div>

      </section>

      {/* Menu Section */}
      <section id="menu" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Our Menu</h2>
        <p className="text-center max-w-2xl mx-auto text-lg text-gray-600 mb-12">
          Discover authentic Italian & Brazilian flavors crafted with the finest
          ingredients and traditional recipes passed down through generations.
        </p>

        {/* Menu Items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Italian Items */}
          <div className="border rounded-lg overflow-hidden shadow hover:shadow-md">
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
              <span className="inline-block mt-2 text-sm text-yellow-600">
                ⭐ 4.8 (24 reviews) · Popular
              </span>
            </div>
          </div>

          <div className="border rounded-lg overflow-hidden shadow hover:shadow-md">
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
              <span className="inline-block mt-2 text-sm text-green-600">
                ⭐ 4.7 (31 reviews) · Chef&apos;s Choice
              </span>
            </div>
          </div>

          {/* Brazilian Dishes */}
          <div className="border rounded-lg overflow-hidden shadow hover:shadow-md">
            <img
              src="https://www.foodandwine.com/thmb/B5QANKmaNNND8Y4lwrhztfdTgvI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Moqueca-Brazilian-Seafood-Stew-FT-recipe0519-a44727650702457eadd2e77c751e4eb4.jpg"
              alt="Feijoada"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold">Feijoada</h3>
              <p className="text-red-600 font-semibold">$22.00</p>
              <p className="text-gray-600 mt-2">
                Traditional Brazilian black bean stew with pork and beef.
              </p>
            </div>
          </div>

          <div className="border rounded-lg overflow-hidden shadow hover:shadow-md">
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

          <div className="border rounded-lg overflow-hidden shadow hover:shadow-md">
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.h0yCl-V_eOYE_q1FiFhy3gHaEZ"
              alt="Moqueca de Peixe"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold">Moqueca de Peixe</h3>
              <p className="text-red-600 font-semibold">$28.00</p>
              <p className="text-gray-600 mt-2">
                Brazilian fish stew cooked with coconut milk, peppers, and cilantro.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <a
            href="#"
            className="px-6 py-3 bg-red-600 text-white rounded hover:bg-red-500"
          >
            Download Full Menu
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-50 px-6 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 mb-6">
              Welcome to Bella Vita, where authentic Italian traditions come alive in every dish. Founded in 1985 by the Rossi family, our restaurant has been a cornerstone of Italian hospitality, bringing the warmth and flavors of Italy to your table.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div><p className="text-3xl font-bold text-red-600">40+</p><p className="text-gray-600">Years of Excellence</p></div>
              <div><p className="text-3xl font-bold text-red-600">50k+</p><p className="text-gray-600">Happy Customers</p></div>
              <div><p className="text-3xl font-bold text-red-600">15+</p><p className="text-gray-600">Culinary Awards</p></div>
              <div><p className="text-3xl font-bold text-red-600">4.9</p><p className="text-gray-600">Average Rating</p></div>
            </div>
          </div>
          <img
            src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
            alt="Chef cooking"
            className="rounded-lg shadow"
          />
        </div>
      </section>

      {/* Reservation Form */}
      <section id="reservations" className="px-6 py-20 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Make a Reservation</h2>
        <form className="grid gap-6 bg-white shadow p-8 rounded-lg">
          <input type="text" placeholder="Full Name *" className="border p-3 rounded w-full" />
          <input type="email" placeholder="Email Address *" className="border p-3 rounded w-full" />
          <input type="tel" placeholder="Phone Number" className="border p-3 rounded w-full" />
          <input type="number" placeholder="Number of Guests *" className="border p-3 rounded w-full" />
          <input type="date" className="border p-3 rounded w-full" />
          <input type="time" className="border p-3 rounded w-full" />
          <textarea placeholder="Special Requests" className="border p-3 rounded w-full" />
          <button type="submit" className="px-6 py-3 bg-red-600 text-white rounded hover:bg-red-500">
            Book Table
          </button>
        </form>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50 px-6 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
            <p className="mb-4">📍 123 Little Italy Street, San Francisco, CA 94133, USA</p>
            <p className="mb-2">📞 +1 (555) 123-4567</p>
            <p className="mb-2">✉ info@bellavita.com</p>
            <p className="mb-6">Available daily 11 AM - 11 PM</p>
            <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
            <p>Mon - Thu: 11 AM - 10 PM</p>
            <p>Fri - Sat: 11 AM - 11 PM</p>
            <p>Sun: 12 PM - 9 PM</p>
          </div>
          <form className="bg-white p-8 rounded-lg shadow grid gap-4">
            <input type="text" placeholder="Your Name" className="border p-3 rounded" />
            <input type="email" placeholder="Your Email" className="border p-3 rounded" />
            <input type="text" placeholder="Subject" className="border p-3 rounded" />
            <textarea placeholder="Your Message" className="border p-3 rounded" />
            <button className="px-6 py-3 bg-red-600 text-white rounded hover:bg-red-500">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 px-6 py-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Bella Vita Ristorante</h3>
            <p>Experience the authentic taste of Italy in San Francisco since 1985.</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#menu" className="hover:text-white">Our Menu</a></li>
              <li><a href="#reservations" className="hover:text-white">Reservations</a></li>
              <li><a href="#about" className="hover:text-white">About Us</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Private Events</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-2">Contact Info</h4>
            <p>123 Little Italy Street</p>
            <p>San Francisco, CA 94133</p>
            <p>📞 +1 (555) 123-4567</p>
            <p>✉ info@bellavita.com</p>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-6">
          © 2025 Bella Vita Ristorante. All rights reserved. | 
          <a href="#" className="hover:text-gray-300"> Privacy Policy </a> | 
          <a href="#" className="hover:text-gray-300"> Terms of Service </a>
        </div>
      </footer>
    </div>
  );
}
