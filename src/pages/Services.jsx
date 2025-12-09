import React from 'react';
import { 
  FaBuilding, 
  FaRoad, 
  FaTint, 
  FaHardHat, 
  FaTools,
  FaIndustry,
  FaWarehouse,
  FaCogs,
  FaShieldAlt,
  FaAward
} from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isAnimating, setIsAnimating] = React.useState(false);
  const [hasScroll, setHasScroll] = React.useState(false);
  const tabsWrapperRef = React.useRef(null);

  const servicesData = [
    {
      id: 1,
      category: 'Construction de bâtiments',
      title: 'INFRASTRUCTURES MODERNES ET SOLUTIONS ARCHITECTURALES',
      description: 'Nous réalisons des bâtiments modernes et durables, de la conception à la livraison. Notre expertise couvre tous les types de constructions : résidentiels, commerciaux, industriels et institutionnels.',
      buttonText: 'Découvrir nos réalisations',
      image: '/assets/images/construction-batiments.jpg',
      icon: <FaBuilding />
    },
    {
      id: 2,
      category: 'Travaux routiers',
      title: 'ROUTES, AUTOROUTES ET INFRASTRUCTURES DE TRANSPORT',
      description: 'Conception et réalisation d\'infrastructures routières durables et performantes. Du terrassement à la pose de la chaussée, en passant par les ouvrages d\'art, nous garantissons qualité et sécurité.',
      buttonText: 'Voir nos projets routiers',
      image: '/assets/images/travaux-routiers.jpg',
      icon: <FaRoad />
    },
    {
      id: 3,
      category: 'Hydraulique',
      title: 'SYSTÈMES HYDRAULIQUES ET GESTION DE L\'EAU',
      description: 'Spécialistes des ouvrages hydrauliques : barrages, stations de pompage, réseaux d\'assainissement et systèmes d\'irrigation. Technologies de pointe pour une gestion optimale des ressources.',
      buttonText: 'Explorer nos solutions',
      image: '/assets/images/hydraulique.jpg',
      icon: <FaTint />
    },
    {
      id: 4,
      category: 'Génie civil',
      title: 'OUVRAGES D\'ART ET STRUCTURES EXCEPTIONNELLES',
      description: 'Excellence dans la construction d\'ouvrages d\'art complexes : ponts, viaducs, tunnels et structures spéciales. Sécurité, durabilité et respect de l\'environnement garantis.',
      buttonText: 'Nos réalisations',
      image: '/assets/images/genie-civil.jpg',
      icon: <FaHardHat />
    },
    {
      id: 5,
      category: 'Bâtiments industriels',
      title: 'INFRASTRUCTURES INDUSTRIELLES ET BÂTIMENTS TECHNIQUES',
      description: 'Construction de bâtiments industriels sur mesure : usines, entrepôts, hangars et installations techniques. Solutions clé en main avec intégration complète des équipements.',
      buttonText: 'Consulter nos projets',
      image: '/assets/images/batiments-industriels.jpg',
      icon: <FaIndustry />
    },
    {
      id: 6,
      category: 'Complexes commerciaux',
      title: 'CENTRES COMMERCIAUX ET ESPACES TERTIAIRES',
      description: 'Réalisation de complexes commerciaux modernes et fonctionnels. Design architectural, performance énergétique et technologies intelligentes pour des espaces attractifs.',
      buttonText: 'Découvrir nos complexes',
      image: '/assets/images/complexes-commerciaux.jpg',
      icon: <FaWarehouse />
    },
    {
      id: 7,
      category: 'Maintenance & Réhabilitation',
      title: 'MAINTENANCE ET RÉNOVATION D\'INFRASTRUCTURES',
      description: 'Services complets de maintenance, réparation et réhabilitation. Prolongez la durée de vie de vos installations avec nos solutions techniques innovantes.',
      buttonText: 'En savoir plus',
      image: '/assets/images/maintenance.jpg',
      icon: <FaTools />
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'Analyse approfondie de vos besoins et élaboration d\'une solution personnalisée adaptée à votre projet'
    },
    {
      number: '02',
      title: 'Planification',
      description: 'Conception détaillée avec calendrier précis, budget optimisé et stratégie d\'exécution complète'
    },
    {
      number: '03',
      title: 'Réalisation',
      description: 'Exécution professionnelle par nos équipes qualifiées avec suivi rigoureux et contrôle qualité'
    },
    {
      number: '04',
      title: 'Livraison',
      description: 'Contrôle final, tests de performance et remise clé en main avec documentation complète'
    }
  ];

  const statsData = [
    {
      icon: <FaCogs />,
      number: '500+',
      label: 'Projets Réalisés'
    },
    {
      icon: <FaAward />,
      number: '50+',
      label: 'Années d\'Expérience'
    },
    {
      icon: <FaShieldAlt />,
      number: '100%',
      label: 'Satisfaction Client'
    }
  ];

  const scrollToActiveTab = (index) => {
    if (tabsWrapperRef.current) {
      const activeTab = tabsWrapperRef.current.children[index];
      if (activeTab) {
        const wrapperRect = tabsWrapperRef.current.getBoundingClientRect();
        const tabRect = activeTab.getBoundingClientRect();
        
        const scrollLeft = tabsWrapperRef.current.scrollLeft;
        const tabRelativeLeft = tabRect.left - wrapperRect.left;
        const tabCenter = tabRelativeLeft + (tabRect.width / 2);
        const wrapperCenter = wrapperRect.width / 2;
        
        const targetScrollLeft = scrollLeft + tabCenter - wrapperCenter;
        
        tabsWrapperRef.current.scrollTo({
          left: targetScrollLeft,
          behavior: 'smooth'
        });
      }
    }
  };

  const goToSlide = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    scrollToActiveTab(index);
    setTimeout(() => setIsAnimating(false), 800);
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % servicesData.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [servicesData.length]);

  React.useEffect(() => {
    const checkScroll = () => {
      if (tabsWrapperRef.current) {
        const hasScrollableContent = 
          tabsWrapperRef.current.scrollWidth > tabsWrapperRef.current.clientWidth;
        setHasScroll(hasScrollableContent);
        
        if (hasScrollableContent) {
          tabsWrapperRef.current.classList.add('has-scroll');
        } else {
          tabsWrapperRef.current.classList.remove('has-scroll');
        }
      }
    };

    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  React.useEffect(() => {
    scrollToActiveTab(currentSlide);
  }, [currentSlide]);

  return (
    <div className="services-page">
      {/* Hero Carousel Section */}
      <section className="services-hero-carousel">
        <div className="carousel-wrapper">
          <div className="carousel-slides">
            {servicesData.map((service, index) => (
              <div
                key={service.id}
                className={`carousel-slide ${index === currentSlide ? 'active' : ''} ${
                  index < currentSlide ? 'prev' : ''
                } ${index > currentSlide ? 'next' : ''}`}
              >
                <div className="slide-background">
                  <img src={service.image} alt={service.category} />
                  <div className="slide-overlay"></div>
                </div>

                <div className="slide-content-wrapper">
                  <div className="container">
                    <div className="slide-content">
                      <span className="slide-category">{service.category}</span>
                      <h1 className="slide-title">{service.title}</h1>
                      <p className="slide-description">{service.description}</p>
                      <button className="slide-cta-button">
                        {service.buttonText}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="carousel-navigation-tabs">
            <div className="container">
              <div className="nav-tabs-wrapper" ref={tabsWrapperRef}>
                {servicesData.map((service, index) => (
                  <button
                    key={service.id}
                    className={`nav-tab ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                  >
                    <span className="nav-tab-text">{service.category}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {statsData.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Méthodologie</span>
            <h2 className="section-title">Notre Processus de Travail</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              Une approche structurée et éprouvée pour garantir le succès de chaque projet
            </p>
          </div>

          <div className="process-grid">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-number">{step.number}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
                {index < processSteps.length - 1 && <div className="step-connector"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section section">
        <div className="container">
          <div className="why-choose-grid">
            <div className="why-choose-content">
              <span className="section-label">Nos Atouts</span>
              <h2 className="section-title">Pourquoi Choisir SNTP ?</h2>
              <div className="section-divider"></div>
              
              <div className="features-list">
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-content">
                    <h4>Plus de 50 ans d'expérience</h4>
                    <p>Une expertise reconnue dans tous les domaines de la construction et du génie civil</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-content">
                    <h4>Équipe hautement qualifiée</h4>
                    <p>Des ingénieurs et techniciens formés aux dernières technologies et normes internationales</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-content">
                    <h4>Respect des délais</h4>
                    <p>Une planification rigoureuse et une gestion de projet efficace pour livrer à temps</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-content">
                    <h4>Normes de qualité internationales</h4>
                    <p>Certifications ISO 9001, ISO 14001 et OHSAS 18001 garantissant l'excellence</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-content">
                    <h4>Technologie de pointe</h4>
                    <p>Équipements modernes et techniques innovantes pour des résultats optimaux</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-content">
                    <h4>Engagement environnemental</h4>
                    <p>Construction durable et respect strict de l'environnement dans tous nos projets</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="why-choose-image">
              <div className="image-wrapper">
                <img src="/assets/images/why-choose-us.jpg" alt="SNTP Quality" />
                <div className="image-decoration"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta section">
        <div className="cta-overlay"></div>
        
        <div className="container cta-container">
          <div className="cta-content text-center">
            <span className="cta-label">Passez à l'Action</span>
            <h2 className="cta-title">
              Prêt à Démarrer Votre Projet ?
            </h2>
            <div className="section-divider-white"></div>
            <p className="cta-text">
              Contactez nos experts dès aujourd'hui pour discuter de votre projet. 
              Nous vous accompagnons de la conception à la réalisation avec professionnalisme et expertise.
            </p>
            <a href="/contact" className="cta-button">
              <span>Demander un Devis Gratuit</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
