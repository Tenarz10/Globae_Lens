import { ArrowUpRight, MapPin, Play } from 'lucide-react'
import { Link } from 'react-router-dom'

function VideoCard({ video, compact = false }) {
  return (
    <article className={`video-card${compact ? ' video-card-compact' : ''}`}>
      <span className="video-card-image">
        <Link to={`/watch/${video.id}`} className="video-image-link" aria-label={`${video.title} — ${video.videoUrl ? 'Watch film' : 'View project'}`}>
          <img src={video.thumbnail} alt={video.thumbnailAlt || ''} loading="lazy" />
          {video.isPlaceholder && <span className="video-card-sample">SAMPLE</span>}
          <span className="video-card-hover"><span><Play size={15} fill="currentColor" /></span><small>{video.videoUrl ? 'Watch film' : 'View project'}</small></span>
          <span className="video-duration">{video.duration}</span>
        </Link>
        {video.thumbnailCredit && video.thumbnailSource && (
          <a className="video-photo-credit" href={video.thumbnailSource} target="_blank" rel="noreferrer" aria-label={`Photo credit: ${video.thumbnailCredit}`}>
            {video.thumbnailCredit}
          </a>
        )}
      </span>
      <Link to={`/watch/${video.id}`} className="video-card-info">
        <span className="video-card-meta"><span>{video.category}</span><i />{video.date}</span>
        <span className="video-card-title">{video.title}<ArrowUpRight size={14} /></span>
        {!compact && <span className="video-card-location"><MapPin size={12} />{video.location}</span>}
      </Link>
    </article>
  )
}

export default VideoCard
