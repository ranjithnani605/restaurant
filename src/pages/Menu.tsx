import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Menu = () => {
  const [openCategory, setOpenCategory] = useState<string | null>('starters');

  const featuredDishes = [
    {
      name: 'Butter Chicken',
      description: 'Tender chicken in a rich, creamy tomato-based sauce',
      price: '£14.95',
      image: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Lamb Biryani',
      description: 'Aromatic basmati rice with tender lamb and exotic spices',
      price: '£16.95',
      image: 'https://images.pexels.com/photos/13647508/pexels-photo-13647508.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Paneer Tikka',
      description: 'Grilled cottage cheese with bell peppers and onions',
      price: '£12.95',
      image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const menuCategories = [
    {
      id: 'starters',
      name: 'Starters',
      image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=800',
      items: [
        { name: 'Paneer Tikka', description: 'Grilled cottage cheese with bell peppers and onions', price: '£8.95', spice: 'Medium' },
        { name: 'Chicken Tikka', description: 'Tender chicken pieces marinated in yogurt and spices', price: '£9.95', spice: 'Medium' },
        { name: 'Samosa (2 pieces)', description: 'Crispy pastry filled with spiced potatoes and peas', price: '£5.95', spice: 'Mild' },
        { name: 'Onion Bhaji', description: 'Deep-fried onion fritters with aromatic spices', price: '£6.95', spice: 'Mild' },
        { name: 'Seekh Kebab', description: 'Minced lamb skewers grilled in tandoor oven', price: '£10.95', spice: 'Hot' },
        { name: 'Mixed Platter', description: 'Selection of chicken tikka, seekh kebab, and samosa', price: '£14.95', spice: 'Medium' }
      ]
    },
    {
      id: 'mains',
      name: 'Main Courses',
      image: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=800',
      items: [
        { name: 'Butter Chicken', description: 'Tender chicken in rich, creamy tomato sauce', price: '£14.95', spice: 'Mild' },
        { name: 'Chicken Tikka Masala', description: 'Grilled chicken in spiced curry sauce', price: '£15.95', spice: 'Medium' },
        { name: 'Lamb Rogan Josh', description: 'Slow-cooked lamb in aromatic Kashmiri spices', price: '£17.95', spice: 'Medium' },
        { name: 'Beef Madras', description: 'South Indian curry with coconut and curry leaves', price: '£16.95', spice: 'Hot' },
        { name: 'Palak Paneer', description: 'Cottage cheese in creamy spinach sauce', price: '£12.95', spice: 'Mild' },
        { name: 'Dal Makhani', description: 'Black lentils simmered in butter and cream', price: '£10.95', spice: 'Mild' },
        { name: 'Aloo Gobi', description: 'Cauliflower and potatoes with turmeric and spices', price: '£11.95', spice: 'Medium' },
        { name: 'Chicken Vindaloo', description: 'Goan curry with potatoes and vinegar', price: '£15.95', spice: 'Very Hot' }
      ]
    },
    {
      id: 'biryanis',
      name: 'Biryanis & Rice',
      image: 'https://images.pexels.com/photos/13647508/pexels-photo-13647508.jpeg?auto=compress&cs=tinysrgb&w=800',
      items: [
        { name: 'Chicken Biryani', description: 'Aromatic basmati rice with tender chicken', price: '£15.95', spice: 'Medium' },
        { name: 'Lamb Biryani', description: 'Fragrant rice with succulent lamb pieces', price: '£17.95', spice: 'Medium' },
        { name: 'Vegetable Biryani', description: 'Mixed vegetables with saffron rice', price: '£13.95', spice: 'Mild' },
        { name: 'Prawn Biryani', description: 'King prawns with spiced basmati rice', price: '£18.95', spice: 'Medium' },
        { name: 'Pilau Rice', description: 'Fragrant basmati rice with whole spices', price: '£4.95', spice: 'Mild' },
        { name: 'Coconut Rice', description: 'Basmati rice cooked with coconut milk', price: '£5.95', spice: 'Mild' }
      ]
    },
    {
      id: 'breads',
      name: 'Breads',
      image: 'https://images.pexels.com/photos/5560025/pexels-photo-5560025.jpeg?auto=compress&cs=tinysrgb&w=800',
      items: [
        { name: 'Naan', description: 'Traditional leavened bread from tandoor', price: '£3.95', spice: 'None' },
        { name: 'Garlic Naan', description: 'Naan bread with fresh garlic and herbs', price: '£4.95', spice: 'None' },
        { name: 'Cheese Naan', description: 'Naan stuffed with melted cheese', price: '£5.95', spice: 'None' },
        { name: 'Peshwari Naan', description: 'Sweet naan with coconut, almonds, and raisins', price: '£5.95', spice: 'None' },
        { name: 'Chapati', description: 'Thin whole wheat bread', price: '£2.95', spice: 'None' },
        { name: 'Paratha', description: 'Flaky layered bread cooked on griddle', price: '£4.95', spice: 'None' }
      ]
    },
    {
      id: 'desserts',
      name: 'Desserts',
      image: 'https://images.pexels.com/photos/6789045/pexels-photo-6789045.jpeg?auto=compress&cs=tinysrgb&w=800',
      items: [
        { name: 'Gulab Jamun', description: 'Sweet dumplings in cardamom syrup', price: '£5.95', spice: 'None' },
        { name: 'Rasmalai', description: 'Cottage cheese dumplings in sweetened milk', price: '£6.95', spice: 'None' },
        { name: 'Kulfi', description: 'Traditional Indian ice cream with pistachios', price: '£4.95', spice: 'None' },
        { name: 'Gajar Halwa', description: 'Carrot pudding with nuts and cardamom', price: '£5.95', spice: 'None' },
        { name: 'Kheer', description: 'Rice pudding with saffron and almonds', price: '£5.95', spice: 'None' }
      ]
    },
    {
      id: 'beverages',
      name: 'Beverages',
      image: 'https://images.pexels.com/photos/2260806/pexels-photo-2260806.jpeg?auto=compress&cs=tinysrgb&w=800',
      items: [
        { name: 'Masala Chai', description: 'Spiced tea with milk and cardamom', price: '£3.95', spice: 'None' },
        { name: 'Mango Lassi', description: 'Yogurt drink with fresh mango', price: '£4.95', spice: 'None' },
        { name: 'Sweet Lassi', description: 'Traditional sweetened yogurt drink', price: '£3.95', spice: 'None' },
        { name: 'Salt Lassi', description: 'Savory yogurt drink with cumin', price: '£3.95', spice: 'None' },
        { name: 'Fresh Lime Soda', description: 'Refreshing lime with soda water', price: '£3.95', spice: 'None' },
        { name: 'Cobra Beer', description: 'Premium Indian lager beer', price: '£4.95', spice: 'None' }
      ]
    }
  ];

  const getSpiceColor = (spice: string) => {
    switch (spice) {
      case 'Mild': return 'text-green-600';
      case 'Medium': return 'text-yellow-600';
      case 'Hot': return 'text-orange-600';
      case 'Very Hot': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Menu</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Discover authentic Indian flavors crafted with traditional recipes and the finest spices
          </p>
        </div>
      </section>


      {/* Menu Categories */}
      <section className="py-16 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {menuCategories.map((category) => (
              <div key={category.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <h2 className="text-2xl font-bold text-gray-900">{category.name}</h2>
                    </div>
                    {openCategory === category.id ? (
                      <ChevronUp className="h-6 w-6 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-gray-500" />
                    )}
                  </div>
                </button>

                {openCategory === category.id && (
                  <div className="px-6 pb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {category.items.map((item, index) => (
                        <div key={index} className="border-b border-gray-200 pb-4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                            <span className="text-xl font-bold text-green-600">{item.price}</span>
                          </div>
                          <p className="text-gray-600 mb-2">{item.description}</p>
                          {item.spice !== 'None' && (
                            <span className={`text-sm font-medium ${getSpiceColor(item.spice)}`}>
                              Spice Level: {item.spice}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-slide-in-left">Featured Dishes</h2>
            <p className="text-xl text-gray-600 animate-slide-in-right">Discover our most popular and beloved dishes</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDishes.map((dish, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform ${index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'}`}>
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
                  <p className="text-gray-600 mb-4">{dish.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-green-600">{dish.price}</span>
                    <button className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition-colors">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Order?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Reserve your table now for an unforgettable dining experience
          </p>
          <div className="space-x-4">
            <a
              href="/book-table"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Book a Table
            </a>
            <a
              href="/contact"
              className="inline-block bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors"
            >
              Call for Takeaway
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;