// Data.js
const Data = [
    {
      id: 1,
      label: 'Home',
      children: [],
      level: 0,
    },
    {
      id: 2,
      label: 'Products',
      children: [
        {
          id: 3,
          label: 'Electronics',
          children: [
            {
              id: 4,
              label: 'Mobile Phones',
              children: [],
              level: 2,
            },
            {
              id: 5,
              label: 'Laptops',
              children: [],
              level: 2,
            },
          ],
          level: 1,
        },
        {
          id: 6,
          label: 'Clothing',
          children: [
            {
              id: 7,
              label: 'Men',
              children: [],
              level: 2,
            },
            {
              id: 8,
              label: 'Women',
              children: [],
              level: 2,
            },
          ],
          level: 1,
        },
      ],
      level: 0,
    },
    {
      id: 9,
      label: 'About Us',
      children: [],
      level: 0,
    },
    {
      id: 10,
      label: 'Contact',
      children: [],
      level: 0,
    },
  ];
  
  export default Data;
  