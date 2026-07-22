import bg from "../assets/contact.png";
function Contact() {
  return (
    <section 
      className="contact-section" 
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="contact-blur-overlay">
        <div className="contact-container">
          
          {/* Left Side: Direct Contact Details */}
          <div className="contact-info-panel">
            <h2 className="h1">Contact Me</h2>
            <p className="contact-sub">Feel free to reach out directly or drop a message in the form!</p>

            <ul className="contact-list">
              {/* Email */}
              <li> 
                <a href="mailto:alexgetnet34@gmail.com" className="contact-card">
                  <span className="icon">📧</span>
                  <div className="card-text">
                    <strong>Email</strong>
                    <span>alexgetnet34@gmail.com</span>
                  </div>
                </a> 
              </li>
              
              {/* GitHub */}
              <li> 
                <a href="https://github.com/AlemayehuGetnet-12" target="_blank" rel="noreferrer" className="contact-card">
                  <span className="icon">💻</span>
                  <div className="card-text">
                    <strong>GitHub</strong>
                    <span>github.com/AlemayehuGetnet-12</span>
                  </div>
                </a> 
              </li>
              
              {/* Phone Call */}
              <li> 
                <a href="tel:+251931756792" className="contact-card">
                  <span className="icon">📞</span>
                  <div className="card-text">
                    <strong>Call Me</strong>
                    <span>+251 931 75 67 92</span>
                  </div>
                </a>  
              </li>
              
              {/* SMS */}
              <li> 
                <a href="sms:+251931756792" className="contact-card">
                  <span className="icon">💬</span>
                  <div className="card-text">
                    <strong>Send SMS</strong>
                    <span>Text me directly</span>
                  </div>
                </a>
              </li>
              
              {/* Telegram */}
              <li>  
                <a href="https://t.me/GishAlex" target="_blank" rel="noreferrer" className="contact-card">
                  <span className="icon">✈️</span>
                  <div className="card-text">
                    <strong>Telegram</strong>
                    <span>@Alemayehu3175</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          {/* Right Side: Message Form */}
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <h3>Send a Message</h3>
            
            <div className="input-group">
              <input type="text" placeholder="Your Name" required />
            </div>

            <div className="input-group">
              <input type="email" placeholder="Your Email" required />
            </div>

            <div className="input-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>

            <button type="submit" className="btn">Send Message</button>
          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;