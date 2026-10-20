import { useState } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Clock3, MapPin, Share2 } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import VideoCard from '../components/VideoCard.jsx'
import ContactLink from '../components/ContactLink.jsx'
import { getVideoById, videos } from '../data/videos.js'
import NotFound from './NotFound.jsx'

function VideoDetails() {
  const { videoId } = useParams()
  const video = getVideoById(videoId)
  const [shareState, setShareState] = useState('')
  const [playbackError, setPlaybackError] = useState(false)
  if (!video) return <NotFound />

  const shareVideo = async () => {
    const shareData = { title: video.title, text: video.description, url: window.location.href }
    if (navigator.share) {
      try {
        await navigator.share(shareData)
        setShareState('Shared')
        window.setTimeout(() => setShareState(''), 2200)
        return
      } catch (error) {
        if (error.name === 'AbortError') return
      }
    }
    try {
      await navigator.clipboard.writeText(window.location.href)
      setShareState('Link copied')
    } catch {
      setShareState('Copy this page URL to share')
    }
    window.setTimeout(() => setShareState(''), 2800)
  }

  const related = videos.filter((item) => item.category === video.category && item.id !== video.id).slice(0, 3)

  return (
    <div className="watch-page page-width page-pad">
      <Link to="/archive" className="back-link"><ArrowLeft size={15} /> Back to the archive</Link>
      <div className="watch-layout">
        <div className="watch-main">
          <div className="video-player">
            {video.embedUrl ? (
              <iframe
                src={video.embedUrl}
                title={`Video player: ${video.title}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            ) : video.videoUrl && !playbackError ? (
              <video key={video.videoUrl} controls playsInline preload="metadata" poster={video.thumbnail} onError={() => setPlaybackError(true)}>
                <source src={video.videoUrl} />
                Your browser does not support HTML video.
              </video>
            ) : (
              <div className="player-placeholder" style={{ '--player-image': `url(${video.thumbnail})` }}>
                <div className="player-placeholder-content"><span className="player-symbol"><Share2 size={18} /></span><span className="eyebrow">A NOTE FROM THE ARCHIVE</span><p>{playbackError ? 'This video could not be played right now.' : 'This is a sample project entry.'}</p><small>{playbackError ? 'Check the video file link and try again.' : 'Add your own video file in src/data/videos.js to enable playback.'}</small></div>
              </div>
            )}
          </div>
          <div className="watch-title-row"><div><p className="eyebrow">{video.category} <i /> {video.date}</p><h1>{video.title}</h1></div><button className="share-button" onClick={shareVideo}><Share2 size={15} />{shareState || 'Share film'}{shareState === 'Link copied' && <Check size={14} />}</button></div>
          <p className="watch-description">{video.description}</p>
          {video.externalLink && (
            <div className="watch-actions">
              <a href={video.externalLink} target="_blank" rel="noreferrer" className="text-link">Open original Drive link <ArrowUpRight size={15} /></a>
            </div>
          )}
          <div className="watch-facts"><span><MapPin size={15} />{video.location}</span><span><Clock3 size={15} />{video.duration}</span><span>{video.isPlaceholder ? 'Archive item' : video.date}</span></div>
        </div>
        <aside className="watch-aside"><p className="eyebrow">A FEW MORE LIKE THIS</p><h2>In the same <em>chapter.</em></h2>{related.map((item) => <VideoCard key={item.id} video={item} compact />)}<Link to={`/archive?category=${encodeURIComponent(video.category)}`} className="text-link related-link">More {video.category.toLowerCase()} films <ArrowRight size={15} /></Link></aside>
      </div>
      <div className="watch-bottom-link"><Link to="/archive" className="text-link"><ArrowLeft size={15} /> Browse all films</Link><ContactLink className="text-link">Have a story in mind? <ArrowUpRight size={15} /></ContactLink></div>
    </div>
  )
}

export default VideoDetails
