
import { useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock3,
  MapPin,
  Share2,
} from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import VideoCard from '../components/VideoCard.jsx'
import ContactLink from '../components/ContactLink.jsx'
import { getVideoById, videos } from '../data/videos.js'
import NotFound from './NotFound.jsx'

function getDriveLink(video) {
  if (video.externalLink) {
    return video.externalLink
  }

  if (!video.embedUrl) {
    return null
  }

  try {
    const url = new URL(video.embedUrl)

    if (
      url.hostname !== 'drive.google.com' &&
      url.hostname !== 'docs.google.com'
    ) {
      return null
    }

    const match = url.pathname.match(
      /\/file\/d\/([^/]+)/
    )

    if (!match) {
      return null
    }

    return `https://drive.google.com/file/d/${match[1]}/view`
  } catch {
    return null
  }
}

function VideoDetails() {
  const { videoId } = useParams()
  const video = getVideoById(videoId)

  const [shareState, setShareState] = useState('')
  const [playbackError, setPlaybackError] = useState(false)
  const [showEmbed, setShowEmbed] = useState(true)

  if (!video) {
    return <NotFound />
  }

  const driveLink = getDriveLink(video)

  const shareVideo = async () => {
    const shareData = {
      title: video.title,
      text: video.description,
      url: window.location.href,
    }

    if (navigator.share) {
      try {
        await navigator.share(shareData)
        setShareState('Shared')

        window.setTimeout(() => {
          setShareState('')
        }, 2200)

        return
      } catch (error) {
        if (error.name === 'AbortError') {
          return
        }
      }
    }

    try {
      await navigator.clipboard.writeText(
        window.location.href
      )
      setShareState('Link copied')
    } catch {
      setShareState('Copy this page URL to share')
    }

    window.setTimeout(() => {
      setShareState('')
    }, 2800)
  }

  const related = videos
    .filter(
      (item) =>
        item.category === video.category &&
        item.id !== video.id
    )
    .slice(0, 3)

  return (
    <div className="watch-page page-width page-pad">
      <Link to="/archive" className="back-link">
        <ArrowLeft size={15} />
        Back to the archive
      </Link>

      <div className="watch-layout">
        <div className="watch-main">

          <div className="video-player">

            {video.embedUrl && showEmbed ? (
              <iframe
                key={video.id}
                src={video.embedUrl}
                title={`Video player: ${video.title}`}
                loading="eager"
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                style={{
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  border: 0,
                  backgroundColor: '#000',
                }}
              />
            ) : video.videoUrl && !playbackError ? (
              <video
                key={video.videoUrl}
                controls
                playsInline
                preload="metadata"
                poster={video.thumbnail}
                onError={() => setPlaybackError(true)}
                style={{
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#000',
                }}
              >
                <source src={video.videoUrl} />
                Your browser does not support HTML video.
              </video>
            ) : (
              <div
                className="player-placeholder"
                style={{
                  '--player-image': `url("${video.thumbnail}")`,
                }}
              >
                <div className="player-placeholder-content">
                  <span className="player-symbol">
                    <Share2 size={18} />
                  </span>

                  <span className="eyebrow">
                    A NOTE FROM THE ARCHIVE
                  </span>

                  <p>
                    {playbackError
                      ? 'This video could not be played right now.'
                      : video.embedUrl && !showEmbed
                        ? 'The embedded player is hidden.'
                        : 'This is a sample project entry.'}
                  </p>

                  <small>
                    {driveLink
                      ? 'Use the Google Drive link below to watch this video.'
                      : 'Video playback is currently unavailable.'}
                  </small>
                </div>
              </div>
            )}
          </div>

          {(driveLink || video.embedUrl) && (
            <div className="watch-actions mobile-video-actions">

              {driveLink && (
                <a
                  href={driveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link drive-watch-link"
                >
                  Watch video on Google Drive
                  <ArrowUpRight size={15} />
                </a>
              )}

              {video.embedUrl && (
                <button
                  type="button"
                  className="video-retry-button"
                  onClick={() => {
                    setShowEmbed((previous) => !previous)
                    setPlaybackError(false)
                  }}
                >
                  {showEmbed
                    ? 'Hide embedded player'
                    : 'Try embedded player'}
                </button>
              )}
            </div>
          )}

          <div className="watch-title-row">
            <div>
              <p className="eyebrow">
                {video.category}
                <i />
                {video.date}
              </p>

              <h1>{video.title}</h1>
            </div>

            <button
              className="share-button"
              onClick={shareVideo}
              type="button"
            >
              <Share2 size={15} />
              {shareState || 'Share film'}

              {shareState === 'Link copied' && (
                <Check size={14} />
              )}
            </button>
          </div>

          <p className="watch-description">
            {video.description}
          </p>

          <div className="watch-facts">
            <span>
              <MapPin size={15} />
              {video.location}
            </span>

            <span>
              <Clock3 size={15} />
              {video.duration}
            </span>

            <span>
              {video.isPlaceholder
                ? 'Archive item'
                : video.date}
            </span>
          </div>
        </div>

        <aside className="watch-aside">
          <p className="eyebrow">
            A FEW MORE LIKE THIS
          </p>

          <h2>
            In the same <em>chapter.</em>
          </h2>

          {related.map((item) => (
            <VideoCard
              key={item.id}
              video={item}
              compact
            />
          ))}

          <Link
            to={`/archive?category=${encodeURIComponent(video.category)}`}
            className="text-link related-link"
          >
            More {video.category.toLowerCase()} films
            <ArrowRight size={15} />
          </Link>
        </aside>
      </div>

      <div className="watch-bottom-link">
        <Link to="/archive" className="text-link">
          <ArrowLeft size={15} />
          Browse all films
        </Link>

        <ContactLink className="text-link">
          Have a story in mind?
          <ArrowUpRight size={15} />
        </ContactLink>
      </div>
    </div>
  )
}

export default VideoDetails
