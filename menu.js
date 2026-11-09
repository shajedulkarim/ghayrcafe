/* ghayr menu data.
   Source: in-cafe digital menu at ghair.info (checked 9 Nov 2026). Prices are OMR, as printed on that menu.
   Edit a price here and the site updates. `img` shows a photo thumbnail (assets/photos, cropped from the cafe photos with sips). */
const MENU = [
  {
    id: "hot", label: "Hot", ar: "ساخن",
    items: [
      { name: "Espresso", ar: "إسبرسو", price: 0.6 },
      { name: "Americano", ar: "أمريكانو", price: 1.0, img: "assets/photos/hot-americano.jpg" },
      { name: "Cortado", ar: "كورتادو", price: 1.1 },
      { name: "Flat White", ar: "فلات وايت", price: 1.4 },
      { name: "Cappuccino", ar: "كابتشينو", price: 1.4 },
      { name: "Café Latte", ar: "كافيه لاتيه", price: 1.4 },
      { name: "Hot Chocolate", ar: "شوكلاتة ساخنة", price: 1.4, img: "assets/photos/hot-chocolate.jpg" },
      { name: "Spanish Latte", ar: "سبانيش لاتيه", price: 1.5, img: "assets/photos/hot-spanish-latte.jpg" },
      { name: "Picolo", ar: "بيكولو", price: 1.5, img: "assets/photos/hot-picolo.jpg" },
      { name: "Ghair Latte", ar: "غير لاتيه", price: 1.7, house: true, img: "assets/photos/hot-ghair-latte.jpg" },
      { name: "Matcha", ar: "ماتشا", price: 1.7 }
    ]
  },
  {
    id: "cold", label: "Cold", ar: "بارد",
    items: [
      { name: "Americano", ar: "أمريكانو", price: 1.0, img: "assets/photos/cold-americano.jpg" },
      { name: "Iced Latte", ar: "لاتيه بارد", price: 1.4 },
      { name: "Spanish Latte", ar: "سبانيش لاتيه", price: 1.5 },
      { name: "Cream Espresso", ar: "كريم اسبرسو", price: 1.5, img: "assets/photos/cold-cream-espresso.jpg" },
      { name: "Matcha", ar: "ماتشا", price: 1.7, img: "assets/photos/cold-matcha.jpg" },
      { name: "Coconut Latte", ar: "لاتيه جوز الهند", price: 1.8 },
      { name: "Ghair Frappe", ar: "غير فرابيه", price: 1.8, house: true, img: "assets/photos/cold-ghair-frappe.jpg" },
      { name: "Red Velvet Frappe", ar: "ريد فلفت فرابيه", price: 1.8 },
      { name: "Ghair Ice Shaken", ar: "غير ايس شيكن", price: 1.8, house: true }
    ]
  },
  {
    id: "brew", label: "Manual brew", ar: "قهوة مقطّرة",
    items: [
      { name: "V60", ar: "في سكستي", price: 1.5, img: "assets/photos/brew-v60.jpg" },
      { name: "Chemex", ar: "كيمكس", price: 1.5 },
      { name: "Cold Brew", ar: "كولد برو", price: 1.5 }
    ]
  },
  {
    id: "noncoffee", label: "Non-coffee", ar: "بدون قهوة",
    items: [
      { name: "Water", ar: "ماء", price: 0.5 },
      { name: "Strawberry", ar: "فراولة", price: 1.5, img: "assets/photos/non-strawberry.jpg" },
      { name: "Hibiscus", ar: "كركديه", price: 1.5, img: "assets/photos/non-hibiscus.jpg" },
      { name: "Passion", ar: "باشن", price: 1.5, img: "assets/photos/non-passion.jpg" },
      { name: "Peach Ice Tea", ar: "شاي مثلج بالخوخ", price: 1.5 },
      { name: "Mango Passion", ar: "مانجو باشن سلاش", price: 1.6, img: "assets/photos/non-mango-passion.jpg" }
    ]
  },
  {
    id: "icecream", label: "Ice cream", ar: "آيس كريم",
    items: [
      { name: "Pretzel", ar: "بريتزل", price: 1.5 },
      { name: "Açaí", ar: "آساي", price: 2.5 }
    ]
  },
  {
    id: "dessert", label: "Dessert", ar: "حلويات",
    items: [
      { name: "Brownie Bites", ar: "براونيز بايتس", price: 1.6, img: "assets/photos/dessert-brownie-bites.jpg" },
      { name: "Cheesecake Berry", ar: "توت شيز كيك", price: 1.6, img: "assets/photos/dessert-cheesecake-berry.jpg" },
      { name: "Éclairs", ar: "اكلير", price: 1.6, img: "assets/photos/dessert-eclairs.jpg" },
      { name: "Ghair Cookies", ar: "غير كوكيز", price: 1.7, house: true, img: "assets/photos/dessert-ghair-cookies.jpg" },
      { name: "Tiramisu", ar: "تيراميسو", price: 1.7, img: "assets/photos/dessert-tiramisu.jpg" },
      { name: "Chocolate Cake", ar: "كيكة الشوكلاتة", price: 1.8, img: "assets/photos/dessert-chocolate-cake.jpg" },
      { name: "Choco Pistachio", price: 1.9, img: "assets/photos/dessert-choco-pistachio.jpg" },
      { name: "Pecan Cheese Bar", ar: "تيشركيك كراميل بالبيكان", price: 1.9, img: "assets/photos/dessert-pecan-cheese-bar.jpg" }
    ]
  }
];
