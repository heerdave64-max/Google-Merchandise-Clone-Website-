import { Product } from '../types';

export const INITIAL_PRODUCTS: Product[] = [
  // 1. Google Hoodies & Outerwear
  {
    id: 'prod-hoodie-05',
    name: 'Google Cloud Architect Heavyweight Hoodie',
    brand: 'Google Cloud',
    brandCategory: 'Google Cloud',
    category: 'Hoodies',
    itemGroup: 'hoodies',
    price: 58.00,
    originalPrice: 68.00,
    rating: 4.9,
    reviewsCount: 215,
    badge: 'New',
    imageType: 'hoodie',
    accentColor: '#4285F4',
    description: 'Heavyweight 380 GSM brushed fleece engineered for supreme comfort during marathon coding sessions. Features subtle tone-on-tone embroidered Google Cloud hexagon emblem on the cuff and flat-knit drawstrings.',
    features: [
      'Heavyweight 80% combed cotton, 20% recycled polyester fleece',
      'Double-lined cozy hood with flat-braided drawstrings',
      'Hidden interior kangaroo pocket zip compartment for phone',
      'Ribbed side stretch gussets for unrestricted movement'
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    colors: [
      { name: 'Cloud Grey', hex: '#E5E7EB', bgClass: 'bg-gray-200 border-gray-300' },
      { name: 'Deep Space Blue', hex: '#1E293B', bgClass: 'bg-slate-800 border-slate-900' }
    ],
    inStock: true,
    ecoCertified: true
  },
  {
    id: 'prod-hoodie-13',
    name: 'Google Minimalist Full-Zip Tech Hoodie',
    brand: 'Google Apparel',
    brandCategory: 'Google',
    category: 'Hoodies',
    itemGroup: 'hoodies',
    price: 64.00,
    originalPrice: 76.00,
    rating: 4.8,
    reviewsCount: 168,
    badge: 'Creator Pick',
    imageType: 'hoodie',
    accentColor: '#34A853',
    description: 'Ultra-clean bonded scuba-knit full zip jacket with four-way stretch. Subtle matte silicone Google logo at hem and hidden headphone cord passthrough.',
    features: [
      'Scuba-knit bonded technical fleece with weather-resistant DWR finish',
      'Full two-way YKK matte black zipper closure',
      'Deep ergonomic thumbholes on sleeves for chilly mornings',
      'Interior zippered media pocket'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Matte Obsidian', hex: '#111827', bgClass: 'bg-gray-950 border-black' },
      { name: 'Heather Charcoal', hex: '#4B5563', bgClass: 'bg-gray-600 border-gray-700' }
    ],
    inStock: true,
    ecoCertified: true
  },
  {
    id: 'prod-hoodie-14',
    name: 'Chrome Offline Dino Embroidered Pullover',
    brand: 'Google Apparel',
    brandCategory: 'Google',
    category: 'Hoodies',
    itemGroup: 'hoodies',
    price: 52.00,
    rating: 4.9,
    reviewsCount: 340,
    badge: 'Staff Pick',
    imageType: 'hoodie',
    accentColor: '#FBBC04',
    description: 'Celebrate the iconic offline Chrome T-Rex runner game with this tactile pixel embroidery on premium organic cotton fleece.',
    features: [
      '100% GOTS-certified ring-spun organic cotton fleece',
      'High-density pixel embroidery of the jumping Dino',
      'Soft brushed interior with anti-pilling treatment',
      'Pre-shrunk to retain tailored shape after repeated washing'
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    colors: [
      { name: 'Heather Grey', hex: '#D1D5DB', bgClass: 'bg-gray-300 border-gray-400' },
      { name: 'Midnight Black', hex: '#1F2937', bgClass: 'bg-gray-800 border-gray-900' }
    ],
    inStock: true,
    ecoCertified: true
  },

  // 2. Official Google T-Shirts & Graphic Tops
  {
    id: 'prod-tee-01',
    name: 'Google Organic Cotton Quad-Logo Tee',
    brand: 'Google Apparel',
    brandCategory: 'Google',
    category: 'T-Shirts',
    itemGroup: 'tshirts',
    price: 24.00,
    originalPrice: 28.00,
    rating: 4.9,
    reviewsCount: 342,
    badge: 'Eco-Organic',
    imageType: 'shirt',
    accentColor: '#1A73E8',
    description: 'Crafted from 100% GOTS-certified ring-spun organic cotton with a tailored modern drape. Features the iconic embroidered four-color Google chest logo with soft water-based eco inks.',
    features: [
      '100% GOTS-Certified Organic Combed Cotton',
      'Pre-shrunk ring-spun jersey fabric (180 GSM)',
      'Tagless itch-free heat-sealed neck label',
      'Carbon-neutral certified manufacturing'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    colors: [
      { name: 'Heather White', hex: '#F8F9FA', bgClass: 'bg-gray-100 border-gray-300' },
      { name: 'Google Navy', hex: '#174EA6', bgClass: 'bg-blue-900 border-blue-950' },
      { name: 'Charcoal Black', hex: '#202124', bgClass: 'bg-gray-900 border-black' }
    ],
    inStock: true,
    ecoCertified: true
  },
  {
    id: 'prod-tee-15',
    name: 'Google Developer Sunset Gradient Tee',
    brand: 'Google Apparel',
    brandCategory: 'Google',
    category: 'T-Shirts',
    itemGroup: 'tshirts',
    price: 26.00,
    rating: 4.8,
    reviewsCount: 198,
    badge: 'New',
    imageType: 'shirt',
    accentColor: '#EA4335',
    description: 'Limited summer edition tee featuring the Google I/O sunset gradient ribbon across a lightweight breathable fabric.',
    features: [
      'Super-soft tri-blend combed cotton and modal weave',
      'Screen printed with eco-friendly breathable water inks',
      'Reinforced shoulder seam binding for shape retention',
      'Official Google Developer Conference edition'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Sand Chalk', hex: '#F5F5F4', bgClass: 'bg-stone-100 border-stone-300' },
      { name: 'Slate Teal', hex: '#0F766E', bgClass: 'bg-teal-700 border-teal-800' }
    ],
    inStock: true,
    ecoCertified: true
  },
  {
    id: 'prod-tee-16',
    name: 'Android 15 Bugdroid Pixel Graphic Tee',
    brand: 'Android Collection',
    brandCategory: 'Android',
    category: 'T-Shirts',
    itemGroup: 'tshirts',
    price: 25.00,
    rating: 4.8,
    reviewsCount: 147,
    badge: 'Creator Pick',
    imageType: 'shirt',
    accentColor: '#34A853',
    description: 'The updated 3D Android mascot in vivid pixel-art styling. Designed in partnership with the Android system design team.',
    features: [
      '100% Ring-Spun organic jersey',
      'High-resolution soft touch graphic print',
      'Blind hem stitch on sleeves and bottom hem',
      'Ribbed collar with Lycra stretch'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    colors: [
      { name: 'Android Green', hex: '#3DDC84', bgClass: 'bg-emerald-500 border-emerald-600' },
      { name: 'Heather Grey', hex: '#E5E7EB', bgClass: 'bg-gray-200 border-gray-300' }
    ],
    inStock: true,
    ecoCertified: true
  },
  {
    id: 'prod-tee-17',
    name: 'YouTube "Broadcast Yourself" Vintage Tee',
    brand: 'YouTube Gear',
    brandCategory: 'YouTube',
    category: 'T-Shirts',
    itemGroup: 'tshirts',
    price: 24.00,
    rating: 4.7,
    reviewsCount: 220,
    badge: 'Member Exclusive',
    imageType: 'shirt',
    accentColor: '#FF0000',
    description: 'Nostalgic tribute to the original YouTube founding slogan with distressed retro lettering and red woven hem tag.',
    features: [
      'Garment-dyed vintage wash cotton jersey',
      'Distressed cracked water-base typography',
      'Official YouTube play icon on back neck',
      'Relaxed vintage streetwear fit'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Washed Black', hex: '#262626', bgClass: 'bg-neutral-800 border-black' },
      { name: 'Vintage Red', hex: '#DC2626', bgClass: 'bg-red-600 border-red-700' }
    ],
    inStock: true
  },

  // 3. YouTube Gear & Creator Studio
  {
    id: 'prod-crew-06',
    name: 'YouTube Creator Studio Vintage Crewneck',
    brand: 'YouTube Gear',
    brandCategory: 'YouTube',
    category: 'YouTube Gear',
    itemGroup: 'youtube',
    price: 46.00,
    rating: 4.8,
    reviewsCount: 204,
    badge: 'Top Rated',
    imageType: 'crewneck',
    accentColor: '#EA4335',
    description: 'Vintage-washed loopback French terry crewneck pullover designed for content creators. Features subtle red contrast collar stitch and minimalist chest print.',
    features: [
      '100% French Terry Cotton loopback interior',
      'Pre-washed garment dye finish for ultra-soft lived-in handfeel',
      'Reinforced double-needle collar, hem, and cuffs',
      'Official YouTube Creator verification hangtag'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Oatmeal Heather', hex: '#F3F4F6', bgClass: 'bg-stone-200 border-stone-300' },
      { name: 'Washed Charcoal', hex: '#374151', bgClass: 'bg-gray-700 border-gray-800' }
    ],
    inStock: true
  },
  {
    id: 'prod-bottle-02',
    name: 'Insulated Stainless Steel Water Bottle',
    brand: 'YouTube Gear',
    brandCategory: 'YouTube',
    category: 'YouTube Gear',
    itemGroup: 'youtube',
    price: 28.00,
    originalPrice: 34.00,
    rating: 4.8,
    reviewsCount: 512,
    badge: 'Top Rated',
    imageType: 'bottle',
    accentColor: '#FF0000',
    description: 'Double-walled vacuum insulated 24oz water bottle featuring a precision laser-etched YouTube play glyph. Keeps beverages frosty cold for 24 hours or steaming hot for 12 hours.',
    features: [
      'Pro-grade 18/8 food-grade stainless steel',
      'TempShield™ double wall vacuum insulation',
      'Leakproof sports spout with ergonomic carry loop',
      'BPA-free, phthalate-free, non-toxic powder coat finish'
    ],
    colors: [
      { name: 'Matte Black', hex: '#202124', bgClass: 'bg-gray-900 border-black' },
      { name: 'YouTube Red', hex: '#FF0000', bgClass: 'bg-red-600 border-red-700' },
      { name: 'Arctic White', hex: '#FFFFFF', bgClass: 'bg-white border-gray-300' }
    ],
    inStock: true,
    ecoCertified: true
  },
  {
    id: 'prod-key-11',
    name: 'YouTube Play Button Stainless Steel Keychain',
    brand: 'YouTube Gear',
    brandCategory: 'YouTube',
    category: 'YouTube Gear',
    itemGroup: 'youtube',
    price: 12.00,
    rating: 4.9,
    reviewsCount: 388,
    badge: 'Staff Pick',
    imageType: 'keychain',
    accentColor: '#FF0000',
    description: 'Die-cast high-gloss mirror-polished stainless steel replica of the celebrated YouTube Play Button with high-durability epoxy red enamel inlay.',
    features: [
      'Solid mirror-polished 316L stainless steel',
      'Scratch-resistant baked automotive-grade enamel',
      'Heavy-duty flat split key ring and micro carabiner clip',
      'Laser-engraved "Creator Milestone" on back'
    ],
    colors: [
      { name: 'Silver Mirror', hex: '#E5E7EB', bgClass: 'bg-gray-200 border-gray-400' },
      { name: 'Gold Mirror', hex: '#FBBF24', bgClass: 'bg-amber-300 border-amber-400' }
    ],
    inStock: true
  },
  {
    id: 'prod-yt-18',
    name: 'YouTube Studio LED "On-Air" Lightbox',
    brand: 'YouTube Gear',
    brandCategory: 'YouTube',
    category: 'YouTube Gear',
    itemGroup: 'youtube',
    price: 38.00,
    originalPrice: 45.00,
    rating: 4.9,
    reviewsCount: 280,
    badge: 'Creator Pick',
    imageType: 'lamp',
    accentColor: '#EA4335',
    description: 'The ultimate streaming desk accessory. Dual-color acrylic LED lightbox with USB-C power or AA battery backup. Can be desk-mounted or wall-hung.',
    features: [
      'Vibrant dual illumination (Red Recording / Warm White Standby)',
      'USB-C powered with touch on/off power toggle',
      'Includes 2-meter braided textile cable',
      'Keyhole slots on back for easy wall hanging'
    ],
    colors: [
      { name: 'Studio Red', hex: '#DC2626', bgClass: 'bg-red-600 border-red-700' }
    ],
    inStock: true
  },

  // 4. Lifestyle & Desk Collectibles
  {
    id: 'prod-bot-03',
    name: 'Android Bot Articulated Vinyl Figurine',
    brand: 'Android Collection',
    brandCategory: 'Android',
    category: 'Lifestyle',
    itemGroup: 'lifestyle',
    price: 18.50,
    rating: 4.9,
    reviewsCount: 189,
    badge: 'Staff Pick',
    imageType: 'robot',
    accentColor: '#34A853',
    description: 'The beloved classic Android Bugdroid collectible vinyl figurine with 360-degree rotating head and articulated arms. Packaged in a commemorative collector window box.',
    features: [
      'Official Google Android licensed collectible',
      'Articulated rotating arms and posable head',
      '3.5 inches tall matte vinyl build',
      'Includes collectible foil authenticity seal'
    ],
    colors: [
      { name: 'Android Green', hex: '#3DDC84', bgClass: 'bg-emerald-500 border-emerald-600' },
      { name: 'Chrome Silver', hex: '#D1D5DB', bgClass: 'bg-gray-300 border-gray-400' }
    ],
    inStock: true
  },
  {
    id: 'prod-lamp-07',
    name: 'Chrome Dino Touch LED Ambient Desk Lamp',
    brand: 'Google Accessories',
    brandCategory: 'Google',
    category: 'Lifestyle',
    itemGroup: 'lifestyle',
    price: 34.00,
    originalPrice: 39.00,
    rating: 4.9,
    reviewsCount: 421,
    badge: 'Top Rated',
    imageType: 'lamp',
    accentColor: '#FBBC04',
    description: 'Pay homage to the iconic "No Internet" T-Rex with this minimalist pixel-art ambient desk light. Features 3 warm-to-cool Kelvin color temperatures with touch dimming.',
    features: [
      '3000K–5000K adjustable eye-comfort flicker-free LED',
      'USB-C rechargeable with 14-hour portable battery life',
      'Silicone base prevents slipping and protects wooden surfaces',
      'Touch-sensitive cactus power button'
    ],
    colors: [
      { name: 'Classic Grey', hex: '#6B7280', bgClass: 'bg-gray-500 border-gray-600' }
    ],
    inStock: true
  },
  {
    id: 'prod-sleeve-10',
    name: 'Pixel & Laptop Recycled Felt Protective Sleeve',
    brand: 'Google Accessories',
    brandCategory: 'Google',
    category: 'Lifestyle',
    itemGroup: 'lifestyle',
    price: 26.00,
    originalPrice: 32.00,
    rating: 4.8,
    reviewsCount: 118,
    badge: 'New',
    imageType: 'sleeve',
    accentColor: '#5F6368',
    description: 'Precision molded sleeve crafted from 100% recycled PET felt with magnetic snap closure. Fits Pixel Fold, Pixel Tablets, and 13"-14" laptops snugly.',
    features: [
      'Water-repellent anti-scratch felt composite',
      'Concealed silent magnetic closure mechanism',
      'Rear accessory pocket for charger cords and earbuds',
      'Embossed subtle Google "G" emblem'
    ],
    sizes: ['13-inch', '15-inch'],
    colors: [
      { name: 'Chalk White', hex: '#F3F4F6', bgClass: 'bg-gray-200 border-gray-300' },
      { name: 'Charcoal Grey', hex: '#374151', bgClass: 'bg-gray-700 border-gray-800' }
    ],
    inStock: true,
    ecoCertified: true
  },
  {
    id: 'prod-mug-12',
    name: 'Android Ceramic Speckled Developer Mug',
    brand: 'Android Collection',
    brandCategory: 'Android',
    category: 'Lifestyle',
    itemGroup: 'lifestyle',
    price: 15.00,
    rating: 4.7,
    reviewsCount: 152,
    badge: 'Staff Pick',
    imageType: 'mug',
    accentColor: '#34A853',
    description: 'Generous 16oz speckled ceramic campfire mug with heat-retaining thick walls and an ergonomic comfort handle. Dishwasher and microwave safe.',
    features: [
      '16oz handmade speckled stoneware ceramic',
      'Microwave, oven, and dishwasher safe glazed surface',
      'Embossed dual-sided Android logo and Kotlin syntax motif',
      'Wide steady base to avoid desk spills during late night compiles'
    ],
    colors: [
      { name: 'Android Mint', hex: '#A7F3D0', bgClass: 'bg-emerald-200 border-emerald-300' },
      { name: 'Matte Obsidian', hex: '#1F2937', bgClass: 'bg-gray-800 border-gray-900' }
    ],
    inStock: true
  },

  // 5. Eco-Friendly & Stationery
  {
    id: 'prod-bag-04',
    name: 'Recycled Ocean-Bound Commuter Backpack',
    brand: 'Google Accessories',
    brandCategory: 'Google',
    category: 'Eco-Friendly',
    itemGroup: 'stationery',
    price: 62.00,
    originalPrice: 75.00,
    rating: 4.9,
    reviewsCount: 278,
    badge: 'Eco-Organic',
    imageType: 'backpack',
    accentColor: '#1A73E8',
    description: 'Constructed from 28 recycled ocean-bound plastic bottles (RPET). Features padded protection for up to 16" laptops, hidden passport anti-theft pocket, and water-repellent coating.',
    features: [
      'Made with 100% post-consumer recycled RPET canvas',
      'Dedicated plush fleece-lined 16" laptop compartment',
      'Luggage pass-through strap for rolling carry-ons',
      'Waterproof YKK zippers and breathable air-mesh back panel'
    ],
    colors: [
      { name: 'Heather Slate', hex: '#4B5563', bgClass: 'bg-gray-600 border-gray-700' },
      { name: 'Stealth Black', hex: '#111827', bgClass: 'bg-gray-950 border-black' }
    ],
    inStock: true,
    ecoCertified: true
  },
  {
    id: 'prod-note-08',
    name: 'Eco Cork Hardcover Journal & Bamboo Pen',
    brand: 'Stationery',
    brandCategory: 'Google',
    category: 'Stationery',
    itemGroup: 'stationery',
    price: 16.50,
    rating: 4.8,
    reviewsCount: 96,
    badge: 'Eco-Organic',
    imageType: 'notebook',
    accentColor: '#34A853',
    description: 'Sustainably harvested Mediterranean cork hardcover filled with 192 numbered pages of fountain-pen-friendly stone paper. Includes matching refillable bamboo ballpoint pen.',
    features: [
      '100% natural water-resistant cork grain cover',
      'Treeless calcium carbonate stone paper (tear & water resistant)',
      'Built-in expandable inner back pocket and ribbon bookmark',
      'Includes 1.0mm smooth gel bamboo Google stylus pen'
    ],
    colors: [
      { name: 'Natural Cork', hex: '#D7A76E', bgClass: 'bg-amber-200 border-amber-300' },
      { name: 'Dark Bark', hex: '#78350F', bgClass: 'bg-amber-900 border-amber-950' }
    ],
    inStock: true,
    ecoCertified: true
  },
  {
    id: 'prod-tote-09',
    name: 'Google Organic Heavy Canvas Market Tote',
    brand: 'Google Apparel',
    brandCategory: 'Google',
    category: 'Eco-Friendly',
    itemGroup: 'stationery',
    price: 19.00,
    rating: 4.7,
    reviewsCount: 163,
    badge: 'Eco-Organic',
    imageType: 'tote',
    accentColor: '#4285F4',
    description: 'Sturdy 14oz unbleached organic fair-trade cotton canvas tote bag with reinforced dual shoulder straps and internal zippered organization pouch for keys and phones.',
    features: [
      '14oz Heavyweight 100% GOTS Certified Canvas',
      'Internal zippered security pouch for keys & cards',
      'Reinforced cross-stitch 28" shoulder drop handles',
      'Washable and designed for a lifetime of grocery and work runs'
    ],
    colors: [
      { name: 'Natural Ecru', hex: '#FEF3C7', bgClass: 'bg-amber-50 border-amber-200' },
      { name: 'Forest Green', hex: '#065F46', bgClass: 'bg-emerald-800 border-emerald-900' }
    ],
    inStock: true,
    ecoCertified: true
  }
];
