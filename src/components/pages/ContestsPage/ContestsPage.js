import React from 'react';
import { Trophy, Award } from 'lucide-react';

export default function ContestsPage() {

  const contests = [
    {
      id: 1,
      title: 'Teknofest - International UAV Competition',
      organizer: 'Teknofest',
      achievement: '3rd Place out of 29 Finalists',
      description: 'As part of team "AYtech UAS - Kürşad 40," I developed the autonomous flight mission code. We used the MAVSDK library in Python for drone control and OpenCV for real-time image processing. The drone successfully performed a fully autonomous flight, scanning for and identifying hexagonal and triangular targets, dropping two payloads accurately, and returning to the starting point to land. We conducted extensive testing in the Gazebo simulation environment before competing.',
      technologies: ['Python', 'MAVSDK', 'OpenCV', 'Gazebo', 'Raspberry Pi', 'PX4 Autopilot'],
      certificateUrl: 'https://drive.google.com/file/d/1K_bUNvSgumH9VOqtpJSa8NWzxx8TJ-CP/view?usp=sharing'
    },
    {
      id: 2,
      title: 'Hepsiburada AI Hackathon',
      organizer: 'Teknofest & Hepsiburada',
      achievement: 'Finalist - 11th out of 255 Teams',
      description: 'In the Kaggle stage of the Teknofest Address Analysis Hackathon, our team secured a finalist spot. The task was to develop an AI model for multi-class text classification of addresses. After intensive preprocessing and feature engineering, we fine-tuned a BERT model from Hugging Face, achieving a high score. We had the opportunity to present our work on stage to the jury and participants at the Hepsiburada Sancaktepe office.',
      technologies: ['Python', 'BERT', 'Hugging Face', 'NLP', 'Pandas', 'Scikit-learn', 'Kaggle'],
      certificateUrl: 'https://drive.google.com/file/d/1D-WwS1BLruzyjYKklKcpl2ubFGz6tDFq/view?usp=sharing'
    },
    {
      id: 3,
      title: 'Teknofest - Efficiency Challenge',
      organizer: 'Teknofest',
      achievement: '6th Place out of ~65 Finalists',
      description: 'With our university\'s electric car team, ELEKTROAYDIN, I was responsible for developing the embedded code for the vehicle\'s motor driver using C on an STM32 microcontroller. I also developed code with Arduino to convert data from analog sensors into the required format and worked on various tasks, including resistance measurement from the isolation monitoring device for safety.',
      technologies: ['C', 'Embedded Systems', 'STM32', 'Arduino', 'Motor Control', 'Sensor Data'],
      certificateUrl: 'https://drive.google.com/file/d/1RD4obecJr106SdOs2gGRVKd8hmVmz79u/view?usp=sharing'
    },
    {
      id: 4,
      title: 'Caretta Algorithm Competition',
      organizer: 'Caretta Software & University CS Department',
      achievement: '2nd Place out of 15 Teams',
      description: 'In an algorithm-solving competition jointly organized by Caretta Software and our university\'s Computer Engineering department, our team achieved second place. As the team leader, I played a significant role in problem-solving and guiding our strategy.',
      technologies: ['Algorithms', 'Data Structures', 'Problem Solving', 'Team Leadership', 'C++'],
      certificateUrl: 'https://drive.google.com/file/d/1y85rooMvF4Qexw3FaSR-2UbUj40Cder_/view?usp=sharing'
    }
  ];

  // This function dynamically imports images from the './assets' folder.
  // Make sure your folder structure is: src/assets/[Contest Title]/image1.png
  const context = require.context('./assets', true, /\.(png|jpe?g|svg)$/);
  const groupedImages = {};

  context.keys().forEach((key) => {
    // './Teknofest - International UAV Competition/image1.jpg' -> 'Teknofest - International UAV Competition'
    const folder = key.split('/')[1]; 
    
    if (!groupedImages[folder]) {
      groupedImages[folder] = [];
    }
    groupedImages[folder].push(context(key));
  });

  const ContestCard = ({ contest }) => {
    return (
      <div className='contest-card' style={styles.contestCard}>

        {/* Scrollable Image Gallery - Same as Projects Page */}
        {groupedImages[contest.title] && (
          <div className='images-scroll-container' style={styles.imagesScrollContainer}>
            {groupedImages[contest.title].map((imgSrc, i) => (
              <div className='contest-image-container' key={i} style={styles.imageContainer}>
                <img 
                  src={imgSrc} 
                  alt={`${contest.title} - ${i + 1}`}
                  className='contest-image'
                  style={styles.contestImage}
                />
              </div>
            ))}
          </div>
        )}

        {/* Contest Content */}
        <div className='contest-content-container' style={styles.contentContainer}>
          
          {/* Title and Certificate Button Row */}
          <div style={styles.titleRow}>
            <h2 className='contest-title' style={styles.contestTitle}>{contest.title}</h2>
            
            {/* View Certificate Button */}
            {contest.certificateUrl && (
              <a
                href={contest.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.certificateButton}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #fde68a, #fbbf24)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 25px rgba(251, 191, 36, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #fbbf24, #f59e0b)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(251, 191, 36, 0.4)';
                }}
              >
                <Award size={18} />
                <span>View Certificate</span>
              </a>
            )}
          </div>
          
          <div style={styles.metaInfo}>
            <span style={styles.organizer}>{contest.organizer}</span>
            <span style={styles.achievement}>{contest.achievement}</span>
          </div>

          <p className='contest-description' style={styles.contestDescription}>{contest.description}</p>

          {/* Technologies */}
          <div className='technologies-container' style={styles.technologiesContainer}>
            {contest.technologies.map((tech, i) => (
              <span key={i} className='tech-tag' style={styles.techTag}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='contests-page' style={styles.page}>
      {/* Header Section */}
      <div className='contests-header' style={styles.header}>
        <div className='contests-header-content' style={styles.headerContent}>
          <div className='contests-icon-wrapper' style={styles.iconWrapper}>
            <Trophy size={48} />
          </div>
          <h1 className='contests-page-title' style={styles.pageTitle}>Competition Achievements</h1>
          <p className='contests-page-subtitle' style={styles.pageSubtitle}>
            A showcase of my competitive experiences and successes in hackathons and challenges.
          </p>
        </div>
      </div>

      {/* Contests List */}
      <div className='contests-list' style={styles.contestsList}>
        {contests.map((contest) => (
          <ContestCard key={contest.id} contest={contest} />
        ))}
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
      background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.2), rgba(245, 158, 11, 0.2))',
      border: '2px solid rgba(251, 191, 36, 0.5)',
      borderRadius: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 2rem',
      color: '#facc15',
    },
    pageTitle: {
      fontSize: '3.5rem',
      marginBottom: '1rem',
      background: 'linear-gradient(135deg, #fde047 0%, #f59e0b 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    pageSubtitle: {
      fontSize: '1.2rem',
      color: '#9999b3',
      lineHeight: '1.8',
    },
    contestsList: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '4rem 2rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '6rem',
    },
    contestCard: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      background: 'rgba(255, 255, 255, 0.03)',
      borderRadius: '24px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      padding: '2rem',
      overflow: 'hidden',
    },
    // New: Horizontal scrolling images container (same as Projects)
    imagesScrollContainer: {
      display: 'flex',
      gap: '1rem',
      overflowX: 'auto',
      overflowY: 'hidden',
      paddingBottom: '0.5rem',
      scrollbarWidth: 'thin',
      scrollbarColor: 'rgba(251, 191, 36, 0.5) rgba(255, 255, 255, 0.1)',
    },
    imageContainer: {
      position: 'relative',
      flexShrink: 0,
      width: '400px',
      height: '300px',
      borderRadius: '16px',
      overflow: 'hidden',
      border: '1px solid rgba(255, 255, 255, 0.1)',
    },
    contestImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.3s ease',
    },
    contentContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
    },
    // New: Title row with button
    titleRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      gap: '1rem',
    },
    contestTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      margin: 0,
      color: '#ffffff',
      flex: 1,
    },
    // New: Certificate button (same style as experience page but golden theme)
    certificateButton: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.75rem 1.5rem',
      background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
      color: '#1a1a2e',
      textDecoration: 'none',
      borderRadius: '10px',
      fontSize: '0.95rem',
      fontWeight: '700',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(251, 191, 36, 0.4)',
      border: 'none',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
    },
    metaInfo: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
        padding: '1rem',
        background: 'rgba(251, 191, 36, 0.05)',
        borderRadius: '12px',
        border: '1px solid rgba(251, 191, 36, 0.2)',
    },
    organizer: {
        fontSize: '1.1rem',
        fontWeight: '500',
        color: '#b8b8d1',
    },
    achievement: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        color: '#facc15',
        background: 'rgba(251, 191, 36, 0.1)',
        padding: '0.5rem 1rem',
        borderRadius: '8px',
    },
    contestDescription: {
      fontSize: '1.1rem',
      lineHeight: '1.8',
      color: '#b8b8d1',
      margin: 0,
    },
    technologiesContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.75rem',
      marginTop: 'auto',
      paddingTop: '1rem',
    },
    techTag: {
      padding: '0.5rem 1rem',
      background: 'rgba(251, 191, 36, 0.1)',
      border: '1px solid rgba(251, 191, 36, 0.3)',
      borderRadius: '20px',
      fontSize: '0.9rem',
      color: '#facc15',
      fontWeight: '500',
    },
  };