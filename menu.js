/* ghayr menu data.
   Source: in-cafe digital menu at ghair.info (checked 9 Nov 2026). Prices are OMR, as printed on that menu.
   Edit a price here and the site updates. `img` shows a photo thumbnail (assets/photos, cropped from the cafe photos with sips). */
const MENU = [
  {
    id: "hot", label: "Hot", ar: "ساخن",
    items: [
      { name: "Espresso", price: 0.6 },
      { name: "Americano", price: 1.0, img: "assets/photos/hot-americano.jpg" },
      { name: "Cortado", price: 1.1 },
      { name: "Flat White", price: 1.4 },
      { name: "Cappuccino", price: 1.4 },
      { name: "Café Latte", price: 1.4 },
      { name: "Hot Chocolate", price: 1.4, img: "assets/photos/hot-chocolate.jpg" },
      { name: "Spanish Latte", price: 1.5, img: "assets/photos/hot-spanish-latte.jpg" },
      { name: "Picolo", price: 1.5, img: "assets/photos/hot-picolo.jpg" },
      { name: "Ghair Latte", price: 1.7, house: true, img: "assets/photos/hot-ghair-latte.jpg" },
      { name: "Matcha", price: 1.7 }
    ]
  },
  {
    id: "cold", label: "Cold", ar: "بارد",
    items: [
      { name: "Americano", price: 1.0, img: "assets/photos/cold-americano.jpg" },
      { name: "Iced Latte", price: 1.4 },
      { name: "Spanish Latte", price: 1.5 },
      { name: "Cream Espresso", price: 1.5, img: "assets/photos/cold-cream-espresso.jpg" },
      { name: "Matcha", price: 1.7, img: "assets/photos/cold-matcha.jpg" },
      { name: "Coconut Latte", price: 1.8 },
      { name: "Ghair Frappe", price: 1.8, house: true, img: "assets/photos/cold-ghair-frappe.jpg" },
      { name: "Red Velvet Frappe", price: 1.8 },
      { name: "Ghair Ice Shaken", price: 1.8, house: true }
    ]
  },
  {
    id: "brew", label: "Manual brew", ar: "قهوة مقطّرة",
    items: [
      { name: "V60", price: 1.5, img: "assets/photos/brew-v60.jpg" },
      { name: "Chemex", price: 1.5 },
      { name: "Cold Brew", price: 1.5 }
    ]
  },
  {
    id: "noncoffee", label: "Non-coffee", ar: "بدون قهوة",
    items: [
      { name: "Water", price: 0.5 },
      { name: "Strawberry", price: 1.5, img: "assets/photos/non-strawberry.jpg" },
      { name: "Hibiscus", price: 1.5, img: "assets/photos/non-hibiscus.jpg" },
      { name: "Passion", price: 1.5, img: "assets/photos/non-passion.jpg" },
      { name: "Peach Ice Tea", price: 1.5 },
      { name: "Mango Passion", price: 1.6, img: "assets/photos/non-mango-passion.jpg" }
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
      { name: "Brownie Bites", price: 1.6, img: "assets/photos/dessert-brownie-bites.jpg" },
      { name: "Cheesecake Berry", price: 1.6, img: "assets/photos/dessert-cheesecake-berry.jpg" },
      { name: "Éclairs", price: 1.6, img: "assets/photos/dessert-eclairs.jpg" },
      { name: "Ghair Cookies", price: 1.7, house: true, img: "assets/photos/dessert-ghair-cookies.jpg" },
      { name: "Tiramisu", price: 1.7, img: "assets/photos/dessert-tiramisu.jpg" },
      { name: "Chocolate Cake", price: 1.8, img: "assets/photos/dessert-chocolate-cake.jpg" },
      { name: "Choco Pistachio", price: 1.9, img: "assets/photos/dessert-choco-pistachio.jpg" },
      { name: "Pecan Cheese Bar", price: 1.9, img: "assets/photos/dessert-pecan-cheese-bar.jpg" }
    ]
  }
];
