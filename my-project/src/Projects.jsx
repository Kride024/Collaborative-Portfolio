import React from 'react';
import { motion } from 'framer-motion'; 

// --- Icon Placeholders (GitHub and Code/Default) ---

// GitHub Icon (Simplified and Filled SVG for a Bolder Look)
const GitHubIcon = (props) => (
    <svg 
        {...props} 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        className="w-5 h-5 mr-2"
    >
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.418 2.867 8.163 6.83 9.48.5.092.682-.217.682-.483 0-.237-.008-.887-.015-1.747-2.784.608-3.37-1.336-3.37-1.336-.455-1.157-1.112-1.465-1.112-1.465-.91-.622.069-.608.069-.608 1.007.07 1.532 1.03 1.532 1.03.896 1.535 2.348 1.092 2.91 0 .092-.716.35-1.092.67-1.34-2.585-.29-5.304-1.29-5.304-5.757 0-1.27.452-2.31 1.202-3.13-.122-.308-.524-1.48.114-3.07 0 0 .98-.313 3.204 1.173.93-.258 1.92-.387 2.91-.387 1.002 0 1.977.129 2.91.387 2.224-1.486 3.204-1.173 3.204-1.173.638 1.59.236 2.76.114 3.07.75.82 1.202 1.86 1.202 3.13 0 4.48-2.72 5.467-5.305 5.75.357.308.674.918.674 1.854 0 1.34-.012 2.427-.012 2.753 0 .267.177.575.687.48A10.038 10.038 0 0 0 22 12.017C22 6.484 17.523 2 12 2Z" clipRule="evenodd" />
    </svg>
);

// Code/Default Icon (used for AnonyMail placeholder)
const CodeIcon = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-gray-400">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
    </svg>
);

// --- Project Data ---

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

const ProjectCard = ({ project, index }) => { 
    // This function returns a className based on the image placeholder, mimicking the screenshot styles
    const getCardImageClasses = (imageKey) => {
        switch (imageKey) {
            case 'code-docs':
                return 'bg-gray-900 bg-center bg-cover flex items-end p-4 h-48 rounded-t-xl overflow-hidden';
            case 'eink':
                return 'bg-white flex items-center justify-center h-48 rounded-t-xl overflow-hidden';
            case 'picai':
                return 'bg-gray-800 bg-center bg-cover flex items-end p-4 h-48 rounded-t-xl overflow-hidden';
            case 'transfer':

                return 'bg-gray-100 flex items-center justify-center h-48 rounded-t-xl overflow-hidden';
            case 'chess':
                return 'bg-amber-100 flex items-center justify-center h-48 rounded-t-xl overflow-hidden';
            case 'anon-mail':
            default:
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
        <motion.div
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform" 
            
            // ✅ STARTING POSITION: Cards are hidden and small
            initial={{ opacity: 0, scale: 0.8 }} 

            // 🌟 NEW: The target state (visible and full size) when in view
            whileInView={{ opacity: 1, scale: 1 }} 

            // 🌟 NEW: Configuration for the viewport trigger
            viewport={{ 
                once: true, // IMPORTANT: Animation only plays the first time it enters the viewport
                amount: 0.5, // Triggers when 50% of the item is visible
            }}
            
            // ✅ TRANSITION (Applied to both scroll-in and hover)
            transition={{ 
                type: 'spring', 
                stiffness: 500, 
                damping: 25, 
                delay: index * 0.03, // Staggered delay for the animation
            }}
            
            // ✅ HOVER ANIMATION (Outward: Scale up and Lift up)
            whileHover={{ 
                scale: 1.03,      
                y: -5,            
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            }}
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
        <div 
            // Removed min-h-screen to prevent unnecessary vertical space
            className="bg-gray-50 font-sans" 
            style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #e5e7eb 1px, transparent 0)' , backgroundSize: '20px 20px'}}
        >
            <div 
                // Uses pb-4 by default, but switches to pb-16 (4rem) on 2XL screens (1536px+)
                className="max-w-7xl mx-auto pt-16 pb-8 2xl:pb-16 px-4 sm:px-6 lg:px-8" 
            >
                
                {/* Header Section - Keeping initial animation here, but you might also want to change this to whileInView if it's below the fold */}
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

                {/* Projects Grid - Cards will now animate on scroll */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} /> 
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
