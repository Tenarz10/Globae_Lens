import { ArrowDown, ArrowRight, ArrowUpRight, Camera, CirclePlay, Film, MoveUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import VideoCard from '../components/VideoCard.jsx'
import ContactLink from '../components/ContactLink.jsx'
import { categories } from '../data/categories.js'
import { videos } from '../data/videos.js'
import { siteConfig } from '../config/siteConfig.js'

function Home() {
  const featured = videos.filter((video) => video.featured).slice(0, 3)

  return (
    <>
      <section className="home-hero">
        <div className="hero-background" />
        <div className="hero-content page-width">
          <p className="eyebrow"><span className="live-dot" /> MOBILE VIDEOGRAPHY · 50 SAMPLE PROJECTS</p>
          <h1>Everyday stories,<br />captured <em>on the go.</em></h1>
          <p className="hero-summary">A collection of real moments captured with a mobile phone—thoughtful, personal video made wherever the story happens.</p>
          <div className="hero-actions">
            <Link to="/archive" className="button button-accent">Explore the archive <ArrowRight size={16} /></Link>
            <ContactLink className="button button-quiet">Get in touch <ArrowUpRight size={15} /></ContactLink>
          </div>
          <Link className="hero-scroll" to="/archive"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></Link>
        </div>
      </section>

      <section className="featured-section section-pad" id="featured">
        <div className="page-width">
          <div className="section-topline"><span>SELECTED WORK <i /> 2024 — 2026</span><span>A FEW STORIES TO BEGIN WITH</span></div>
          <div className="section-heading">
            <div><p className="eyebrow">THE MOVING IMAGE ARCHIVE</p><h2>Made to be <em>remembered.</em></h2></div>
            <p className="section-description">Every video starts with a moment worth holding onto. Here are a few mobile-shot stories from the archive.</p>
          </div>
          <div className="featured-grid">
            {featured.map((video, index) => <VideoCard key={video.id} video={video} compact={index === 0} />)}
          </div>
          <div className="see-all-wrap"><Link to="/archive" className="text-link">See all 50 films <ArrowRight size={16} /></Link></div>
        </div>
      </section>

      <section className="categories-section section-pad">
        <div className="page-width">
          <div className="section-heading category-heading">
            <div><p className="eyebrow">FIND YOUR WAY IN</p><h2>Browse by <em>feeling.</em></h2></div>
            <Link to="/archive" className="text-link">All categories <ArrowUpRight size={15} /></Link>
          </div>
          <div className="category-grid">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={`/archive?category=${encodeURIComponent(category.name)}`}
                className="category-card"
                style={{ '--category-image': `url(https://images.unsplash.com/${category.image}?auto=format&fit=crop&w=900&q=80)` }}
              >
                <span className="category-number">{category.number} / {String(categories.length).padStart(2, '0')}</span>
                <span className="category-card-copy"><small>{category.description}</small><strong>{category.name}</strong></span>
                <span className="category-arrow"><ArrowUpRight size={17} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-about">
        <div className="home-about-image">
          {siteConfig.profileImage
            ? <img src={siteConfig.profileImage} alt={siteConfig.ownerName} loading="lazy" />
            : <img src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1200&q=85" alt="Golden light falling across an open field" loading="lazy" />}
          <span className="image-frame-label"><Camera size={14} /> A LIFE BEHIND THE LENS</span>
        </div>
        <div className="home-about-copy">
          <p className="eyebrow">A LITTLE ABOUT THE PERSON BEHIND THE CAMERA</p>
          <h2>The person<br /><em>behind the lens.</em></h2>
          <p>{siteConfig.biography}</p>
          <Link className="text-link" to="/about">A little more about me <ArrowRight size={16} /></Link>
          <div className="about-owner"><span className="about-owner-mark">{siteConfig.ownerName.trim().charAt(0)}.</span><span><strong>{siteConfig.ownerName}</strong><small>{siteConfig.ownerRole}</small></span></div>
        </div>
      </section>

      <section className="home-contact section-pad">
        <div className="home-contact-inner">
          <span className="contact-orbit orbit-one"><Film size={15} /></span>
          <span className="contact-orbit orbit-two"><CirclePlay size={17} /></span>
          <p className="eyebrow">GOOD STORIES START SOMEWHERE</p>
          <h2>Have something<br /><em>in mind?</em></h2>
          <p>Have a story you’d like to tell? I’d love to hear a little about it.</p>
          <ContactLink className="button button-accent">Let’s talk <MoveUpRight size={15} /></ContactLink>
        </div>
      </section>
    </>
  )
}

export default Home
