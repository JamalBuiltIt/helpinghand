import "./inputForm.css";

import slide1 from './photos/dawg1.png';
import slide2 from './photos/dawg2.png';
import slide3 from './photos/dawg3.png';
import slide4 from './photos/dawg4.png';
import slide5 from './photos/dawg5.png';

export default function CashAppDonation() {
  const cashtag = 'KeefyDee';

  return (
    <>
      {/* Carousel */}
      <div className="carousel-container" style={{ position: 'relative' }}>
        <div className="carousel" style={{ marginBottom: '2rem' }}>
          <div className="carousel-slide">
            <img src={slide1} alt="Slide 1" />
          </div>
          <div className="carousel-slide">
            <img src={slide2} alt="Slide 2" />
          </div>
          <div className="carousel-slide">
            <img src={slide3} alt="Slide 3" />
          </div>
          <div className="carousel-slide">
            <img src={slide4} alt="Slide 4" />
          </div>
          <div className="carousel-slide">
            <img src={slide5} alt="Slide 5" />
          </div>
        </div>
        <div className="carousel-overlay" />
      </div>

      {/* Donation Form */}
      <div className="donateContainer" style={styles.container}>
        <h2 style={styles.title}>Donate Today!</h2>

        <a
          href={`https://cash.app/${cashtag}`}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.button}
        >
          Click Here
        </a>

        
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
  },
  title: {
    fontSize: '2rem',
    color: '#ff7f50',
    marginBottom: '1rem',
    textShadow: '0 0 1px rgba(0, 0, 0, 1.0)',
  },
  cashtag: {
    fontSize: '1.25rem',
    color: '#555',
    marginBottom: '1rem',
  },
  qr: {
    width: '220px',
    height: '220px',
    marginBottom: '1rem',
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
  },
  input: {
    width: '100%',
    padding: '0.9rem',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    marginTop: '0.5rem',
    marginBottom: '1.5rem',
    boxSizing: 'border-box',
  },
};
