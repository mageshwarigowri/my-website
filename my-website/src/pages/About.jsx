import React from 'react';
import { Users } from 'lucide-react';

const About = () => {
  return (
    <div style={styles.container}>
      <div style={styles.headerBlock}>
        <Users size={40} color="#ff4d79" />
        <h1 style={styles.title}>About Us</h1>
      </div>
      <p style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique, nulla vel congue volutpat, nunc metus tristique metus, in tincidunt neque nisl sit amet sapien.
      </p>
      <p style={styles.text}>
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus aliquet tristique justo, nec varius libero condimentum ac. Proin eget nisl at orci aliquet scelerisque. 
      </p>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(107, 15, 36, 0.08)',
    borderTop: '6px solid #6b0f24'
  },
  headerBlock: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '20px'
  },
  title: {
    color: '#6b0f24',
    margin: 0,
    fontSize: '2.2rem'
  },
  text: {
    lineHeight: '1.8',
    color: '#555',
    fontSize: '1.1rem',
    marginBottom: '20px'
  }
};

export default About;