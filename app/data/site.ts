export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://krafttdigital.com';

export const whatsappUrl = (message: string) =>
  `https://wa.me/?text=${encodeURIComponent(message)}`;

export const navItems = [
  { href: '/work', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/process', label: 'Process' },
  { href: '/about', label: 'About' },
];
