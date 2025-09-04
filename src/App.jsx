import { useState } from 'react'
import './NumberPlateHub.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <header className="brandbar">
        <div className="brand">
          <div className="logo">NUMBER PLATE HUB</div>
        </div>
      </header>

      <nav className="nav">
        <div className="wrap">
          <button 
            className="menu-toggle" 
            aria-expanded={menuOpen} 
            aria-controls="mainmenu"
            onClick={toggleMenu}
          >
            ☰
          </button>
          <ul id="mainmenu" className={menuOpen ? 'open' : ''}>
            <li><a className="active" href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="orders.html">Orders</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="installation.html">Installation</a></li>
            <li><a href="support.html">Support</a></li>
          </ul>
        </div>
      </nav>

      <main className="grid">
        <article className="card muted">
          <div className="content">
            <p className="title" style={{fontWeight:800}}>Hsrp Number Plate With Colour Sticker</p>
            <a className="cta" href="https://hsrp.today/pages/applyform.php?product=Number%20Plate%20With%20Colour%20Sticker"><span>Proceed</span><span className="arrow">→</span></a>
          </div>
        </article>

        <article className="card accent">
          <div className="content">
            <p className="title">Two-wheel Plate</p>
            <a className="cta" href="https://hsrp.today/pages/applyform.php?product=Two-wheel%20Plate"><span>Proceed</span><span className="arrow">→</span></a>
          </div>
        </article>

        <article className="card muted">
          <div className="content">
            <p className="title">Four-wheel Plate</p>
            <a className="cta" href="https://hsrp.today/pages/applyform.php?product=Four-wheel%20Plate"><span>Proceed</span><span className="arrow">→</span></a>
          </div>
        </article>

        <article className="card muted">
          <div className="content">
            <p className="title">Colour Stickers</p>
            <a className="cta" href="https://hsrp.today/pages/applyform.php?product=Colour%20Stickers"><span>Proceed</span><span className="arrow">→</span></a>
          </div>
        </article>

        <article className="card accent">
          <div className="content">
            <p className="title">Heavy-duty Plate</p>
            <a className="cta" href="https://hsrp.today/pages/applyform.php?product=Heavy-duty%20Plate"><span>Proceed</span><span className="arrow">→</span></a>
          </div>
        </article>

        <article className="card muted">
          <div className="content">
            <p className="title">Tractor &amp; Trailer Plate</p>
            <a className="cta" href="https://hsrp.today/pages/applyform.php?product=Tractor%20%26%20Trailer%20Plate"><span>Proceed</span><span className="arrow">→</span></a>
          </div>
        </article>

        <article className="card accent">
          <div className="content">
            <p className="title">Electric Vehicle Plate</p>
            <a className="cta" href="https://hsrp.today/pages/applyform.php?product=Electric%20Vehicle%20Plate"><span>Proceed</span><span className="arrow">→</span></a>
          </div>
        </article>

        <article className="card muted">
          <div className="content">
            <p className="title">Replacement Plate</p>
            <a className="cta" href="https://hsrp.today/pages/applyform.php?product=Replacement%20Plate"><span>Proceed</span><span className="arrow">→</span></a>
          </div>
        </article>

        <article className="card accent">
          <div className="content">
            <p className="title">Order Status &amp; Support</p>
            <a className="cta" href="https://hsrp.today/pages/applyform.php?product=Order%20Status%20%26%20Support"><span>Proceed</span><span className="arrow">→</span></a>
          </div>
        </article>
      </main>

      <footer className="footer">
        <div className="wrap">
          <a href="faq.html">FAQ</a>
          <a href="index.html">Home</a>
          <a href="orders.html">Track Order</a>
          <a href="contact.html">Contact</a>
          <a href="privacy-policy.html">Privacy Policy</a>
          <a href="terms.html">Terms &amp; Conditions</a>
          <a href="refund.html">Refund &amp; Cancellation Policy</a>
        </div>
      </footer>
    </>
  )
}

export default App
