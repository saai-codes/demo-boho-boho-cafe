export const MENU_CATEGORIES = [
  { id: 'all', label: 'All Offerings', count: 90 },
  { id: 'coffee', label: 'Coffee & Brews', count: 21 },
  { id: 'beverages', label: 'Matcha & Teas', count: 16 },
  { id: 'breakfast', label: 'Breakfast & Bowls', count: 22 },
  { id: 'mains', label: 'Bistro Mains & Grill', count: 25 },
  { id: 'desserts', label: 'Artisan Desserts', count: 6 },
];

export const ORIGINAL_MENU_CARDS = [
  {
    id: 'coffee',
    title: 'Signature & Classic Coffees',
    image: '/images/menu-originals/beverages-coffee.jpg',
    sections: ['Boho Signature Coffee', 'Iced Coffee', 'Hot Coffee'],
    tag: 'Beverages — Part 1'
  },
  {
    id: 'beverages',
    title: 'Matcha, Cold Brews & Kettle Teas',
    image: '/images/menu-originals/beverages-teas-matcha.jpg',
    sections: ['Cold Brew', 'Matcha', 'Iced Tea', 'Tea By The Kettle', 'Healthy Drinks'],
    tag: 'Beverages — Part 2'
  },
  {
    id: 'breakfast',
    title: 'Breakfast & All-Day Brunches',
    image: '/images/menu-originals/breakfast.jpg',
    sections: ['All About Avocadoes', 'Eggs to Order', 'Sandwiches & Salads', 'Smoothies & Pancakes'],
    tag: 'Breakfast'
  },
  {
    id: 'mains',
    title: 'Mains, Bowls, Pizzas & Platters',
    image: '/images/menu-originals/mains.jpg',
    sections: ['Boho Rice Bowl', 'Fish & Prawns', 'Pasta', 'Whole Grain Pizza', 'Boho Steaks & Grill', 'Boho Wraps', 'Boho Platters'],
    tag: 'Mains & Hearth'
  },
  {
    id: 'desserts',
    title: 'Handcrafted Desserts & Mango Specials',
    image: '/images/menu-originals/desserts.jpg',
    sections: ['Desserts', 'Seasonal Mango Desserts'],
    tag: 'Sweet Endings'
  }
];

export const FEATURED_ITEMS = [
  {
    id: 'sig-1',
    name: 'Pink Iced Latte',
    category: 'Coffee & Brews',
    diet: 'beverage',
    image: '/images/food/pink-iced-latte.jpg',
    description: 'Boho signature espresso layered over delicate botanical rose milk, chilled cream, and crystal ice.',
    price: '₹260',
    badge: 'Signature Sips'
  },
  {
    id: 'avo-4',
    name: 'Mediterranean Avocado Toast',
    category: 'Breakfast & Bowls',
    diet: 'veg',
    image: '/images/food/mediterranean-avocado-toast.jpg',
    description: 'Toasted artisan sourdough with smashed avocado, crumbly feta, cherry tomatoes, kalamata olives, and cold-pressed olive oil.',
    price: '₹380',
    badge: 'Morning Favorite'
  },
  {
    id: 'pan-1',
    name: 'Classic American Pancake',
    category: 'Breakfast & Bowls',
    diet: 'egg',
    image: '/images/food/classic-american-pancake.jpg',
    description: 'Golden fluffy pancake stack served with whipped farm butter, fresh strawberries, and pure Canadian maple syrup.',
    price: '₹380',
    badge: 'Brunch Classic'
  },
  {
    id: 'piz-1',
    name: 'The Exotic Pizza',
    category: 'Bistro Mains & Grill',
    diet: 'veg',
    image: '/images/food/the-exotic-pizza.jpg',
    description: 'Stone-baked whole wheat crust with artichoke hearts, sundried tomatoes, kalamata olives, and fresh bubbling mozzarella.',
    price: '₹480',
    badge: 'Woodfired'
  },
  {
    id: 'plat-2',
    name: 'Mediterranean Platter',
    category: 'Bistro Mains & Grill',
    diet: 'veg',
    image: '/images/food/mediterranean-platter.jpg',
    description: 'Bohemian mezze feast: velvety hummus with olive oil swirl, smoky baba ganoush, crispy herb falafels, and warm grilled pita.',
    price: '₹490',
    badge: 'Bistro Feast'
  },
  {
    id: 'des-1',
    name: 'Biscoff Cheesecake',
    category: 'Artisan Desserts',
    diet: 'veg',
    image: '/images/food/biscoff-cheesecake.jpg',
    description: 'Creamy New York set cheesecake on a crunchy Lotus Biscoff speculoos crust, smothered in warm spiced Biscoff spread.',
    price: '₹390',
    badge: 'Decadent'
  }
];

