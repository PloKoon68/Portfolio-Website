import { Github, Linkedin, Mail, Code, Briefcase, Trophy, Heart, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import img from './assets/vesikalık.jpeg';

// Hero Component
export default function MainPage({name}){
  const navigate = useNavigate();
const Hero = () => { 
  return (
    <section id="home" style={styles.hero}>
      <div style={styles.heroContent}>
        <div style={styles.profilePhoto}>
          <div style={styles.profileGlow}></div>
          <img
            src={img}
            alt="Profile"
            style={styles.profileImg}
          />
        </div>
 
        <div style={styles.heroText}>
          <h1 style={styles.heroTitle}>
            Hi, I'm <span style={styles.heroName}>{name}</span>
          </h1>
          <p style={styles.tagline}>
            Software Engineer (AI/ML & Full-Stack)
          </p>
          <p style={styles.description}>
            I am a software engineer who has worked on various projects in artificial intelligence, deep 
            learning, and full-stack development. I have completed courses and programs, and participated 
            in competitions. With strong teamwork, project management, and fast learning skills, I have 
            achieved success in national and international projects. My career goal is to focus on developing 
            AI and cloud-based solutions and applications. I also have international education experience 
            through the Erasmus exchange program.
          </p>

          <div style={styles.socialLinks}>
            <a href="https://github.com/PloKoon68" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/mehmetors" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
              <Linkedin size={24} />
            </a>
            <a href="mailto:ors_mehmet68@hotmail.com" style={styles.socialLink}>
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
 
// Skills Component
const Skills = () => {
  const skills = ['React', 'JavaScript', 'TypeScript', 'Node.js', 'Python', 'CSS', 'Git', 'Docker'];
 
  return (
    <section style={styles.skills}>
      <div style={styles.skillsContainer}>
        <h2 style={styles.sectionTitle}>Tech Stack</h2>
        <div style={styles.skillsGrid}>
          {skills.map((skill) => (
            <div key={skill} style={styles.skillTag}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


 
// Cards Component
const Cards = () => {
  const cards = [
    {
      title: 'Projects',
      description: 'Explore my technical projects and applications',
      icon: Code,
      gradient: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
      path: "/projects"
    },
    {
      title: 'Experience',
      description: 'Professional journey and work history',
      icon: Briefcase,
      gradient: 'linear-gradient(135deg, #a855f7, #ec4899)',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
      path: "/experiences"
    },
    {
      title: 'Competitions',
      description: 'Hackathons, contests, and achievements',
      icon: Trophy,
      gradient: 'linear-gradient(135deg, #f59e0b, #f97316)',
      image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=80',
      path: "/competitions"
    },
    {
      title: 'Hobbies',
      description: 'Interests and activities beyond coding',
      icon: Heart,
      gradient: 'linear-gradient(135deg, #10b981, #059669)',
      image: 'https://images.unsplash.com/photo-1452857297128-d9c29adba80b?w=800&q=80',
      path: "/hobbies"
    }
  ];
 
  return (
    <section id="projects" style={styles.cardsSection}>
      <h2 style={styles.sectionTitle}>Explore My Work</h2>
      <div style={styles.cardsGrid}>
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div key={index} style={styles.card} onClick={()=> navigate(card.path)}>
              <div style={{...styles.cardBg, backgroundImage: `url(${card.image})`}}></div>
              <div style={{...styles.cardOverlay, background: card.gradient}}></div>
              <div style={styles.cardContent}>
                <div>
                  <div style={styles.cardIcon}>
                    <Icon size={32} />
                  </div>
                  <h3 style={styles.cardTitle}>{card.title}</h3>
                  <p style={styles.cardDescription}>{card.description}</p>
                </div>
                <div style={styles.cardLink}>View More →</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
 
// Contact Component
const Contact = () => {
  return (
    <section id="contact" style={styles.contact}>
      <div style={styles.contactContainer}>
        <h2 style={styles.sectionTitle}>Let's Work Together</h2>
        <p style={styles.contactText}>
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <a href="mailto:your.email@example.com" style={styles.contactBtn}>
          Get In Touch
        </a>
      </div>
    </section>
  );
};
 
// Footer Component
const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2025 Your Name. Built with React.</p>
    </footer>
  );
};
 
 

  return (
    <>
      <Hero />
      <Skills />
      <Cards />
      <Contact />
      <Footer />
    </>
  );
};

 
// Styles Object
const styles = {
  app: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    color: '#ffffff',
    minHeight: '100vh',
    lineHeight: '1.6',
  },
  nav: {
    position: 'fixed',
    top: 0,
    width: '100%',
    background: 'rgba(26, 26, 46, 0.8)',
    backdropFilter: 'blur(10px)',
    zIndex: 1000,
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  },
  navContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  navLinks: {
    display: 'flex',
    gap: '2rem',
    listStyle: 'none',
  },
  navLinksActive: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    background: 'rgba(26, 26, 46, 0.95)',
    padding: '1rem',
    gap: 0,
  },
  navItem: {
    margin: 0,
  },
  navLink: {
    color: '#ffffff',
    textDecoration: 'none',
    transition: 'color 0.3s',
  },
  mobileMenu: {
    display: 'none',
    background: 'none',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
  },
  hero: {
    paddingTop: '150px',
    paddingBottom: '100px',
    paddingLeft: '2rem',
    paddingRight: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  heroContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '4rem',
    flexWrap: 'wrap',
  },
  profilePhoto: {
    position: 'relative',
  },
  profileGlow: {
    position: 'absolute',
    inset: '-10px',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    borderRadius: '50%',
    filter: 'blur(20px)',
    opacity: 0.3,
    zIndex: -1,
  },
  profileImg: {
    width: '250px',
    height: '250px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '4px solid #667eea',
    boxShadow: '0 0 40px rgba(102, 126, 234, 0.5)',
    transition: 'transform 0.3s',
  },
  heroText: {
    flex: 1,
    minWidth: '300px',
  },
  heroTitle: {
    fontSize: '3.5rem',
    marginBottom: '1rem',
  },
  heroName: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  tagline: {
    fontSize: '1.5rem',
    color: '#b8b8d1',
    marginBottom: '1.5rem',
  },
  description: {
    color: '#9999b3',
    marginBottom: '2rem',
    maxWidth: '600px',
  },
  socialLinks: {
    display: 'flex',
    gap: '1rem',
  },
  socialLink: {
    width: '50px',
    height: '50px',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s',
    textDecoration: 'none',
    color: 'white',
  },
  skills: {
    padding: '80px 2rem',
    background: 'rgba(255, 255, 255, 0.05)',
  },
  skillsContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '3rem',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  skillsGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1rem',
  },
  skillTag: {
    padding: '0.75rem 1.5rem',
    background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2))',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '25px',
    transition: 'all 0.3s',
  },
  cardsSection: {
    padding: '80px 2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  cardsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginTop: '3rem',
  },
  card: {
    position: 'relative',
    height: '300px',
    borderRadius: '20px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'transform 0.3s',
  },
  cardBg: {
    position: 'absolute',
    inset: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.4,
    transition: 'opacity 0.3s',
  },
  cardOverlay: {
    position: 'absolute',
    inset: 0,
    opacity: 0.6,
    transition: 'opacity 0.3s',
  },
  cardContent: {
    position: 'relative',
    padding: '2rem',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cardIcon: {
    width: '60px',
    height: '60px',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    borderRadius: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1rem',
    transition: 'background 0.3s',
  },
  cardTitle: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  cardDescription: {
    color: 'rgba(255, 255, 255, 0.9)',
  },
  cardLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontWeight: 600,
    transition: 'transform 0.3s',
  },
  contact: {
    padding: '80px 2rem',
    background: 'rgba(255, 255, 255, 0.05)',
    textAlign: 'center',
  },
  contactContainer: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  contactText: {
    color: '#9999b3',
    marginBottom: '2rem',
  },
  contactBtn: {
    display: 'inline-block',
    padding: '1rem 2.5rem',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '50px',
    fontWeight: 600,
    transition: 'all 0.3s',
  },
  footer: {
    padding: '2rem',
    textAlign: 'center',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    color: '#9999b3',
  },
};