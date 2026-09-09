import { Product } from '../types';

export const INITIAL_PRODUCTS: Product[] = [
  // 1. Google Hoodies & Outerwear
  {
    id: 'prod-hoodie-05',
    sku: 'GGOEGXXX2631',
    name: 'Google Striped Sleeve Heavyweight Hoodie',
    brand: 'Google Apparel',
    brandCategory: 'Google',
    category: 'Hoodies',
    itemGroup: 'hoodies',
    price: 58.00,
    originalPrice: 68.00,
    rating: 4.9,
    reviewsCount: 215,
    badge: 'New',
    imageType: 'hoodie',
    accentColor: '#4285F4',
    imageUrl: '/assets/images/google_striped_hoodie_main_1788979308822.jpg',
    galleryImages: [
      '/assets/images/google_striped_hoodie_angle_1788979357741.jpg',
      '/assets/images/google_striped_hoodie_main_1788979308822.jpg'
    ],
    description: 'Official Google Unisex Striped Sleeve Hoodie (SKU: GGOEGXXX2631). Heavyweight fleece engineered for supreme everyday comfort. Features iconic Google primary color stripes (blue, red, yellow, green) on both upper sleeves, flat-knit white drawstrings, and front kangaroo pocket.',
    features: [
      'Heavyweight 80% combed organic cotton, 20% recycled polyester fleece',
      'Iconic Google primary color stripes knit directly into both sleeves',
      'Double-lined cozy hood with flat-braided contrasting white drawstrings',
      'Deep kangaroo pouch pocket with reinforced bartack stitching',
      'Pre-shrunk brushed interior fleece for long-lasting softness'
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    colors: [
      { name: 'Midnight Black', hex: '#111827', bgClass: 'bg-gray-950 border-black' },
      { name: 'Cloud Grey', hex: '#E5E7EB', bgClass: 'bg-gray-200 border-gray-300' }
    ],
    inStock: true,
    ecoCertified: true
  },
  {
    id: 'prod-hoodie-13',
    sku: 'GGOEGXXX2600',
    name: 'Google Embroidered Full-Zip Classic Hoodie',
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
    imageUrl: '/assets/images/google_zip_hoodie_flatlay_1788979575801.jpg',
    galleryImages: [
      '/assets/images/google_zip_hoodie_model_1788979590697.jpg',
      '/assets/images/google_zip_hoodie_flatlay_1788979575801.jpg'
    ],
    description: 'Official Google Embroidered Full-Zip Hoodie (SKU: GGOEGXXX2600). Classic heavyweight fleece featuring the signature vibrant Google logo embroidered on the left chest, full-length silver zipper, and contrasting white drawstrings.',
    features: [
      'Heavyweight 80% combed organic cotton, 20% recycled polyester fleece',
      'High-definition multi-color Google logo embroidered on left chest',
      'Full-length heavy-duty silver metal zipper closure',
      'Contrasting flat-braided white drawstrings and lined hood',
      'Split front pouch pockets with reinforced stitching'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    colors: [
      { name: 'Midnight Black', hex: '#111827', bgClass: 'bg-gray-950 border-black' },
      { name: 'Heather Charcoal', hex: '#4B5563', bgClass: 'bg-gray-600 border-gray-700' }
    ],
    inStock: true,
    ecoCertified: true
  },
  {
    id: 'prod-hoodie-14',
    sku: 'GGOEGXXX2647',
    name: 'Google Minimalist Heather Grey Pullover Hoodie',
    brand: 'Google Apparel',
    brandCategory: 'Google',
    category: 'Hoodies',
    itemGroup: 'hoodies',
    price: 54.00,
    rating: 4.9,
    reviewsCount: 340,
    badge: 'Staff Pick',
    imageType: 'hoodie',
    accentColor: '#9CA3AF',
    imageUrl: '/assets/images/google_grey_hoodie_flatlay_1788979770839.jpg',
    galleryImages: [
      '/assets/images/google_grey_hoodie_model_1788979794450.jpg',
      '/assets/images/google_grey_hoodie_flatlay_1788979770839.jpg'
    ],
    description: 'Official Google Heather Grey Pullover Hoodie (SKU: GGOEGXXX2647). Clean, modern pullover crafted in super-soft brushed fleece with subtle white tonal Google branding embroidered on the chest and a cozy front kangaroo pouch pocket.',
    features: [
      '80% combed organic cotton, 20% recycled polyester brushed fleece',
      'Tonal white Google logo embroidery on left chest',
      'Double-layer generous hood with seamless comfort neck tape',
      'Spacious front kangaroo pouch pocket with reinforced seams',
      'Pre-shrunk 360 GSM fleece maintains shape through frequent wear'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    colors: [
      { name: 'Heather Grey', hex: '#D1D5DB', bgClass: 'bg-gray-300 border-gray-400' },
      { name: 'Cloud White', hex: '#F3F4F6', bgClass: 'bg-gray-100 border-gray-300' }
    ],
    inStock: true,
    ecoCertified: true
  },

  // 2. Official Google T-Shirts & Graphic Tops
  {
    id: 'prod-tee-01',
    sku: 'GMSSGXXX1112',
    name: 'Google NYC Subway Emblem Heather Grey Tee',
    brand: 'Google Apparel',
    brandCategory: 'Google',
    category: 'T-Shirts',
    itemGroup: 'tshirts',
    price: 26.00,
    originalPrice: 30.00,
    rating: 4.9,
    reviewsCount: 342,
    badge: 'Member Exclusive',
    imageType: 'shirt',
    accentColor: '#1A73E8',
    imageUrl: '/assets/images/google_nyc_grey_tee_flatlay_1788980109063.jpg',
    galleryImages: [
      '/assets/images/google_nyc_grey_tee_model_1788980121361.jpg',
      '/assets/images/google_nyc_grey_tee_flatlay_1788980109063.jpg'
    ],
    description: 'Official Google Store NYC Edition Tee (SKU: GMSSGXXX1112). Crafted from ultra-soft combed tri-blend jersey featuring the exclusive white NYC subway bullet emblem printed on the left chest with an itch-free tagless neck collar.',
    features: [
      'Super-soft 50% combed ring-spun cotton, 50% recycled polyester',
      'Official Google Store NYC edition subway bullet chest graphic',
      'Tailored side-seam construction with double-needle hems',
      'Printed interior tagless neck label for all-day comfort'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    colors: [
      { name: 'Heather Grey', hex: '#D1D5DB', bgClass: 'bg-gray-300 border-gray-400' },
      { name: 'Pure White', hex: '#FFFFFF', bgClass: 'bg-white border-gray-300' }
    ],
    inStock: true,
    ecoCertified: true
  },
  {
    id: 'prod-tee-15',
    sku: 'GGOEGXXX2645',
    name: 'Google Classic Wordmark Terracotta Coral Tee',
    brand: 'Google Apparel',
    brandCategory: 'Google',
    category: 'T-Shirts',
    itemGroup: 'tshirts',
    price: 26.00,
    rating: 4.9,
    reviewsCount: 214,
    badge: 'New',
    imageType: 'shirt',
    accentColor: '#EA4335',
    imageUrl: '/assets/images/google_coral_tee_flatlay_1788980445206.jpg',
    galleryImages: [
      '/assets/images/google_coral_tee_model_1788980464080.jpg',
      '/assets/images/google_coral_tee_flatlay_1788980445206.jpg'
    ],
    description: 'Official Google Classic Wordmark Tee (SKU: GGOEGXXX2645). Premium organic ring-spun cotton t-shirt in vintage terracotta coral red, featuring the clean white Google logo centered across the chest and tagless neck comfort.',
    features: [
      '100% combed ring-spun certified organic cotton jersey (185 GSM)',
      'Crisp white Google logo centered across chest with durable screen print',
      'Ribbed crewneck collar with reinforced shoulder-to-shoulder taping',
      'Heat-transferred tagless neck label for seamless itch-free wear'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    colors: [
      { name: 'Terracotta Coral', hex: '#E05A47', bgClass: 'bg-red-500 border-red-600' },
      { name: 'Pure White', hex: '#FFFFFF', bgClass: 'bg-white border-gray-300' }
    ],
    inStock: true,
    ecoCertified: true
  },
  {
    id: 'prod-tee-16',
    sku: 'GGOEGXXX2639',
    name: 'Google Subtle Wordmark Periwinkle Blue Tee',
    brand: 'Google Apparel',
    brandCategory: 'Google',
    category: 'T-Shirts',
    itemGroup: 'tshirts',
    price: 26.00,
    rating: 4.9,
    reviewsCount: 165,
    badge: 'Creator Pick',
    imageType: 'shirt',
    accentColor: '#818CF8',
    imageUrl: '/assets/images/google_periwinkle_tee_flatlay_1788980712677.jpg',
    galleryImages: [
      '/assets/images/google_periwinkle_tee_model_1788980733968.jpg',
      '/assets/images/google_periwinkle_tee_flatlay_1788980712677.jpg'
    ],
    description: 'Official Google Subtle Wordmark Tee (SKU: GGOEGXXX2639). Crafted in a soft periwinkle dusty blue tone with the minimalist white Google logo printed cleanly on the left chest. Features breathable organic combed cotton and tagless comfort.',
    features: [
      '100% combed organic ring-spun cotton jersey (180 GSM)',
      'Subtle minimalist white Google logo printed on left chest',
      'Soft-washed periwinkle blue garment dye with vintage drape',
      'Tagless itch-free heat-sealed neck label'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    colors: [
      { name: 'Periwinkle Blue', hex: '#93A3DC', bgClass: 'bg-indigo-300 border-indigo-400' },
      { name: 'Cloud White', hex: '#F9FAFB', bgClass: 'bg-gray-50 border-gray-300' }
    ],
    inStock: true,
    ecoCertified: true
  },
  {
    id: 'prod-tee-17',
    sku: 'GGOEGXXX2632',
    name: 'Google Cadet Collar Quarter-Zip Pullover',
    brand: 'Google Apparel',
    brandCategory: 'Google',
    category: 'T-Shirts',
    itemGroup: 'tshirts',
    price: 48.00,
    rating: 4.9,
    reviewsCount: 184,
    badge: 'Staff Pick',
    imageType: 'shirt',
    accentColor: '#174EA6',
    imageUrl: '/assets/images/google_quarterzip_pullover_flatlay_1788980964538.jpg',
    galleryImages: [
      '/assets/images/google_quarterzip_pullover_model_1788980977494.jpg',
      '/assets/images/google_quarterzip_pullover_flatlay_1788980964538.jpg'
    ],
    description: 'Official Google Cadet Collar Quarter-Zip Pullover (SKU: GGOEGXXX2632). Versatile dark navy fleece pullover with mock neck collar, tonal reverse-coil quarter zipper, and clean white Google chest logo.',
    features: [
      'Heavyweight 8.5 oz ring-spun cotton and recycled poly fleece',
      'Cadet mock collar with covered nylon zipper and metal pull',
      'Precision white Google logo screen printed on left chest',
      'Ribbed spandex cuffs and waistband for premium shape retention',
      'Side-seamed athletic construction with twin-needle stitching'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    colors: [
      { name: 'Dark Navy', hex: '#1E293B', bgClass: 'bg-slate-800 border-slate-900' },
      { name: 'Heather Charcoal', hex: '#374151', bgClass: 'bg-gray-700 border-gray-800' }
    ],
    inStock: true,
    ecoCertified: true
  },

  // 3. YouTube Gear & Creator Studio
  {
    id: 'prod-crew-06',
    sku: 'GGOEYXXX2636',
    name: 'YouTube Play Icon Heather Grey Crewneck',
    brand: 'YouTube Gear',
    brandCategory: 'YouTube',
    category: 'YouTube Gear',
    itemGroup: 'youtube',
    price: 48.00,
    rating: 4.9,
    reviewsCount: 228,
    badge: 'Top Rated',
    imageType: 'crewneck',
    accentColor: '#FF0000',
    imageUrl: '/assets/images/youtube_grey_crewneck_flatlay_1788981142932.jpg',
    galleryImages: [
      '/assets/images/youtube_grey_crewneck_model_1788981162494.jpg',
      '/assets/images/youtube_grey_crewneck_flatlay_1788981142932.jpg'
    ],
    description: 'Official YouTube Creator Studio Crewneck Sweatshirt (SKU: GGOEYXXX2636). Premium fleece pullover in athletic heather grey with the iconic red YouTube play button embroidered precisely on the left chest and a tagless neck label.',
    features: [
      '80% combed cotton, 20% polyester pre-shrunk fleece (320 GSM)',
      'Iconic red YouTube play icon embroidery on chest with high-density satin stitch',
      'Ribbed spandex collar, cuffs, and hem for enduring shape retention',
      'Printed interior collar neck label for scratch-free comfort'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    colors: [
      { name: 'Heather Grey', hex: '#D1D5DB', bgClass: 'bg-gray-300 border-gray-400' },
      { name: 'Oatmeal Chalk', hex: '#F5F5F4', bgClass: 'bg-stone-100 border-stone-300' }
    ],
    inStock: true,
    ecoCertified: true
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
