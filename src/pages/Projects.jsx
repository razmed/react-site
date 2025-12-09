import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { projectsData, categories } from '../data/projectsData';
import './Projects.css';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const sectionRefs = useRef({});
  const observerRef = useRef(null);

  // Grouper les projets par catégorie
  const projectsByCategory = categories.reduce((acc, category) => {
    acc[category.id] = category.id === 'all' 
      ? projectsData 
      : projectsData.filter(p => p.category === category.id);
    return acc;
  }, {});

  // Catégories avec projets
  const validCategories = categories.filter(cat => projectsByCategory[cat.id]?.length > 0);

  // Intersection Observer pour détecter la catégorie active
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
            const categoryId = entry.target.dataset.category;
            if (categoryId) {
              setActiveCategory(categoryId);
            }
          }
        });
      },
      {
        threshold: [0.3, 0.5, 0.7],
        rootMargin: '0px'
      }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Observer les sections
  useEffect(() => {
    const observer = observerRef.current;
    if (!observer) return;

    Object.values(sectionRefs.current).forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      Object.values(sectionRefs.current).forEach((element) => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [projectsByCategory]);

  // Scroll vers une section spécifique
  const scrollToSection = (categoryId) => {
    const element = sectionRefs.current[categoryId];
    if (element) {
      const offsetTop = element.offsetTop - 160;
      window.scrollTo({ 
        top: offsetTop, 
        behavior: 'smooth' 
      });
    }
  };

  // Descriptions par catégorie
  const categoryDescriptions = {
    all: "L'ensemble de nos réalisations témoigne de notre expertise dans tous les domaines du génie civil et des travaux publics.",
    routes: "Construction et réhabilitation d'infrastructures routières modernes, durables et sécurisées pour connecter les territoires.",
    batiments: "Édification de structures résidentielles et commerciales de haute qualité, alliant design moderne et fonctionnalité.",
    ouvrages: "Conception et construction d'ouvrages d'art exceptionnels : ponts, viaducs et structures monumentales.",
    hydraulique: "Projets de gestion de l'eau, barrages et stations d'épuration pour préserver nos ressources hydriques.",
    industriel: "Développement de complexes industriels performants, sécurisés et respectueux des normes environnementales."
  };

  // Animation fade-in pour les cartes au scroll
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -80px 0px'
    };

    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card) => cardObserver.observe(card));

    return () => {
      cards.forEach((card) => cardObserver.unobserve(card));
    };
  }, [projectsByCategory]);

  return (
    <div className="projects-page">
      <Header />
      
      <main className="projects-main">
        {/* Hero Section */}
        <section className="projects-hero">
          <div className="projects-hero__content">
            <h1 className="projects-hero__title">Projets</h1>
            <p className="projects-hero__description">
              Découvrez nos réalisations dans le domaine des travaux publics et du génie civil
            </p>
          </div>
        </section>

        {/* Quick Navigation */}
        <nav className="projects-nav">
          <div className="projects-nav__container">
            {validCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => scrollToSection(category.id)}
                className={`nav-button ${activeCategory === category.id ? 'active' : ''}`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </nav>

        {/* Split-Screen Sticky Sections */}
        <div className="sections-wrapper">
          {validCategories.map((category) => {
            const categoryProjects = projectsByCategory[category.id] || [];

            return (
              <section
                key={category.id}
                ref={(el) => (sectionRefs.current[category.id] = el)}
                data-category={category.id}
                className="category-section"
              >
                {/* COLONNE GAUCHE - IMAGE STICKY FIXE */}
                <div className="category-section__visual">
                  <div className="visual-sticky">
                    <div className="visual-image">
                      <img 
                        src={categoryProjects[0]?.image || '/assets/images/default.jpg'}
                        alt={category.label}
                      />
                      <div className="visual-overlay"></div>
                    </div>
                    <div className="visual-content">
                      <h2 className="visual-title">{category.label}</h2>
                      <p className="visual-description">
                        {categoryDescriptions[category.id]}
                      </p>
                      <div className="visual-meta">
                        <span className="visual-count">
                          {categoryProjects.length} projet{categoryProjects.length > 1 ? 's' : ''}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* COLONNE DROITE - LISTE SCROLLABLE */}
                <div className="category-section__content">
                  <div className="projects-grid">
                    {categoryProjects.map((project, projectIndex) => (
                      <article
                        key={project.id}
                        className="project-card"
                        style={{ 
                          transitionDelay: `${projectIndex * 0.08}s` 
                        }}
                      >
                        <Link to={`/projects/${project.id}`} className="project-card__link">
                          {/* Image du projet */}
                          <div className="project-card__image-wrapper">
                            <img 
                              src={project.image} 
                              alt={project.title}
                              className="project-card__image"
                              loading="lazy"
                            />
                            <div className="project-card__overlay"></div>
                          </div>

                          {/* Contenu de la carte */}
                          <div className="project-card__body">
                            <div className="project-card__header">
                              <span className="project-card__location">
                                {project.location}
                              </span>
                              {project.year && (
                                <span className="project-card__year">
                                  {project.year}
                                </span>
                              )}
                            </div>

                            <h3 className="project-card__title">
                              {project.title}
                            </h3>

                            {project.description && (
                              <p className="project-card__description">
                                {project.description}
                              </p>
                            )}

                            <div className="project-card__footer">
                              <span className={`project-card__status status--${project.status}`}>
                                {project.status === 'completed' ? 'Terminé' : 'En cours'}
                              </span>
                              <span className="project-card__arrow">
                                →
                              </span>
                            </div>
                          </div>
                        </Link>
                      </article>
                    ))}
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
