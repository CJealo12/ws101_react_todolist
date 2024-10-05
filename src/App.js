import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <h1 className="logo">Artemis</h1>
        <div className="bx bx-menu" id="menu-icon"></div>
        <ul className="navbar">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Importance</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </header>

      <section className="home" id="home">
        <div className="social">
          <a href="https://github.com/CJealo12" target="_blank" rel="noopener noreferrer"><i className='bx bxl-github'></i></a>
          <a href="https://dribbble.com/cjbonsol?onboarding=true&designer=true" target="_blank" rel="noopener noreferrer"><i className='bx bxl-dribbble'></i></a>
          <a href="https://www.behance.net/jealobonsol" target="_blank" rel="noopener noreferrer"><i className='bx bxl-behance'></i></a>
          <a href="https://www.instagram.com/nxmswevven/?hl=en" target="_blank" rel="noopener noreferrer"><i className='bx bxl-instagram'></i></a>
        </div>
        <div className="home-img">
          <img src="web2.jpg" alt="" />
        </div>
        <div className="home-text">
          <span>What is Web Development?</span>
          <h1>WEB DEVELOPMENT</h1>
          <p>
            Web development is an ever-evolving field that combines creativity and technical expertise 
            to build functional, user-friendly websites and applications. Through the journey of learning 
            web development, one gains a comprehensive understanding of both the front-end and back-end 
            aspects of website creation.
          </p>
        </div>
      </section>

      <section className="about" id="about">
        <div className="heading">
          <h2>About the Web Development</h2>
          <span>Importance</span>
        </div>
        <div className="about-container">
          <div className="about-img">
            <img src="frontend-vs-bancend.webp" alt="" />
          </div>
          <div className="about-text">
            <p>
              Web development is the process of creating and maintaining websites or web applications, 
              ranging from simple static pages to complex, interactive platforms. It involves various stages, 
              including planning, designing, coding, testing, and ongoing maintenance. The field is divided 
              into front-end development, which focuses on the user interface and experience using technologies 
              like HTML, CSS, and JavaScript, and back-end development, which handles server-side logic, 
              databases, and application functionality using languages like Python, PHP, and frameworks like Node.js.
            </p>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="heading">
          <h2>More details about the tools in Web Development</h2>
          <span>Importance</span>
        </div>
        <div className="services-content">
          <div className="services-box">
            <h3>JavaScript</h3>
            <a href="https://www.w3schools.com/js/default.asp" target="_blank" rel="noopener noreferrer">
              <i className='bx bx-code-alt'></i>
            </a>
          </div>
          <div className="services-box">
            <h3>HTML</h3>
            <a href="https://www.w3schools.com/html/html_intro.asp" target="_blank" rel="noopener noreferrer">
              <i className='bx bx-server'></i>
            </a>
          </div>
          <div className="services-box">
            <h3>CSS</h3>
            <a href="https://www.w3schools.com/css/css_intro.asp" target="_blank" rel="noopener noreferrer">
              <i className='bx bx-brush'></i>
            </a>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="heading">
          <h2>Contact</h2>
          <span>Connect to Me!</span>
        </div>
        <div className="contact-form">
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea cols="30" rows="10" placeholder="Write Message Here..."></textarea>
            <input type="button" value="Send" className="contact-button" />
          </form>
        </div>
      </section>

      <div className="footer">
        <h2>You can also contact me on my Social Media Accounts.</h2>
        <div className="footer-social">
          <a href="https://www.facebook.com/jealo.bonsol" target="_blank" rel="noopener noreferrer"><i className='bx bxl-facebook'></i></a>
          <a href="https://x.com/psyjiie_" target="_blank" rel="noopener noreferrer"><i className='bx bxl-twitter'></i></a>
          <a href="https://www.instagram.com/nxmswevven/?hl=en" target="_blank" rel="noopener noreferrer"><i className='bx bxl-instagram'></i></a>
          <a href="https://www.youtube.com/channel/UCu5KORVB3Sm0PM6w0YUpHng" target="_blank" rel="noopener noreferrer"><i className='bx bxl-youtube'></i></a>
        </div>
      </div>

      <div className="copyright">
        <p>Create By <button onClick={(e) => e.preventDefault()} className="link-button">Artemis Codes</button></p>
        <p> | All Rights Reserved @2024.</p>
      </div>

      <link rel='stylesheet' href='https://unpkg.com/boxicons@latest/css/boxicons.min.css' />
    </div>
  );
}

export default App;
