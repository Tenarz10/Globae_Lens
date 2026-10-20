import { useLocation, useNavigate } from 'react-router-dom'

function ContactLink({ children, onClick, ...props }) {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const handleClick = (event) => {
    onClick?.(event)
    if (event.defaultPrevented) return

    event.preventDefault()
    navigate('/')
    window.setTimeout(() => {
      document.getElementById('contact-section')?.scrollIntoView({ behavior: 'instant' })
    }, pathname === '/' ? 0 : 150)
  }

  return (
    <a href="/" {...props} onClick={handleClick}>
      {children}
    </a>
  )
}

export default ContactLink
