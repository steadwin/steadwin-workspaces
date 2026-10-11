import Link from "next/link";

export default function Navbar() {
  return (
    <header className="nav-wrap">
      <div className="container nav">
        <Link href="/" className="brand-lockup" aria-label="STEADWIN Workspaces home">
          <img className="brand-icon" src="/images/steadwin-icon.png" alt="STEADWIN icon" />
          <span className="brand-copy">
            <strong>STEADWIN</strong>
            <span>WORKSPACES</span>
          </span>
        </Link>
        <nav className="nav-links" aria-label="Primary navigation">
          <Link href="/">Home</Link>
          <Link href="/spaces">Workspaces</Link>
          <Link href="/#amenities">Amenities</Link>
          <Link href="/#pricing">Pricing</Link>
          <Link href="/list-your-space">List Your Space</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <a className="btn btn-gold nav-cta" href="https://wa.me/919035275367?text=Hi%20STEADWIN%20Workspaces%2C%20I%20want%20to%20book%20a%20workspace%20tour." target="_blank" rel="noreferrer">Book a Tour</a>
      </div>
    </header>
  );
}
