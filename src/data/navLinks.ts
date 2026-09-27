export interface NavColumn {
  heading: string;
  links: { label: string; href: string }[];
}

export interface NavLinkItem {
  label: string;
  href: string;
  columns?: NavColumn[];
}

const navLinks: NavLinkItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Cakes',
    href: '/cakes',
    columns: [
      {
        heading: 'By Occasion',
        links: [
          { label: 'Birthday Cakes', href: '/cakes/birthday' },
          { label: 'Anniversary Cakes', href: '/cakes/anniversary' },
          { label: 'Wedding Cakes', href: '/cakes/wedding' },
          { label: 'Baby Shower Cakes', href: '/cakes/baby-shower' },
        ],
      },
      {
        heading: 'By Flavor',
        links: [
          { label: 'Belgian Chocolate', href: '/cakes/chocolate' },
          { label: 'Red Velvet', href: '/cakes/red-velvet' },
          { label: 'Butterscotch', href: '/cakes/butterscotch' },
          { label: 'Fresh Fruit', href: '/cakes/fruit' },
        ],
      },
      {
        heading: 'Featured',
        links: [
          { label: 'Photo Cakes', href: '/cakes/photo' },
          { label: 'Designer Cakes', href: '/cakes/designer' },
          { label: 'Eggless Range', href: '/cakes/eggless' },
        ],
      },
    ],
  },
  {
    label: 'Pastries & Desserts',
    href: '/desserts',
    columns: [
      {
        heading: 'Shop',
        links: [
          { label: 'Cupcakes', href: '/desserts/cupcakes' },
          { label: 'Pastries', href: '/desserts/pastries' },
          { label: 'Cookies', href: '/desserts/cookies' },
          { label: 'Brownies & Tarts', href: '/desserts/brownies-tarts' },
        ],
      },
    ],
  },
  { label: 'Custom Orders', href: '/custom-orders' },
  { label: 'Corporate Gifting', href: '/corporate-gifting' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default navLinks;