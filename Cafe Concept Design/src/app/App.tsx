import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Coffee, Book, Sparkles, MapPin, Clock } from 'lucide-react';

export default function App() {
  const beverages = [
    { name: 'Swiss Blend Espresso', price: 'CHF 4.50', description: 'Rich, smooth espresso from locally roasted beans' },
    { name: 'Alpine Cappuccino', price: 'CHF 5.50', description: 'Creamy cappuccino with house-made milk foam art' },
    { name: 'Literary Latte', price: 'CHF 6.00', description: 'Classic latte with your choice of flavored syrups' },
    { name: 'Philosopher\'s Mocha', price: 'CHF 6.50', description: 'Dark chocolate mocha for deep contemplation' },
    { name: 'Tea Selection', price: 'CHF 4.00', description: 'Curated collection of Swiss and international teas' },
    { name: 'Hot Chocolate', price: 'CHF 5.00', description: 'Rich Swiss chocolate with whipped cream' },
  ];

  const snacks = [
    { name: 'Fresh Croissants', price: 'CHF 3.50' },
    { name: 'Chocolate Cookies', price: 'CHF 2.50' },
    { name: 'Swiss Cheese Sandwich', price: 'CHF 8.00' },
    { name: 'Seasonal Cake Slice', price: 'CHF 5.50' },
    { name: 'Granola Bowl', price: 'CHF 7.00' },
  ];

  return (
    <div className="size-full overflow-y-auto bg-[#f8f6f3]">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-[#8b7355] to-[#5d4e37] text-white">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758609054061-5576a5e4e373?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Coffee and books"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <div className="flex justify-center mb-6">
            <Coffee className="w-16 h-16 mb-4" />
          </div>
          <h1 className="text-6xl md:text-8xl mb-6 font-serif">Brewd for Thoughts</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">Where Coffee Meets Literature</p>
          <p className="text-lg max-w-2xl mx-auto opacity-80">
            A Swiss haven for book lovers and coffee enthusiasts. Take a break, sip your customized beverage, and lose yourself in a good book.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl mb-6 text-[#5d4e37]">A Sanctuary for the Mind</h2>
              <p className="text-lg mb-4 text-gray-700 leading-relaxed">
                Nestled in the heart of Switzerland, Brewd for Thoughts is more than just a café—it's a refuge for those seeking solace in the pages of a good book and the warmth of a perfect cup of coffee.
              </p>
              <p className="text-lg mb-4 text-gray-700 leading-relaxed">
                Our walls are lined with carefully curated books spanning every genre imaginable. Whether you're here for an hour or an afternoon, you'll find the perfect reading companion.
              </p>
              <div className="flex gap-8 mt-8">
                <div className="flex items-start gap-3">
                  <Book className="w-6 h-6 text-[#8b7355] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Extensive Library</h3>
                    <p className="text-sm text-gray-600">Over 2,000 books to explore</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-[#8b7355] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Custom Creations</h3>
                    <p className="text-sm text-gray-600">Personalized beverages & cups</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1750040970096-31907e42d6a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Cozy cafe interior"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customization Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-[#5d4e37]">Your Coffee, Your Way</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every beverage is crafted to your preferences. Choose your milk, sweetness level, temperature, and even customize your cup with artwork or quotes.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-6 rounded-2xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1774529239747-125d7a0bf928?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                  alt="Latte art"
                  className="w-full h-64 object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#5d4e37]">Artisan Latte Art</h3>
              <p className="text-gray-600">Each cup is a canvas for our baristas</p>
            </div>
            <div className="text-center">
              <div className="mb-6 rounded-2xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1630040995437-80b01c5dd52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                  alt="Coffee cup"
                  className="w-full h-64 object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#5d4e37]">Custom Blends</h3>
              <p className="text-gray-600">Tailored to your taste preferences</p>
            </div>
            <div className="text-center">
              <div className="mb-6 rounded-2xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1622868300874-0a1c2a9458fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                  alt="Specialty coffee"
                  className="w-full h-64 object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#5d4e37]">Personalized Cups</h3>
              <p className="text-gray-600">Add your favorite literary quote</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-12 text-center text-[#5d4e37]">Our Menu</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Beverages */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[#8b7355] flex items-center gap-2">
                <Coffee className="w-6 h-6" />
                Beverages
              </h3>
              <div className="space-y-6">
                {beverages.map((item, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-lg text-gray-800">{item.name}</h4>
                      <span className="text-[#8b7355] font-semibold">{item.price}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Snacks */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[#8b7355] flex items-center gap-2">
                <Sparkles className="w-6 h-6" />
                Snacks & Treats
              </h3>
              <div className="space-y-6">
                {snacks.map((item, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4">
                    <div className="flex justify-between items-start">
                      <h4 className="font-semibold text-lg text-gray-800">{item.name}</h4>
                      <span className="text-[#8b7355] font-semibold">{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-[#8b7355] text-white rounded-xl">
                <h4 className="font-semibold mb-2">Pair Your Book with a Snack</h4>
                <p className="text-sm opacity-90">Ask our staff for reading recommendations that match your chosen treat!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Library Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1761319114809-c5671e385a4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Bookshelf"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl mb-6 text-[#5d4e37]">Our Library</h2>
              <p className="text-lg mb-4 text-gray-700 leading-relaxed">
                Every corner of Brewd for Thoughts is lined with bookshelves housing classics, contemporary fiction, poetry, philosophy, travel guides, and more.
              </p>
              <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                Feel free to browse, take a book to your table, and immerse yourself. All books are available for in-café reading, and some are even available for purchase.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Book className="w-5 h-5 text-[#8b7355] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Fiction, Non-fiction, Poetry & More</span>
                </li>
                <li className="flex items-start gap-3">
                  <Book className="w-5 h-5 text-[#8b7355] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Monthly Book Club Meetings</span>
                </li>
                <li className="flex items-start gap-3">
                  <Book className="w-5 h-5 text-[#8b7355] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Author Events & Readings</span>
                </li>
                <li className="flex items-start gap-3">
                  <Book className="w-5 h-5 text-[#8b7355] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Book Exchange Program</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#5d4e37] to-[#8b7355] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-8">Visit Us</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="opacity-90">Bahnhofstrasse 42</p>
              <p className="opacity-90">8001 Zürich, Switzerland</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-8 h-8 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Hours</h3>
              <p className="opacity-90">Monday - Friday: 7:00 AM - 10:00 PM</p>
              <p className="opacity-90">Saturday - Sunday: 8:00 AM - 11:00 PM</p>
            </div>
          </div>
          <p className="text-lg opacity-90 mb-6">
            Whether you're seeking inspiration, relaxation, or just a quiet moment with a great book and exceptional coffee, we're here for you.
          </p>
          <p className="text-xl font-serif italic">"A book and a brew, brewed for you."</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-[#3d2f23] text-white text-center">
        <p className="opacity-80">© 2026 Brewd for Thoughts. All rights reserved.</p>
        <p className="opacity-60 text-sm mt-2">Crafted with love in Switzerland</p>
      </footer>
    </div>
  );
}