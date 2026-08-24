export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://krafttdigital.com';

export const contactEmail = 'krafttdigital@gmail.com';
export const contactPhone = '+91 79867 69102';
export const contactPhoneHref = 'tel:+917986769102';
export const contactWhatsAppNumber = '917986769102';

export const whatsappUrl = (message: string) =>
  `https://wa.me/${contactWhatsAppNumber}?text=${encodeURIComponent(message)}`;

export const navItems = [
  { href: '/work', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/process', label: 'Process' },
  { href: '/about', label: 'About' },
];
