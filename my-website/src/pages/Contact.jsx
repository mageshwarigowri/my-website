import React from 'react';
import { Mail, PhoneCall, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div style={styles.container}>
      <div style={styles.headerBlock}>
        <Send size={40} color="#ff4d79" />
        <h1 style={styles.title}>Get in Touch</h1>
      </div>
      <p style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. 
      </p>
      
      <div style={styles.contactCard}>
        <div style={styles.contactRow}>
          <Mail color="#6b0f24" size={24} />
          <span style={styles.contactText}>contact@loremipsum.com</span>
        </div>
        <div style={styles.contactRow}>
          <PhoneCall color="#6b0f24" size={24} />
          <span style={styles.contactText}>+1 234 567 8900</span>
        </div>
        <div style={styles.contactRow}>
          <MapPin color="#6b0f24" size={24} />
          <span style={styles.contactText}>123 Lorem Ipsum Dolor, Sit Amet, 10001</span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(107, 15, 36, 0.08)'
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
    marginBottom: '30px'
  },
  contactCard: {
    backgroundColor: '#fff5f7',
    padding: '25px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  contactRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px'
  },
  contactText: {
    fontSize: '1.1rem',
    color: '#333',
    fontWeight: '500'
  }
};

export default Contact;