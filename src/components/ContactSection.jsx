import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { siteConfig } from '../config/siteConfig.js'

function WhatsAppIcon({ size = 20 }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.48 0 .11 5.37.11 11.97c0 2.11.55 4.17 1.6 5.99L0 24l6.2-1.63a11.9 11.9 0 0 0 5.87 1.54h.01c6.6 0 11.97-5.37 11.97-11.97 0-3.2-1.25-6.21-3.53-8.46ZM12.08 21.9h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.68.97.98-3.59-.23-.37a9.92 9.92 0 0 1-1.52-5.35c0-5.44 4.43-9.87 9.88-9.87a9.8 9.8 0 0 1 6.98 2.9 9.8 9.8 0 0 1 2.89 6.98c0 5.45-4.43 9.88-9.89 9.88Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.93 1.17-.17.2-.34.22-.64.07-.3-.15-1.26-.47-2.39-1.49-.88-.78-1.48-1.75-1.65-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.66-1.6-.91-2.19-.24-.57-.48-.49-.66-.5h-.56c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.18-1.41-.08-.12-.27-.2-.57-.35Z" fill="currentColor" />
    </svg>
  )
}

function ContactSection() {
  const email = siteConfig.email || 'ogooluwasworkhub@gmail.com'
  const phone = siteConfig.phoneNumber || '08168956237'
  const whatsappNumber = siteConfig.whatsappNumber || '07011208035'
  const digits = whatsappNumber.replace(/\D/g, '')
  const internationalDigits = digits.startsWith('0') ? `234${digits.slice(1)}` : digits
  const whatsappHref = `https://wa.me/${internationalDigits}`
  const location = siteConfig.location === 'Add your location' ? 'Lagos, Nigeria' : siteConfig.location

  return (
    <>
      <section className="site-contact page-width" id="contact-section">
        <div className="site-contact-heading">
          <div>
            <p className="eyebrow">HAVE A STORY IN MIND?</p>
            <h2>Let’s make <em>something.</em></h2>
          </div>
          <p>Questions, ideas, or a project to discuss? Reach out in the way that works best for you.</p>
        </div>
        <div className="site-contact-options">
          <a className="contact-card" href={`mailto:${email}`}>
            <span className="contact-card-icon"><Mail size={19} /></span>
            <span className="contact-card-copy"><small>EMAIL</small><strong>{email}</strong></span>
            <span className="contact-card-arrow"><ArrowUpRight size={17} /></span>
          </a>
          <a className="contact-card" href={`tel:${phone}`}>
            <span className="contact-card-icon"><Phone size={19} /></span>
            <span className="contact-card-copy"><small>CALL</small><strong>{phone}</strong></span>
            <span className="contact-card-arrow"><ArrowUpRight size={17} /></span>
          </a>
          <a className="contact-card" href={whatsappHref} target="_blank" rel="noreferrer">
            <span className="contact-card-icon"><MessageCircle size={19} /></span>
            <span className="contact-card-copy"><small>WHATSAPP</small><strong>{whatsappNumber}</strong></span>
            <span className="contact-card-arrow"><ArrowUpRight size={17} /></span>
          </a>
          <div className="contact-card contact-location">
            <span className="contact-card-icon"><MapPin size={19} /></span>
            <span className="contact-card-copy"><small>BASED IN</small><strong>{location}</strong></span>
          </div>
        </div>
      </section>
      <a className="whatsapp-float" href={whatsappHref} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
        <WhatsAppIcon size={27} />
        <span>Chat on WhatsApp</span>
      </a>
    </>
  )
}

export default ContactSection