export const MENU_ITEMS = [
  // --- BOHO SIGNATURE COFFEE ---
  {
    id: 'sig-1',
    name: 'Pink Iced Latte',
    category: 'coffee',
    subcategory: 'Boho Signature Coffee',
    diet: 'beverage',
    isSignature: true,
    image: '/images/food/pink-iced-latte.jpg',
    description: 'Boho signature espresso infused with subtle botanical floral notes and velvety milk over crystal ice.',
    price: '₹260'
  },
  {
    id: 'sig-2',
    name: 'Espresso Coconut Water',
    category: 'coffee',
    subcategory: 'Boho Signature Coffee',
    diet: 'beverage',
    isSignature: true,
    image: '/images/food/espresso-coconut-water.jpg',
    description: 'Refreshing cold tender coconut water crowned with a bold shot of fresh espresso. A Pune favorite.',
    price: '₹280'
  },
  {
    id: 'sig-3',
    name: 'Cheesecake Cold Coffee',
    category: 'coffee',
    subcategory: 'Boho Signature Coffee',
    diet: 'beverage',
    isSignature: true,
    image: '/images/food/cheesecake-cold-coffee.jpg',
    description: 'Indulgent creamy cheesecake base whipped with artisanal cold espresso, hints of biscuit and cream.',
    price: '₹290'
  },
  {
    id: 'sig-4',
    name: 'Espresso Diet Coke',
    category: 'coffee',
    subcategory: 'Boho Signature Coffee',
    diet: 'beverage',
    isSignature: true,
    image: '/images/food/espresso-diet-coke.jpg',
    description: 'Bistro twist of chilled fizz with bold dark roast espresso float for an energizing sparkle.',
    price: '₹240'
  },

  // --- ICED COFFEE ---
  {
    id: 'iced-1',
    name: 'Affogato',
    category: 'coffee',
    subcategory: 'Iced Coffee',
    diet: 'beverage',
    image: '/images/food/affogato.jpg',
    description: 'A scoop of creamy artisanal vanilla gelato drowned in a hot, freshly extracted double espresso.',
    price: '₹220'
  },
  {
    id: 'iced-2',
    name: 'Iced Shaken Espresso',
    category: 'coffee',
    subcategory: 'Iced Coffee',
    diet: 'beverage',
    image: '/images/food/iced-shaken-espresso.jpg',
    description: 'Espresso vigorously shaken with ice and subtle sweetener until airy and frothy.',
    price: '₹210'
  },
  {
    id: 'iced-3',
    name: 'Espresso On The Rock',
    category: 'coffee',
    subcategory: 'Iced Coffee',
    diet: 'beverage',
    image: '/images/food/espresso-on-the-rock.jpg',
    description: 'Pure double shot pulled directly over clear artisanal ice cubes for intense aromatic clarity.',
    price: '₹190'
  },
  {
    id: 'iced-4',
    name: 'Iced Americano',
    category: 'coffee',
    subcategory: 'Iced Coffee',
    diet: 'beverage',
    image: '/images/food/iced-americano.jpg',
    description: 'Rich espresso elongated with chilled mineral water over ice.',
    price: '₹200'
  },
  {
    id: 'iced-5',
    name: 'Iced Latte',
    category: 'coffee',
    subcategory: 'Iced Coffee',
    diet: 'beverage',
    image: '/images/food/iced-latte.jpg',
    description: 'Silky chilled milk topped with slow-poured espresso layers.',
    price: '₹230'
  },
  {
    id: 'iced-6',
    name: 'Classic Cold Coffee',
    category: 'coffee',
    subcategory: 'Iced Coffee',
    diet: 'beverage',
    image: '/images/food/classic-cold-coffee.jpg',
    description: 'Thick, frosty bistro-style cold coffee blended smooth and creamy.',
    price: '₹240'
  },
  {
    id: 'iced-7',
    name: 'Iced Mocha',
    category: 'coffee',
    subcategory: 'Iced Coffee',
    diet: 'beverage',
    image: '/images/food/iced-mocha.jpg',
    description: 'Single-origin espresso blended with dark cocoa ganache and chilled milk.',
    price: '₹250'
  },
  {
    id: 'iced-8',
    name: 'Vietnamese Coffee',
    category: 'coffee',
    subcategory: 'Iced Coffee',
    diet: 'beverage',
    image: '/images/food/vietnamese-coffee.jpg',
    description: 'Intense slow-drip coffee sweetened with rich condensed milk over cracked ice.',
    price: '₹260'
  },

  // --- HOT COFFEE ---
  {
    id: 'hot-1',
    name: 'Hot Latte',
    category: 'coffee',
    subcategory: 'Hot Coffee',
    diet: 'beverage',
    image: '/images/food/hot-latte.jpg',
    description: 'Smooth espresso with micro-textured steamed milk and handcrafted latte art.',
    price: '₹210'
  },
  {
    id: 'hot-2',
    name: 'Cappuccino',
    category: 'coffee',
    subcategory: 'Hot Coffee',
    diet: 'beverage',
    image: '/images/food/cappuccino.jpg',
    description: 'Harmonious balance of espresso, steamed milk, and a dense cloud of micro-foam.',
    price: '₹210'
  },
  {
    id: 'hot-3',
    name: 'Tiramisu Cappuccino',
    category: 'coffee',
    subcategory: 'Hot Coffee',
    diet: 'beverage',
    isSignature: true,
    image: '/images/food/tiramisu-cappuccino.jpg',
    description: 'Dessert in a cup: cappuccino kissed with Italian mascarpone essence and dusted dark cocoa.',
    price: '₹260'
  },
  {
    id: 'hot-4',
    name: 'Hot Americano',
    category: 'coffee',
    subcategory: 'Hot Coffee',
    diet: 'beverage',
    image: '/images/food/hot-americano.jpg',
    description: 'Freshly extracted espresso lengthened with steaming hot filtered water.',
    price: '₹180'
  },
  {
    id: 'hot-5',
    name: 'Espresso',
    category: 'coffee',
    subcategory: 'Hot Coffee',
    diet: 'beverage',
    image: '/images/food/espresso.jpg',
    description: 'A concentrated shot of roasted beans with golden crema.',
    price: '₹160'
  },
  {
    id: 'hot-6',
    name: 'Macchiato',
    category: 'coffee',
    subcategory: 'Hot Coffee',
    diet: 'beverage',
    image: '/images/food/macchiato.jpg',
    description: 'Espresso stained with a delicate dollop of warm frothy milk.',
    price: '₹180'
  },
  {
    id: 'hot-7',
    name: 'Hot Mocha',
    category: 'coffee',
    subcategory: 'Hot Coffee',
    diet: 'beverage',
    image: '/images/food/hot-mocha.jpg',
    description: 'Decadent melted cocoa stirred into freshly pulled espresso and warm steamed milk.',
    price: '₹240'
  },

  // --- COLD BREW ---
  {
    id: 'cb-1',
    name: 'Classic Cold Brew',
    category: 'coffee',
    subcategory: 'Cold Brew',
    diet: 'beverage',
    image: '/images/food/classic-cold-brew.jpg',
    description: 'Steeped for 18 hours in cold filtered water for a naturally sweet, low-acidity cup.',
    price: '₹240'
  },
  {
    id: 'cb-2',
    name: 'Whiskey Cold Brew (Non-Alcoholic)',
    category: 'coffee',
    subcategory: 'Cold Brew',
    diet: 'beverage',
    isSignature: true,
    image: '/images/food/whiskey-cold-brew.jpg',
    description: 'Barrel-oak infused cold brew with notes of vanilla and charred wood — 100% zero alcohol.',
    price: '₹280'
  },

  // --- MATCHA ---
  {
    id: 'matcha-1',
    name: 'Mango Matcha',
    category: 'beverages',
    subcategory: 'Matcha',
    diet: 'beverage',
    isSignature: true,
    image: '/images/food/mango-matcha.jpg',
    description: 'Vibrant Japanese ceremonial matcha layered over sun-ripened mango puree and oat milk.',
    price: '₹310'
  },
  {
    id: 'matcha-2',
    name: 'Cloud Matcha',
    category: 'beverages',
    subcategory: 'Matcha',
    diet: 'beverage',
    isSignature: true,
    image: '/images/food/cloud-matcha.jpg',
    description: 'Ethereal cold matcha topped with a velvety, lightly salted cream cheese foam cloud.',
    price: '₹320'
  },
  {
    id: 'matcha-3',
    name: 'Iced Matcha Latte',
    category: 'beverages',
    subcategory: 'Matcha',
    diet: 'beverage',
    image: '/images/food/iced-matcha-latte.jpg',
    description: 'Stone-ground green tea whisked smooth and poured over cold milk and ice.',
    price: '₹280'
  },
  {
    id: 'matcha-4',
    name: 'Hot Matcha Latte',
    category: 'beverages',
    subcategory: 'Matcha',
    diet: 'beverage',
    image: '/images/food/hot-matcha-latte.jpg',
    description: 'Warm, comforting bowl of whisked green tea with sweet steamed milk.',
    price: '₹280'
  },
  {
    id: 'matcha-5',
    name: 'Cold Brew Matcha',
    category: 'beverages',
    subcategory: 'Matcha',
    diet: 'beverage',
    image: '/images/food/cold-brew-matcha.jpg',
    description: 'Slow-hydrated pure green tea over ice, crisp, herbaceous, and detoxifying.',
    price: '₹260'
  },

  // --- ICED TEA ---
  {
    id: 'tea-1',
    name: 'Lemon & Mint Iced Tea',
    category: 'beverages',
    subcategory: 'Iced Tea',
    diet: 'beverage',
    image: '/images/food/lemon-mint-iced-tea.jpg',
    description: 'House-brewed black tea infused with zesty fresh lemon juice and crushed garden mint.',
    price: '₹190'
  },
  {
    id: 'tea-2',
    name: 'Lemongrass Iced Tea',
    category: 'beverages',
    subcategory: 'Iced Tea',
    diet: 'beverage',
    image: '/images/food/lemongrass-iced-tea.jpg',
    description: 'Fragrant lemongrass stalks steeped into crisp tea with gentle citrus undertones.',
    price: '₹210'
  },
  {
    id: 'tea-3',
    name: 'Hibiscus & Rose Iced Tea',
    category: 'beverages',
    subcategory: 'Iced Tea',
    diet: 'beverage',
    image: '/images/food/hibiscus-rose-iced-tea.jpg',
    description: 'Ruby-red organic hibiscus petals and aromatic rose water shaken over ice.',
    price: '₹220'
  },

  // --- TEA BY THE KETTLE ---
  {
    id: 'kettle-1',
    name: 'All Relief Tea',
    category: 'beverages',
    subcategory: 'Tea By The Kettle',
    diet: 'beverage',
    image: '/images/food/all-relief-tea.jpg',
    description: 'Soothing herbal blend of ginger, holy basil, and licorice served in a glass kettle.',
    price: '₹220'
  },
  {
    id: 'kettle-2',
    name: 'Minty Green',
    category: 'beverages',
    subcategory: 'Tea By The Kettle',
    diet: 'beverage',
    image: '/images/food/minty-green-tea.jpg',
    description: 'Whole leaf green tea enriched with crisp spearmint leaves.',
    price: '₹200'
  },
  {
    id: 'kettle-3',
    name: 'Chamomile & Lavender',
    category: 'beverages',
    subcategory: 'Tea By The Kettle',
    diet: 'beverage',
    image: '/images/food/chamomile-lavender-tea.jpg',
    description: 'Calming floral infusion for a tranquil afternoon in our breezy courtyard.',
    price: '₹220'
  },
  {
    id: 'kettle-4',
    name: 'Flora Tea',
    category: 'beverages',
    subcategory: 'Tea By The Kettle',
    diet: 'beverage',
    image: '/images/food/flora-blooming-tea.jpg',
    description: 'Artisanal blossoming flower pod that unfurls gracefully as hot water steeps.',
    price: '₹240'
  },

  // --- HEALTHY DRINKS ---
  {
    id: 'health-1',
    name: 'Immunity Booster',
    category: 'beverages',
    subcategory: 'Healthy Drinks',
    diet: 'beverage',
    image: '/images/food/immunity-booster.jpg',
    description: 'Cold-pressed amla, turmeric, ginger, citrus, and a pinch of black pepper.',
    price: '₹240'
  },
  {
    id: 'health-2',
    name: 'Watermelon & Mint',
    category: 'beverages',
    subcategory: 'Healthy Drinks',
    diet: 'beverage',
    image: '/images/food/watermelon-mint-juice.jpg',
    description: 'Freshly pressed sweet watermelon juice with cooling garden mint leaves.',
    price: '₹210'
  },
  {
    id: 'health-3',
    name: 'Lemon Mint Cucumber',
    category: 'beverages',
    subcategory: 'Healthy Drinks',
    diet: 'beverage',
    image: '/images/food/lemon-mint-cucumber-juice.jpg',
    description: 'Hydrating blend of English cucumber, fresh lime juice, and bruised mint.',
    price: '₹210'
  },
  {
    id: 'health-4',
    name: 'Apple Beetroot Carrot (ABC)',
    category: 'beverages',
    subcategory: 'Healthy Drinks',
    diet: 'beverage',
    image: '/images/food/abc-juice.jpg',
    description: 'Classic vitalizing cold-pressed combination of red apples, beets, and sweet carrots.',
    price: '₹250'
  },

  // --- ALL ABOUT AVOCADOES ---
  {
    id: 'avo-1',
    name: 'Avocado Smoothie Mini Bowl',
    category: 'breakfast',
    subcategory: 'All About Avocadoes',
    diet: 'veg',
    image: '/images/food/avocado-smoothie-bowl.jpg',
    description: 'Lush avocado blend topped with chia seeds, toasted almonds, and coconut shavings.',
    price: '₹360'
  },
  {
    id: 'avo-2',
    name: 'Skillet Egg with Guacamole',
    category: 'breakfast',
    subcategory: 'All About Avocadoes',
    diet: 'egg',
    image: '/images/food/skillet-egg-guacamole.jpg',
    description: 'Sizzling cast-iron skillet eggs paired with chunky hand-mashed guacamole and toasted sourdough.',
    price: '₹370'
  },
  {
    id: 'avo-3',
    name: 'Guacamole On Toast',
    category: 'breakfast',
    subcategory: 'All About Avocadoes',
    diet: 'veg',
    image: '/images/food/guacamole-on-toast.jpg',
    description: 'Crusty artisan sourdough toast smothered in fresh guacamole, microgreens, and chili flakes.',
    price: '₹340'
  },
  {
    id: 'avo-4',
    name: 'Mediterranean Avocado Toast',
    category: 'breakfast',
    subcategory: 'All About Avocadoes',
    diet: 'veg',
    image: '/images/food/mediterranean-avocado-toast.jpg',
    description: 'Toasted sourdough layered with ripe avocado, crumbly feta cheese, kalamata olives, and cherry tomatoes.',
    price: '₹380'
  },

  // --- EGGS TO ORDER ---
  {
    id: 'egg-1',
    name: 'French Toast',
    category: 'breakfast',
    subcategory: 'Eggs to Order',
    diet: 'egg',
    image: '/images/food/french-toast.jpg',
    description: 'Thick brioche slices soaked in vanilla-spiced egg custard, golden griddled and dusted with cinnamon sugar.',
    price: '₹320'
  },
  {
    id: 'egg-2',
    name: 'Shakshuka',
    category: 'breakfast',
    subcategory: 'Eggs to Order',
    diet: 'egg',
    image: '/images/food/shakshuka.jpg',
    description: 'Gently poached farm eggs in a spiced Mediterranean tomato, bell pepper, and cumin sauce with warm pita.',
    price: '₹360'
  },
  {
    id: 'egg-3',
    name: 'Sunny Side Up',
    category: 'breakfast',
    subcategory: 'Eggs to Order',
    diet: 'egg',
    image: '/images/food/sunny-side-up.jpg',
    description: 'Two golden fried eggs with runny yolks, grilled tomato, hash brown, and buttered toast.',
    price: '₹270'
  },
  {
    id: 'egg-4',
    name: 'Classic Omelette (Choose - Veg / Cheese / Mushroom)',
    category: 'breakfast',
    subcategory: 'Eggs to Order',
    diet: 'egg',
    image: '/images/food/classic-omelette.jpg',
    description: 'Three-egg fluffy folded omelette cooked to order with your choice of garden vegetables, melted cheddar, or sautéed mushrooms.',
    price: '₹310'
  },
  {
    id: 'egg-5',
    name: 'Masala Omelette',
    category: 'breakfast',
    subcategory: 'Eggs to Order',
    diet: 'egg',
    image: '/images/food/masala-omelette.jpg',
    description: 'Desi-spiced omelette tossed with chopped onions, green chilies, coriander, and warm pav/toast.',
    price: '₹290'
  },
  {
    id: 'egg-6',
    name: 'Grilled Mushrooms & Cheese Omelette',
    category: 'breakfast',
    subcategory: 'Eggs to Order',
    diet: 'egg',
    image: '/images/food/mushroom-cheese-omelette.jpg',
    description: 'Stuffed with herb-sautéed button mushrooms and gooey aged cheese.',
    price: '₹340'
  },
  {
    id: 'egg-7',
    name: 'English Breakfast',
    category: 'breakfast',
    subcategory: 'Eggs to Order',
    diet: 'egg',
    image: '/images/food/english-breakfast.jpg',
    description: 'Hearty platter featuring eggs to order, baked beans, sautéed mushrooms, hash brown, grilled tomato, and artisan toast.',
    price: '₹420'
  },
  {
    id: 'egg-8',
    name: 'Poached Egg on Sourdough',
    category: 'breakfast',
    subcategory: 'Eggs to Order',
    diet: 'egg',
    image: '/images/food/poached-egg-sourdough.jpg',
    description: 'Silky poached eggs perched over warm sourdough with garlic herb spread and cracked black pepper.',
    price: '₹330'
  },

  // --- SANDWICHES & SALADS ---
  {
    id: 'sand-1',
    name: 'Boho Chicken Club Sandwich',
    category: 'breakfast',
    subcategory: 'Sandwiches & Salads',
    diet: 'non-veg',
    isSignature: true,
    image: '/images/food/chicken-club-sandwich.jpg',
    description: 'Triple-decker stacked with tender roast chicken breast, fried egg, crisp lettuce, cheese, and garlic aioli.',
    price: '₹410'
  },
  {
    id: 'sand-2',
    name: 'Chipotle Chicken Sandwich',
    category: 'breakfast',
    subcategory: 'Sandwiches & Salads',
    diet: 'non-veg',
    image: '/images/food/chipotle-chicken-sandwich.jpg',
    description: 'Shredded smoky chicken tossed in spicy chipotle crema in freshly baked panini.',
    price: '₹390'
  },
  {
    id: 'sand-3',
    name: 'Veg Banh Mi Sandwich',
    category: 'breakfast',
    subcategory: 'Sandwiches & Salads',
    diet: 'veg',
    image: '/images/food/veg-banh-mi.jpg',
    description: 'Crispy baguette packed with marinated tofu, pickled daikon & carrots, fresh cilantro, and sriracha mayonnaise.',
    price: '₹350'
  },
  {
    id: 'sal-1',
    name: 'Garden Caesar',
    category: 'breakfast',
    subcategory: 'Sandwiches & Salads',
    diet: 'veg',
    image: '/images/food/garden-caesar-salad.jpg',
    description: 'Crisp romaine lettuce hearts, herb croutons, and parmesan ribbons tossed in creamy house dressing.',
    price: '₹330'
  },
  {
    id: 'sal-2',
    name: 'Watermelon & Feta Salad',
    category: 'breakfast',
    subcategory: 'Sandwiches & Salads',
    diet: 'veg',
    image: '/images/food/watermelon-feta-salad.jpg',
    description: 'Chilled watermelon cubes, briny Greek feta, mint sprigs, toasted pine nuts, and balsamic reduction drizzle.',
    price: '₹340'
  },

  // --- SMOOTHIES & PANCAKES ---
  {
    id: 'pan-1',
    name: 'Classic American Pancake',
    category: 'breakfast',
    subcategory: 'Smoothies & Pancakes',
    diet: 'egg',
    image: '/images/food/classic-american-pancake.jpg',
    description: 'Golden fluffy stack served with whipped farm butter, maple syrup, and fresh berry compote.',
    price: '₹380'
  },
  {
    id: 'pan-2',
    name: 'Eggless Chocolate Pancake',
    category: 'breakfast',
    subcategory: 'Smoothies & Pancakes',
    diet: 'veg',
    image: '/images/food/chocolate-pancake.jpg',
    description: 'Decadent cocoa pancakes crowned with crunchy chocolate granola and warm dark chocolate sauce.',
    price: '₹450'
  },
  {
    id: 'bowl-1',
    name: 'Blueberry-Banana Smoothie Mini Bowl',
    category: 'breakfast',
    subcategory: 'Smoothies & Pancakes',
    diet: 'veg',
    image: '/images/food/blueberry-smoothie-bowl.jpg',
    description: 'Crafted with oats milk, blended antioxidant-rich blueberries, banana slices, and toasted pumpkin seeds.',
    price: '₹370'
  },
  {
    id: 'bowl-2',
    name: 'Nutella-Banana Smoothie Mini Bowl',
    category: 'breakfast',
    subcategory: 'Smoothies & Pancakes',
    diet: 'veg',
    image: '/images/food/nutella-banana-smoothie-bowl.jpg',
    description: 'Creamy oats milk whipped with ripe banana and rich Nutella swirl, topped with roasted nuts.',
    price: '₹390'
  },
  {
    id: 'bowl-3',
    name: 'Mango Smoothie',
    category: 'breakfast',
    subcategory: 'Smoothies & Pancakes',
    diet: 'veg',
    image: '/images/food/mango-smoothie.jpg',
    description: 'Creamy tropical Alphonso mango smoothie blended fresh with yogurt or plant milk.',
    price: '₹310'
  },

  // --- BOHO RICE BOWL ---
  {
    id: 'rice-1',
    name: 'House Thai Red Curry Chicken Bowl',
    category: 'mains',
    subcategory: 'Boho Rice Bowl',
    diet: 'non-veg',
    image: '/images/food/thai-red-curry.jpg',
    description: 'Aromatic coconut red curry with chicken tenders, bamboo shoots, and basil served over fragrant jasmine rice.',
    price: '₹470'
  },
  {
    id: 'rice-2',
    name: 'House Thai Red Curry Bowl',
    category: 'mains',
    subcategory: 'Boho Rice Bowl',
    diet: 'veg',
    image: '/images/food/thai-red-curry.jpg',
    description: 'Simmered seasonal vegetables, baby corn, and tofu in authentic coconut red curry with steamed rice.',
    price: '₹420'
  },
  {
    id: 'rice-3',
    name: 'House Thai Green Curry Chicken Bowl',
    category: 'mains',
    subcategory: 'Boho Rice Bowl',
    diet: 'non-veg',
    image: '/images/food/thai-green-curry.jpg',
    description: 'Fresh green chili, lemongrass, and kaffir lime curry broth simmered with chicken over rice.',
    price: '₹470'
  },
  {
    id: 'rice-4',
    name: 'House Thai Green Curry Bowl',
    category: 'mains',
    subcategory: 'Boho Rice Bowl',
    diet: 'veg',
    image: '/images/food/thai-green-curry.jpg',
    description: 'Fragrant herb-forward green curry packed with zucchini, broccoli, and tofu alongside jasmine rice.',
    price: '₹420'
  },
  {
    id: 'rice-5',
    name: 'Boho Nasi Goreng',
    category: 'mains',
    subcategory: 'Boho Rice Bowl',
    diet: 'non-veg',
    isSignature: true,
    image: '/images/food/nasi-goreng.jpg',
    description: 'Indonesian stir-fried spiced rice topped with a runny fried egg, chicken satay skewers, and prawn crackers.',
    price: '₹480'
  },
  {
    id: 'rice-6',
    name: 'Chilly Chicken Noodles Bowl',
    category: 'mains',
    subcategory: 'Boho Rice Bowl',
    diet: 'non-veg',
    image: '/images/food/chilli-chicken-noodles.jpg',
    description: 'Wok-tossed hakka noodles loaded with crispy garlic-tossed chicken chunks, bell peppers, and scallions.',
    price: '₹430'
  },
  {
    id: 'rice-7',
    name: 'Vegan Oriental Tofu Bowl',
    category: 'mains',
    subcategory: 'Boho Rice Bowl',
    diet: 'veg',
    image: '/images/food/oriental-tofu-bowl.jpg',
    description: 'Crispy sesame-crusted tofu cubes over tossed edamame, sautéed bok choy, and steamed brown rice.',
    price: '₹410'
  },
  {
    id: 'rice-8',
    name: 'Paneer Chilli Noodles Bowl',
    category: 'mains',
    subcategory: 'Boho Rice Bowl',
    diet: 'veg',
    image: '/images/food/paneer-chilli-noodles.jpg',
    description: 'Tender cottage cheese tossed in sweet-and-spicy chili garlic sauce over wok noodles.',
    price: '₹390'
  },

  // --- FISH & PRAWNS ---
  {
    id: 'fish-1',
    name: 'Classic Fish and Chips',
    category: 'mains',
    subcategory: 'Fish & Prawns',
    diet: 'non-veg',
    image: '/images/food/fish-and-chips.jpg',
    description: 'Golden beer-battered fish fillets served with steak fries, house tartar sauce, and lemon wedges.',
    price: '₹490'
  },
  {
    id: 'fish-2',
    name: 'Chilly Butter Garlic Prawns',
    category: 'mains',
    subcategory: 'Fish & Prawns',
    diet: 'non-veg',
    isSignature: true,
    image: '/images/food/chilly-butter-garlic-prawns.jpg',
    description: 'Succulent river prawns pan-seared in rich garlic herb butter with a hint of red chili flakes and toasted sourdough.',
    price: '₹530'
  },

  // --- PASTA ---
  {
    id: 'pasta-1',
    name: 'Arrabbiata',
    category: 'mains',
    subcategory: 'Pasta',
    diet: 'veg',
    image: '/images/food/pasta-arrabbiata.jpg',
    description: 'Penne tossed in fiery San Marzano tomato sauce infused with garlic, red chilies, and fresh basil.',
    price: '₹380'
  },
  {
    id: 'pasta-2',
    name: 'Aglio e Olio',
    category: 'mains',
    subcategory: 'Pasta',
    diet: 'veg',
    image: '/images/food/pasta-aglio-olio.jpg',
    description: 'Spaghetti gently swirled in extra virgin olive oil, sliced golden garlic, chili flakes, and parsley.',
    price: '₹370'
  },
  {
    id: 'pasta-3',
    name: 'Creamy Mushroom',
    category: 'mains',
    subcategory: 'Pasta',
    diet: 'veg',
    image: '/images/food/pasta-creamy-mushroom.jpg',
    description: 'Fettuccine smothered in a rich roasted wild mushroom sauce, white wine reduction, and parmesan.',
    price: '₹410'
  },
  {
    id: 'pasta-4',
    name: 'Pink Sauce',
    category: 'mains',
    subcategory: 'Pasta',
    diet: 'veg',
    image: '/images/food/pasta-pink-sauce.jpg',
    description: 'Luscious medley of tart plum tomato pomodoro and smooth mascarpone cream.',
    price: '₹400'
  },

  // --- WHOLE GRAIN PIZZA ---
  {
    id: 'piz-1',
    name: 'The Exotic Pizza',
    category: 'mains',
    subcategory: 'Whole Grain Pizza',
    diet: 'veg',
    image: '/images/food/the-exotic-pizza.jpg',
    description: 'Crisp whole wheat crust loaded with sundried tomatoes, artichoke hearts, black olives, bell peppers, and fresh mozzarella.',
    price: '₹480'
  },
  {
    id: 'piz-2',
    name: 'Loaded Chicken Pizza',
    category: 'mains',
    subcategory: 'Whole Grain Pizza',
    diet: 'non-veg',
    image: '/images/food/loaded-chicken-pizza.jpg',
    description: 'Stone-baked whole grain crust with shredded herb chicken, spicy sausage slices, onions, and stringy mozzarella.',
    price: '₹520'
  },
  {
    id: 'piz-3',
    name: 'Peri-Peri Paneer with Veggie Delight',
    category: 'mains',
    subcategory: 'Whole Grain Pizza',
    diet: 'veg',
    image: '/images/food/peri-peri-paneer-pizza.jpg',
    description: 'Fiery peri-peri marinated paneer chunks, sweet corn, crunchy capsicum, and mozzarella blend.',
    price: '₹470'
  },

  // --- BOHO STEAKS & GRILL ---
  {
    id: 'grill-1',
    name: 'Peri Peri Chicken Steak',
    category: 'mains',
    subcategory: 'Boho Steaks & Grill',
    diet: 'non-veg',
    isSignature: true,
    image: '/images/food/peri-peri-chicken-steak.jpg',
    description: 'Flame-grilled marinated chicken breast basted in spicy African bird’s eye chili sauce, with mashed potatoes & sautéed veggies.',
    price: '₹510'
  },
  {
    id: 'grill-2',
    name: 'Grilled Chicken Steak in Hot Garlic Sauce',
    category: 'mains',
    subcategory: 'Boho Steaks & Grill',
    diet: 'non-veg',
    image: '/images/food/chicken-steak-garlic.jpg',
    description: 'Tender griddled chicken breast drenched in savory hot garlic glaze with herb rice.',
    price: '₹510'
  },
  {
    id: 'grill-3',
    name: 'Grilled Chicken in Creamy Mushroom Sauce',
    category: 'mains',
    subcategory: 'Boho Steaks & Grill',
    diet: 'non-veg',
    image: '/images/food/chicken-steak-mushroom.jpg',
    description: 'Pan-seared chicken steak served atop buttery potato mash and smothered in rich wild mushroom cream.',
    price: '₹530'
  },
  {
    id: 'grill-4',
    name: 'Peri Peri Cottage Cheese Steak',
    category: 'mains',
    subcategory: 'Boho Steaks & Grill',
    diet: 'veg',
    image: '/images/food/paneer-steak.jpg',
    description: 'Thick grilled slab of cottage cheese marinated in peri-peri spices, served with roasted vegetables and spiced couscous.',
    price: '₹460'
  },

  // --- BOHO WRAPS ---
  {
    id: 'wrap-1',
    name: 'Boho Paneer Chilli Wrap',
    category: 'mains',
    subcategory: 'Boho Wraps',
    diet: 'veg',
    image: '/images/food/paneer-chilli-wrap.jpg',
    description: 'Char-grilled whole wheat tortilla stuffed with spiced paneer, onions, crunchy lettuce, and mint yogurt dip.',
    price: '₹340'
  },
  {
    id: 'wrap-2',
    name: 'Boho Chicken Wrap',
    category: 'mains',
    subcategory: 'Boho Wraps',
    diet: 'non-veg',
    image: '/images/food/chicken-wrap.jpg',
    description: 'Warm tortilla wrapped around grilled shredded chicken, pickled gherkins, chipotle sauce, and crisp greens.',
    price: '₹370'
  },

  // --- BOHO PLATTERS ---
  {
    id: 'plat-1',
    name: 'Healthy Burrito Platter',
    category: 'mains',
    subcategory: 'Boho Platters',
    diet: 'veg',
    image: '/images/food/burrito-platter.jpg',
    description: 'Colorful sharing bowl with black beans, cilantro-lime rice, pico de gallo, roasted corn salsa, avocado slices, and tortilla crisps.',
    price: '₹460'
  },
  {
    id: 'plat-2',
    name: 'Mediterranean Platter',
    category: 'mains',
    subcategory: 'Boho Platters',
    diet: 'veg',
    isSignature: true,
    image: '/images/food/mediterranean-platter.jpg',
    description: 'Generous bohemian mezze feast: velvety hummus, smoky baba ganoush, crispy falafels, kalamata olives, pickled veggies, and warm pita pockets.',
    price: '₹490'
  },

  // --- DESSERTS ---
  {
    id: 'des-1',
    name: 'Biscoff Cheesecake',
    category: 'desserts',
    subcategory: 'Desserts',
    diet: 'veg',
    isSignature: true,
    image: '/images/food/biscoff-cheesecake.jpg',
    description: 'New York style set cheesecake layered on Lotus Biscoff biscuit crust, generously topped with warm spiced caramel Biscoff spread.',
    price: '₹390'
  },
  {
    id: 'des-2',
    name: 'Tiramisu',
    category: 'desserts',
    subcategory: 'Desserts',
    diet: 'egg',
    isSignature: true,
    image: '/images/food/tiramisu.jpg',
    description: 'Traditional Italian recipe with espresso-dipped savoiardi ladyfingers, whipped mascarpone cream, and Dutch cocoa dust.',
    price: '₹370'
  },
  {
    id: 'des-3',
    name: 'Carrot Cake with Ice Cream',
    category: 'desserts',
    subcategory: 'Desserts',
    diet: 'veg',
    image: '/images/food/carrot-cake.jpg',
    description: 'Warm spiced carrot sponge packed with walnuts and raisins, crowned with cream cheese frosting and a scoop of vanilla bean ice cream.',
    price: '₹350'
  },

  // --- SEASONAL MANGO DESSERTS ---
  {
    id: 'm-des-1',
    name: 'Mango Pull Me Up',
    category: 'desserts',
    subcategory: 'Seasonal Mango Desserts',
    diet: 'egg',
    isSignature: true,
    image: '/images/food/mango-pull-me-up.jpg',
    description: 'Interactive dessert theater: moist vanilla sponge cake enclosed in a clear cylinder, pulled up to reveal a cascading river of fresh Alphonso mango cream.',
    price: '₹420'
  },
  {
    id: 'm-des-2',
    name: 'Mango Cheesecake',
    category: 'desserts',
    subcategory: 'Seasonal Mango Desserts',
    diet: 'veg',
    image: '/images/food/mango-cheesecake.jpg',
    description: 'Smooth cold-set Philadelphia cream cheese cake infused and glazed with pure fresh Ratnagiri mango pulp.',
    price: '₹390'
  },
  {
    id: 'm-des-3',
    name: 'Mango Basque Cheesecake',
    category: 'desserts',
    subcategory: 'Seasonal Mango Desserts',
    diet: 'veg',
    image: '/images/food/mango-basque-cheesecake.jpg',
    description: 'Caramelized burnt basque cheesecake with an oozy custard center infused with fragrant Alphonso mango essence.',
    price: '₹410'
  }
];

export const APPETIZERS_PENDING_NOTE = {
  status: "Pending Owner Submission",
  title: "Appetizers & Tapas Section",
  message: "The appetizer card was reserved and is awaiting the final menu card image from the owner. Once provided, all items will be instantly updated in this digital catalogue."
};
