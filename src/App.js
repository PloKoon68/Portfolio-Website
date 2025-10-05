import React, { useState } from 'react';
import { Github, Linkedin, Mail, Code, Briefcase, Trophy, Heart, Menu, X } from 'lucide-react';
import { HashRouter as Router, Route, Routes} from 'react-router-dom';  // ✅ Just use Route and Routes
import { useNavigate } from 'react-router-dom';

import MainPage from './components/pages/MainPage/MainPage';
import ProjectsPage from './components/pages/ProjectsPage/ProjectsPage';
import ExperiencesPage from './components/pages/ExperiencesPage/ExperiencesPage';
import ContestsPage from './components/pages/ContestsPage/ContestsPage';
// Navbar Component

const Navbar = ({name}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
 
  const navItems = [{name: 'Home', path: '/'}, {name: 'Projects', path: 'projects'}, {name: 'Experiences', path: '/experiences'}, {name: 'Contests', path: '/contests'}];
 
  return (
    <nav style={styles.nav}>
      <div style={styles.navContainer}>
        <div style={styles.logo} onClick={() =>  navigate('/')}> {name}</div>
       
        <ul style={{
          ...styles.navLinks,
          ...(mobileMenuOpen ? styles.navLinksActive : {})
        }}>
          {navItems.map((item) => (
            <li key={item.name} style={styles.navItem}>
              <a
                href={`${item.path}`}
                style={styles.navLink}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
 
        <button
          style={styles.mobileMenu}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};
 


export default function App() {
  const name = "Mehmet ÖRS";

  return (
    <div style={styles.app}>
      <Navbar name={name} />
      <Routes>
        <Route path="/" element={<MainPage name={name} />} />
        <Route path="/experiences" element={<ExperiencesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contests" element={<ContestsPage />} />
        <Route path="/hobbies" element={<div />} />
      </Routes>
    </div>
  );
}
 
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
