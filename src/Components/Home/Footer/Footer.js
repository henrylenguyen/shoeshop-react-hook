import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <section className="footer__links">
            <div className="footer__item">
              <img src="/icons/icon.png" alt="logo"/>
              <ul>
                <li>
                  <i className="fas fa-phone"></i>
                  <span>1800-123-4567 <br/>
                    +91 987-654-3210
                  </span>
        
                </li>
                <li>
                  <i className="fas fa-envelope"></i>
                  <span>info@example.com <br/>
                    services@gmail.com
        
                  </span>
        
                </li>
                <li>
                  <i className="fas fa-location-dot"></i>
                  <span>Demo Address #8901 Marmora <br/>
                    Road City
                  </span>
        
                </li>
              </ul>
        
            </div>
            <div className="footer__item">
              <h3>Our links</h3>
              <a href="#">
                <i className="fas fa-chevron-right"></i>Home</a>
                <a href="#"><i className="fas fa-chevron-right"></i>About Us</a>
                <a href="#"><i className="fas fa-chevron-right"></i>Services</a>
                <a href="#"><i className="fas fa-chevron-right"></i>Team</a>
                <a href="#"><i className="fas fa-chevron-right"></i>Blog</a>
        
              </div>
              <div className="footer__item">
                <h3>Our Services</h3>
                <a href="#">
                  <i className="fas fa-chevron-right"></i>Strategy & Research</a>
                  <a href="#"><i className="fas fa-chevron-right"></i>Web Development</a>
                  <a href="#"><i className="fas fa-chevron-right"></i>Web Solution</a>
                  <a href="#"><i className="fas fa-chevron-right"></i>Digital Marketing</a>
                  <a href="#"><i className="fas fa-chevron-right"></i>App Design</a>
        
                </div>
                <div className="footer__item">
                  <h3>Our links</h3>
                  <a href="#">
                    <i className="fas fa-chevron-right"></i>FAQ</a>
                    <a href="#"><i className="fas fa-chevron-right"></i>Portfolio</a>
                    <a href="#"><i className="fas fa-chevron-right"></i>Privacy Policy</a>
                    <a href="#"><i className="fas fa-chevron-right"></i>Team & Conditions</a>
                    <a href="#"><i className="fas fa-chevron-right"></i>Support</a>
        
                  </div>
        </section>
        <section className="copyright">
          <div className="copyright__content">
            <div className="copyright__text">
              <p>Copyright © 2022 <span>Henry Lê Nguyễn</span> . All rights reserved.</p>
            </div>
            <div className="copyright__social">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </section>
      </div>
  </footer>

  );
};

export default Footer;