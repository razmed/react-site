import React from 'react';
import { motion } from 'framer-motion';
import './NousRejoindre.css';

const NousRejoindre = () => {
  const handleRedirect = () => {
    window.open('https://emploitic.com/offres-d-emploi/q-societe-nationale-de-travaux-publics-sntp', '_blank');
  };

  return (
    <motion.div 
      className="nous-rejoindre-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Hero Banner Section */}
      <section className="hero-banner">
        <div className="hero-overlay"></div>
        <motion.div 
          className="hero-content"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="hero-title">Rejoignez nos équipes</h1>
          <p className="hero-subtitle">
            Construisez votre carrière avec SNTP, leader algérien des travaux publics
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">60+</span>
              <span className="stat-label">Ans d'expérience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">2000+</span>
              <span className="stat-label">Employés</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Projets réalisés</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Main Content Section */}
      <section className="main-content">
        <div className="content-wrapper">
          <motion.div 
            className="intro-section"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Pourquoi nous rejoindre ?</h2>
            <p className="section-description">
              La SNTP offre un environnement de travail dynamique où le développement 
              professionnel et l'innovation sont au cœur de notre culture d'entreprise.
            </p>
          </motion.div>

          <div className="benefits-grid">
            <motion.div 
              className="benefit-card"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3>Développement professionnel</h3>
              <p>Formation continue et opportunités d'évolution de carrière</p>
            </motion.div>

            <motion.div 
              className="benefit-card"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3>Esprit d'équipe</h3>
              <p>Travaillez avec des professionnels passionnés et experts</p>
            </motion.div>

            <motion.div 
              className="benefit-card"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3>Projets d'envergure</h3>
              <p>Participez à des projets prestigieux et structurants pour l'Algérie</p>
            </motion.div>

            <motion.div 
              className="benefit-card"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3>Rémunération attractive</h3>
              <p>Package salarial compétitif et avantages sociaux</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <motion.div 
          className="cta-container"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="cta-content">
            <h2 className="cta-title">Prêt à faire la différence ?</h2>
            <p className="cta-description">
              Découvrez nos opportunités de carrière et rejoignez une entreprise 
              qui valorise le talent, l'innovation et l'excellence.
            </p>
            <button 
              className="cta-button"
              onClick={handleRedirect}
              aria-label="Consulter nos offres d'emploi"
            >
              <span className="button-text">Consulter nos offres d'emploi</span>
              <svg 
                className="button-icon" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
          <div className="cta-decoration">
            <div className="decoration-circle decoration-circle-1"></div>
            <div className="decoration-circle decoration-circle-2"></div>
            <div className="decoration-circle decoration-circle-3"></div>
          </div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="content-wrapper">
          <motion.div 
            className="values-header"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Nos valeurs</h2>
            <p className="section-description">
              Des principes qui guident notre action au quotidien
            </p>
          </motion.div>

          <div className="values-grid">
            <motion.div 
              className="value-item"
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <div className="value-number">01</div>
              <h3>Excellence</h3>
              <p>Nous visons la perfection dans chaque projet</p>
            </motion.div>

            <motion.div 
              className="value-item"
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="value-number">02</div>
              <h3>Innovation</h3>
              <p>L'audace et la créativité au service de nos réalisations</p>
            </motion.div>

            <motion.div 
              className="value-item"
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="value-number">03</div>
              <h3>Intégrité</h3>
              <p>Transparence et éthique dans toutes nos actions</p>
            </motion.div>

            <motion.div 
              className="value-item"
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="value-number">04</div>
              <h3>Engagement</h3>
              <p>Dévoués à la satisfaction de nos clients et partenaires</p>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default NousRejoindre;
