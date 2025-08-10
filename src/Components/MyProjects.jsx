import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import tictactoe1 from "../assets/Projects/TicTacToe/tictactoe_2.png"
import sudoku from '../assets/Projects/Sudoku/s1.png'
import mask from '../assets/Projects/MaskDetection/m1.png'
import yt from '../assets/Projects/YT/yt1.jpg'
const projectsData = [
    {
        title: "Online Video Streaming Platform",
        description: "A full-featured video streaming system with adaptive bitrate streaming, built with a resilient backend using Flask and Kafka to handle video processing workflows.",
        tags: ["Flask", "Kafka", "S3", "FFmpeg", "Docker", "React", "MongoDB"],
        image: yt,
        liveLink: null,
        githubLink: "https://github.com/mrranger939/YouTube_RN"
    },
    {
        title: "Sudoku Solver Web App",
        description: "A full-stack web app that solves Sudoku puzzles from user-uploaded images, using a custom-trained CNN model for digit recognition.",
        tags: ["React", "Flask", "TensorFlow", "OpenCV", "CNN"],
        image: sudoku,
        liveLink: null,
        githubLink: "https://github.com/mrranger939/sudoku"
    },
    {
        title: "Multiplayer Tic-Tac-Toe",
        description: "An interactive Tic-Tac-Toe game supporting single-player (vs. AI) and real-time multiplayer modes with random matchmaking and private rooms.",
        tags: ["Node.js", "Express", "Socket.io", "EJS", "JavaScript"],
        image: tictactoe1,
        liveLink: "https://play-game-eye7.onrender.com/",
        githubLink: "https://github.com/mrranger939/play_game"
    },
    {
        title: "Face Mask Detection",
        description: "A real-time face mask detection system that classifies whether individuals are wearing a mask using a live webcam feed and deep learning.",
        tags: ["Python", "OpenCV", "TensorFlow", "VGG16"],
        image: mask,
        liveLink: null,
        githubLink: "https://github.com/mrranger939/Mask"
    }
];

/**
 * ProjectCard Component
 * A reusable card for displaying a single project.
 * The card is now a flex container to ensure consistent height and alignment.
 */
const ProjectCard = ({ project }) => (
    <div className="backdrop-blur-[2px] bg-neutral-900/50 border border-neutral-800 rounded-lg overflow-hidden group flex flex-col">
        {/* Image container with a fixed height and background. The image inside will be contained. */}
        <div className="w-full h-48  overflow-hidden ">
            <img 
                src={project.image} 
                alt={`Screenshot of ${project.title}`}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 rounded-lg"
                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/1a1a1a/ffffff?text=Image+Error'; }}
            />
        </div>
        <div className="p-6 flex flex-col flex-grow ">
            {/* Main content area - this will grow to fill available space */}
            <div className="flex-grow">
                <h4 className="text-xl font-bold text-neutral-100 mb-2">{project.title}</h4>
                <p className="text-sm text-neutral-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                        <span key={tag} className="bg-white/10 text-white backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium border border-white/20">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            {/* Links section - pushed to the bottom of the card */}
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                {/* GitHub Link - always on the left */}
                <div>
                    {project.githubLink && (
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-neutral-300 hover:text-white transition-colors">
                            <IconBrandGithub size={18} className="mr-2" />
                            GitHub
                        </a>
                    )}
                </div>
                {/* Live Demo Link - always on the right */}
                <div>
                    {project.liveLink && (
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-neutral-300 hover:text-white transition-colors">
                            <IconExternalLink size={18} className="mr-2" />
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    </div>
);


/**
 * Projects Component
 * A section to display a grid of project cards.
 */
export default function MyProjects({setActiveComponent}) {
  return (
    // The outer section no longer needs horizontal padding.
    <section className="relative z-20 text-white py-20">
      {/* This container now has p-6 to match the Hero section's padding */}
      <div className="container mx-auto max-w-6xl p-6">
        <h2 className="text-5xl font-bold text-center mb-16  bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        {/* "Show More" button added below the grid */}
        <div className="text-center mt-12">
            <button onClick={() => setActiveComponent("left")} className="bg-neutral-800 text-neutral-300 hover:bg-neutral-700 hover:text-white transition-colors duration-300 font-medium py-2 px-6 rounded-full">
                Show More
            </button>
        </div>
      </div>
    </section>
  );
}
