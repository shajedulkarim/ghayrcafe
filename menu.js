/* ghayr menu data.
   Source: in-cafe digital menu at ghair.info (checked 9 Nov 2026). Prices are OMR, as printed on that menu.
   Edit a price here and the site updates. Add `img: "assets/photos/x.jpg"` to an item to show a photo (none are bundled yet). */
const MENU = [
  {
    id: "hot", label: "Hot", ar: "ساخن",
    items: [
      { name: "Espresso", price: 0.6 },
      { name: "Americano", price: 1.0 },
      { name: "Cortado", price: 1.1 },
      { name: "Flat White", price: 1.4 },
      { name: "Cappuccino", price: 1.4 },
      { name: "Café Latte", price: 1.4 },
      { name: "Hot Chocolate", price: 1.4 },
      { name: "Spanish Latte", price: 1.5 },
      { name: "Picolo", price: 1.5 },
      { name: "Ghair Latte", price: 1.7, house: true },
      { name: "Matcha", price: 1.7 }
    ]
  },
  {
    id: "cold", label: "Cold", ar: "بارد",
    items: [
      { name: "Americano", price: 1.0 },
      { name: "Iced Latte", price: 1.4 },
      { name: "Spanish Latte", price: 1.5 },
      { name: "Cream Espresso", price: 1.5 },
      { name: "Matcha", price: 1.7 },
      { name: "Coconut Latte", price: 1.8 },
      { name: "Ghair Frappe", price: 1.8, house: true },
      { name: "Red Velvet Frappe", price: 1.8 },
      { name: "Ghair Ice Shaken", price: 1.8, house: true }
    ]
  },
  {
    id: "brew", label: "Manual brew", ar: "قهوة مقطّرة",
    items: [
      { name: "V60", price: 1.5 },
      { name: "Chemex", price: 1.5 },
      { name: "Cold Brew", price: 1.5 }
    ]
  },
  {
    id: "noncoffee", label: "Non-coffee", ar: "بدون قهوة",
    items: [
      { name: "Water", price: 0.5 },
      { name: "Strawberry", price: 1.5 },
      { name: "Hibiscus", price: 1.5 },
      { name: "Passion", price: 1.5 },
      { name: "Peach Ice Tea", price: 1.5 },
      { name: "Mango Passion", price: 1.6 }
    ]
  },
  {
    id: "icecream", label: "Ice cream", ar: "آيس كريم",
    items: [
      { name: "Pretzel", price: 1.5 },
      { name: "Açaí", price: 2.5 }
    ]
  },
  {
    id: "dessert", label: "Dessert", ar: "حلويات",
    items: [
      { name: "Brownie Bites", price: 1.6 },
      { name: "Cheesecake Berry", price: 1.6 },
      { name: "Éclairs", price: 1.6 },
      { name: "Ghair Cookies", price: 1.7, house: true },
      { name: "Tiramisu", price: 1.7 },
      { name: "Chocolate Cake", price: 1.8 },
      { name: "Choco Pistachio", price: 1.9 },
      { name: "Pecan Cheese Bar", price: 1.9 }
    ]
  }
];
