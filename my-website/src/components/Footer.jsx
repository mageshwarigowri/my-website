import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        &copy; {new Date().getFullYear()} MyWebsite. Crafted with <Heart size={16} color="#ff4d79" style={{ verticalAlign: 'text-bottom' }} /> in React.
      </p>
    </footer>
  );
};

const styles = {
  footer: {
    padding: '20px',
    backgroundColor: '#6b0f24', // Matches header maroon
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 'auto',
    borderTop: '4px solid #ff4d79' // Vibrant pink accent line
  },
  text: {
    margin: 0,
    fontSize: '0.9rem'
  }
};

export default Footer;