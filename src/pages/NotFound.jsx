import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

function NotFound() {
  return <section className="not-found page-width"><p className="eyebrow">404 · OUT OF FRAME</p><h1>This page took<br /><em>a different turn.</em></h1><p>Let’s get you back to the stories.</p><Link className="button button-accent" to="/archive"><ArrowLeft size={15} /> Back to the archive</Link></section>
}

export default NotFound
