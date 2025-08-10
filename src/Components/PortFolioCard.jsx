import React, { useState } from 'react';

// --- Mock Assets for Demonstration ---
// In a real project, these would be actual image imports.
import cbit from '../assets/CBIT_LOGO.png'
import pjc from '../assets/pjc_logo.png'
import pv from '../assets/pv_logo.png'
import grapplTech from '../assets/internpixel_logo.jfif'
import prasunet from '../assets/prasunet_company_logo.jfif'
import ybi from '../assets/ybi.jfif'


// --- Technical Skills Component ---
const skillsData = [
  { category: "Languages", skills: ["Python", "JavaScript", "Java"] },
  { category: "Frontend Technologies", skills: ["HTML/CSS", "React", "Bootstrap", "Tailwind"] },
  { category: "Backend & Databases", skills: ["NodeJS", "ExpressJS", "Flask", "MongoDB", "SQL"] },
  { category: "Machine Learning & Deep Learning", skills: ["TensorFlow", "Keras", "Scikit-learn"] },
  { category: "Tools & Platforms", skills: ["Kafka", "Docker", "Git"] },
  { category: "Others", skills: ["Data Structures", "Algorithms"] },
];

function TechnicalSkills({setActiveComponent}) {
  return (
    <div className="container mx-auto max-w-6xl mt-12 bg-neutral-900/50 backdrop-blur-[2px] border text-left  border-white/10 rounded-2xl p-8">
      <div className="space-y-4">
        {skillsData.map((item) => (
          <div key={item.category}>
            <h3 className="text-base font-semibold text-neutral-100 mb-3 md:text-left">
              {item.category}
            </h3>
            <div className="flex flex-wrap items-center justify-start md:justify-start gap-4">
              {item.skills.map((skill) => (
                <div key={skill} className="bg-white/10 text-white backdrop-blur-sm rounded-full px-4 py-2 text-xs font-medium border border-white/20">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* "Show More" button for Technical Skills */}
      <div className="text-center mt-12">
        <button onClick={()=>setActiveComponent("right")} className="bg-neutral-800 text-neutral-300 hover:bg-neutral-700 hover:text-white transition-colors duration-300 font-medium py-2 px-6 rounded-full">
            Show More
        </button>
      </div>
    </div>
  );
}


// --- Timeline Component ---
// The data remains detailed, but the card component will only show a summary.
const timelineData = [
    { type: "experience", title: "Artificial Intelligence and Machine Learning Intern", subtitle: "YBI Foundation", duration: "Nov 2024 - Dec 2024 · 2 mos", description: "Engaged in the end-to-end machine learning project lifecycle, including data analysis, feature engineering, model selection, training, and performance evaluation.", tags: ["Machine Learning", "Deep Learning"], logo: ybi },
    { type: "experience", title: "Web Development Intern", subtitle: "PRASUNET", duration: "Jul 2024 - Aug 2024 · 2 mos", description: "Applied a versatile web technology stack to solve diverse technical challenges and build user-centric features, earning commendation for dedication and communication.", tags: ["Full-Stack Development"], logo: prasunet },
    { type: "experience", title: "Software Engineer Intern", subtitle: "GrapplTech", duration: "Jun 2024 - Jul 2024 · 2 mos", description: "Developed modular and reusable UI components using core web technologies to improve development efficiency and ensure visual consistency across web applications.", tags: ["Front-End Development"], logo: grapplTech },
    { type: "education", title: "B.E in Computer Science and Engineering", subtitle: "Chaitanya Bharathi Institute of Technology", duration: "2022 – 2026", description: "CGPA: 9.4", logo: cbit },
    { type: "education", title: "12th Grade", subtitle: "Prathibha Junior College", duration: "2020 – 2022", description: "CGPA: 9.89", logo: pjc },
    { type: "education", title: "10th S.S.C Board", subtitle: "Panchavati Vidyalaya", duration: "2020", description: "GPA: 10", logo: pv },
];

// Updated TimelineCard to be less detailed
const TimelineCard = ({ item }) => (
  <div className="relative pl-12 mb-10 ">
    <div className="absolute left-0 top-0 -translate-x-1/2">
      <img src={item.logo} alt={`${item.subtitle} logo`} className="h-10 w-10 rounded-full bg-neutral-800 border-2 border-black object-cover" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/40x40/1a1a1a/ffffff?text=Err'; }} />
    </div>
    <div className="backdrop-blur-[2px] bg-neutral-900/50 border border-neutral-800 rounded-lg p-6 hover:border-neutral-600 transition-colors duration-300">
      <p className="text-xs text-neutral-400 mb-1">{item.duration}</p>
      <h4 className="text-lg font-bold text-neutral-100">{item.title}</h4>
      <p className="text-sm text-neutral-300">{item.subtitle}</p>
    </div>
  </div>
);

function MyTimeline({setActiveComponent}) {
  return (
    <div className="container mx-auto max-w-4xl mt-12 bg-neutral-900/50 backdrop-blur-[2px] border text-left  border-white/10 rounded-2xl p-8">
      <div className="relative border-l-2 border-neutral-800 ml-5">
        {timelineData.map((item, index) => (
          <TimelineCard key={index} item={item} />
        ))}
      </div>
       {/* "Show More" button for Timeline */}
      <div className="text-center mt-8">
        <button onClick={() => setActiveComponent("up")} className="bg-neutral-800 text-neutral-300 hover:bg-neutral-700 hover:text-white transition-colors duration-300 font-medium py-2 px-6 rounded-full">
            Show More
        </button>
      </div>
    </div>
  );
}


// --- Main Portfolio Container with Tab Logic ---
export default function PortfolioContainer({setActiveComponent}) {
  const [activeTab, setActiveTab] = useState('Skills');

  return (
    <section className="relative text-white py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Tab Buttons */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 bg-neutral-800 p-1 rounded-full">
            <button
              onClick={() => setActiveTab('Skills')}
              className={`px-6 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${activeTab === 'Skills' ? 'bg-neutral-600 text-white' : 'text-neutral-400 hover:bg-neutral-700'}`}
            >
              Technical Skills
            </button>
            <button
              onClick={() => setActiveTab('Timeline')}
              className={`px-6 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${activeTab === 'Timeline' ? 'bg-neutral-600 text-white' : 'text-neutral-400 hover:bg-neutral-700'}`}
            >
              Timeline
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div>
          {activeTab === 'Skills' && <TechnicalSkills setActiveComponent={setActiveComponent}/>}
          {activeTab === 'Timeline' && <MyTimeline setActiveComponent={setActiveComponent} />}
        </div>
      </div>
    </section>
  );
}
