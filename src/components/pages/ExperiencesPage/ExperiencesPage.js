import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

export default function ExperiencesPage() {
  
  const experiences = [
    {
      id: 1,
      company: 'Havelsan',
      position: 'Software Engineering Intern',
      location: 'Ankara, Turkey',
      startDate: 'Jul 2025',
      endDate: 'Aug 2025',
      description: 'As part of a team, I developed a microservices-based product using Flask, Spring Boot, React, PostgreSQL, and MongoDB. We implemented real-time communication between modules using WebSockets and UDP, leveraging a multi-threaded architecture. I integrated YOLO and Transformer-based AI models to calculate object risk scores, which were tracked live on a map and video interface. The entire system was containerized using Docker for seamless deployment.',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80',
      technologies: ['Flask', 'Spring Boot', 'React', 'PostgreSQL', 'PostGIS', 'MongoDB', 'Docker', 'YOLO'],
      companyUrl: 'https://www.havelsan.com.tr/',
      certificateUrl: 'https://drive.google.com/file/d/1XDg0wqmHG0gY6XFakYmyNv9Cpaf3GX0K/view?usp=sharing' 
    },
    {
      id: 3,
      company: 'TAI (Turkish Aerospace Industries)',
      position: 'Candidate Engineer',
      location: 'Ankara, Turkey',
      startDate: 'Dec 2023',
      endDate: 'May 2024',
      description: 'During a 6-month program in my junior year, I worked at TAI two days a week. My primary responsibility was to develop a full-stack aircraft and flight record tracking system. This project was built using React for the frontend, Express.js for the backend, and MySQL for the database. I received positive feedback to continue but was unable to, due to my upcoming ERASMUS program.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      technologies: ['React', 'Express.js', 'MySQL', 'Full-Stack Development'],
      companyUrl: 'https://www.tusas.com/',
      certificateUrl: 'https://drive.google.com/file/d/1-_ly8ReiUIllpmUaHV9PE4GLGo-08F00/view?usp=sharing' 
    },
    {
      id: 2,
      company: 'TeknoSürüm',
      position: 'AI & Computer Vision Intern',
      location: 'Istanbul, Turkey',
      startDate: 'Aug 2024',
      endDate: 'Sep 2024',
      description: 'At this AI startup in ITU Technopark, I focused on computer vision for the dairy farming industry. I annotated a large dataset of cow images using polygon labeling in CVAT. Afterward, I trained a YOLO object detection model on this custom dataset. The final model was used to build algorithms for tracking and monitoring the health and safety of livestock.',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
      technologies: ['Python', 'Computer Vision', 'YOLO', 'CVAT', 'Data Annotation', 'Pytorch'],
      companyUrl: 'https://www.teknosurum.com/'
    },
    {
      id: 4,
      company: 'Caretta',
      position: 'Machine Learning Intern',
      location: 'Istanbul, Turkey',
      startDate: 'Oct 2023',
      endDate: 'Nov 2023',
      description: 'In this project, I applied transfer learning by importing a VGG-16 model from TensorFlow. I froze the convolutional layers and trained the final dense layers on the Oxford 102 flower dataset. To deploy the model, our team built a full-stack application with a React frontend and a FastAPI backend that hosted and served the trained model via an API.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
      technologies: ['Python', 'TensorFlow', 'VGG-16', 'Transfer Learning', 'React', 'FastAPI'],
      companyUrl: 'https://www.caretta.net/en'
    },
    {
      id: 5,
      company: 'Caretta',
      position: 'Machine Learning Intern',
      location: 'Istanbul, Turkey',
      startDate: 'Sep 2022',
      endDate: 'Oct 2022',
      description: 'After placing in a coding competition, I earned a voluntary internship where I focused on recommendation systems. Using an e-commerce dataset, I implemented the SVD++ algorithm from scratch with Python, Pandas, and NumPy to build a collaborative filtering model. To showcase the results, I created a simple, interactive web interface using Streamlit.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      technologies: ['Python', 'Pandas', 'NumPy', 'SVD++', 'Recommendation Systems', 'Streamlit'],
      companyUrl: 'https://www.caretta.net/en'
    }
  ];

  const context = require.context('./assets', true, /\.(png|jpe?g|svg|mp4)$/);
  const groupedImages = {};

  context.keys().forEach((key) => {
    const parts = key.split('/');
    const folder = parts[1];
    
    if (!groupedImages[folder]) groupedImages[folder] = [];
    groupedImages[folder].push(context(key));
  });

  const ExperienceCard = ({ experience }) => {
    return (
      <div style={styles.experienceCard}>
        {/* Image Section */}
        {
          groupedImages[experience.company] &&
          groupedImages[experience.company].map((src, i) => {
            return (
            <div key={i} style={styles.imageSection}>
              <img 
                src={src} 
                alt={experience.company}
                style={styles.experienceImage}
              />
              <div style={styles.imageOverlay}></div>
            </div>
            );
          })
        }   

        {/* Content Section */}
        <div style={styles.contentSection}>
          {/* Header with Company and Position */}
          <div style={styles.headerSection}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h2 style={styles.position}>{experience.position}</h2>
                <a 
                  href={experience.companyUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={styles.companyLink}
                >
                  <span style={styles.companyName}>{experience.company}</span>
                  <ExternalLink size={18} />
                </a>
              </div>
              
              {/* View Certificate Button */}
              {experience.certificateUrl && (
                <a
                  href={experience.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.certificateButton}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #b968f7, #f06bb9)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 25px rgba(168, 85, 247, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #a855f7, #ec4899)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(168, 85, 247, 0.4)';
                  }}
                >
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span>View Certificate</span>
                </a>
              )}
            </div>
          </div>

          {/* Date and Location Highlights */}
          <div style={styles.metaInfo}>
            <div style={styles.metaItem}>
              <div style={styles.metaIcon}>
                <Calendar size={18} />
              </div>
              <div style={styles.metaText}>
                <span style={styles.metaLabel}>Duration</span>
                <span style={styles.metaValue}>
                  {experience.startDate} - {experience.endDate}
                </span>
              </div>
            </div>

            <div style={styles.metaItem}>
              <div style={styles.metaIcon}>
                <MapPin size={18} />
              </div>
              <div style={styles.metaText}>
                <span style={styles.metaLabel}>Location</span>
                <span style={styles.metaValue}>{experience.location}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p style={styles.description}>{experience.description}</p>

          {/* Technologies */}
          <div style={styles.technologiesSection}>
            <span style={styles.techLabel}>Technologies Used:</span>
            <div style={styles.techTags}>
              {experience.technologies.map((tech, index) => (
                <span key={index} style={styles.techTag}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={styles.page}>
      {/* Header Section */}
      <div style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.iconWrapper}>
            <Briefcase size={48} />
          </div>
          <h1 style={styles.pageTitle}>Work Experience</h1>
          <p style={styles.pageSubtitle}>
            My professional journey through internships and hands-on experience in the tech industry. 
            Each role has shaped my skills and understanding of software development.
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div style={styles.timelineContainer}>
        {experiences.map((experience) => (
          <div key={experience.id} style={styles.timelineItem}>
            <ExperienceCard experience={experience} />
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div style={styles.footerCTA}>
        <h3 style={styles.ctaTitle}>Interested in working together?</h3>
        <p style={styles.ctaText}>
          I'm always looking for new opportunities to learn and grow. Let's connect!
        </p>
        <a 
          href="mailto:ors_mehmet68@hotmail.com"
          style={styles.ctaButton}
        >
          Get In Touch
        </a>
      </div>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    color: '#ffffff',
    minHeight: '100vh',
    paddingTop: '80px',
    paddingBottom: '80px'
  },
  header: {
    padding: '80px 2rem 60px',
    textAlign: 'center',
    background: 'rgba(255, 255, 255, 0.02)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  },
  headerContent: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  iconWrapper: {
    width: '80px',
    height: '80px',
    background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2))',
    border: '2px solid rgba(168, 85, 247, 0.5)',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 2rem',
    color: '#a855f7',
  },
  pageTitle: {
    fontSize: '3.5rem',
    marginBottom: '1rem',
    background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  pageSubtitle: {
    fontSize: '1.2rem',
    color: '#9999b3',
    lineHeight: '1.8',
  },
  timelineContainer: {
    maxWidth: '900px',
    margin: '4rem auto',
    padding: '0 2rem 4rem',
    position: 'relative',
  },
  timelineItem: {
    position: 'relative',
    marginBottom: '4rem',
  },
  experienceCard: {
    background: 'rgba(255, 255, 255, 0.03)',
    borderRadius: '20px',
    overflow: 'hidden',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'all 0.3s ease',
  },
  imageSection: {
    position: 'relative',
    height: '450px',
    overflow: 'hidden',
  },
  experienceImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  imageOverlay: {
    position: 'absolute',
    inset: 0,
    opacity: 0.7,
  },
  contentSection: {
    padding: '2rem',
  },
  headerSection: {
    marginBottom: '1.5rem',
  },
  position: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: '0.5rem',
  },
  companyLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
  },
  companyName: {
    fontSize: '1.3rem',
    color: '#a855f7',
    fontWeight: '600',
  },
  metaInfo: {
    display: 'flex',
    gap: '2rem',
    marginBottom: '1.5rem',
    flexWrap: 'wrap',
  },
  metaItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.75rem',
    background: 'rgba(168, 85, 247, 0.1)',
    padding: '1rem 1.25rem',
    borderRadius: '12px',
    border: '1px solid rgba(168, 85, 247, 0.3)',
    flex: '1 1 200px',
  },
  metaIcon: {
    color: '#a855f7',
    marginTop: '0.25rem',
  },
  metaText: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
  },
  metaLabel: {
    fontSize: '0.85rem',
    color: '#9999b3',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    fontWeight: '500',
  },
  metaValue: {
    fontSize: '1rem',
    color: '#ffffff',
    fontWeight: '600',
  },
  description: {
    fontSize: '1.05rem',
    lineHeight: '1.8',
    color: '#b8b8d1',
    marginBottom: '1.5rem',
  },
  technologiesSection: {
    marginTop: '1.5rem',
  },
  techLabel: {
    fontSize: '0.9rem',
    color: '#9999b3',
    fontWeight: '600',
    display: 'block',
    marginBottom: '0.75rem',
  },
  techTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  techTag: {
    padding: '0.5rem 1rem',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(168, 85, 247, 0.3)',
    borderRadius: '20px',
    fontSize: '0.9rem',
    color: '#ec4899',
    fontWeight: '500',
  },
  footerCTA: {
    maxWidth: '800px',
    margin: '4rem auto',
    padding: '4rem 2rem',
    textAlign: 'center',
    background: 'rgba(255, 255, 255, 0.03)',
    borderRadius: '24px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  ctaTitle: {
    fontSize: '2rem',
    marginBottom: '1rem',
    background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  ctaText: {
    fontSize: '1.1rem',
    color: '#9999b3',
    marginBottom: '2rem',
  },
  ctaButton: {
    display: 'inline-block',
    padding: '1rem 2rem',
    background: 'linear-gradient(135deg, #a855f7, #ec4899)',
    borderRadius: '12px',
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 20px rgba(168, 85, 247, 0.4)',
  },
  // Add this to your existing styles object:

  certificateButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.75rem 1.5rem',
    background: 'linear-gradient(135deg, #a855f7, #ec4899)',
    color: '#ffffff',
    textDecoration: 'none',
    borderRadius: '10px',
    fontSize: '0.95rem',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(168, 85, 247, 0.4)',
    border: 'none',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
  }
};