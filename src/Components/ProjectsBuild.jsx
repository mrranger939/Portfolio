import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { TabsDemo } from "./projStruct";
import visionai_1 from "../assets/visionai_1.png";
import visionai_2 from "../assets/visionai_2.png";
import sudoku_question from "../assets/sudoku_question.png";
import sudoku_answer from "../assets/sudoku_answer.png";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import tictactoe1 from "../assets/tictactoe_1.png"
import tictactoe2 from "../assets/tictactoe_2.png"
import tictactoe3 from "../assets/tictactoe_3.png"
import tictactoe4 from "../assets/tictactoe_4.jpeg"
export default function ProjectTabs({ onClose }) {
  const allparas = {
    visionpara:
      "Vision AI is a web application leveraging AI capabilities to deliver seamless and intuitive user experiences. The application fetches real-time insights from an advanced AI-powered API, ensuring dynamic updates and responsive performance. With a clean and modern React-based interface, it simplifies complex interactions, making AI accessible and engaging for users.",
    sudokupara: `I built a Sudoku Solver application that integrates a ReactJS frontend with a Flask and Python backend. The project implements the backtracking algorithm to solve any valid 9x9 Sudoku grid. With a focus on clean design and efficient functionality, this application highlights my skills in developing interactive user interfaces, implementing algorithmic solutions, and seamlessly connecting frontend and backend technologies.`,
    tictactoepara: "I created a fully functional Tic Tac Toe application that allows players to enjoy the classic game with multiple modes of interaction. Players can choose between a static mode against predefined moves, an AI mode that dynamically responds to their moves, and a multiplayer mode that enables two players to compete by creating and joining custom game rooms. This project combines logic-based gameplay with an engaging user experience, showcasing my skills in game development and real-time interactivity",
  };
  const allTechStacks = {
    visionstack: ["React", "API"],
    sudokuStack: [
      "ReactJS",
      "JavaScript",
      "Bootstrap",
      "CSS",
      "Flask",
      "Python",
      "Backtracking Algorithm",
    ],
    tictactoeStack: [
      "EJS",
      "JavaScript",
      "CSS",
      "Bootstrap",
      "Node.js",
      "Express",
      "Socket.IO",
      "UUID"
  ]
  };
  const allworks = {
    visionwork:
      "I independently developed a responsive front-end for the Vision AI project using React, leveraging its powerful hooks like useEffect and useState for dynamic state management and real-time updates. The project integrates a third-party AI API to enable seamless interaction and dynamic data fetching. To ensure security, I utilized environment variables with dotenv for managing sensitive API keys. Additionally, I designed and implemented user-friendly UI components to deliver a smooth and engaging user experience.",
    sudokuWork:
      "The Sudoku Solver application begins with the frontend, built using ReactJS, where users interact with a visually clean and responsive 9x9 grid interface. The grid allows users to input Sudoku puzzles conveniently. Once submitted, the data is sent to the backend, developed with Flask and Python. The backend processes the input grid using a backtracking algorithm, a systematic approach to find a solution for the puzzle by exploring all possibilities and reverting when constraints are violated. After solving the puzzle, the backend sends the completed grid back to the frontend, where it is displayed to the user. This seamless integration between the frontend and backend ensures a smooth and efficient solving experience.",
    tictactoework_1: "In singleplayer mode, the basic opponent makes random moves using a randomization function on the frontend, providing a casual experience. The advanced mode uses a custom algorithm to analyze the game board and make strategic moves, offering a tougher challenge. Both modes are entirely handled on the frontend for quick responses.",
    tictactoework_2: "The random matchmaking mode connects players automatically via Socket.IO. When a player joins, the backend adds them to a waiting queue. If another player is available, they are paired instantly, and moves are synced in real time through WebSocket connections for smooth gameplay.",
    tictactoework_3: "In room creation mode, the backend generates a unique room ID using Express. Players share this ID or link with friends, allowing them to join the game. Once connected, Socket.IO handles real-time communication, ensuring a seamless and private gaming experience.",
  
    };
  const tabs = [
    {
      title: "Project",
      value: "vision_1",
      content: (
        <div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <div className="flex justify-between">
            <p>Vision AI</p>
            <Links
              github={"https://github.com/mrranger939/Vision"}
              live={"https://vision-ai-939.netlify.app/"}
            />
          </div>
          <AboutContent para={allparas.visionpara} image={visionai_1} />
        </div>
      ),
    },
    {
      title: "Tech Stack",
      value: "vision_2",
      content: (
        <div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Tech Stack</p>
          <TechContent techitem={allTechStacks.visionstack} />
        </div>
      ),
    },
    {
      title: "Work",
      value: "vision_3",
      content: (
        <div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Work</p>
          <AboutContent para={allworks.visionwork} image={visionai_2} />
        </div>
      ),
    },
  ];
  const tabs1 = [
    {
      title: "Project",
      value: "sudoku",
      content: (
        <div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <div className="flex justify-between">
            <p>Sudoku Solver</p>
            <Links github={"https://github.com/mrranger939/sudoku"} />
          </div>
          <AboutContent para={allparas.tictactoepara} image={sudoku_question} />
        </div>
      ),
    },
    {
      title: "Tech Stack",
      value: "vision_2",
      content: (
        <div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Tech Stack</p>
          <TechContent techitem={allTechStacks.sudokuStack} />
        </div>
      ),
    },
    {
      title: "Work",
      value: "vision_3",
      content: (
        <div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Work</p>
          <AboutContent para={allworks.sudokuWork} image={sudoku_answer} />
        </div>
      ),
    },
  ];
  const tabs2 = [
    {
      title: "Project",
      value: "tictactoe_1",
      content: (
        <div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <div className="flex justify-between">
            <p>Tic Tac Toe Online</p>
            <Links
              github={"https://github.com/mrranger939/play_game"}
              live={"https://play-game-eye7.onrender.com/"}
            />
          </div>
          <AboutContent para={allparas.tictactoepara} image={tictactoe1} />
        </div>
      ),
    },
    {
      title: "Tech Stack",
      value: "tictactoe_2",
      content: (
        <div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Tech Stack</p>
          <TechContent techitem={allTechStacks.tictactoeStack} />
        </div>
      ),
    },
    {
      title: "Work",
      value: "tictactoe_3",
      content: (
        <div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Single Player Mode</p>
          <AboutContent para={allworks.tictactoework_1} image={tictactoe2} />
        </div>
      ),
    },
    {
      title: "Work",
      value: "tictactoe_4",
      content: (
        <div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Random Match-making Mode</p>
          <AboutContent para={allworks.tictactoework_2} image={tictactoe3} />
        </div>
      ),
    },
    {
      title: "Work",
      value: "tictactoe_5",
      content: (
        <div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Room Creation Mode</p>
          <AboutContent para={allworks.tictactoework_3} image={tictactoe4} />
        </div>
      ),
    },
    
  ];
  return (
    <div>
      <button
        onClick={onClose}
        className="text-neutral-200 text-sm absolute top-0 left-0 right-0 w-fit mx-auto py-2 px-4 bg-transparent rounded-md"
      >
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="text-3xl hover:text-4xl transition-all duration-100"
        />
      </button>
      <div className="flex flex-col gap-6">
        <TabsDemo tabs={tabs} />
        <TabsDemo tabs={tabs1} />
        <TabsDemo tabs={tabs2} />
      </div>
    </div>
  );
}
const DummyContent = () => {
  return (
    <img
      src="/linear.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
const AboutContent = ({ para, image }) => {
  return (
    <div className="flex flex-col h-full">
      <p className="text-sm mb-4">{para}</p>
      <div className="flex-grow">
        <img
          src={image}
          alt="dummy image"
          className="w-full h-full object-contain rounded-xl mx-auto md:h-[28rem]"
        />
      </div>
      <br />
    </div>
  );
};
const TechContent = ({ techitem }) => {
  return (
    <>
      <ul className="list-disc list-inside pl-6 text-lg">
        {techitem.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};
const Links = ({ github, live }) => {
  console.log(github, live);
  return (
    <div className="flex space-x-4 text-sm">
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          //className="flex items-center px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          <button
            type="button"
            class="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2"
          >
            <FontAwesomeIcon icon={faGithub} className="mr-2" /> GitHub
          </button>
        </a>
      )}

      {live && (
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          //className="flex items-center px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          <button
            type="button"
            class="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2"
          >
            <FontAwesomeIcon icon={faLink} className="mr-2" /> Live
          </button>
        </a>
      )}
    </div>
  );
};
