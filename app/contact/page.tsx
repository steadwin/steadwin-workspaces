import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookTourForm from "@/components/BookTourForm";

export default function Contact(){
  return <><Navbar/><main><section className="page-hero premium-page-hero"><div className="container"><span className="eyebrow gold">CONTACT STEADWIN</span><h1>Book your workspace tour</h1><p>JP Nagar 7th Phase, Bengaluru</p></div></section><section className="section"><div className="container contact-grid"><div><span className="eyebrow blue">VISIT • CALL • WHATSAPP</span><h2>Talk to our workspace team</h2><p><b>Location</b><br/>JP Nagar 7th Phase, Bengaluru, Karnataka</p><p><b>Phone / WhatsApp</b><br/><a href="tel:+919035275367">+91 90352 75367</a></p><p><b>Availability</b><br/>Dedicated desks, team seating and meeting room enquiries.</p><a className="btn btn-dark" href="https://wa.me/919035275367" target="_blank" rel="noreferrer">Chat on WhatsApp</a></div><BookTourForm/></div></section></main><Footer/></>
}
