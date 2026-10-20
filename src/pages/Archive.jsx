import { useMemo, useState } from 'react'
import { ArrowDownUp, ArrowRight, Search, SlidersHorizontal, X } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import VideoCard from '../components/VideoCard.jsx'
import { categoryNames } from '../data/categories.js'
import { videos } from '../data/videos.js'

function Archive() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('q') || '')
  const category = searchParams.get('category') || 'All films'
  const sortOrder = searchParams.get('sort') || 'Newest first'

  const setFilter = (key, value) => {
    const next = new URLSearchParams(searchParams)
    if (value && value !== 'All films' && value !== 'Newest first') next.set(key, value)
    else next.delete(key)
    setSearchParams(next)
  }

  const filteredVideos = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return videos
      .filter((video) => category === 'All films' || video.category === category)
      .filter((video) => !normalizedQuery || [video.title, video.category, video.location, video.date, video.description].some((field) => field.toLowerCase().includes(normalizedQuery)))
      .sort((a, b) => {
        if (sortOrder === 'Oldest first') return Number(a.date) - Number(b.date) || Number(a.id) - Number(b.id)
        if (sortOrder === 'Title A–Z') return a.title.localeCompare(b.title)
        return Number(b.date) - Number(a.date) || Number(a.id) - Number(b.id)
      })
  }, [category, query, sortOrder])

  const clearFilters = () => {
    setQuery('')
    setSearchParams({})
  }

  return (
    <div className="archive-page page-width page-pad">
      <div className="page-kicker"><span>SELECTED REELS</span><span>2024 — 2026</span></div>
      <div className="archive-page-title">
        <div><p className="eyebrow">EVENTS · BRAND STORIES · TEAM MOMENTS</p><h1>The <em>archive.</em></h1></div>
        <p>Recent highlights, event recaps, brand work, and behind-the-scenes moments from the latest stories in motion.</p>
      </div>
      <div className="archive-controls">
        <div className="archive-search"><Search size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search films, places, stories…" aria-label="Search films, places, and stories" />{query && <button onClick={() => setQuery('')} aria-label="Clear search"><X size={15} /></button>}</div>
        <label className="sort-select"><ArrowDownUp size={15} /><span className="sr-only">Sort films</span><select value={sortOrder} onChange={(event) => setFilter('sort', event.target.value)}><option>Newest first</option><option>Oldest first</option><option>Title A–Z</option></select></label>
      </div>
      <div className="archive-filters" role="group" aria-label="Filter archive by category">
        <span className="filter-icon"><SlidersHorizontal size={14} /> FILTER</span>
        {['All films', ...categoryNames].map((name) => (
          <button key={name} onClick={() => setFilter('category', name)} className={`filter-chip${category === name ? ' selected' : ''}`} aria-pressed={category === name}>{name}</button>
        ))}
      </div>
      <div className="archive-results"><span>{filteredVideos.length} {filteredVideos.length === 1 ? 'film' : 'films'}<span className="result-muted"> in the collection</span></span><span>{category}</span></div>
      {filteredVideos.length ? (
        <div className="archive-grid">{filteredVideos.map((video) => <VideoCard key={video.id} video={video} />)}</div>
      ) : (
        <div className="empty-state"><span className="empty-icon"><Search size={19} /></span><h2>Nothing in this frame.</h2><p>Try another title, place, or category.</p><button className="text-link" onClick={clearFilters}>Clear all filters <ArrowRight size={15} /></button></div>
      )}
    </div>
  )
}

export default Archive
