export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price?: string;
  spiceLevel?: 'Mild' | 'Medium' | 'Hot' | 'Very Hot';
  isVegetarian?: boolean;
}

export interface MenuSubcategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export interface MenuCategory {
  id: string;
  name: string;
  subcategories: MenuSubcategory[];
}

export const menuData: MenuCategory[] = [
  {
    id: 'veg',
    name: 'Vegetarian',
    subcategories: [
      {
        id: 'veg-starters',
        name: 'Starters',
        items: [
          {
            id: 'paneer-tikka',
            name: 'Paneer Tikka',
            description: 'Grilled cottage cheese with bell peppers and onions',
            price: '£8.95',
            spiceLevel: 'Medium',
            isVegetarian: true
          },
          {
            id: 'veg-spring-roll',
            name: 'Veg Spring Roll',
            description: 'Crispy rolls filled with fresh vegetables',
            price: '£6.95',
            spiceLevel: 'Mild',
            isVegetarian: true
          },
          {
            id: 'samosa',
            name: 'Samosa (2 pieces)',
            description: 'Crispy pastry filled with spiced potatoes and peas',
            price: '£5.95',
            spiceLevel: 'Mild',
            isVegetarian: true
          },
          {
            id: 'onion-bhaji',
            name: 'Onion Bhaji',
            description: 'Deep-fried onion fritters with aromatic spices',
            price: '£6.95',
            spiceLevel: 'Mild',
            isVegetarian: true
          },
          {
            id: 'aloo-tikki',
            name: 'Aloo Tikki',
            description: 'Spiced potato patties served with chutneys',
            price: '£7.95',
            spiceLevel: 'Medium',
            isVegetarian: true
          }
        ]
      },
      {
        id: 'veg-mains',
        name: 'Main Course',
        items: [
          {
            id: 'palak-paneer',
            name: 'Palak Paneer',
            description: 'Cottage cheese in creamy spinach sauce',
            price: '£12.95',
            spiceLevel: 'Mild',
            isVegetarian: true
          },
          {
            id: 'dal-makhani',
            name: 'Dal Makhani',
            description: 'Black lentils simmered in butter and cream',
            price: '£10.95',
            spiceLevel: 'Mild',
            isVegetarian: true
          },
          {
            id: 'aloo-gobi',
            name: 'Aloo Gobi',
            description: 'Cauliflower and potatoes with turmeric and spices',
            price: '£11.95',
            spiceLevel: 'Medium',
            isVegetarian: true
          },
          {
            id: 'chana-masala',
            name: 'Chana Masala',
            description: 'Chickpeas in spiced tomato gravy',
            price: '£10.95',
            spiceLevel: 'Medium',
            isVegetarian: true
          },
          {
            id: 'paneer-makhani',
            name: 'Paneer Makhani',
            description: 'Cottage cheese in rich tomato and butter sauce',
            price: '£13.95',
            spiceLevel: 'Mild',
            isVegetarian: true
          }
        ]
      },
      {
        id: 'veg-breads',
        name: 'Breads',
        items: [
          {
            id: 'naan',
            name: 'Plain Naan',
            description: 'Traditional leavened bread from tandoor',
            price: '£3.95',
            isVegetarian: true
          },
          {
            id: 'garlic-naan',
            name: 'Garlic Naan',
            description: 'Naan bread with fresh garlic and herbs',
            price: '£4.95',
            isVegetarian: true
          },
          {
            id: 'cheese-naan',
            name: 'Cheese Naan',
            description: 'Naan stuffed with melted cheese',
            price: '£5.95',
            isVegetarian: true
          },
          {
            id: 'peshwari-naan',
            name: 'Peshwari Naan',
            description: 'Sweet naan with coconut, almonds, and raisins',
            price: '£5.95',
            isVegetarian: true
          },
          {
            id: 'chapati',
            name: 'Chapati',
            description: 'Thin whole wheat bread',
            price: '£2.95',
            isVegetarian: true
          }
        ]
      },
      {
        id: 'veg-desserts',
        name: 'Desserts',
        items: [
          {
            id: 'gulab-jamun',
            name: 'Gulab Jamun',
            description: 'Sweet dumplings in cardamom syrup',
            price: '£5.95',
            isVegetarian: true
          },
          {
            id: 'rasmalai',
            name: 'Rasmalai',
            description: 'Cottage cheese dumplings in sweetened milk',
            price: '£6.95',
            isVegetarian: true
          },
          {
            id: 'kulfi',
            name: 'Kulfi',
            description: 'Traditional Indian ice cream with pistachios',
            price: '£4.95',
            isVegetarian: true
          },
          {
            id: 'gajar-halwa',
            name: 'Gajar Halwa',
            description: 'Carrot pudding with nuts and cardamom',
            price: '£5.95',
            isVegetarian: true
          }
        ]
      }
    ]
  },
  {
    id: 'non-veg',
    name: 'Non-Vegetarian',
    subcategories: [
      {
        id: 'non-veg-starters',
        name: 'Starters',
        items: [
          {
            id: 'chicken-tikka',
            name: 'Chicken Tikka',
            description: 'Tender chicken pieces marinated in yogurt and spices',
            price: '£9.95',
            spiceLevel: 'Medium',
            isVegetarian: false
          },
          {
            id: 'fish-fry',
            name: 'Fish Fry',
            description: 'Crispy fried fish with South Indian spices',
            price: '£11.95',
            spiceLevel: 'Hot',
            isVegetarian: false
          },
          {
            id: 'seekh-kebab',
            name: 'Seekh Kebab',
            description: 'Minced lamb skewers grilled in tandoor oven',
            price: '£10.95',
            spiceLevel: 'Hot',
            isVegetarian: false
          },
          {
            id: 'chicken-wings',
            name: 'Chicken Wings',
            description: 'Spicy tandoor chicken wings',
            price: '£8.95',
            spiceLevel: 'Hot',
            isVegetarian: false
          },
          {
            id: 'prawn-koliwada',
            name: 'Prawn Koliwada',
            description: 'Crispy fried prawns with curry leaves',
            price: '£12.95',
            spiceLevel: 'Medium',
            isVegetarian: false
          }
        ]
      },
      {
        id: 'non-veg-mains',
        name: 'Main Course',
        items: [
          {
            id: 'butter-chicken',
            name: 'Butter Chicken',
            description: 'Tender chicken in rich, creamy tomato sauce',
            price: '£14.95',
            spiceLevel: 'Mild',
            isVegetarian: false
          },
          {
            id: 'chicken-tikka-masala',
            name: 'Chicken Tikka Masala',
            description: 'Grilled chicken in spiced curry sauce',
            price: '£15.95',
            spiceLevel: 'Medium',
            isVegetarian: false
          },
          {
            id: 'lamb-rogan-josh',
            name: 'Lamb Rogan Josh',
            description: 'Slow-cooked lamb in aromatic Kashmiri spices',
            price: '£17.95',
            spiceLevel: 'Medium',
            isVegetarian: false
          },
          {
            id: 'beef-madras',
            name: 'Beef Madras',
            description: 'South Indian curry with coconut and curry leaves',
            price: '£16.95',
            spiceLevel: 'Hot',
            isVegetarian: false
          },
          {
            id: 'chicken-vindaloo',
            name: 'Chicken Vindaloo',
            description: 'Goan curry with potatoes and vinegar',
            price: '£15.95',
            spiceLevel: 'Very Hot',
            isVegetarian: false
          },
          {
            id: 'fish-curry',
            name: 'Fish Curry',
            description: 'Fresh fish in coconut and tamarind curry',
            price: '£16.95',
            spiceLevel: 'Medium',
            isVegetarian: false
          }
        ]
      },
      {
        id: 'non-veg-biryanis',
        name: 'Biryanis',
        items: [
          {
            id: 'chicken-biryani',
            name: 'Chicken Biryani',
            description: 'Aromatic basmati rice with tender chicken',
            price: '£15.95',
            spiceLevel: 'Medium',
            isVegetarian: false
          },
          {
            id: 'lamb-biryani',
            name: 'Lamb Biryani',
            description: 'Fragrant rice with succulent lamb pieces',
            price: '£17.95',
            spiceLevel: 'Medium',
            isVegetarian: false
          },
          {
            id: 'prawn-biryani',
            name: 'Prawn Biryani',
            description: 'King prawns with spiced basmati rice',
            price: '£18.95',
            spiceLevel: 'Medium',
            isVegetarian: false
          },
          {
            id: 'fish-biryani',
            name: 'Fish Biryani',
            description: 'Fresh fish with aromatic rice and spices',
            price: '£17.95',
            spiceLevel: 'Medium',
            isVegetarian: false
          }
        ]
      }
    ]
  }
];