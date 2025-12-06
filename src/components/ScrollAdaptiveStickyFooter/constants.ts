export const theme = {
  colors: {
    background: '#ffffff',
    surface: '#f5f5f6',
    textPrimary: '#1c1c1e',
    textSecondary: '#535766',
    accent: '#ff3f6c',
    accentDark: '#e04568',
    success: '#20bd5f',
    border: '#e0e0e0',
    badge: '#f8f8f8',
    muted: '#9ea0a5',
  },
  spacing: {
    xxs: 4,
    xs: 8,
    sm: 12,
    md: 16,
    lg: 20,
    xl: 24,
    xxl: 32,
  },
  radius: {
    xs: 4,
    sm: 6,
    md: 10,
    lg: 14,
  },
  fontSize: {
    xs: 12,
    sm: 13,
    md: 15,
    lg: 18,
    xl: 22,
  },
};

export const product = {
  brand: 'Roadster',
  name: 'Men Navy Blue Slim Fit Checked Casual Shirt',
  heroImage:
    'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=720&q=80',
  gallery: [
    'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=720&q=80',
    'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=720&q=80',
    'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=720&q=80',
    'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=720&q=80',
    'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=720&q=80',
    'https://images.unsplash.com/photo-1517021897933-0e0319cfbc24?auto=format&fit=crop&w=720&q=80',
  ],
  price: 1049,
  mrp: 2599,
  discountPercentage: 59,
  bestPrice: 949,
  bestPriceInfo: 'inclusive of all taxes',
  couponInfo: 'Use code MYNTRA200 and get Rs.200 OFF above Rs.1999',
  rating: 4.3,
  ratingCount: 3586,
  reviewCount: 872,
  deliveryText: 'Get it by Wed, 10 Dec with standard delivery',
  highlights: [
    '100% cotton slim-fit checked casual shirt with spread collar',
    'Curved hem with button placket and full sleeves',
    'Model (height 6\'2") is wearing size 40',
    'Best suited for casual outings and weekend plans',
  ],
  availableSizes: ['38', '39', '40', '42', '44'],
  offers: [
    {
      title: 'Bank Offer',
      description:
        '10% Instant Discount on ICICI Bank Credit Cards up to Rs.150 on orders of Rs.2000 and above',
    },
    {
      title: 'Myntra Coupon',
      description:
        'Apply MYNTRA200 coupon and get Rs.200 cashback in Myntra Wallet on your next purchase',
    },
    {
      title: 'Partner Offer',
      description:
        'Get 3 months Spotify Premium free on fashion orders above Rs.999',
    },
  ],
  promises: [
    {
      title: '14 days return available',
      description: 'Easy return and exchange policy on this product',
    },
    {
      title: '100% Original Products',
      description: 'Sourced directly from brands and authorised sellers',
    },
    {
      title: 'Pay on Delivery available',
      description: 'Cash/Card on Delivery eligibility on your pin code',
    },
  ],
  specifications: [
    'Fabric: 100% Cotton',
    'Fit: Slim Fit',
    'Pattern: Checked',
    'Sleeve Length: Long Sleeves',
    'Occasion: Casual',
    'Care Instructions: Machine Wash',
  ],
  reviews: [
    {
      id: 'review-1',
      rating: 5,
      title: 'Great fit & quality',
      author: 'Ankit Verma',
      date: 'Oct 2025',
      body: 'The fabric feels premium and the checked pattern looks sharp. Fit is perfect for a slim build.',
    },
    {
      id: 'review-2',
      rating: 4,
      title: 'Worth the price',
      author: 'Priya Sharma',
      date: 'Sep 2025',
      body: 'Color is slightly lighter than shown in pictures but still looks great. Comfortable for all day wear.',
    },
  ],
  relatedProducts: [
    {
      id: 'related-1',
      brand: 'Moda Rapido',
      name: 'Men Slim Fit Casual Shirt',
      image:
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=360&q=80',
      price: 999,
      mrp: 2399,
      discountLabel: '58% OFF',
    },
    {
      id: 'related-2',
      brand: 'HIGHLANDER',
      name: 'Men Checked Cotton Shirt',
      image:
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=360&q=80',
      price: 849,
      mrp: 2099,
      discountLabel: '60% OFF',
    },
    {
      id: 'related-3',
      brand: 'WROGN',
      name: 'Men Tailored Fit Casual Shirt',
      image:
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=360&q=80',
      price: 1299,
      mrp: 2999,
      discountLabel: '57% OFF',
    },
  ],
};

export const data = [
  'productImage',
  'productDetails',
  'offers',
  'sizeSelector',
  'highlights',
  'policies',
  'addToCart',
  'reviews',
  'relatedProducts',
] as const;

export type SectionKey = (typeof data)[number];
