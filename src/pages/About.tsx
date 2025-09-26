import React from 'react';
import { Heart, Users, Award, Clock } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Story</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            A culinary journey that began with a passion for authentic Indian flavors
          </p>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">From India to London</h2>
              <p className="text-lg text-gray-600 mb-6">
                The Indian Feast was born from a simple dream: to share the rich, authentic flavors 
                of Indian cuisine with London. Our founder, Raj Patel, immigrated from Gujarat in 1995 
                with nothing but his grandmother's recipe book and an unwavering passion for cooking.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What started as a small takeaway in East London has grown into one of the city's most 
                beloved Indian restaurants. We've stayed true to our roots while embracing innovation, 
                creating a dining experience that honors tradition while delighting modern palates.
              </p>
              <p className="text-lg text-gray-600">
                Every dish we serve is prepared with the same love and attention that Raj's grandmother 
                taught him, using spices we import directly from India and techniques passed down through 
                generations.
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/4969884/pexels-photo-4969884.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Indian chef cooking"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">28</h3>
              <p className="text-gray-600">Years of Passion</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">50,000+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">15</h3>
              <p className="text-gray-600">Awards Won</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">150+</h3>
              <p className="text-gray-600">Dishes Perfected</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Indian spices market"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Philosophy</h2>
              <p className="text-lg text-gray-600 mb-6">
                At The Indian Feast, we believe that food is more than just sustenance—it's a bridge 
                that connects cultures, creates memories, and brings people together. Our philosophy 
                centers around three core principles:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Authenticity</h4>
                    <p className="text-gray-600">Every recipe is true to its regional origins</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Quality</h4>
                    <p className="text-gray-600">Only the finest ingredients and freshest spices</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Hospitality</h4>
                    <p className="text-gray-600">Treating every guest like family</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The passionate people behind every delicious meal</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/2232/man-person-cute-young.jpg?auto=compress&cs=tinysrgb&w=400"
                alt="Raj Patel"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Raj Patel</h3>
              <p className="text-green-600 mb-2">Founder & Head Chef</p>
              <p className="text-gray-600">Master of traditional Indian cuisine with 28 years of experience</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Priya Sharma"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Priya Sharma</h3>
              <p className="text-yellow-600 mb-2">Sous Chef</p>
              <p className="text-gray-600">Specializes in North Indian delicacies and tandoor cooking</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Amit Kumar"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Amit Kumar</h3>
              <p className="text-orange-600 mb-2">Restaurant Manager</p>
              <p className="text-gray-600">Ensures every dining experience exceeds expectations</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;