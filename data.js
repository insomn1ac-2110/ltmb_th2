// data.js
export const CATEGORIES = [
    {
      id: 1,
      name: 'Fresh Fruits & Vegetable',
      color: '#FFF3EC',
      image: require('./assets/fruit.png'), // đường dẫn ảnh minh họa
    },
    {
      id: 2,
      name: 'Cooking Oil & Ghee',
      color: '#F9F4FF',
      image: require('./assets/oil.png'),
    },
    {
      id: 3,
      name: 'Meat & Fish',
      color: '#E8FFF3',
      image: require('./assets/meat.png'),
    },
    {
      id: 4,
      name: 'Bakery & Snacks',
      color: '#FFF8E6',
      image: require('./assets/bakery.png'),
    },
    {
      id: 5,
      name: 'Dairy & Eggs',
      color: '#E9FAFF',
      image: require('./assets/dairy.png'),
    },
    {
      id: 6,
      name: 'Beverages',
      color: '#FFF3EC',
      image: require('./assets/beverages.png'),
    },
  ];
  
  // Demo sản phẩm
  export const PRODUCTS = {
    6: [
      {
        id: 'p1',
        name: 'Diet Coke',
        volume: '355ml',
        price: '1.99',
        image: require('./assets/diet_coke.png'),
      },
      {
        id: 'p2',
        name: 'Sprite Can',
        volume: '355ml',
        price: '1.99',
        image: require('./assets/sprite_can.png'),
      },
      {
        id: 'p3',
        name: 'Apple & Grape Juice',
        volume: '2L',
        price: '5.99',
        image: require('./assets/juice.png'),
      },
      {
        id: 'p4',
        name: 'Orange Juice',
        volume: '1.5L',
        price: '15.99',
        image: require('./assets/orange_juice.png'),
      },
      {
        id: 'p5',
        name: 'Coca Cola Can',
        volume: '325ml',
        price: '1.99',
        image: require('./assets/coke_can.png'),
      },
      {
        id: 'p6',
        name: 'Pepsi Can',
        volume: '340ml',
        price: '3.99',
        image: require('./assets/pepsi_can.png'),
      },
    ],
    
  };
  