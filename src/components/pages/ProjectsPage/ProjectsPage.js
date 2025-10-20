import React, { useState } from 'react';
import { Github, ExternalLink, Code2, ChevronDown } from 'lucide-react';


export default function ProjectsPage() {

  const projects = [
    {
      id: 1,
      title: 'Custom Deep Learning Model Development App',
      description: 'A full-stack web platform that enables users to design, train, evaluate, and deploy deep learning models entirely through a visual, code-free interface. Users can register and log in to create isolated model environments where they can visually build model architectures, configure hyperparameters, and compile models without writing any code. After uploading training data, users can initiate training and monitor performance metrics in real time. Once training is complete, models can be tested using separate datasets to assess real-world performance. Finally, the trained models can be used for prediction directly within the platform by entering or uploading input data, making the system suitable for production-level inference.',
      implementation: 
`The full-stack application is built around three distinct modules:
- C++ Module (Deep Learning Logic): This core module implements deep learning functionality such as layer types, activation functions, loss functions, and more, following object-oriented principles and design patterns. The Crow framework is used for API handling, managing HTML requests, and establishing WebSocket connections with the frontend to transmit epoch results during training. Eigen library is leveraged for efficient vectorization, significantly enhancing performance.
- Express.js Module (Authentication & Data Management): The backend is responsible for user authentication and data storage. It follows the MVC pattern, handling requests from the frontend, managing user sessions, and saving user data in a MongoDB database using the Mongoose library.
- React.js Module (Frontend/UI): The frontend provides an intuitive, user-friendly interface for interacting with the system. Users can design, train, and test deep learning models seamlessly through the visual interface.

The demo is available for testing and feedback, but the source code is currently closed as I'm evaluating potential commercial or proprietary use cases.
`,
      image: "as",
      technologies: ['C++', 'Crow', 'React.js', 'Express.js', 'REST Api', 'WebSockets', 'MongoDB', 'Mongoose', 'Docker'],
      githubUrl: 'https://github.com/PloKoon68/neural-builder',
      liveUrl: 'https://nn-builder.vercel.app',
    },
    
    {
      id: 2,
      title: 'Aegis Tracking',
      description: 'This project is a real-time object tracking and risk assessment system designed to monitor objects on a map, display live video streams, and calculate risk scores using AI models. The system integrates geospatial data, computer vision, and predictive analytics to provide an interactive interface for monitoring object locations and assessing potential risks.',
      implementation: 
`
- Frontend: 
  * Built with React, featuring a full-screen map and a side panel that lists detected objects.
  * Objects are sorted dynamically based on their risk scores, with higher-risk objects at the top.
  * Clicking on an object in the panel zooms the map to its location.
  * The bottom-left corner of the map displays a live video frame with YOLO object detection overlays.
  * Real-time data is received via WebSocket connections from the AI and GPS backend modules.
- Backend: The backend consists of three Flask modules, each running in a separate Docker container:
  1. GPS Module:
    * Receives latitude and longitude data (currently via Postman for testing).
    * Stores historical object locations in a MongoDB/PostgreSQL database.
    * Uses PostGIS for geospatial operations, such as defining regions on the map and querying objects within those regions.
  2. AI Module:
    * Receives video streams from the Video Streamer module, with each stream handled in a separate thread.
    * Uses queues to ensure frames are processed sequentially, preventing data loss from UDP transmission.
    * Processing pipeline:
      1 - Frame reception via UDP.
      2 - YOLO object detection to identify objects in the frame.
      3 - Risk score calculation based on detection output.
      4 - Future risk prediction using a transformer model, leveraging the last 10 risk scores.
    * Processed outputs are sent to the React frontend in real-time.
  3. Video Streamer Module:
    * Opens MP4 video files (simulating live camera feeds).
    * Handles multiple threads to stream different videos concurrently.
    * Streams frames via UDP to the AI module, encoded using H.264.
- Deployment:
 * All modules are Dockerized, and the system is orchestrated with Docker Compose.
 * The entire stack can be started automatically using docker-compose.yml, ensuring a seamless development and testing environment.
`,
      technologies: ['React', 'Flask', 'Docker', 'Docker Compose', 'MongoDB', 'PostgreSQL', 'PostGIS', 'YOLO', 'Transformer Models', 'OpenCV', 'WebSockets', 'UDP Streaming', 'H.264'], 
      githubUrl: 'https://github.com/PloKoon68/aegis-tracking',
      liveUrl: false,
    },
    {
      id: 3,
      title: 'Optimal Decision Maker',
      description: `Optimal Decision Maker App is a web-based decision support system that enables users to evaluate alternatives based on multiple criteria using Multi-Criteria Decision Making (MCDM) techniques. The application allows users to create cases, define criteria, and list alternatives, after which they can populate a decision matrix with evaluation values. Based on these inputs, the app processes results and supports data-driven decision-making. It can be applied in both organizational settings, such as investment planning, supplier selection, or project evaluation, and personal settings, such as choosing a car or travel plan. The system features public pages like About and How It Works, as well as private pages like My Cases and the Processing Page, which provide the core functionality of building and analyzing decision matrices.`,
      implementation: 
`The project follows a client–server architecture built with React for the frontend, Express.js for the backend, and PostgreSQL as the database. 
- On the frontend, React Router is used for navigation, while Bootstrap and PrimeReact provide responsive UI components. Authentication is managed using React Context, JWTs, and protected routes, with global state handled through AuthContext and GlobalLoadingContext. 
- The backend is built with Express.js and provides a set of RESTful APIs. It uses jsonwebtoken (JWT) for authentication, bcrypt for secure password hashing, and the pg library for database communication.
- PostgreSQL, hosted on Render, stores persistent data across four core tables: users, cases, criterias, and decisionmatrix, with relationships and constraints ensuring integrity. 
The backend is deployed on Render alongside the managed PostgreSQL database, while the React frontend is deployed as a static site via GitHub Pages. Together, these technologies form a scalable and maintainable architecture that can be extended with new modules, such as additional algorithms, demo functionality, or user settings.`,
      technologies: ['React', 'Express.js', 'PostgreSQL', 'Docker', 'Render', 'Bootstrap', 'PrimeReact'],
      githubUrl: 'https://github.com/yourusername/weather-dashboard',
      liveUrl: 'https://weather-dashboard-demo.vercel.app',
    },

    {
      id: 4,
      title: 'Drone Misson Code',
      description: 
`
As part of our team Aytech UAS – Kürşad 40, I contributed to the development of the autonomous mission code for the “International Rotary Wing Drone” competition at Teknofest, where we achieved 3rd place out of 29 finalist teams.
The mission involved a drone scanning a field with a downward-facing camera to detect and interact with specific geometric targets:      
 - Locate a blue hexagon and drop a red payload precisely at its center.
 - Locate a red triangle (saving its position if detected earlier) and drop a blue payload at its center.
 - Return and land autonomously at the starting point after mission completion.
With the code we developed, the drone successfully completed the missions.
`,
      implementation: 
`
I worked on the offboard drone control system using the MAVSDK library to implement autonomous navigation and mission execution. For perception, we used OpenCV to detect the red triangle and blue hexagon in real time from the drone’s onboard camera.
To ensure reliability, we tested our system extensively in the Gazebo simulation environment on Ubuntu/Linux. Once validated, we deployed the mission code onto a Raspberry Pi mounted on the drone, integrating the onboard camera for real-world operation.
This project gave me hands-on experience with:
- Autonomous drone control using MAVSDK
- Computer vision with OpenCV for object detection
- Simulation-to-production deployment with Gazebo → Raspberry Pi
- Team collaboration in a competitive robotics environment
`,
  technologies: ['MAVSDK', 'OpenCV', 'Python', 'Gazebo', 'Raspberry Pi', 'Ubuntu/Linux', 'PX4 Autopilot'],
      githubUrl: 'https://github.com/PloKoon68/Quadcopter-UAV',
      liveUrl: false,
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

  const ProjectCard = ({ project }) => {
    const [isImplementationVisible, setIsImplementationVisible] = useState(false);

    const toggleImplementation = () => {
      setIsImplementationVisible(!isImplementationVisible);
    };

    return (
      <div className='project-card' style={{
        ...styles.projectCard,
        flexDirection: 'row'
      }}>

      <div className='all-images-container' style={{...styles.allImagesContainer, gap: '100px',  overflow: 'auto'}}>
        {
          groupedImages[project.title] &&
          groupedImages[project.title].map((src, i) => {
            const isVideo = src.toLowerCase().endsWith('.mp4');
            return (
              <div
                className="project-image-container"
                key={i}
                style={{ ...styles.imageContainer, width: '70%' }}
              >
                {isVideo ? (
                  <video
                    src={src}
                    controls
                    loop
                    muted
                    autoPlay
                    style={{ ...styles.projectImage, borderRadius: '10px' }}
                  />
                ) : (
                  <img
                    src={src}
                    alt={project.title}
                    className="project-image"
                    style={styles.projectImage}
                  />
                )}
              </div>
            );
          })
        }

      </div>

        <div className='project-content-container' style={styles.contentContainer}>
          <h2 className='project-title' style={styles.projectTitle}>{project.title}</h2>
          <p className='project-description' style={styles.projectDescription}><b>Description: </b> {project.description}</p>
          
          <button onClick={toggleImplementation} style={styles.implementationButton}>
            <span>
              {isImplementationVisible ? 'Hide Implementation' : 'Show Implementation'}
            </span>
            <ChevronDown 
              size={24} 
              style={{ 
                transform: isImplementationVisible ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease-in-out',
              }} 
            />
          </button>

          {isImplementationVisible && (
            <pre className='project-description' style={{...styles.projectDescription, marginTop: '1rem'}}>
              <b>Implementation: </b> {project.implementation}
            </pre>
          )}

          <div className='technologies-container' style={styles.technologiesContainer}>
            {project.technologies.map((tech, i) => (
              <span key={i} className='tech-tag' style={styles.techTag}>
                {tech}
              </span>
            ))}
          </div>

          <div className='links-container' style={styles.linksContainer}>
            {
              project.githubUrl &&
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className='link-button'
                style={styles.linkButton}
              >
                <Github size={20} />
                <span>View Code</span>
              </a>
            }
            {
              project.liveUrl &&
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className='link-button-primary'
                style={styles.linkButtonPrimary}
              >
                <ExternalLink size={20} />
                <span>Live Demo</span>
              </a>
            }
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='projects-page' style={styles.page}>
      <div className='projects-header' style={styles.header}>
        <div className='projects-header-content' style={styles.headerContent}>
          <div className='projects-icon-wrapper' style={styles.iconWrapper}>
            <Code2 size={48} />
          </div>
          <h1 className='projects-page-title' style={styles.pageTitle}>My Projects</h1>
          <p className='projects-page-subtitle' style={styles.pageSubtitle}>
            A collection of my recent work and personal projects. Each project represents 
            a unique challenge and learning experience in my journey as a developer.
          </p>
        </div>
      </div>

      <div className='projects-list' style={styles.projectsList}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className='footer-cta' style={styles.footerCTA}>
        <h3 className='cta-title' style={styles.ctaTitle}>Want to see more?</h3>
        <p className='cta-text' style={styles.ctaText}>
          Check out my GitHub profile for additional projects and contributions.
        </p>
        <a 
          href="https://github.com/PloKoon68" 
          target="_blank" 
          rel="noopener noreferrer"
          className='cta-button'
          style={styles.ctaButton}
        >
          <Github size={20} />
          <span>Visit GitHub Profile</span>
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
    minHeight: 'auto',
    paddingTop: '80px',
    paddingBottom: '80px',
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
    background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2))',
    border: '2px solid rgba(102, 126, 234, 0.5)',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 2rem',
    color: '#667eea',
  },
  pageTitle: {
    fontSize: '3.5rem',
    marginBottom: '1rem',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  pageSubtitle: {
    fontSize: '1.2rem',
    color: '#9999b3',
    lineHeight: '1.8',
  },
  projectsList: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '4rem 2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '6rem',
  },
  projectCard: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem',
    alignItems: 'center',
    background: 'rgba(255, 255, 255, 0.03)',
    borderRadius: '24px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'all 0.3s ease',
    padding: '2rem',
    flexWrap: 'wrap'
  },
  allImagesContainer: {
    display: 'flex',
    flexDirection: 'row',
    overflow: "auto"
  },
  imageContainer: {
    position: 'relative',
    flex: '1 1 400px',
    minWidth: '600px',
    height: '350px',
    borderRadius: '16px',
    overflow: 'hidden'
  },
  projectImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  },
  contentContainer: {
    flex: '1 1 500px',
    minWidth: '300px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  projectHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dateTag: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 1rem',
    background: 'rgba(102, 126, 234, 0.2)',
    borderRadius: '20px',
    fontSize: '0.9rem',
    color: '#b8b8d1',
  },
  projectTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    margin: 0,
    color: '#ffffff',
  },
  projectDescription: {
    fontSize: '1.1rem',
    fontFamily: 'inherit',
    lineHeight: '1.8',
    color: '#b8b8d1',
    margin: 0,
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word',
    maxWidth: '100%'
  },
  technologiesContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.75rem',
  },
  techTag: {
    padding: '0.5rem 1rem',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(102, 126, 234, 0.3)',
    borderRadius: '20px',
    fontSize: '0.9rem',
    color: '#667eea',
    fontWeight: '500',
  },
  linksContainer: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  linkButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.875rem 1.5rem',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '12px',
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  linkButtonPrimary: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.875rem 1.5rem',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    border: 'none',
    borderRadius: '12px',
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
  },
  implementationButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    background: 'transparent',
    border: 'none',
    color: '#ffffff',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '600',
    padding: '0',
    alignSelf: 'flex-start',
  },
  footerCTA: {
    maxWidth: '800px',
    margin: 'auto',
    marginBottom: 'auto',
    padding: '4rem 2rem',
    textAlign: 'center',
    background: 'rgba(255, 255, 255, 0.03)',
    borderRadius: '24px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  ctaTitle: {
    fontSize: '2rem',
    marginBottom: '1rem',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '1rem 2rem',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    borderRadius: '12px',
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 20px rgba(102, 126, 234, 0.4)',
  },
};