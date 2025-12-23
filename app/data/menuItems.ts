import type { IMenuItem } from "../types/interfaces";

export const egyptianMenu: IMenuItem[] = [
  {
    id: 1,
    title: "Ful Medames",
    description:
      "Slow-cooked fava beans seasoned with cumin, lemon, and olive oil. A classic Egyptian breakfast.",
    price: 25,
    thumbnail:
      "https://img.freepik.com/free-photo/pav-bhaji-with-butter-bun_23-2151996228.jpg?uid=R203565888&ga=GA1.1.979538226.1749313385&semt=ais_hybrid&w=740&q=80",
    ingredients: ["fava beans", "cumin", "olive oil", "lemon", "salt", "bread"],
    category: "breakfast",
  },
  {
    id: 2,
    title: "Egyptian Falafel",
    description:
      "Deep-fried patties made from ground fava beans, parsley, and fresh herbs.",
    price: 30,
    thumbnail:
      "https://img.freepik.com/free-photo/healthy-food-wooden-background_23-2148305764.jpg?uid=R203565888&ga=GA1.1.979538226.1749313385&semt=ais_hybrid&w=740&q=80",
    ingredients: [
      "fava beans",
      "parsley",
      "cilantro",
      "leeks",
      "garlic",
      "sesame",
    ],
    category: "breakfast",
  },
  {
    id: 3,
    title: "Koshari",
    description:
      "Egypt's national dish made with rice, macaroni, lentils, and spicy tomato sauce.",
    price: 65,
    thumbnail: "https://i.postimg.cc/wj1Qknb1/koshari.png",
    ingredients: [
      "rice",
      "lentils",
      "macaroni",
      "fried onions",
      "chickpeas",
      "tomato sauce",
    ],
    category: "lunch",
  },
  {
    id: 4,
    title: "Molokhia with Chicken",
    description:
      "Green herb soup made from jute leaves, served with rice and roasted chicken.",
    price: 150,
    thumbnail:
      "https://i.pinimg.com/736x/6e/e9/10/6ee910a13c2632fbcde52090a722509b.jpg",
    ingredients: [
      "molokhia leaves",
      "garlic",
      "coriander",
      "chicken",
      "rice",
      "broth",
    ],
    category: "dinner",
  },
  {
    id: 5,
    title: "Warak Enab",
    description:
      "Rice-stuffed vine leaves seasoned with herbs, cooked in lemon broth.",
    price: 120,
    thumbnail:
      "https://i.pinimg.com/736x/18/9b/5f/189b5f76a0191a1eb1142c9de96bd701.jpg",
    ingredients: [
      "vine leaves",
      "rice",
      "tomato",
      "parsley",
      "lemon",
      "spices",
    ],
    category: "lunch",
  },
  {
    id: 6,
    title: "Hawawshi",
    description:
      "Spiced minced meat stuffed inside baladi bread and baked to perfection.",
    price: 160,
    thumbnail:
      "https://img.freepik.com/free-photo/vegetables-kish-with-cabbages-sauces_140725-9295.jpg?uid=R203565888&ga=GA1.1.979538226.1749313385&semt=ais_hybrid&w=740&q=80",
    ingredients: ["baladi bread", "minced beef", "onions", "garlic", "spices"],
    category: "dinner",
  },
  {
    id: 7,
    title: "Kebda Eskandarani",
    description:
      "Sautéed beef liver with garlic, cumin, and chili, served in a soft roll.",
    price: 110,
    thumbnail:
      "https://img.freepik.com/free-photo/roast-chicken-liver-with-vegetables-wooden-background-flat-lay-top-view_2829-6475.jpg?uid=R203565888&ga=GA1.1.979538226.1749313385&semt=ais_hybrid&w=740&q=80",
    ingredients: ["beef liver", "garlic", "chili", "cumin", "oil", "bread"],
    category: "dinner",
  },
  {
    id: 8,
    title: "Shawarma",
    description:
      "Marinated beef or chicken slices served in a wrap with tahini and pickles.",
    price: 170,
    thumbnail:
      "https://img.freepik.com/free-photo/side-view-shawarma-with-fried-potatoes-ayran-mayonnaise-board-cookware_176474-3213.jpg?uid=R203565888&ga=GA1.1.979538226.1749313385&semt=ais_hybrid&w=740&q=80",
    ingredients: ["beef or chicken", "tahini", "pickles", "spices", "bread"],
    category: "dinner",
  },
  {
    id: 9,
    title: "Mahshi",
    description:
      "Assorted vegetables stuffed with rice and herbs, cooked in tomato broth.",
    price: 180,
    thumbnail:
      "https://img.freepik.com/free-photo/top-view-leaf-dolma-eastern-meat-meal-rolled-inside-green-leaves-with-bread-cabbage-dolma-dark-blue-desk-meat-dinner-dish-east-meal_140725-64871.jpg?uid=R203565888&ga=GA1.1.979538226.1749313385&semt=ais_hybrid&w=740&q=80",
    ingredients: [
      "zucchini",
      "eggplant",
      "peppers",
      "cabbage",
      "rice",
      "tomato sauce",
    ],
    category: "dinner",
  },
  {
    id: 10,
    title: "Besarah",
    description:
      "Creamy dip made from fava beans, herbs, and onions – a traditional Egyptian vegan dish.",
    price: 70,
    thumbnail: "https://i.postimg.cc/XYZ77gXP/besarah.png",
    ingredients: ["fava beans", "dill", "leeks", "parsley", "onions"],
    category: "breakfast",
  },
  {
    id: 11,
    title: "Sayadeya Fish",
    description:
      "Alexandrian-style baked fish served with caramelized-onion rice.",
    price: 220,
    thumbnail:
      "https://img.freepik.com/free-photo/arabian-sheri-fish-mandi-rice-with-lemon-slice-served-dish-top-view-middle-east-food_505751-5137.jpg?uid=R203565888&ga=GA1.1.979538226.1749313385&semt=ais_hybrid&w=740&q=80",
    ingredients: ["fish", "onion", "rice", "spices", "broth"],
    category: "lunch",
  },
  {
    id: 12,
    title: "Feteer Meshaltet",
    description:
      "Flaky layered pastry served plain, with honey, cheese, or chocolate.",
    price: 190,
    thumbnail:
      "https://i.pinimg.com/474x/33/f4/6f/33f46f1eb56f12de7e83c444c9267fa6.jpg",
    ingredients: ["flour", "butter", "oil", "honey", "cheese"],
    category: "dessert",
  },
];
