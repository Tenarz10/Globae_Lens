import { useEffect, useRef, useState } from 'react'
import { HashRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Archive from './pages/Archive.jsx'
import VideoDetails from './pages/VideoDetails.jsx'
import About from './pages/About.jsx'
import NotFound from './pages/NotFound.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import ContactSection from './components/ContactSection.jsx'

function ContactRedirect() {
  const navigate = useNavigate()
  const redirected = useRef(false)

  useEffect(() => {
    if (redirected.current) return
    redirected.current = true
    navigate('/', { replace: true })
    window.setTimeout(() => {
      document.getElementById('contact-section')?.scrollIntoView({ behavior: 'instant' })
    }, 150)
  }, [navigate])

  return null
}

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem('globae-lens-theme')
    const initialTheme = savedTheme === 'dark' ? 'dark' : 'light'
    document.documentElement.dataset.theme = initialTheme
    return initialTheme
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('globae-lens-theme', theme)
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content',
      theme === 'dark' ? '#111311' : '#f7f5f0',
    )
  }, [theme])

  return (
    <HashRouter>
      <ScrollToTop />
      <Navbar theme={theme} onThemeChange={setTheme} />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/watch/:videoId" element={<VideoDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactRedirect />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <ContactSection />
      <Footer />
    </HashRouter>
  )
}

export default App
