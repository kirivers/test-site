import './App.css';
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const skillColors = {
  Python: "#3572A5",
  Statistics: "#61DAFB",
  scikit: "#E76F00",
  Torch: "#E70000",
  'Node.js': "#7D32A8",
  JavaScript: "#32A885",
  React: "#66A832"
};

const projects = [
  { id: 1, name: 'Iris Recognition', path: '/projects/project1', skills:['Python', 'Statistics'], description:'Implementing Personal Identification Based on Iris Texture Analysis (2003)', githubLink: 'https://github.com/kirivers/IrisRecognition' },
  { id: 2, name: 'Stop Sign Detection', path: '/projects/project2', skills:['Python'], description:' Detecting the stop sign in an image using k-means algorithm', githubLink: 'https://github.com/kirivers/StopSignDetection'  },
  { id: 3, name: 'Face Recognition', path: '/projects/project3', skills:['Python', 'scikit'], description:'Performing image segmentation and facial recognition using knn ', githubLink: 'https://github.com/kirivers/FaceRecognition'  },
  { id: 4, name: 'SVHN CNN', path: '/projects/project4', skills:['Python', 'scikit', 'Torch'], description:'Parsing MATLAB\'s SVHN with a CNN built via PyTorch', githubLink: 'https://github.com/kirivers/SVHNCNN'  },
  { id: 5, name: 'GPT Model', path: '/projects/project5', skills:['Python', 'Torch' ], description:'Implementing a GPT style model for text generation using PyTorch at the character level', githubLink: 'https://github.com/kirivers/GPT-by-Character'  },
  { id: 6, name: 'This website', path: '/projects/project6', skills:['JavaScript', 'Node.js', 'React'], description:'My personal site.', githubLink: 'https://github.com/kirivers/personal-site'  }
];

const App = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="content">
      <div className="header-container">
        <h2>kaylen rivers</h2>
        <ul className="social-container">
          <li>
            <a href="https://www.linkedin.com/in/kaylen-rivers/" target="_blank" rel="noopener noreferrer" className="linkedin-icon">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/kirivers" target="_blank" rel="noopener noreferrer" className="github-icon-top">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
      </div>

      <h1>Hi, I'm Kaylen</h1>
      <div className="bio-container">
        <div className="bio-content">
          {/* Bio Text */}
          <p>
            I recently graduated with my Masters from Columbia University, where I specialized in Data Science and Machine Learning. I grew up on the north shore of Massachusetts, and I love the outdoors, art, and my computers.
          </p>

          {/* "More about me" toggle button */}
          <button className="more-about-btn" onClick={() => setExpanded(!expanded)}>
            {expanded ? "Show Less" : "More About Me"}
          </button>

          {/* Expandable content */}
          <div className={`expanded-text ${expanded ? "show" : ""}`}>
            <p>
              I worked briefly as a Junior Software Engineer at DEKA Research and Development. There I constructed the frontend for several medical devices in use by thousands of patients. I ensured that both the patients, and the device engineers at DEKA could monitor performance, as any malfunction could have been life-threatening.
            </p>
            <p>
              I often code in Python, and I also use R, SQL, Java, Javascript, and Typescript. At Columbia, I took courses like Machine Learning, Applied Machine Learning, Natural Language Processing, and Computer Vision; now I can pick the right model for the job, build it from scratch or with libraries, tune it to perfection, and solve any problem you can throw at me.
            </p>
            <p>
              I received my undergraduate degree in Computer Science from Middlebury College, so my coding background is robust. I also majored in English at Middlebury, which improves the clarity of my documentation and to become an adept technical communicator. Consequently, I taught numerous Middlebury faculty how to use platforms like Zoom, Panopto, and Canvas during the COVID transition online.
            </p>
            <p>
              I like to say that my biggest strength is my humility (oxymoron, I know). The more knowledge and skills I accrue, the more I learn just how little I know. I am always seeking to improve my methods and my results, and I never believe that I already have all of the answers.
            </p>
          </div>
        </div>

        {/* Profile Picture */}
        <div className="profile-container">
          <img src="/profile2.jpeg" alt="Kaylen's Profile" className="profile-pic" />
        </div>
      </div>
      <h1>Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <a 
            key={index} 
            href={project.githubLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="project-link" 
          >
            <div className="project-box">
              <div className="project-name">{project.name}</div>
              <div className="project-description">{project.description}</div>

              <div className="skills-container">
                {project.skills.map((skill, i) => (
                  <span key={i} className="skill-label" style={{ backgroundColor: skillColors[skill] || '#3498db' }}>
                    {skill}
                  </span>
                
                ))}
              </div>
            {/* GitHub icon (only if project has a GitHub link) */}
            {project.githubLink && (
              <div className="github-icon">
                <FontAwesomeIcon icon={faGithub} />
              </div>
            )}
            
            </div>
          </a>
        ))}
      </div>



    </div>
    
  );
};

export default App;
