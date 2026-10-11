import Link from "next/link";

export default function Footer() {
  return (
    <>
      <section className="footer-cta" aria-label="Book a tour">
        <div className="container footer-cta-inner">
          <div>
            <span className="footer-cta-kicker">Premium Workspaces in Bengaluru</span>
            <h2>Ready to find your perfect workspace?</h2>
            <p>Visit STEADWIN Workspaces in JP Nagar 7th Phase and experience the space in person.</p>
          </div>
          <a
            className="footer-cta-btn"
            href="https://wa.me/919035275367?text=Hi%20STEADWIN%20Workspaces%2C%20I%20want%20to%20book%20a%20free%20workspace%20tour."
            target="_blank"
            rel="noreferrer"
          >
            Book a Free Tour →
          </a>
        </div>
      </section>

      <footer className="footer footer-premium">
        <div className="container footer-premium-grid">
          <div className="footer-brand-block">
            <Link href="/" className="footer-brand-lockup" aria-label="STEADWIN Workspaces home">
              <img src="/images/steadwin-icon.png" alt="STEADWIN icon" />
              <span>
                <strong>STEADWIN</strong>
                <small>WORKSPACES</small>
              </span>
            </Link>
            <p>
              Premium coworking, dedicated desks, meeting rooms and flexible workspaces designed for
              professionals, founders and growing teams.
            </p>
            <div className="footer-contact-chips">
              <a href="tel:+919035275367">Call Us</a>
              <a
                href="https://wa.me/919035275367?text=Hi%20STEADWIN%20Workspaces"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Workspaces</h4>
            <Link href="/spaces">Dedicated Desks</Link>
            <Link href="/spaces">Team Workspaces</Link>
            <Link href="/spaces">Meeting Rooms</Link>
            <Link href="/spaces">Partner Workspaces</Link>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <Link href="/#amenities">Amenities</Link>
            <Link href="/#pricing">Pricing</Link>
            <Link href="/list-your-space">List Your Space</Link>
            <Link href="/contact">Contact Us</Link>
          </div>

          <div className="footer-col footer-visit">
            <h4>Visit STEADWIN</h4>
            <p>JP Nagar 7th Phase<br />Bengaluru, Karnataka</p>
            <a href="tel:+919035275367">+91 90352 75367</a>
            <a
              href="https://wa.me/919035275367?text=Hi%20STEADWIN%20Workspaces"
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp →
            </a>
            <Link className="footer-outline-btn" href="/contact">Get Directions</Link>
          </div>
        </div>

        <div className="container footer-premium-bottom">
          <span>© 2026 STEADWIN Workspaces. All rights reserved.</span>
          <span>Business • Technology • People • Spaces</span>
        </div>
      </footer>
    </>
  );
}
