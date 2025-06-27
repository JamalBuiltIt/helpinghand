import React, { useEffect, useRef } from 'react';
import './inputForm.css';

import slide1 from './photos/dawg1.png';
import slide2 from './photos/dawg2.png';
import slide3 from './photos/dawg3.png';
import slide4 from './photos/dawg4.png';
import slide5 from './photos/dawg5.png';

export default function CashAppDonation() {
  const cashtag = 'KeefyDee';
  const carouselRef = useRef(null);

  useEffect(() => {
    let index = 0;
    const slides = carouselRef.current?.children;
    if (!slides) return;

    const interval = setInterval(() => {
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }
      slides[index].style.display = 'block';
      index = (index + 1) % slides.length;
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Carousel */}
      <div className="carousel-container">
        <div className="carousel" ref={carouselRef}>
          <div className="carousel-slide"><img src={slide1} alt="Slide 1" /></div>
          <div className="carousel-slide"><img src={slide2} alt="Slide 2" /></div>
          <div className="carousel-slide"><img src={slide3} alt="Slide 3" /></div>
          <div className="carousel-slide"><img src={slide4} alt="Slide 4" /></div>
          <div className="carousel-slide"><img src={slide5} alt="Slide 5" /></div>
        </div>
        <div className="carousel-overlay" />
      </div>

      {/* Donation Section */}
      <div className="donateContainer" style={styles.container}>
        <h2 style={styles.title}>Donate Today!</h2>
        <p style={styles.tagline}>Your support helps rescue, feed, and shelter animals 🐾</p>

        <img
          src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://cash.app/$${cashtag}`}
          alt="Cash App QR Code"
          style={styles.qr}
        />

        <a
          href={`https://cash.app/${cashtag}`}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.button}
        >
          Donate via Cash App
        </a>

        <ul style={styles.impactList}>
          <li>🐶 $10 feeds a shelter dog for a week</li>
          <li>🐾 $25 covers one full vet visit</li>
          <li>🏠 $50 provides bedding & warmth for 3 rescues</li>
        </ul>

        <p style={styles.footer}>100% of your donation goes to animal care ❤️</p>
      </div>
    </>
  );
}

const styles = {
  container: {
    maxWidth: '450px',
    margin: '10vh auto',
    padding: '2rem',
    backgroundColor: '#fffaf5',
    borderRadius: '16px',
    boxShadow: '0 0 30px rgba(0,0,0,0.15)',
    textAlign: 'center',
    fontFamily: 'Segoe UI, sans-serif',
    animation: 'fadeSlideIn 1.5s ease-in-out forwards',
    color: '#333',
    zIndex: 2,
    position: 'absolute',
    top: '57.5%',
    left: '50%',
    transform: 'translate(-50%, -70%)',
  },
  title: {
    fontSize: '2rem',
    color: '#ff7f50',
    marginBottom: '0.5rem',
    textShadow: '0 0 1px rgba(0, 0, 0, 1.0)',
  },
  tagline: {
    fontSize: '1rem',
    color: '#666',
    marginBottom: '1.5rem',
  },
  qr: {
    width: '200px',
    height: '200px',
    marginBottom: '1.5rem',
    borderRadius: '12px',
    boxShadow: '0 0 20px rgba(255,127,80,0.3)',
  },
  button: {
    display: 'inline-block',
    padding: '1rem 2rem',
    backgroundColor: '#ff7f50',
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.2rem',
    borderRadius: '30px',
    boxShadow: '0 0 20px rgba(255,127,80,0.5)',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
    marginTop: '0.75rem',
    animation: 'pulse 2s infinite',
  },
  footer: {
    fontSize: '0.85rem',
    color: '#999',
    marginTop: '2rem',
  },
  impactList: {
    textAlign: 'left',
    marginTop: '1.5rem',
    color: '#444',
    fontSize: '0.95rem',
    lineHeight: '1.6',
    paddingLeft: '1.25rem',
  },
};
