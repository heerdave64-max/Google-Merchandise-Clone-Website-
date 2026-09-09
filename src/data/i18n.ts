import { LanguageCode } from '../types';

export interface LanguageOption {
  code: LanguageCode;
  name: string;
  nativeName: string;
  flag: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'en', name: 'English (US)', nativeName: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' }
];

export interface TranslationDictionary {
  announcementText: string;
  announcementCode: string;
  creatorTag: string;
  influencerPortalBtn: string;
  searchPlaceholder: string;
  categories: {
    all: string;
    hoodies: string;
    tshirts: string;
    youtube: string;
    lifestyle: string;
    stationery: string;
    ecoFriendly: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    shopNewArrivals: string;
    exploreBrands: string;
    memberDrop: string;
    memberDropDesc: string;
  };
  sections: {
    curatedShowcase: string;
    curatedDesc: string;
    viewAll: string;
    backToShowcase: string;
    showingResultsFor: string;
    allCategories: string;
    resetFilters: string;
    noProductsFound: string;
    noProductsSub: string;
  };
  showcaseTitles: {
    hoodies: string;
    hoodiesDesc: string;
    tshirts: string;
    tshirtsDesc: string;
    youtube: string;
    youtubeDesc: string;
    lifestyle: string;
    lifestyleDesc: string;
    stationery: string;
    stationeryDesc: string;
  };
  product: {
    addToBag: string;
    addedToBag: string;
    quickView: string;
    inStock: string;
    reviews: string;
    selectSize: string;
    selectColor: string;
    features: string;
    sustainableNote: string;
  };
  cart: {
    title: string;
    freeShippingGoal: string;
    freeShippingUnlocked: string;
    awayFromShipping: string;
    promoPlaceholder: string;
    applyCode: string;
    removeCode: string;
    subtotal: string;
    discount: string;
    shipping: string;
    free: string;
    tax: string;
    total: string;
    checkoutGPay: string;
    checkoutStandard: string;
    emptyCartTitle: string;
    emptyCartDesc: string;
    startShopping: string;
  };
  creatorHub: {
    title: string;
    subtitle: string;
    tabFan: string;
    tabCreator: string;
    activeSupporting: string;
    fanDiscountBadge: string;
    applyCreatorCode: string;
    applied: string;
    removeCreator: string;
    creatorFaves: string;
    dashboardTitle: string;
    dashboardDesc: string;
    metricClicks: string;
    metricOrders: string;
    metricSales: string;
    metricEarnings: string;
    yourRefLink: string;
    copyLink: string;
    copied: string;
    testInCart: string;
    requestPayout: string;
    payoutModalTitle: string;
    payoutSuccess: string;
    payoutSubtext: string;
  };
  footer: {
    rights: string;
    shopBrands: string;
    sustainability: string;
    support: string;
    preferences: string;
  };
}

