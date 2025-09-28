import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, Users, Award, Camera, Quote, CheckCircle } from 'lucide-react';

const Home = () => {
  const galleryImages = [
    'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/13647508/pexels-photo-13647508.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/5560025/pexels-photo-5560025.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/6789045/pexels-photo-6789045.jpeg?auto=compress&cs=tinysrgb&w=800'
  ];

  const testimonials = [
    {
      name: "Sophia L.",
      text: "The best Indian food I've ever had! The flavors were so authentic and the service was outstanding.",
      image: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      name: "James K.",
      text: "A wonderful dining experience. The atmosphere is warm, and the dishes taste like home-cooked meals.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Amelia R.",
      text: "Absolutely loved the butter chicken and naan. Highly recommended for anyone craving Indian cuisine!",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          }}
        >
          <div className="absolute inset-0 w-full h-full bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 w-full">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-in-left">
            The Indian Feast
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-slide-in-right">
            Experience the authentic flavors of India in the heart of London
          </p>
          <div className="space-x-4 animate-slide-in-up">
            <Link
              to="/menu"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors transform hover:scale-105"
            >
              View Menu
            </Link>
            <Link
              to="/book-table"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors transform hover:scale-105"
            >
              Book Table
            </Link>
          </div>
        </div>
      </section>

      {/* Halal Certification Section */}
      <section className="py-12 bg-gradient-to-r from-green-600 to-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-bounce mb-4">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg">
              <CheckCircle className="h-10 w-10 text-green-600 animate-pulse" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-slide-in-left">
            100% HALAL CERTIFIED
          </h2>
          <p className="text-xl text-green-100 mb-6 animate-slide-in-right">
            All our meat is sourced from certified Halal suppliers
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 text-white">
            <div className="flex items-center animate-slide-in-left">
              <div className="w-3 h-3 bg-white rounded-full mr-2 animate-pulse"></div>
              <span className="text-lg font-semibold">Halal Chicken</span>
            </div>
            <div className="flex items-center animate-slide-in-up">
              <div className="w-3 h-3 bg-white rounded-full mr-2 animate-pulse"></div>
              <span className="text-lg font-semibold">Halal Lamb</span>
            </div>
            <div className="flex items-center animate-slide-in-right">
              <div className="w-3 h-3 bg-white rounded-full mr-2 animate-pulse"></div>
              <span className="text-lg font-semibold">Halal Beef</span>
            </div>
          </div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-4 h-4 bg-white bg-opacity-20 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-20 right-20 w-6 h-6 bg-white bg-opacity-20 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-20 left-20 w-5 h-5 bg-white bg-opacity-20 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-10 right-10 w-3 h-3 bg-white bg-opacity-20 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-slide-in-left">Why Choose Us</h2>
            <p className="text-xl text-gray-600 animate-slide-in-right">Experience the difference that makes us special</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center animate-slide-in-left">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Halal</h3>
              <p className="text-gray-600">All our meat is certified Halal for your peace of mind</p>
            </div>
            <div className="text-center animate-slide-in-right">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">5 Star Rating</h3>
              <p className="text-gray-600">Consistently rated as the best Indian restaurant in London</p>
            </div>
            <div className="text-center animate-slide-in-left">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fresh Daily</h3>
              <p className="text-gray-600">All dishes prepared fresh daily with authentic spices</p>
            </div>
            <div className="text-center animate-slide-in-right">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Family Recipes</h3>
              <p className="text-gray-600">Traditional recipes passed down through generations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Camera className="h-8 w-8 text-yellow-600 mr-3" />
              <h2 className="text-4xl font-bold text-gray-900 animate-slide-in-left">Our Gallery</h2>
            </div>
            <p className="text-xl text-gray-600 animate-slide-in-right">A visual feast of our delicious creations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform ${index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'}`}
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <Camera className="h-8 w-8 mx-auto" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 animate-slide-in-up">
            <Link
              to="/menu"
              className="inline-block bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors transform hover:scale-105"
            >
              View Our Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Quote className="h-8 w-8 text-green-600 mr-3" />
              <h2 className="text-4xl font-bold text-gray-900 animate-slide-in-left">What Our Guests Say</h2>
            </div>
            <p className="text-xl text-gray-600 animate-slide-in-right">Real experiences from our valued customers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-green-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow ${index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'}`}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 border-2 border-green-500"
                  />
                  <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;