import React from 'react';
import { Rocket, Star } from 'lucide-react';

const Home = () => {
  return (
    <div style={styles.pageLayout}>
      
      {/* LEFT SPONSORED AD */}
      <aside style={styles.adSidebar}>
        <div style={styles.adSticky}>
          <p style={styles.adLabel}>Sponsored</p>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSINi8yk1FZry-jfz-FHVaV2TRe4B2z0IqG-Q&s" alt="Sponsored Ad" style={styles.adImage} />
          <p style={styles.adText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.
          </p>
        </div>
      </aside>

      {/* CENTER MAIN CONTENT */}
      <div style={styles.centerColumn}>
        <div style={styles.mainContainer}>
          <div style={styles.headerBlock}>
            <Rocket size={40} color="#ff4d79" />
            <h1 style={styles.title}>Welcome to the Future</h1>
          </div>
          <p style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p style={styles.text}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
          <button style={styles.button}>Get Started</button>
        </div>

        {/* TESTIMONIALS SECTION */}
        <div style={styles.testimonialContainer}>
          <h2 style={styles.subtitle}>Client Testimonials</h2>
          
          <div style={styles.testimonialCard}>
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Jane Doe" style={styles.profileImg} />
            <div>
              <div style={styles.stars}>
                <Star size={16} fill="#ff4d79" color="#ff4d79" />
                <Star size={16} fill="#ff4d79" color="#ff4d79" />
                <Star size={16} fill="#ff4d79" color="#ff4d79" />
                <Star size={16} fill="#ff4d79" color="#ff4d79" />
                <Star size={16} fill="#ff4d79" color="#ff4d79" />
              </div>
              <p style={styles.quote}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus."</p>
              <p style={styles.clientName}>- Jane Doe, CEO of Lorem</p>
            </div>
          </div>

          <div style={styles.testimonialCard}>
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="John Smith" style={styles.profileImg} />
            <div>
              <div style={styles.stars}>
                <Star size={16} fill="#ff4d79" color="#ff4d79" />
                <Star size={16} fill="#ff4d79" color="#ff4d79" />
                <Star size={16} fill="#ff4d79" color="#ff4d79" />
                <Star size={16} fill="#ff4d79" color="#ff4d79" />
                <Star size={16} color="#ff4d79" /> {/* 4 out of 5 stars */}
              </div>
              <p style={styles.quote}>"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
              <p style={styles.clientName}>- John Smith, Founder of Ipsum</p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SPONSORED AD */}
      <aside style={styles.adSidebar}>
        <div style={styles.adSticky}>
          <p style={styles.adLabel}>Sponsored</p>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSINi8yk1FZry-jfz-FHVaV2TRe4B2z0IqG-Q&s" alt="Sponsored Ad" style={styles.adImage} />
          <p style={styles.adText}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
          </p>
        </div>
      </aside>

    </div>
  );
};

const styles = {
  pageLayout: {
    display: 'flex',
    gap: '30px',
    alignItems: 'flex-start' // This is required for position: sticky to work on children
  },
  
  // AD SIDEBAR STYLES
  adSidebar: {
    flex: '0 0 200px', // Fixed 200px width for ads
    display: 'flex',
    flexDirection: 'column'
  },
  adSticky: {
    position: 'sticky',
    top: '20px', // Sticks 20px from the top when scrolling
    backgroundColor: '#ffffff',
    padding: '15px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(107, 15, 36, 0.05)',
    border: '1px solid #ffe6eb'
  },
  adLabel: {
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    color: '#999',
    margin: '0 0 10px 0',
    textAlign: 'center'
  },
  adImagePlaceholder: {
    height: '250px',
    backgroundColor: '#ffe6eb',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ff4d79',
    fontWeight: 'bold',
    marginBottom: '15px'
  },
  adText: {
    fontSize: '0.85rem',
    color: '#666',
    lineHeight: '1.5',
    margin: 0,
    textAlign: 'center'
  },

  // MAIN CONTENT STYLES
  centerColumn: {
    flex: 1, // Takes up all remaining space between the ads
    display: 'flex',
    flexDirection: 'column',
    gap: '30px'
  },
  mainContainer: {
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
    marginBottom: '20px'
  },
  button: {
    backgroundColor: '#ff4d79',
    color: '#ffffff',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '25px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(255, 77, 121, 0.3)'
  },

  // TESTIMONIAL STYLES
  testimonialContainer: {
    backgroundColor: '#ffffff',
    padding: '30px 40px',
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(107, 15, 36, 0.08)',
    borderTop: '5px solid #ff4d79'
  },
  subtitle: {
    color: '#6b0f24',
    margin: '0 0 25px 0',
    fontSize: '1.8rem'
  },
  testimonialCard: {
    display: 'flex',
    gap: '20px',
    backgroundColor: '#fff5f7',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '20px',
    alignItems: 'flex-start'
  },
  profileImg: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '3px solid #ff4d79'
  },
  stars: {
    display: 'flex',
    gap: '4px',
    marginBottom: '10px'
  },
  quote: {
    margin: '0 0 10px 0',
    color: '#444',
    fontStyle: 'italic',
    lineHeight: '1.6'
  },
  clientName: {
    margin: 0,
    fontWeight: 'bold',
    color: '#6b0f24',
    fontSize: '0.95rem'
  }
};

export default Home;