import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Home, Info, Phone } from 'lucide-react';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <Sparkles color="#ff4d79" size={28} />
        <h2 style={styles.logo}>MyWebsite</h2>
      </div>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}><Home size={18} /> Home</Link>
        <Link to="/about" style={styles.link}><Info size={18} /> About Us</Link>
        <Link to="/contact" style={styles.link}><Phone size={18} /> Contact Us</Link>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 40px',
    backgroundColor: '#6b0f24', // Deep maroon
    color: '#ffffff',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },
  logo: {
    margin: 0,
    fontSize: '1.5rem',
    fontWeight: '700',
    letterSpacing: '1px'
  },
  nav: {
    display: 'flex',
    gap: '25px'
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    color: '#ffffff',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '1.1rem',
    transition: 'color 0.2s ease',
  }
};

export default Header;