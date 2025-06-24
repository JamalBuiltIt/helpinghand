import { useNavigate } from 'react-router-dom';
import './donationHome.css';
import { motion } from 'framer-motion';

// Import images relative to this file inside src
import slide1 from './photos/dawg1.png';
import slide2 from './photos/dawg2.png';
import slide3 from './photos/dawg3.png';
import slide4 from './photos/dawg4.png';
import slide5 from './photos/dawg5.png';

const navigate = useNavigate();

export default function DonationHome() {
  return (
    <div className="donation-home">
      <div className="carousel">
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

      <div className="overlay">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
        >
          Help Save Our Furry Friends 🐾
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Every second, an animal is in need. With your support, we can provide
          shelter, food, and love to thousands of abandoned pets. 💖
        </motion.p>

       <motion.button
          className="donate-btn"
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'tween', stiffness: 500, duration: 0.1 }}  
          onClick={() => navigate('/donate')}
        >
            Donate Now 🐶
        </motion.button>



        <motion.div
          className="facts"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <ul>
            <li>🐾 Over 3 million animals enter shelters each year.</li>
            <li>🐱 Your donation provides life-saving care.</li>
            <li>🐕 Make a lasting impact today.</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
