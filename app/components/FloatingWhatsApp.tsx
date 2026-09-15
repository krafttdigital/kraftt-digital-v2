import { MessageCircle } from 'lucide-react';
import { whatsappUrl } from '../data/site';

const whatsappMessage = 'Hi Kraftt, I found your website and would like to discuss my business\'s digital presence.';

export function FloatingWhatsApp() {
  return (
    <a
      className="floating-whatsapp"
      href={whatsappUrl(whatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Kraftt Digital on WhatsApp at 79867 69102"
    >
      <MessageCircle size={25} strokeWidth={2} aria-hidden="true" />
    </a>
  );
}
