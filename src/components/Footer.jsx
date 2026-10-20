import { ArrowUpRight, Instagram, Linkedin, Youtube } from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteConfig } from '../config/siteConfig.js'
import ContactLink from './ContactLink.jsx'

const icons = { instagram: Instagram, linkedin: Linkedin, youtube: Youtube }

function Footer() {
  const availableSocials = Object.entries(siteConfig.socialLinks).filter(([, url]) => url)

  return (
    <footer className="site-footer">
      <Link to="/" className="brand footer-brand">
        <span className="brand-symbol">g<span>l.</span></span>
        <span className="brand-copy"><strong>{siteConfig.brandName}</strong><small>MOBILE VIDEOGRAPHY</small></span>
      </Link>
      <span className="footer-note">{siteConfig.brandTagline} <span>© {new Date().getFullYear()}</span></span>
      <div className="footer-links">
        {availableSocials.map(([network, url]) => {
          const Icon = icons[network]
          return <a key={network} href={url} target="_blank" rel="noreferrer" aria-label={network}>{Icon && <Icon size={16} />}</a>
        })}
        <ContactLink>Get in touch <ArrowUpRight size={13} /></ContactLink>
      </div>
    </footer>
  )
}

export default Footer