export const TRANSLATIONS: Record<LanguageCode, TranslationDictionary> = {
  en: {
    announcementText: 'Complimentary worldwide carbon-neutral delivery on all orders over',
    announcementCode: 'Use promo code',
    creatorTag: 'Creator Program',
    influencerPortalBtn: 'Creator & Affiliate Hub',
    searchPlaceholder: 'Search official hoodies, tees, collectibles, bottles...',
    categories: {
      all: 'All Categories',
      hoodies: 'Hoodies & Outerwear',
      tshirts: 'T-Shirts & Tops',
      youtube: 'YouTube Gear',
      lifestyle: 'Lifestyle & Tech',
      stationery: 'Stationery & Eco',
      ecoFriendly: 'Eco-Friendly'
    },
    hero: {
      eyebrow: 'Google Merchandise Store 2026 Collection',
      title: 'Designed for creators, builders, and dreamers.',
      subtitle: 'Premium sustainable apparel, YouTube creator essentials, and exclusive Google collectibles delivered worldwide.',
      shopNewArrivals: 'Shop New Arrivals',
      exploreBrands: 'Explore Brands',
      memberDrop: 'Google Member Collection 2026',
      memberDropDesc: 'Limited edition organic hoodies, water bottles, and bugdroid vinyls with member perks.'
    },
    sections: {
      curatedShowcase: 'Curated Category Spotlights',
      curatedDesc: 'Explore highlights from each category. Click "View All" on any section to open the complete category collection.',
      viewAll: 'View All',
      backToShowcase: '← Back to All Showcases',
      showingResultsFor: 'Browsing Category',
      allCategories: 'All Products',
      resetFilters: 'Reset All Filters',
      noProductsFound: 'No merchandise found',
      noProductsSub: 'Try adjusting your search terms or filter selection.'
    },
    showcaseTitles: {
      hoodies: 'Google Hoodies & Outerwear',
      hoodiesDesc: 'Brushed fleece and technical pullovers engineered for comfort during late night coding sprints.',
      tshirts: 'Official T-Shirts & Graphic Tops',
      tshirtsDesc: '100% GOTS organic ring-spun cotton tees with iconic developer motifs and retro emblems.',
      youtube: 'YouTube Creator Studio Gear',
      youtubeDesc: 'Official gear for content creators, vloggers, and community streamers worldwide.',
      lifestyle: 'Lifestyle, Tech & Desk Collectibles',
      lifestyleDesc: 'Articulated Bugdroid figures, touch ambient LED lamps, and padded laptop sleeves.',
      stationery: 'Eco Stationery & Sustainable Carry',
      stationeryDesc: 'Stone paper cork journals, recycled aluminum styluses, and heavyweight canvas bags.'
    },
    product: {
      addToBag: 'Add to Bag',
      addedToBag: 'Added to Bag!',
      quickView: 'Quick View',
      inStock: 'In Stock & Ready to Ship',
      reviews: 'reviews',
      selectSize: 'Select Size',
      selectColor: 'Color Shade',
      features: 'Product Highlights',
      sustainableNote: 'Certified Sustainable & Fair Trade'
    },
    cart: {
      title: 'Your Shopping Bag',
      freeShippingGoal: 'Free Express Shipping unlocked!',
      freeShippingUnlocked: 'You qualified for complimentary worldwide delivery!',
      awayFromShipping: 'away from Free Express Delivery',
      promoPlaceholder: 'Enter creator or promo code...',
      applyCode: 'Apply',
      removeCode: 'Remove',
      subtotal: 'Merchandise Subtotal',
      discount: 'Discounts & Creator Savings',
      shipping: 'Express Delivery',
      free: 'FREE',
      tax: 'Estimated Tax (US)',
      total: 'Estimated Total',
      checkoutGPay: 'Buy with Google Pay',
      checkoutStandard: 'Proceed to Secure Checkout',
      emptyCartTitle: 'Your bag is empty',
      emptyCartDesc: 'Explore official Google hoodies, tees, and desk collectibles.',
      startShopping: 'Start Browsing Merch'
    },
    creatorHub: {
      title: 'Google Creator & Affiliate Hub',
      subtitle: 'Empowering creators with exclusive discount codes, fan storefronts, and direct commission earnings.',
      tabFan: 'Fan Discounts & Creator Picks',
      tabCreator: 'Creator Earnings & Dashboard',
      activeSupporting: 'Active Creator Referral',
      fanDiscountBadge: 'Discount for Fans',
      applyCreatorCode: 'Apply Creator Code',
      applied: 'Applied to Cart',
      removeCreator: 'Clear Creator Code',
      creatorFaves: 'Curated Favorites by',
      dashboardTitle: 'Influencer Referral Management',
      dashboardDesc: 'Track live links, fan conversion metrics, and cash commissions in your preferred currency.',
      metricClicks: 'Total Link Clicks',
      metricOrders: 'Orders Referred',
      metricSales: 'Gross Sales Volume',
      metricEarnings: 'Commission Earned',
      yourRefLink: 'Your Trackable Referral Link',
      copyLink: 'Copy Referral Link',
      copied: 'Link Copied!',
      testInCart: 'Test & Apply to Cart',
      requestPayout: 'Request Instant Payout',
      payoutModalTitle: 'Payout Transferred!',
      payoutSuccess: 'Direct deposit initiated successfully to your verified creator bank account.',
      payoutSubtext: 'Your funds will reflect in 1 business day.'
    },
    footer: {
      rights: '© 2026 Google Merchandise Store Clone. Built for UI/UX testing in AI Studio.',
      shopBrands: 'Shop Brands',
      sustainability: 'Sustainability Standards',
      support: 'Customer Care & FAQ',
      preferences: 'Regional Settings'
    }
  },
  es: {
    announcementText: 'Envío gratuito con neutralidad de carbono para pedidos superiores a',
    announcementCode: 'Usa el código',
    creatorTag: 'Programa de Creadores',
    influencerPortalBtn: 'Portal de Creadores y Afiliados',
    searchPlaceholder: 'Buscar sudaderas oficiales, camisetas, tazas, botellas...',
    categories: {
      all: 'Todas las Categorías',
      hoodies: 'Sudaderas y Abrigos',
      tshirts: 'Camisetas y Tops',
      youtube: 'Artículos de YouTube',
      lifestyle: 'Estilo de Vida y Tech',
      stationery: 'Papelería y Ecológico',
      ecoFriendly: 'Ecológico'
    },
    hero: {
      eyebrow: 'Colección Google Merchandise Store 2026',
      title: 'Diseñado para creadores, programadores y soñadores.',
      subtitle: 'Ropa ecológica de alta calidad, artículos para creadores de YouTube y coleccionables oficiales de Google.',
      shopNewArrivals: 'Ver Novedades',
      exploreBrands: 'Explorar Marcas',
      memberDrop: 'Colección Exclusiva Google 2026',
      memberDropDesc: 'Sudaderas orgánicas de edición limitada, botellas y figuras Bugdroid con ventajas de miembro.'
    },
    sections: {
      curatedShowcase: 'Destacados por Categoría',
      curatedDesc: 'Descubre los mejores productos de cada área. Pulsa "Ver Todos" para ver la categoría completa.',
      viewAll: 'Ver Todos',
      backToShowcase: '← Volver a Todos los Destacados',
      showingResultsFor: 'Explorando Categoría',
      allCategories: 'Todos los Productos',
      resetFilters: 'Restablecer Filtros',
      noProductsFound: 'No se encontraron productos',
      noProductsSub: 'Prueba a cambiar tus términos de búsqueda o filtros.'
    },
    showcaseTitles: {
      hoodies: 'Sudaderas con Capucha de Google',
      hoodiesDesc: 'Forro polar cepillado de gran gramaje y diseño ergonómico para largas horas de código.',
      tshirts: 'Camisetas Oficiales y Gráficas',
      tshirtsDesc: '100% algodón orgánico certificado GOTS con diseños icónicos de desarrollo.',
      youtube: 'Equipo para Creadores de YouTube',
      youtubeDesc: 'Ropa y accesorios oficiales para streamers, vloggers y creadores de contenido.',
      lifestyle: 'Coleccionables, Tecnología y Escritorio',
      lifestyleDesc: 'Figuras de vinilo Android Bugdroid, lámparas LED táctiles Dino y fundas térmicas.',
      stationery: 'Papelería Ecológica y Bolsos',
      stationeryDesc: 'Cuadernos de corcho natural con papel de piedra, bolígrafos de bambú y bolsas de lona.'
    },
    product: {
      addToBag: 'Añadir a la Cesta',
      addedToBag: '¡Añadido a la Cesta!',
      quickView: 'Vista Rápida',
      inStock: 'En Stock - Envío Rápido',
      reviews: 'opiniones',
      selectSize: 'Elegir Talla',
      selectColor: 'Color',
      features: 'Características Principales',
      sustainableNote: 'Certificado Comercio Justo y Ecológico'
    },
    cart: {
      title: 'Tu Cesta de Compra',
      freeShippingGoal: '¡Envío Express Gratuito conseguido!',
      freeShippingUnlocked: '¡Calificas para entrega gratis en todo el mundo!',
      awayFromShipping: 'para Envío Express Gratuito',
      promoPlaceholder: 'Código de creador o cupón...',
      applyCode: 'Aplicar',
      removeCode: 'Quitar',
      subtotal: 'Subtotal de Productos',
      discount: 'Descuento de Creador',
      shipping: 'Envío Express',
      free: 'GRATIS',
      tax: 'Impuesto Estimado',
      total: 'Total Estimado',
      checkoutGPay: 'Comprar con Google Pay',
      checkoutStandard: 'Tramitar Pedido Seguro',
      emptyCartTitle: 'Tu cesta está vacía',
      emptyCartDesc: 'Descubre sudaderas, camisetas y artículos coleccionables de Google.',
      startShopping: 'Empezar a Comprar'
    },
    creatorHub: {
      title: 'Portal de Creadores y Afiliados de Google',
      subtitle: 'Ayudamos a influencers a compartir descuentos exclusivos con sus seguidores y ganar comisiones.',
      tabFan: 'Descuentos de Fans y Favoritos',
      tabCreator: 'Panel de Ganancias del Creador',
      activeSupporting: 'Creador Activo Vinculado',
      fanDiscountBadge: 'Descuento para Fans',
      applyCreatorCode: 'Aplicar Código de Creador',
      applied: 'Aplicado a la Cesta',
      removeCreator: 'Eliminar Código de Creador',
      creatorFaves: 'Favoritos Recomendados por',
      dashboardTitle: 'Gestión de Referidos y Métricas',
      dashboardDesc: 'Monitorea clics, ventas referidas y comisiones en tu moneda local.',
      metricClicks: 'Total de Clics',
      metricOrders: 'Pedidos Referidos',
      metricSales: 'Volumen de Ventas',
      metricEarnings: 'Comisión Ganada',
      yourRefLink: 'Tu Enlace de Referido Único',
      copyLink: 'Copiar Enlace',
      copied: '¡Enlace Copiado!',
      testInCart: 'Probar y Aplicar a la Cesta',
      requestPayout: 'Solicitar Pago Inmediato',
      payoutModalTitle: '¡Transferencia Exitosa!',
      payoutSuccess: 'Se ha procesado el depósito a tu cuenta bancaria de creador.',
      payoutSubtext: 'Se verá reflejado en 1 día hábil.'
    },
    footer: {
      rights: '© 2026 Google Merchandise Store Clone. Desarrollado en AI Studio.',
      shopBrands: 'Comprar Marcas',
      sustainability: 'Sostenibilidad',
      support: 'Atención al Cliente',
      preferences: 'Configuración Regional'
    }
  },
  de: {
    announcementText: 'Kostenloser klimaneutraler weltweiter Versand ab einem Bestellwert von',
    announcementCode: 'Gutscheincode eingeben:',
    creatorTag: 'Creator-Programm',
    influencerPortalBtn: 'Creator & Affiliate Hub',
    searchPlaceholder: 'Offizielle Hoodies, T-Shirts, Gadgets und Flaschen suchen...',
    categories: {
      all: 'Alle Kategorien',
      hoodies: 'Hoodies & Jacken',
      tshirts: 'T-Shirts & Tops',
      youtube: 'YouTube Gear',
      lifestyle: 'Lifestyle & Tech',
      stationery: 'Schreibwaren & Eco',
      ecoFriendly: 'Nachhaltig'
    },
    hero: {
      eyebrow: 'Google Merchandise Store Kollektion 2026',
      title: 'Entworfen für Kreative, Entwickler und Visionäre.',
      subtitle: 'Nachhaltige Premium-Kleidung, YouTube Creator-Ausrüstung und exklusive Google-Sammlerstücke weltweit.',
      shopNewArrivals: 'Neuheiten ansehen',
      exploreBrands: 'Marken entdecken',
      memberDrop: 'Google Member Drop 2026',
      memberDropDesc: 'Limitierte Bio-Hoodies, Trinkflaschen und Android-Vinylfiguren mit exklusiven Vorteilen.'
    },
    sections: {
      curatedShowcase: 'Kuratierte Kategorie-Highlights',
      curatedDesc: 'Entdecken Sie die beliebtesten Artikel jeder Kategorie. Klicken Sie auf "Alle ansehen" für das vollständige Sortiment.',
      viewAll: 'Alle ansehen',
      backToShowcase: '← Zurück zu den Highlights',
      showingResultsFor: 'Kategorie durchsuchen',
      allCategories: 'Alle Produkte',
      resetFilters: 'Filter zurücksetzen',
      noProductsFound: 'Keine Produkte gefunden',
      noProductsSub: 'Passen Sie Ihre Suche oder Filter an.'
    },
    showcaseTitles: {
      hoodies: 'Google Hoodies & Sweatshirts',
      hoodiesDesc: 'Schweres gebürstetes Fleece für optimalen Komfort bei langen Coding-Sessions.',
      tshirts: 'Offizielle T-Shirts & Prints',
      tshirtsDesc: '100% GOTS-zertifizierte Bio-Baumwolle mit legendären Entwickler-Motiven.',
      youtube: 'YouTube Creator Studio Ausrüstung',
      youtubeDesc: 'Offizielle Ausrüstung für Streamer, Vlogger und Content-Creators weltweit.',
      lifestyle: 'Lifestyle, Tech & Schreibtisch-Zubehör',
      lifestyleDesc: 'Artikulierte Android Bugdroid-Figuren, LED-Dino-Lampen und Laptop-Hüllen.',
      stationery: 'Öko-Schreibwaren & Taschen',
      stationeryDesc: 'Stein-Papier-Notizbücher mit Korkeinband, Bambusstifte und robuste Canvas-Taschen.'
    },
    product: {
      addToBag: 'In die Einkaufstasche',
      addedToBag: 'Hinzugefügt!',
      quickView: 'Schnellansicht',
      inStock: 'Auf Lager - Sofort lieferbar',
      reviews: 'Bewertungen',
      selectSize: 'Größe wählen',
      selectColor: 'Farbe',
      features: 'Produkt-Highlights',
      sustainableNote: 'Zertifiziert nachhaltig & Fair Trade'
    },
    cart: {
      title: 'Deine Einkaufstasche',
      freeShippingGoal: 'Kostenloser Expressversand freigeschaltet!',
      freeShippingUnlocked: 'Qualifiziert für weltweiten kostenlosen Versand!',
      awayFromShipping: 'bis zum Gratisversand',
      promoPlaceholder: 'Creator- oder Promo-Code...',
      applyCode: 'Einlösen',
      removeCode: 'Entfernen',
      subtotal: 'Zwischensumme',
      discount: 'Creator-Rabatt',
      shipping: 'Express-Lieferung',
      free: 'KOSTENLOS',
      tax: 'Geschätzte Steuer',
      total: 'Gesamtbetrag',
      checkoutGPay: 'Mit Google Pay bezahlen',
      checkoutStandard: 'Zur Kasse gehen',
      emptyCartTitle: 'Deine Tasche ist leer',
      emptyCartDesc: 'Stöbere durch offizielle Google Hoodies, Shirts und Tech-Accessoires.',
      startShopping: 'Jetzt shoppen'
    },
    creatorHub: {
      title: 'Google Creator & Affiliate Hub',
      subtitle: 'Exklusive Rabattcodes für deine Community und attraktive Provisionen für jede Empfehlung.',
      tabFan: 'Community-Rabatte & Creator-Picks',
      tabCreator: 'Creator Dashboard & Einnahmen',
      activeSupporting: 'Aktiver Creator unterstützt',
      fanDiscountBadge: 'Rabatt für Fans',
      applyCreatorCode: 'Creator-Code anwenden',
      applied: 'Im Warenkorb angewendet',
      removeCreator: 'Code entfernen',
      creatorFaves: 'Favoriten von',
      dashboardTitle: 'Affiliate-Übersicht',
      dashboardDesc: 'Verfolge Klicks, Bestellungen und Provisionen in deiner gewünschten Währung.',
      metricClicks: 'Klicks auf Empfehlungslink',
      metricOrders: 'Vermittelte Käufe',
      metricSales: 'Gesamtumsatz',
      metricEarnings: 'Verdiente Provision',
      yourRefLink: 'Dein persönlicher Empfehlungslink',
      copyLink: 'Link kopieren',
      copied: 'Kopiert!',
      testInCart: 'Im Warenkorb testen',
      requestPayout: 'Auszahlung anfordern',
      payoutModalTitle: 'Auszahlung überwiesen!',
      payoutSuccess: 'Der Betrag wurde erfolgreich an dein Bankkonto überwiesen.',
      payoutSubtext: 'Gutschrift erfolgt in der Regel innerhalb eines Werktages.'
    },
    footer: {
      rights: '© 2026 Google Merchandise Store Clone. Erstellt in AI Studio.',
      shopBrands: 'Markenwelt',
      sustainability: 'Nachhaltigkeit',
      support: 'Kundenservice & Hilfe',
      preferences: 'Regionale Einstellungen'
    }
  },
  fr: {
    announcementText: 'Livraison mondiale neutre en carbone offerte pour toute commande supérieure à',
    announcementCode: 'Code promo :',
    creatorTag: 'Programme Créateurs',
    influencerPortalBtn: 'Espace Créateurs & Affiliés',
    searchPlaceholder: 'Rechercher sweats à capuche, t-shirts, tasses, gourdes...',
    categories: {
      all: 'Toutes les catégories',
      hoodies: 'Sweats & Vestes',
      tshirts: 'T-Shirts & Hauts',
      youtube: 'Matériel YouTube',
      lifestyle: 'Style de vie & Tech',
      stationery: 'Papeterie & Éco',
      ecoFriendly: 'Éco-responsable'
    },
    hero: {
      eyebrow: 'Collection Officielle Google 2026',
      title: 'Conçu pour les créateurs, développeurs et rêveurs.',
      subtitle: 'Vêtements durables haut de gamme, équipement pour créateurs YouTube et objets de collection Google.',
      shopNewArrivals: 'Découvrir les nouveautés',
      exploreBrands: 'Explorer les marques',
      memberDrop: 'Collection Membre Google 2026',
      memberDropDesc: 'Sweats en coton bio en édition limitée, gourdes isothermes et figurines Android exclusives.'
    },
    sections: {
      curatedShowcase: 'Sélections par Catégorie',
      curatedDesc: 'Découvrez les articles phares de chaque univers. Cliquez sur "Voir tout" pour explorer la gamme complète.',
      viewAll: 'Voir tout',
      backToShowcase: '← Retour aux sélections',
      showingResultsFor: 'Catégorie consultée',
      allCategories: 'Tous les produits',
      resetFilters: 'Réinitialiser les filtres',
      noProductsFound: 'Aucun produit trouvé',
      noProductsSub: 'Essayez de modifier votre recherche ou vos critères de sélection.'
    },
    showcaseTitles: {
      hoodies: 'Sweats à Capuche Google',
      hoodiesDesc: 'Molleton épais brossé pensé pour un confort optimal pendant vos sessions de développement.',
      tshirts: 'T-Shirts Officiels & Graphiques',
      tshirtsDesc: '100% coton peigné bio certifié GOTS aux motifs vintage et emblèmes rétro.',
      youtube: 'Équipement Créateurs YouTube',
      youtubeDesc: 'Articles officiels pour vidéastes, streamers et créateurs de contenu.',
      lifestyle: 'Accessoires & Objets de Bureau',
      lifestyleDesc: 'Figurines en vinyle Bugdroid, lampes tactiles Pixel Dino et housses d\'ordinateur.',
      stationery: 'Papeterie Écologique & Sacs',
      stationeryDesc: 'Carnets en liège et papier minéral, stylos en bambou et sacs cabas robustes.'
    },
    product: {
      addToBag: 'Ajouter au panier',
      addedToBag: 'Ajouté au panier !',
      quickView: 'Aperçu rapide',
      inStock: 'En stock - Expédition rapide',
      reviews: 'avis',
      selectSize: 'Choisir la taille',
      selectColor: 'Couleur',
      features: 'Points forts',
      sustainableNote: 'Certifié Éco-responsable & Équitable'
    },
    cart: {
      title: 'Votre Panier',
      freeShippingGoal: 'Livraison express gratuite débloquée !',
      freeShippingUnlocked: 'Vous bénéficiez de la livraison offerte dans le monde entier !',
      awayFromShipping: 'pour la livraison express gratuite',
      promoPlaceholder: 'Code promo ou créateur...',
      applyCode: 'Appliquer',
      removeCode: 'Supprimer',
      subtotal: 'Sous-total',
      discount: 'Remise Créateur',
      shipping: 'Livraison Express',
      free: 'GRATUIT',
      tax: 'Taxe estimée',
      total: 'Total estimé',
      checkoutGPay: 'Acheter avec Google Pay',
      checkoutStandard: 'Paiement sécurisé',
      emptyCartTitle: 'Votre panier est vide',
      emptyCartDesc: 'Parcourez nos sweats officiels, t-shirts et accessoires Google.',
      startShopping: 'Découvrir la boutique'
    },
    creatorHub: {
      title: 'Espace Créateurs & Affiliés Google',
      subtitle: 'Permettez à votre communauté de profiter de réductions exclusives tout en générant des commissions.',
      tabFan: 'Codes promo & Favoris des créateurs',
      tabCreator: 'Tableau de bord Créateur',
      activeSupporting: 'Créateur partenaire soutenu',
      fanDiscountBadge: 'Réduction fans',
      applyCreatorCode: 'Appliquer le code créateur',
      applied: 'Appliqué au panier',
      removeCreator: 'Retirer le code créateur',
      creatorFaves: 'Sélection recommandée par',
      dashboardTitle: 'Gestion de vos parrainages',
      dashboardDesc: 'Suivez vos clics, commandes et commissions générées dans votre devise préférée.',
      metricClicks: 'Clics sur votre lien',
      metricOrders: 'Commandes générées',
      metricSales: 'Volume de ventes',
      metricEarnings: 'Commissions perçues',
      yourRefLink: 'Votre lien de parrainage dédié',
      copyLink: 'Copier le lien',
      copied: 'Lien copié !',
      testInCart: 'Tester dans le panier',
      requestPayout: 'Demander un virement',
      payoutModalTitle: 'Paiement effectué !',
      payoutSuccess: 'Le virement direct a été envoyé vers votre compte bancaire créateur.',
      payoutSubtext: 'Le virement sera effectif sous 1 jour ouvré.'
    },
    footer: {
      rights: '© 2026 Google Merchandise Store Clone. Développé dans AI Studio.',
      shopBrands: 'Nos Univers',
      sustainability: 'Démarche Écologique',
      support: 'Service Client & Aide',
      preferences: 'Paramètres Régionaux'
    }
  },
  ja: {
    announcementText: '一定金額以上のご注文で全世界カーボンニュートラル送料無料：',
    announcementCode: 'プロモコード利用：',
    creatorTag: 'クリエイタープログラム',
    influencerPortalBtn: 'クリエイター＆アフィリエイト広場',
    searchPlaceholder: '公式パーカー、Tシャツ、フィギュア、ボトルを検索...',
    categories: {
      all: 'すべてのカテゴリー',
      hoodies: 'パーカー＆アウター',
      tshirts: 'Tシャツ＆トップス',
      youtube: 'YouTube 公式グッズ',
      lifestyle: 'ライフスタイル＆デスク',
      stationery: '文房具＆エコ',
      ecoFriendly: 'サステナブル'
    },
    hero: {
      eyebrow: 'Google Merchandise Store 2026 コレクション',
      title: 'クリエイター、エンジニア、夢を追うすべての人のために。',
      subtitle: 'サステナブルな高級アパレル、YouTube公式クリエイターグッズ、Googleコレクティブルを世界中にお届け。',
      shopNewArrivals: '新作アイテムを見る',
      exploreBrands: 'ブランド一覧',
      memberDrop: 'Google Member ドロップ 2026',
      memberDropDesc: '限定オーガニックパーカー、サーモボトル、Android ドロイド君フィギュア。'
    },
    sections: {
      curatedShowcase: 'カテゴリー別ピックアップ',
      curatedDesc: '各カテゴリーの注目アイテムをご紹介。「すべて見る」をクリックして全商品カタログを表示できます。',
      viewAll: 'すべて見る',
      backToShowcase: '← ピックアップ一覧に戻る',
      showingResultsFor: 'カテゴリー表示中',
      allCategories: '全商品一覧',
      resetFilters: 'フィルターを解除',
      noProductsFound: '該当する商品が見つかりません',
      noProductsSub: '検索キーワードやフィルターを変更してお試しください。'
    },
    showcaseTitles: {
      hoodies: 'Google フーディー＆パーカー',
      hoodiesDesc: '長時間のコーディングセッションを快適にするヘビーオンス裏起毛スウェット。',
      tshirts: '公式ロゴ Tシャツ＆グラフィック',
      tshirtsDesc: '100% GOTS認定オーガニックコットン製。アイコニックなレトロ開発者モチーフ。',
      youtube: 'YouTube クリエイタースタジオ ギア',
      youtubeDesc: '世界中のコンテンツクリエイターやストリーマーのための公式アパレル＆アクセサリー。',
      lifestyle: 'ライフスタイル＆デスクコレクション',
      lifestyleDesc: '可動式ドロイド君フィギュア、タッチ調光恐竜LEDライト、高耐久スリーブ。',
      stationery: 'エコ文具＆サステナブルバッグ',
      stationeryDesc: 'コルク製ストーンペーパーノート、竹製スタイラスペン、ヘビーキャンバストート。'
    },
    product: {
      addToBag: 'バッグに追加',
      addedToBag: '追加しました！',
      quickView: 'クイックビュー',
      inStock: '在庫あり・即日発送対応',
      reviews: '件のレビュー',
      selectSize: 'サイズを選択',
      selectColor: 'カラー',
      features: '商品の特徴',
      sustainableNote: 'フェアトレード・環境認証取得'
    },
    cart: {
      title: 'ショッピングバッグ',
      freeShippingGoal: 'エクスプレス送料無料が適用されました！',
      freeShippingUnlocked: '全世界対象の送料無料特典を獲得しました！',
      awayFromShipping: 'の追加で送料無料',
      promoPlaceholder: 'クリエイターコードまたは割引コード...',
      applyCode: '適用',
      removeCode: '解除',
      subtotal: '小計',
      discount: 'クリエイター割引',
      shipping: 'エクスプレス配送',
      free: '無料',
      tax: '概算消費税',
      total: '合計（税込）',
      checkoutGPay: 'Google Pay で購入',
      checkoutStandard: '通常レジに進む',
      emptyCartTitle: 'バッグは空です',
      emptyCartDesc: 'Google公式のパーカー、Tシャツ、デスクグッズをチェックしてみましょう。',
      startShopping: 'お買い物を始める'
    },
    creatorHub: {
      title: 'Google クリエイター＆アフィリエイトハブ',
      subtitle: 'インフルエンサーの皆様に特別なファン向け割引コードと高還元リワードを提供します。',
      tabFan: 'ファン向け割引＆おすすめアイテム',
      tabCreator: 'クリエイターダッシュボード＆報酬',
      activeSupporting: '応援中のクリエイター',
      fanDiscountBadge: 'ファン限定割引',
      applyCreatorCode: 'コードを適用する',
      applied: 'カートに適用済み',
      removeCreator: 'コードを解除',
      creatorFaves: 'によるおすすめアイテム',
      dashboardTitle: 'アフィリエイト実績管理',
      dashboardDesc: '紹介リンク経由のクリック数、購入数、獲得報酬をお好みの通貨でリアルタイム集計。',
      metricClicks: 'リンククリック総数',
      metricOrders: '成立注文件数',
      metricSales: '総売上金額',
      metricEarnings: '獲得コミッション',
      yourRefLink: 'あなたの専用紹介リンク',
      copyLink: 'リンクをコピー',
      copied: 'コピー完了！',
      testInCart: 'カートでテスト適用',
      requestPayout: '即時出金を申請する',
      payoutModalTitle: '出金手続きが完了しました！',
      payoutSuccess: '登録済みのクリエイター銀行口座に送金されました。',
      payoutSubtext: '1営業日以内に着金します。'
    },
    footer: {
      rights: '© 2026 Google Merchandise Store Clone. AI Studio で作成。',
      shopBrands: 'ブランド一覧',
      sustainability: '持続可能性への取り組み',
      support: 'カスタマーサポート＆ヘルプ',
      preferences: '地域・言語設定'
    }
  },
  hi: {
    announcementText: 'न्यूनतम राशि से अधिक के सभी ऑर्डरों पर निःशुल्क कार्बन-तटस्थ वैश्विक डिलीवरी:',
    announcementCode: 'प्रोमो कोड लगाएं:',
    creatorTag: 'क्रिएटर प्रोग्राम',
    influencerPortalBtn: 'क्रिएटर और इन्फ्लुएंसर हब',
    searchPlaceholder: 'गूगल हुडी, टी-शर्ट्स, बॉटल्स, खिलौने खोजें...',
    categories: {
      all: 'सभी श्रेणियां',
      hoodies: 'हुडीज़ और जैकेट्स',
      tshirts: 'टी-शर्ट्स और टॉप्स',
      youtube: 'यूट्यूब गियर',
      lifestyle: 'लाइफस्टाइल और टेक',
      stationery: 'स्टेशनरी और इको',
      ecoFriendly: 'इको-फ्रेंडली'
    },
    hero: {
      eyebrow: 'गूगल मर्चेंडाइज स्टोर 2026 कलेक्शन',
      title: 'क्रिएटर्स, डेवलपर्स और विचारकों के लिए खास तौर पर निर्मित।',
      subtitle: 'प्रीमियम पर्यावरण-अनुकूल वस्त्र, यूट्यूब क्रिएटर सामग्री और प्रामाणिक गूगल मर्चेंडाइज।',
      shopNewArrivals: 'नए उत्पाद देखें',
      exploreBrands: 'ब्रांड्स देखें',
      memberDrop: 'गूगल मेंबर ड्रॉप 2026',
      memberDropDesc: 'सीमित संस्करण ऑर्गेनिक हुडीज़, इंसुलेटेड पानी की बोतलें और एंड्रॉइड विनाइल टॉयज।'
    },
    sections: {
      curatedShowcase: 'श्रेणीवार चुनिंदा उत्पाद',
      curatedDesc: 'प्रत्येक श्रेणी के शीर्ष उत्पाद देखें। पूरी श्रेणी देखने के लिए "सभी देखें" पर क्लिक करें।',
      viewAll: 'सभी देखें',
      backToShowcase: '← वापस मुख्य शोकेस पर जाएं',
      showingResultsFor: 'श्रेणी देखी जा रही है',
      allCategories: 'सभी उत्पाद',
      resetFilters: 'फ़िल्टर हटाएं',
      noProductsFound: 'कोई उत्पाद नहीं मिला',
      noProductsSub: 'कृपया अपना खोज शब्द या फ़िल्टर बदल कर देखें।'
    },
    showcaseTitles: {
      hoodies: 'गूगल हुडीज़ और विंटर वियर',
      hoodiesDesc: 'कोडिंग और काम के दौरान अत्यधिक आराम के लिए प्रीमियम फ्लीस से बनी हुडीज़।',
      tshirts: 'आधिकारिक टी-शर्ट्स',
      tshirtsDesc: '100% GOTS प्रमाणित जैविक कॉटन से बनी रेट्रो गूगल लोगो टी-शर्ट्स।',
      youtube: 'यूट्यूब क्रिएटर स्टूडियो गियर',
      youtubeDesc: 'दुनिया भर के यूट्यूबर्स, स्ट्रीमर्स और क्रिएटर्स के लिए आधिकारिक गियर।',
      lifestyle: 'लाइफस्टाइल और डेस्क मर्चेंडाइज',
      lifestyleDesc: 'एंड्रॉइड बगड्रॉइड टॉयज, क्रोम डाइनो टच एलईडी लैंप और लैपटॉप स्लीव्स।',
      stationery: 'इको स्टेशनरी और बैग्स',
      stationeryDesc: 'प्राकृतिक कॉर्क स्टोन पेपर डायरी, बांस के पेन और ऑर्गेनिक कैनवास बैग्स।'
    },
    product: {
      addToBag: 'बैग में जोड़ें',
      addedToBag: 'बैग में जोड़ा गया!',
      quickView: 'त्वरित झलक',
      inStock: 'स्टॉक में उपलब्ध - त्वरित शिपिंग',
      reviews: 'समीक्षाएं',
      selectSize: 'साइज़ चुनें',
      selectColor: 'रंग',
      features: 'मुख्य विशेषताएं',
      sustainableNote: 'प्रमाणित पर्यावरण-अनुकूल'
    },
    cart: {
      title: 'आपका शॉपिंग बैग',
      freeShippingGoal: 'मुफ्त एक्सप्रेस डिलीवरी अनलॉक हो गई!',
      freeShippingUnlocked: 'आपको दुनिया भर में मुफ्त शिपिंग की सुविधा मिल गई है!',
      awayFromShipping: 'मुफ्त एक्सप्रेस डिलीवरी के लिए शेष',
      promoPlaceholder: 'क्रिएटर कोड या कूपन डालें...',
      applyCode: 'लागू करें',
      removeCode: 'हटाएं',
      subtotal: 'सामान का उप-योग',
      discount: 'क्रिएटर छूट',
      shipping: 'एक्सप्रेस डिलीवरी',
      free: 'मुफ्त',
      tax: 'अनुमानित कर',
      total: 'कुल योग',
      checkoutGPay: 'Google Pay से खरीदें',
      checkoutStandard: 'सुरक्षित चेकआउट करें',
      emptyCartTitle: 'आपका बैग खाली है',
      emptyCartDesc: 'आधिकारिक गूगल हुडीज़, टी-शर्ट्स और डेस्क सामग्री देखें।',
      startShopping: 'खरीदारी शुरू करें'
    },
    creatorHub: {
      title: 'गूगल क्रिएटर और इन्फ्लुएंसर हब',
      subtitle: 'अपने प्रशंसकों को विशेष छूट प्रदान करें और प्रत्येक बिक्री पर कमीशन अर्जित करें।',
      tabFan: 'प्रशंसक छूट और पसंदीदा मर्च',
      tabCreator: 'क्रिएटर डैशबोर्ड और कमाई',
      activeSupporting: 'सक्रिय क्रिएटर सहयोग',
      fanDiscountBadge: 'प्रशंसकों के लिए छूट',
      applyCreatorCode: 'क्रिएटर कोड लागू करें',
      applied: 'बैग में लागू',
      removeCreator: 'कोड हटाएं',
      creatorFaves: 'की पसंदीदा सामग्री',
      dashboardTitle: 'रेफरल और कमीशन प्रबंधन',
      dashboardDesc: 'अपनी पसंदीदा मुद्रा में क्लिक्स, बिक्री और कमाई की निगरानी करें।',
      metricClicks: 'कुल लिंक क्लिक',
      metricOrders: 'रेफर किए गए ऑर्डर',
      metricSales: 'कुल बिक्री राशि',
      metricEarnings: 'अर्जित कमीशन',
      yourRefLink: 'आपका समर्पित रेफरल लिंक',
      copyLink: 'लिंक कॉपी करें',
      copied: 'कॉपी हो गया!',
      testInCart: 'बैग में टेस्ट करें',
      requestPayout: 'तत्काल भुगतान का अनुरोध करें',
      payoutModalTitle: 'भुगतान सफल रहा!',
      payoutSuccess: 'आपके सत्यापित बैंक खाते में कमीशन ट्रांसफर कर दिया गया है।',
      payoutSubtext: 'यह राशि 1 कार्य दिवस में प्रदर्शित होगी।'
    },
    footer: {
      rights: '© 2026 Google Merchandise Store Clone. AI Studio में निर्मित।',
      shopBrands: 'ब्रांड्स की खरीदारी करें',
      sustainability: 'स्थिरता मानक',
      support: 'ग्राहक सेवा और सहायता',
      preferences: 'क्षेत्रीय सेटिंग्स'
    }
  }
};
