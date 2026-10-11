import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkspaceCard from "@/components/WorkspaceCard";
import BookTourForm from "@/components/BookTourForm";
import { workspaces } from "@/data/spaces";

const amenities = [
  ["01","High-Speed Wi-Fi","Reliable connectivity for meetings, calls, cloud tools and everyday business."],
  ["02","Air-Conditioned","A comfortable, focused environment throughout business hours."],
  ["03","Meeting Room","Professional space for client discussions, presentations and team reviews."],
  ["04","Reception & Lounge","A polished first impression for guests, partners and clients."],
  ["05","Dedicated Desks","A consistent, business-ready workstation with quality seating."],
  ["06","Pantry & Water","Everyday essentials included so your team can stay productive."],
];

const stats = [
  ["₹4,999","Launch price / month"],
  ["12","Coworking seats"],
  ["1","Premium JP Nagar location"],
  ["100%","Ready-to-work setup"],
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero-pro">
          <div className="hero-pro-bg" />
          <div className="hero-pro-overlay" />
          <div className="container hero-pro-inner">
            <div className="hero-pro-copy">
              <span className="eyebrow gold">PREMIUM COWORKING • JP NAGAR 7TH PHASE</span>
              <h1>Work from a space that <em>elevates your business.</em></h1>
              <p>Premium dedicated desks, team workspaces and meeting rooms in a fully furnished professional office in Bengaluru.</p>
              <div className="hero-actions">
                <a href="#tour" className="btn btn-gold">Book a Free Tour</a>
                <a href="/spaces" className="btn btn-glass">Explore Workspaces</a>
              </div>
              <div className="hero-tags"><span>Fully Furnished</span><span>High-Speed Wi-Fi</span><span>Meeting Room</span><span>Reception & Lounge</span></div>
            </div>
            <div className="hero-price-card">
              <span>STARTING FROM</span>
              <strong>₹4,999</strong>
              <small>/ month</small>
              <p>Limited launch pricing on selected dedicated desks.</p>
              <a href="#tour" className="btn btn-dark full-btn">Check Availability</a>
            </div>
          </div>
        </section>

        <section className="stats-bar">
          <div className="container stats-grid">{stats.map(([v,l])=><div key={l}><strong>{v}</strong><span>{l}</span></div>)}</div>
        </section>

        <section className="section showcase-section">
          <div className="container showcase-grid">
            <div className="showcase-copy"><span className="eyebrow blue">STEADWIN FLAGSHIP WORKSPACE</span><h2>Designed for professionals who want more than just a desk.</h2><p>Move into a polished office environment without the cost and complexity of a full commercial lease. Ideal for freelancers, consultants, founders, sales teams and small companies.</p><div className="signature-list"><span>Premium interiors</span><span>Client-ready meeting spaces</span><span>Flexible monthly plans</span><span>Professional business environment</span></div><a className="text-link premium-link" href="#gallery">View real office photos →</a></div>
            <div className="showcase-images"><img className="img-main" src="/images/workspace-4.jpg" alt="STEADWIN premium coworking office"/><img className="img-small one" src="/images/workspace-6.jpg" alt="Meeting room"/><img className="img-small two" src="/images/workspace-7.jpg" alt="Professional cabin"/></div>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container">
            <div className="section-head"><span className="eyebrow blue">WORKSPACE SOLUTIONS</span><h2>Flexible options for every way of working</h2><p>Choose a single desk, bring a small team or book a professional meeting room.</p></div>
            <div className="service-grid">
              <article className="service-card"><img src="/images/workspace-5.jpg" alt="Dedicated desk"/><div><span>01</span><h3>Dedicated Desk</h3><p>Your own desk in a premium shared office with essential amenities included.</p><strong>From ₹4,999/month</strong></div></article>
              <article className="service-card"><img src="/images/workspace-2.jpg" alt="Team workspace"/><div><span>02</span><h3>Team Workspace</h3><p>Adjacent seats for startups, agencies, sales teams and growing firms.</p><strong>Custom team pricing</strong></div></article>
              <article className="service-card"><img src="/images/workspace-3.jpg" alt="Meeting room"/><div><span>03</span><h3>Meeting Room</h3><p>A professional space for client meetings, interviews and presentations.</p><strong>Hourly / Half-day</strong></div></article>
            </div>
          </div>
        </section>

        <section id="amenities" className="section amenities-pro">
          <div className="container">
            <div className="section-head left light"><span className="eyebrow gold">PREMIUM AMENITIES</span><h2>Everything your team needs to work professionally.</h2><p>Walk in, connect and start working. The essentials are already taken care of.</p></div>
            <div className="amenity-premium-grid">{amenities.map(([n,t,d])=><div className="amenity-premium" key={t}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>)}</div>
          </div>
        </section>

        <section id="pricing" className="section pricing-pro">
          <div className="container">
            <div className="section-head"><span className="eyebrow blue">SIMPLE PRICING</span><h2>Professional workspace without long-term lease pressure</h2><p>Start with what you need today and upgrade as your team grows.</p></div>
            <div className="pricing-grid premium-pricing-grid">
              <div className="price-card highlight"><span className="pill">Launch Offer</span><h3>Dedicated Desk</h3><div className="price">₹4,999<span>/month</span></div><ul><li>Dedicated desk & chair</li><li>High-speed Wi-Fi</li><li>AC during office hours</li><li>Common lounge access</li><li>Professional environment</li></ul><a className="btn btn-gold full-btn" href="#tour">Book a Free Tour</a></div>
              <div className="price-card"><span className="pill dark-pill">Premium</span><h3>Premium Desk</h3><div className="price">₹6,999<span>/month</span></div><ul><li>Priority seating</li><li>Wi-Fi + AC</li><li>Meeting room credits</li><li>Reception/lounge access</li><li>Ideal for client-facing professionals</li></ul><a className="btn btn-dark full-btn" href="#tour">Check Availability</a></div>
              <div className="price-card"><span className="pill dark-pill">For Teams</span><h3>Team Workspace</h3><div className="price">Custom<span> quote</span></div><ul><li>2-12 seats</li><li>Adjacent team seating</li><li>Meeting room access</li><li>Flexible monthly structure</li><li>Custom plan for teams</li></ul><a className="btn btn-dark full-btn" href="#tour">Get a Team Quote</a></div>
            </div>
          </div>
        </section>

        <section id="gallery" className="section gallery-pro-section">
          <div className="container"><div className="section-head left"><span className="eyebrow blue">REAL WORKSPACE GALLERY</span><h2>Visit virtually before you visit in person</h2></div><div className="gallery-pro"><img className="g1" src="/images/workspace-hero.jpg" alt="Reception"/><img src="/images/workspace-1.jpg" alt="Office interior"/><img src="/images/workspace-5.jpg" alt="Workstations"/><img src="/images/workspace-6.jpg" alt="Meeting room"/><img src="/images/workspace-7.jpg" alt="Private room"/></div></div>
        </section>

        <section className="section marketplace-pro">
          <div className="container">
            <div className="section-head light"><span className="eyebrow gold">STEADWIN WORKSPACE NETWORK</span><h2>Our spaces today. Partner spaces tomorrow.</h2><p>STEADWIN is built to grow into a marketplace where businesses can discover STEADWIN locations and verified partner coworking spaces in one place.</p></div>
            <div className="spaces-grid">{workspaces.map(s=><WorkspaceCard key={s.id} space={s}/>)}</div>
            <div className="marketplace-actions"><a href="/spaces" className="btn btn-light">Browse Workspaces</a><a href="/list-your-space" className="btn btn-outline">List Your Workspace</a></div>
          </div>
        </section>

        <section className="section why-section">
          <div className="container why-grid"><div><span className="eyebrow blue">WHY STEADWIN</span><h2>Built for people who want a better way to work.</h2><p>STEADWIN combines professional interiors, flexible terms and a business-ready environment so you can focus on clients, growth and productivity.</p></div><div className="why-cards"><div><strong>01</strong><h3>Move in fast</h3><p>No fit-out delay. No furniture setup.</p></div><div><strong>02</strong><h3>Stay flexible</h3><p>Choose the number of seats you need.</p></div><div><strong>03</strong><h3>Look professional</h3><p>Meet clients in a polished workspace.</p></div><div><strong>04</strong><h3>Scale easily</h3><p>Add team seats as your business grows.</p></div></div></div>
        </section>

        <section className="section faq-section">
          <div className="container faq-grid"><div><span className="eyebrow blue">FREQUENTLY ASKED</span><h2>Everything you need to know before booking.</h2><p>For custom team requirements, message us directly on WhatsApp.</p></div><div className="faq-list"><details open><summary>What is included in the monthly desk price?</summary><p>Desk, chair, Wi-Fi, AC during office hours, common-area access and the standard shared-workspace facilities shown on your plan.</p></details><details><summary>Can I visit before booking?</summary><p>Yes. You can book a free office tour and inspect the workspace before deciding.</p></details><details><summary>Can a small team sit together?</summary><p>Yes, subject to availability. We can create adjacent seating for teams of 2-12 people.</p></details><details><summary>Can other coworking operators list on STEADWIN?</summary><p>Yes. Partner workspaces can apply through the List Your Space page. Listings are subject to review and approval.</p></details></div></div>
        </section>

        <section id="tour" className="section tour-pro-section">
          <div className="container tour-grid"><div><span className="eyebrow gold">BOOK A FREE TOUR</span><h2>See the space. Check availability. Choose with confidence.</h2><p>Share your team size and preferred date. We’ll confirm your visit on WhatsApp.</p><div className="tour-points"><span>✓ No booking fee</span><span>✓ Direct availability check</span><span>✓ Flexible workspace options</span></div></div><BookTourForm/></div>
        </section>
      </main>
      <Footer />
      <a className="floating-wa" href="https://wa.me/919035275367?text=Hi%20STEADWIN%20Workspaces%2C%20please%20share%20coworking%20availability." target="_blank" rel="noreferrer">WhatsApp</a>
    </>
  );
}
