import { ArrowRight, ArrowUpRight, Camera, CirclePlay, Film, Smartphone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteConfig } from '../config/siteConfig.js'
import ContactLink from '../components/ContactLink.jsx'

const approach = [
  {
    icon: Camera,
    number: '01',
    title: 'Notice the moment',
    description: 'The small gestures and in-between moments are often the ones that say the most.',
  },
  {
    icon: Smartphone,
    number: '02',
    title: 'Keep it close',
    description: 'A mobile camera stays light, flexible, and close to the people in the story.',
  },
  {
    icon: Film,
    number: '03',
    title: 'Make it feel real',
    description: 'Thoughtful framing and an honest edit let the character of each moment come through.',
  },
]

function About() {
  return (
    <div className="about-page page-width page-pad">
      <div className="page-kicker"><span>A LITTLE CONTEXT</span><span>BEHIND THE LENS</span></div>

      <section className="about-hero">
        <div className="about-portrait">
          {siteConfig.profileImage
            ? <img src={siteConfig.profileImage} alt={`${siteConfig.ownerName}, mobile videographer`} />
            : <img src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1200&q=85" alt="Warm evening light across an open field" />}
          <span className="about-image-label"><Camera size={14} /> A LIFE BEHIND THE LENS</span>
          <span className="about-image-index">01 <i /> 03</span>
        </div>

        <div className="about-content">
          <p className="eyebrow"><span className="live-dot" /> MOBILE VIDEOGRAPHER</p>
          <h1>Stories happen<br /><em>in the in-between.</em></h1>
          <p className="about-role">{siteConfig.ownerName}<i />{siteConfig.ownerRole}</p>
          <p className="about-intro">{siteConfig.biography}</p>
          <div className="about-actions">
            <ContactLink className="button button-accent">Let’s make something <ArrowUpRight size={15} /></ContactLink>
            <Link to="/archive" className="about-work-link">See the films <ArrowRight size={15} /></Link>
          </div>
          <div className="about-signoff">
            <span className="about-owner-mark">{siteConfig.ownerName?.trim()?.charAt(0) || 'G'}.</span>
            <span><strong>{siteConfig.ownerName}</strong><small>{siteConfig.location}</small></span>
            <CirclePlay className="about-signoff-icon" size={20} />
          </div>
        </div>
      </section>

      <section className="about-story">
        <div className="about-story-heading">
          <p className="eyebrow">THE WAY I SEE IT</p>
          <h2>Less setup.<br /><em>More feeling.</em></h2>
        </div>
        <div className="about-story-copy">
          <p className="about-story-lead">The moments that stay with us are often the ones that happen naturally—in a shared laugh, a knowing look, or everyone coming together.</p>
          <p>I keep the process relaxed and unobtrusive, then shape those little details into a polished film that feels like you and brings the day back to life.</p>
        </div>
        <span className="about-story-mark" aria-hidden="true">“</span>
      </section>

      <section className="about-approach">
        <div className="about-approach-heading">
          <div><p className="eyebrow">A SIMPLE APPROACH</p><h2>Present, personal,<br /><em>and in motion.</em></h2></div>
          <p>From the first frame to the final cut, the aim is to make work that feels considered without ever feeling overworked.</p>
        </div>
        <div className="about-approach-grid">
          {approach.map(({ icon: Icon, number, title, description }) => (
            <article className="about-approach-card" key={number}>
              <div className="about-card-top"><span>{number} / 03</span><Icon size={19} /></div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-cta">
        <div><p className="eyebrow">HAVE A STORY IN MIND?</p><h2>Let’s find the<br /><em>feeling in it.</em></h2></div>
        <ContactLink className="button button-accent">Start a conversation <ArrowUpRight size={15} /></ContactLink>
      </section>
    </div>
  )
}

export default About
