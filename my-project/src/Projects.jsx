import React from 'react';
import { motion } from 'framer-motion'; // 👈 Import motion

// --- Icon Placeholders (GitHub and Code/Default) ---

// GitHub Icon (Simple SVG)
const GitHubIcon = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 3c.4-1.47-1.45-3-3-2.91A5.05 5.05 0 0 0 12 5.51a5.05 5.05 0 0 0-4.91-4.92c-1.55-.09-3.4.82-3 2.91A5.44 5.44 0 0 0 2 10.42c0 5.43 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 19zm-5.74-4.8c-.37.7-.84 1.34-1.39 1.83.63.38 1.37.5 2.15.39.26-.04.48-.12.67-.22.61-.3 1.14-.73 1.56-1.25z"/>
    </svg>
);

// Code/Default Icon (used for AnonyMail placeholder)
const CodeIcon = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-gray-400">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
    </svg>
);

// --- Project Data (Keeping it as is for brevity) ---
const projectsData = [
  // Row 1
  {
    title: 'CodeDocs CLI',
    description: 'An interactive dev environment for documenting code. Includes an in-browser transpiler and bundler.',
    image: 'code-docs', 
    tags: ['React', 'Redux', 'Node.js', 'TypeScript', 'CLI'],
    githubLink: '#',
  },
  {
    title: 'EiNK',
    description: 'A cross-platform ebook manager and reader with web  frontends and a .NET backend.',
    image: 'eink', 
    tags: ['React', 'Swift', '.NET', 'PostgreSQL', 'iOS'],
    githubLink: '#',
  },
  {
    title: 'PicAi',
    description: 'iOS app using on device deep learning for real time filter recommendations, with Metal rendering.',
    image: 'picai', 
    tags: ['Swift', 'Core ML', 'Deep Learning', 'Metal'],
    githubLink: '#',
  },
  // Row 2
  {
    title: 'Exchange Platform',
    description: 'A full-stack exchange application built with a modern monorepo architecture.',
    image: 'transfer', 
    tags: ['Next.js', 'Turborepo', 'Postgres', 'Prisma ORM'],
    githubLink: '#',
  },
  {
    title: 'Online Chess',
    description: 'Play real time online chess matches with friends using Web Sockets for live communication.',
    image: 'chess', 
    tags: ['React', 'Node.js', 'Web Sockets', 'CSS'],
    githubLink: '#',
  },
  {
    title: 'AnonyMail',
    description: 'A native macOS app using SwiftUI to process and anonymize mail data within CSV files via regex.',
    image: 'anon-mail', 
    tags: ['SwiftUI', 'macOS', 'Regex', 'CSV'],
    githubLink: '#',
  },
];


// --- Project Card Component ---
// This component now accepts an 'index' prop for staggered animation
const ProjectCard = ({ project, index }) => { // 👈 Accepting index
    // ... (Original utility functions are unchanged) ...

    // This function returns a className based on the image placeholder, mimicking the screenshot styles
    const getCardImageClasses = (imageKey) => {
        switch (imageKey) {
            case 'code-docs':
                // Dark background with code syntax highlighting
                return 'bg-gray-900 bg-center bg-cover flex items-end p-4 h-48 rounded-t-xl overflow-hidden';
            case 'eink':
                // White background with large black text
                return 'bg-white flex items-center justify-center h-48 rounded-t-xl overflow-hidden';
            case 'picai':
                // Dark background with image overlay
                return 'bg-gray-800 bg-center bg-cover flex items-end p-4 h-48 rounded-t-xl overflow-hidden';
            case 'transfer':
                // Light gray/off-white background with screenshot
                return 'bg-gray-100 flex items-center justify-center h-48 rounded-t-xl overflow-hidden';
            case 'chess':
                // Beige/brown background with chess board
                return 'bg-amber-100 flex items-center justify-center h-48 rounded-t-xl overflow-hidden';
            case 'anon-mail':
            default:
                // Light gray background with generic code icon
                return 'bg-gray-100 flex items-center justify-center h-48 rounded-t-xl overflow-hidden';
        }
    };

    // This function provides the actual visual content for the card header
    const getCardImageContent = (imageKey) => {
        switch (imageKey) {
            case 'code-docs':
                return (
                    <div className="w-full h-full bg-cover bg-top" style={{backgroundImage: `url('placeholder-code-docs.png')`}}>
                        <div className="flex justify-end p-2">
                             <span className="text-white text-xs bg-red-600 px-2 py-0.5 rounded mr-1">CD</span>
                             <span className="text-white text-xs bg-orange-500 px-2 py-0.5 rounded">B</span>
                        </div>
                    </div>
                );
            case 'eink':
                return <span className="text-5xl font-extrabold text-gray-900">EiNK</span>;
            case 'picai':
                return <span className="text-3xl font-bold text-white tracking-widest">Furniture</span>;
            case 'transfer':
                return <span className="text-2xl font-bold text-gray-700">Transfer</span>;
            case 'chess':
                // A simple placeholder for the chess board image
                return <div className="w-full h-full bg-center bg-cover" style={{backgroundImage: `url('placeholder-chess-board.png')`, maxWidth: '100%', maxHeight: '100%'}}></div>;
            case 'anon-mail':
            default:
                return <CodeIcon />;
        }
    };

    return (
        // 👈 1. Wrap the card in motion.div
        <motion.div
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            // 2. Define the initial (off-screen left) and final (on-screen) states
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            // 3. Set the duration and the staggered delay
            transition={{ duration: 0.5, delay: index * 0.15 }}
        >
            {/* Image/Header Section */}
            <div className={getCardImageClasses(project.image)}>
                {getCardImageContent(project.image)}
            </div>
            
            {/* Content Section */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-4 h-12 overflow-hidden">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                        <span key={index} className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
                
                {/* GitHub Link Button */}
                <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full py-2 text-sm font-semibold text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-150"
                >
                    <GitHubIcon />
                    View on GitHub
                </a>
            </div>
        </motion.div>
    );
};

// --- Main Projects Component ---

const Projects = () => {
    return (
        <div className="min-h-screen bg-gray-50 font-sans" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #e5e7eb 1px, transparent 0)' , backgroundSize: '20px 20px'}}>
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                
                {/* Header Section - Add a slight fade-in animation here too */}
                <motion.header 
                    className="mb-12 text-center max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
                        My Projects
                    </h1>
                    <p className="text-lg text-gray-600">
                        A selection of projects that showcase my skills and passion for building.
                    </p>
                </motion.header>

                {/* Projects Grid - Highly Responsive */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        // 👈 Pass the index to the ProjectCard
                        <ProjectCard key={index} project={project} index={index} /> 
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;