import React from 'react';

export default function Stats() {
  const stats = [
    { number: '15+', label: 'Projects Completed' },
    { number: '8+', label: 'Technologies Mastered' },
    { number: '1+', label: 'Years Experience' }
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
