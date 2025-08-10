import React from "react";

import { TabsDemo } from "./projStruct";
import visionai_1 from "../assets/visionai_1.png";
import visionai_2 from "../assets/visionai_2.png";
import sudoku_question from "../assets/Projects/Sudoku/s2.png";
import sudoku_answer from "../assets/Projects/Sudoku/s1.png";
import sudoku_load from "../assets/Projects/Sudoku/s3.png";
import {
  IconBrandGithub,
  IconLink,
  IconCircleXFilled 
} from "@tabler/icons-react";
import tictactoe1 from "../assets/Projects/TicTacToe/tictactoe_1.png";
import tictactoe2 from "../assets/Projects/TicTacToe/tictactoe_2.png";
import tictactoe3 from "../assets/Projects/TicTacToe/tictactoe_3.png";
import tictactoe4 from "../assets/Projects/TicTacToe/tictactoe_4.jpeg";
import streaming_image_1 from "../assets/Projects/YT/yt1.jpg";
import streaming_image_2 from "../assets/Projects/YT/yt2.jpg";
import mask_image_1 from "../assets/Projects/MaskDetection/m1.png";
import mask_image_2 from "../assets/Projects/MaskDetection/m2.png";
import url1 from "../assets/Projects/URLShortener/u2.png";
import url2 from "../assets/Projects/URLShortener/u1.png";
import wtp1 from "../assets/Projects/WTP/1.png";
import wtp2 from "../assets/Projects/WTP/2.png";
import wtp3 from "../assets/Projects/WTP/3.png";
import wtp4 from "../assets/Projects/WTP/4.png";
import fashion1 from "../assets/Projects/Fashion/1.png";
import fashion2 from "../assets/Projects/Fashion/2.png";
import fashion3 from "../assets/Projects/Fashion/3.png";
import yts1 from "../assets/Projects/ytSum/1.png";
import yts2 from "../assets/Projects/ytSum/2.png";
import yts3 from "../assets/Projects/ytSum/3.png";
import yts4 from "../assets/Projects/ytSum/4.png";
import tt1 from "../assets/Projects/TrustTribe/home.png";
import tt2 from "../assets/Projects/TrustTribe/chat.png";
import tt3 from "../assets/Projects/TrustTribe/calender.png";
import mdp1 from '../assets/Projects/MDPS/d.png'
import mdp2 from '../assets/Projects/MDPS/h.png'
import mdp3 from '../assets/Projects/MDPS/p.png'

export default function ProjectTabs({ onClose }) {
  const allparas = {
    visionpara: (
      <div>
        <p className="mb-4">
          Vision AI is a modern web application I developed to demonstrate the
          power of integrating advanced AI capabilities into a seamless and
          intuitive user interface. The application is designed to provide
          real-time insights by fetching data from a powerful, third-party
          AI-powered API, ensuring that the user experience is always dynamic
          and responsive.
        </p>
        <p>
          I independently built the entire front-end from the ground up using
          React. To manage the application's state and handle the asynchronous
          data fetching from the API, I leveraged core React hooks like
          `useState` and `useEffect` for efficient, real-time updates. A key
          focus was on creating a clean, responsive, and user-friendly interface
          that simplifies complex interactions, making the advanced AI features
          accessible and engaging for all users. For security, I made sure to
          protect sensitive information, such as API keys, by utilizing
          environment variables with `dotenv`.
        </p>
      </div>
    ),
    sudokupara: (
      <div>
        <p className="mb-4">
          This project is a full-stack web application that intelligently solves
          Sudoku puzzles from user-uploaded images, combining the power of
          computer vision and deep learning. The application provides a seamless
          user experience where a user can simply upload a picture of a Sudoku,
          and the system will automatically recognize, solve, and display the
          solution.
        </p>
        <p className="mb-4">
          The core of the application is its machine learning pipeline. When an
          image is uploaded via the React frontend, it's sent to a Flask
          backend. There, OpenCV is used for crucial image preprocessing tasks,
          such as perspective transformation and cell extraction, to isolate
          each of the 81 squares of the puzzle. Following this, a custom-trained
          Convolutional Neural Network (CNN), built with TensorFlow, performs
          digit recognition on each cell to digitally reconstruct the puzzle
          grid.
        </p>
        <p>
          Once the puzzle is digitized, a classic backtracking algorithm is
          implemented to efficiently find the solution. The completed grid is
          then sent back to the frontend and displayed to the user. The entire
          user interface was designed with React to be fully responsive,
          ensuring a smooth and intuitive experience on all devices, from mobile
          phones to desktops.
        </p>
      </div>
    ),
    tictactoepara: (
      <div>
        <p className="mb-4">
          This project is a feature-rich, interactive Tic-Tac-Toe game that
          offers a comprehensive gaming experience with both single-player and
          robust multiplayer capabilities. The core of the application is its
          real-time multiplayer functionality, which was built to provide
          seamless and instant communication between players for an engaging
          head-to-head match.
        </p>
        <p className="mb-4">
          To enable this, I built the backend using Node.js and Express,
          integrating Socket.io to handle WebSocket connections for live
          gameplay. This architecture supports multiple ways to play with
          others: users can either jump into a game with a random opponent
          through an automatic matchmaking system or create private, custom
          rooms by sharing a unique link, allowing friends to play together. The
          application also supports a local two-player mode on the same device.
        </p>
        <p>
          For the single-player mode, I implemented AI opponents with two
          distinct difficulty settings. The 'easy' mode provides a casual
          experience, while the 'hard' mode uses a more strategic algorithm to
          offer a challenging opponent, showcasing the implementation of game
          logic and AI. The entire user interface was built to be responsive and
          engaging using EJS for server-side templating along with standard CSS
          and JavaScript. The game is fully deployed online, making it publicly
          accessible for anyone to play.
        </p>
      </div>
    ),
    streamingpara: (
      <div className="text-base">
        <p>
          This project is a comprehensive, full-stack video streaming platform,
          meticulously engineered from the ground up to deliver a
          professional-grade, high-quality viewing experience comparable to
          modern streaming services. A core feature of the platform is its
          implementation of adaptive bitrate streaming, which intelligently
          adjusts the video quality in real-time based on the user's network
          conditions, ensuring smooth playback without buffering interruptions.
        </p>
        <p>
          The architecture is built on a robust and scalable backend. I utilized
          Flask, a powerful Python web framework, to create the core API that
          handles user requests, video uploads, and metadata management. To
          manage the demanding task of video processing, I integrated Apache
          Kafka as a distributed messaging queue. This decouples the initial
          video upload from the intensive conversion process; when a video is
          uploaded, a message is published to a Kafka topic, which then triggers
          a separate, containerized worker service. This event-driven approach
          makes the system highly resilient and horizontally scalable.
        </p>
        <p>
          For storage and media processing, the platform leverages a combination
          of industry-standard tools. All video files are securely stored on AWS
          S3, providing durable and highly available object storage. The video
          processing worker utilizes FFmpeg, a leading multimedia framework, to
          transcode the original video into multiple resolutions and formats
          required for adaptive streaming.
        </p>
        <p>
          On the user-facing side, I developed a dynamic and interactive
          frontend using React and the NextUI component library, creating a
          polished, modern, and seamless interface for browsing and watching
          content. The entire application's state, including user data and video
          metadata, is managed in a MongoDB database, chosen for its flexibility
          and scalability. To ensure the platform is secure, user authentication
          and session management are handled using JSON Web Tokens (JWT),
          protecting user data and private routes.
        </p>
      </div>
    ),
    maskpara: (
      <div>
        <p className="mb-4">
          This project is a real-time face mask detection system designed to
          automatically classify whether individuals in a live video stream are
          wearing a face mask. Using a standard webcam feed, the application
          captures video, processes each frame, and provides an immediate
          on-screen classification, making it a practical tool for monitoring
          public health compliance.
        </p>
        <p className="mb-4">
          The core of the system is a powerful deep learning model built for
          accurate binary classification. To achieve high accuracy, I applied
          transfer learning techniques, leveraging two well-regarded pre-trained
          models: VGG16 and EfficientNetB0. By fine-tuning these models on a
          specialized dataset of faces with and without masks, the system can
          make reliable predictions even in varied lighting conditions and with
          different types of face coverings.
        </p>
        <p>
          The real-time video processing is handled by OpenCV, a
          high-performance computer vision library. For every frame captured
          from the webcam, the application detects faces, passes them to the
          trained TensorFlow model for classification, and then overlays the
          results directly onto the live feed. This provides instant visual
          feedback, such as a bounding box around the face colored green for
          "Mask" and red for "No Mask," along with a confidence score.
        </p>
      </div>
    ),
    urlPara: (
      <div>
        <p className="mb-4">
          This project is a full-stack, mini-SaaS URL shortener modeled after
          services like Bitly, providing robust link management and detailed
          analytics. It's a complete application that allows authenticated users
          to transform long URLs into short, shareable links and monitor their
          performance through a comprehensive dashboard.
        </p>
        <p className="mb-4">
          The platform is rich with features, including the ability to set
          custom aliases and optional expiration dates for links. Its core
          strength lies in the analytics dashboard, where users can view a table
          of all their links with key metrics. For each link, the system tracks
          the number of clicks and asynchronously logs the device type and
          browser information for each visitor. This data is then visualized
          using Recharts to display click trends over time. Additionally, the
          application can instantly generate a QR code for any shortened link,
          enhancing its shareability.
        </p>
        <p>
          The application is built on a modern client-server architecture. The
          backend is powered by Node.js and Express, creating a RESTful API that
          handles all the logic for link creation, tracking, and user
          management. User authentication is secured using JSON Web Tokens
          (JWT). All data, including user information, links, and click
          analytics, is stored in a MongoDB database. The frontend is a dynamic
          single-page application built with React and styled with Tailwind CSS,
          providing a clean and responsive user experience for managing links
          and viewing the analytics dashboard.
        </p>
      </div>
    ),
    wtpPara: (
      <div>
        <p className="mb-4">
          This project is a powerful data analysis tool designed to bring
          WhatsApp conversations to life through insightful visualizations. By
          simply uploading an exported chat file, the application processes the
          raw text data to generate a comprehensive and interactive dashboard.
          It offers a deep dive into the chat's statistics, providing both an
          overall group analysis and a detailed breakdown for each individual
          participant.
        </p>
        <p className="mb-4">
          The dashboard is rich with analytics, showcasing key metrics like the
          total number of messages, most active users, and a word cloud of the
          most frequently used terms. It uncovers communication patterns by
          visualizing the busiest days, months, and even times of day through an
          intuitive weekly activity heatmap. The tool also analyzes message
          frequency across different days and months, providing a clear picture
          of the chat's lifecycle.
        </p>
        <p>
          Beyond simple message counts, the application performs emoji analysis
          to highlight the most used emojis, adding a layer of emotional context
          to the data. The entire front-end is built with Streamlit, a Python
          library that turns data scripts into shareable web apps, while the
          heavy lifting of data manipulation and analysis is performed using
          powerful libraries like Pandas and NumPy. All the charts and graphs
          are generated using Matplotlib and Seaborn to create clear and
          aesthetically pleasing visualizations.
        </p>
      </div>
    ),
    fashionPara: (
      <div>
        <p className="mb-4">
          This project is an intelligent Fashion Recommender System that
          provides personalized style suggestions based on visual similarity. By
          uploading an image of a fashion item, the user can instantly receive
          recommendations for other products that match its aesthetic. The
          system is built on a powerful deep learning foundation, using a
          sophisticated computer vision model to understand the nuances of
          fashion imagery.
        </p>
        <p className="mb-4">
          The core of the recommender is a content-based filtering approach that
          leverages image embeddings. I used the pre-trained ResNet50 model, a
          state-of-the-art convolutional neural network, to process a large
          dataset of fashion product images from Kaggle. For each image, the
          model generates a high-dimensional vector, or "embedding," that
          numerically represents its visual features, such as color, pattern,
          and shape.
        </p>
        <p>
          When a user uploads an image, its embedding is generated in the same
          way. The system then uses the Nearest Neighbors algorithm to find the
          images in the dataset whose embeddings are closest to the uploaded
          image's embedding in the vector space. These closest matches are the
          recommended items. The entire feature extraction process was
          implemented using TensorFlow and Keras, and the resulting embeddings
          and image paths were serialized using Pickle for efficient retrieval,
          creating a fast and accurate recommendation engine.
        </p>
      </div>
    ),
    ysPara: (
      <div>
        <p className="mb-4">
          This project is a powerful and user-friendly web application designed
          to save time by providing concise summaries of YouTube videos. By
          simply pasting a video link, the tool automatically extracts the full
          transcript and uses advanced, AI-powered NLP models to generate a
          summarized version of the content, making it easy to grasp the key
          points of long videos in minutes.
        </p>
        <p className="mb-4">
          The application is engineered to be highly robust. It first attempts
          to fetch existing captions using the YouTube Transcript API. If a
          video lacks pre-written captions, the system automatically downloads
          the audio using yt-dlp and then leverages OpenAI's Whisper AI for
          highly accurate speech-to-text transcription. This ensures that
          virtually any spoken content on YouTube can be processed.
        </p>
        <p>
          Once the full transcript is obtained, it is passed to a sophisticated
          summarization model, Facebook's BART-Large-CNN from the Hugging Face
          Transformers library, to distill the text into a coherent and
          condensed summary. The entire backend logic is built with Python and
          served through a Flask web server, which also provides an API endpoint
          for programmatic access. The user interface is created with standard
          HTML, CSS, and JavaScript, providing a clean and straightforward
          experience for all users.
        </p>
      </div>
    ),
    ttPara: (
      <div>
        <p className="mb-4">
          TrustTribe is a comprehensive, full-stack web platform designed to
          enhance community engagement and management. It provides a suite of
          tools for seamless interaction, including a real-time live chat for
          community members to connect instantly, fostering a vibrant and
          communicative environment.
        </p>
        <p className="mb-4">
          Beyond communication, the platform features a structured incident
          reporting system, allowing users to easily and quickly report issues
          within the community. An integrated event calendar keeps everyone
          informed about upcoming activities and gatherings, aiming to be a
          central hub for community life.
        </p>
        <p>
          The application is powered by a robust backend built with Node.js and
          Express, handling all dynamic features and data management through a
          MongoDB database. Real-time functionality, such as the live chat, is
          enabled by Socket.io, ensuring instant communication. The entire
          system is designed to be a secure and centralized platform for
          building and managing a connected community.
        </p>
      </div>
    ),
    diseasePara: (
      <div>
        <p className="mb-4">
          This project is a practical application of machine learning in
          healthcare, designed to predict the likelihood of several common
          diseases based on user-provided health metrics. The system can make
          predictions for diabetes, heart disease, and Parkinson’s disease,
          serving as an accessible tool for preliminary health assessment.
        </p>
        <p className="mb-4">
          The core of the system is built on a set of distinct machine learning
          models, each trained specifically for one of the diseases. Using
          Python and the Scikit-Learn library, I developed and optimized various
          classification models to ensure they deliver accurate predictions.
          These trained models are the engine that powers the predictive
          capabilities of the application.
        </p>
        <p>
          To make the system user-friendly and interactive, I built a web
          application using Streamlit. This interface allows users to easily
          input their relevant health data, which is then fed into the
          appropriate trained model. The application promptly returns the
          prediction, providing a clear and immediate visualization of the
          result, making complex machine learning accessible to a non-technical
          audience.
        </p>
      </div>
    ),
  };
  const allTechStacks = {
    visionstack: ["React", "API"],
    sudokuStack: ["React", "Flask", "TensorFlow", "OpenCV", "CNN", "Python"],
    tictactoeStack: [
      "EJS",
      "JavaScript",
      "CSS",
      "Bootstrap",
      "Node.js",
      "Express",
      "Socket.IO",
      "UUID",
    ],
    streamingStack: [
      "Flask",
      "Kafka",
      "S3",
      "FFmpeg",
      "Docker",
      "React",
      "MongoDB",
      "JWT",
    ],
    urlStack: [
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
      "Recharts",
      "QRCode.react",
    ],
    wtpStack: [
      "Python",
      "Streamlit",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "WordCloud",
      "Emoji",
    ],
    maskStack: ["Python", "OpenCV", "TensorFlow", "EfficientNetB0", "VGG16"],
    fashionStack: [
      "Python",
      "TensorFlow",
      "Keras",
      "ResNet50",
      "Scikit-learn",
      "NumPy",
      "Pandas",
      "Pickle",
      "Matplotlib",
    ],
    ysStack: [
      "Python",
      "Flask",
      "OpenAI Whisper",
      "Hugging Face Transformers",
      "BART-Large-CNN",
      "YouTube Transcript API",
      "PyTube",
      "yt-dlp",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    ttStack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "EJS",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    diseasePredictionStack: [
      "Python",
      "Streamlit",
      "Scikit-Learn",
      "Pandas",
      "NumPy",
      "Pickle",
    ],
  };
  const vision = [
    {
      title: "Project",
      value: "vision_1",
      content: (
       <div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900/80 to-black/70 backdrop-blur-lg border border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>Vision AI</p>
            <Links
              github={"https://github.com/mrranger939/Vision"}
              live={"https://vision-ai-939.netlify.app/"}
            />
          </div>
          <AboutContent para={allparas.visionpara} />
        </div>
      ),
    },
    {
      title: "Tech Stack",
      value: "vision_2",
      content: (
        <div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900/80 to-black/70 backdrop-blur-lg border border-white/10">
          <p>Tech Stack</p>
          <TechContent techitem={allTechStacks.visionstack} />
        </div>
      ),
    },
    {
      title: "Image",
      value: "vision_3",
      content: (
        <div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900/80 to-black/70 backdrop-blur-lg border border-white/10">
          <AboutContent image={visionai_1} />
        </div>
      ),
    },
    {
      title: "Image",
      value: "vision_4",
      content: (
<div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900/80 to-black/70 backdrop-blur-lg border border-white/10">
          <AboutContent image={visionai_2} />
        </div>
      ),
    },
  ];
  const sudoku = [
    {
      title: "Project",
      value: "sudoku",
      content: (
        <div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900/80 to-black/70 backdrop-blur-lg border border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>Sudoku Solver</p>
            <Links github={"https://github.com/mrranger939/sudoku"} />
          </div>
          <AboutContent para={allparas.sudokupara} />
        </div>
      ),
    },
    {
      title: "Tech Stack",
      value: "vision_2",
      content: (
        <div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900/80 to-black/70 backdrop-blur-lg border border-white/10">
          <p>Tech Stack</p>
          <TechContent techitem={allTechStacks.sudokuStack} />
        </div>
      ),
    },
    {
      title: "Image",
      value: "vision_3",
      content: (
        <div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900/80 to-black/70 backdrop-blur-lg border border-white/10">
          <AboutContent image={sudoku_question} />
        </div>
      ),
    },
    {
      title: "Image",
      value: "vision_4",
      content: (
        <div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900/80 to-black/70 backdrop-blur-lg border border-white/10">
          <AboutContent image={sudoku_load} />
        </div>
      ),
    },
    {
      title: "Image",
      value: "vision_5",
      content: (
        <div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900/80 to-black/70 backdrop-blur-lg border border-white/10">
          <AboutContent image={sudoku_answer} />
        </div>
      ),
    },
  ];
  const tictactoe = [
    {
      title: "Project",
      value: "tictactoe_1",
      content: (
        <div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900/80 to-black/70 backdrop-blur-lg border border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>Tic Tac Toe Online</p>
            <Links
              github={"https://github.com/mrranger939/play_game"}
              live={"https://play-game-eye7.onrender.com/"}
            />
          </div>
          <AboutContent para={allparas.tictactoepara} />
        </div>
      ),
    },
    {
      title: "Tech Stack",
      value: "tictactoe_2",
      content: (
        <div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900/80 to-black/70 backdrop-blur-lg border border-white/10">
          <p>Tech Stack</p>
          <TechContent techitem={allTechStacks.tictactoeStack} />
        </div>
      ),
    },
    {
      title: "Image",
      value: "tictactoe_6",
      content: (
        <div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900/80 to-black/70 backdrop-blur-lg border border-white/10">
          <AboutContent image={tictactoe1} />
        </div>
      ),
    },
    {
      title: "Image",
      value: "tictactoe_3",
      content: (
        <div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900/80 to-black/70 backdrop-blur-lg border border-white/10">
          <AboutContent image={tictactoe2} />
        </div>
      ),
    },
    {
      title: "Image",
      value: "tictactoe_4",
      content: (
        <div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900/80 to-black/70 backdrop-blur-lg border border-white/10">
          <AboutContent image={tictactoe3} />
        </div>
      ),
    },
    {
      title: "Image",
      value: "tictactoe_5",
      content: (
        <div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900/80 to-black/70 backdrop-blur-lg border border-white/10">
          <p>Room Creation Mode</p>
          <AboutContent image={tictactoe4} />
        </div>
      ),
    },
  ];

  const streaming = [
    {
      title: "Project",
      value: "streaming_1",
      content: (
        <div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900/80 to-black/70 backdrop-blur-lg border border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>Online Video Streaming Platform</p>
            <Links github={"https://github.com/mrranger939/YouTube_RN"} />
          </div>
          <AboutContent para={allparas.streamingpara} image={null} />
        </div>
      ),
    },
    {
      title: "Tech Stack",
      value: "streaming_2",
      content: (
        <div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900/80 to-black/70 backdrop-blur-lg border border-white/10">
          <p>Tech Stack</p>
          <TechContent techitem={allTechStacks.streamingStack} />
        </div>
      ),
    },
    {
      title: "Image",
      value: "streaming_3",
      content: (
        <div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900/80 to-black/70 backdrop-blur-lg border border-white/10">
          <AboutContent para={null} image={streaming_image_1} />
        </div>
      ),
    },
    {
      title: "Image",
      value: "streaming_4",
      content: (
        <div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900/80 to-black/70 backdrop-blur-lg border border-white/10">
          <AboutContent image={streaming_image_2} />
        </div>
      ),
    },
  ];
  const urlShortener = [
    {
      title: "Project",
      value: "url_1",
      content: (
        <div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900/80 to-black/70 backdrop-blur-lg border border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>URL Shortener</p>
            <Links
              github={"https://github.com/mrranger939/URLShortener"}
              live={"https://nawazurlshortener.netlify.app/dashboard"}
            />
          </div>
          <AboutContent para={allparas.urlPara} image={null} />
        </div>
      ),
    },
    {
      title: "Tech Stack",
      value: "url_2",
      content: (
        <div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900/80 to-black/70 backdrop-blur-lg border border-white/10">
          <p>Tech Stack</p>
          <TechContent techitem={allTechStacks.urlStack} />
        </div>
      ),
    },
    {
      title: "Image",
      value: "url_3",
      content: (
        <div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900/80 to-black/70 backdrop-blur-lg border border-white/10">
          <AboutContent para={null} image={url1} />
        </div>
      ),
    },
    {
      title: "Image",
      value: "url_4",
      content: (
        <div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900/80 to-black/70 backdrop-blur-lg border border-white/10">
          <AboutContent image={url2} />
        </div>
      ),
    },
  ];

  const maskDetection = [
    {
      title: "Project",
      value: "mask_1",
      content: (
        <div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900/80 to-black/70 backdrop-blur-lg border border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>Face Mask Detection</p>
            <Links
              github={"https://github.com/mrranger939/Mask"} // Add your GitHub link here
            />
          </div>
          <AboutContent para={allparas.maskpara} />
        </div>
      ),
    },
    {
      title: "Tech Stack",
      value: "mask_2",
      content: (
<div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900/80 to-black/70 backdrop-blur-lg border border-white/10">
          <p>Tech Stack</p>
          <TechContent techitem={allTechStacks.maskStack} />
        </div>
      ),
    },
    {
      title: "Image",
      value: "mask_3",
      content: (
<div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900/80 to-black/70 backdrop-blur-lg border border-white/10">
          <AboutContent image={mask_image_1} />
        </div>
      ),
    },
    {
      title: "Image",
      value: "mask_4",
      content: (
<div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900/80 to-black/70 backdrop-blur-lg border border-white/10">
          <AboutContent image={mask_image_2} />
        </div>
      ),
    },
  ];
  const WTPAnalysis = [
    {
      title: "Project",
      value: "wtp1",
      content: (
        <div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900/80 to-black/70 backdrop-blur-lg border border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>WhatsApp Chat Analysis</p>
            <Links
              github={"https://github.com/mrranger939/whatsappChatAnalyzer"}
            />
          </div>
          <AboutContent para={allparas.wtpPara} />
        </div>
      ),
    },
    {
      title: "Tech Stack",
      value: "wtp2",
      content: (
<div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900/80 to-black/70 backdrop-blur-lg border border-white/10">
          <p>Tech Stack</p>
          <TechContent techitem={allTechStacks.wtpStack} />
        </div>
      ),
    },
    {
      title: "Image",
      value: "wtp3",
      content: (
<div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900/80 to-black/70 backdrop-blur-lg border border-white/10">
          <AboutContent image={wtp1} />
        </div>
      ),
    },
    {
      title: "Image",
      value: "wtp4",
      content: (
<div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900/80 to-black/70 backdrop-blur-lg border border-white/10">
          <AboutContent image={wtp2} />
        </div>
      ),
    },
    {
      title: "Image",
      value: "wtp5",
      content: (
<div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900/80 to-black/70 backdrop-blur-lg border border-white/10">
          <AboutContent image={wtp3} />
        </div>
      ),
    },
    {
      title: "Image",
      value: "wtp6",
      content: (
<div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900/80 to-black/70 backdrop-blur-lg border border-white/10">
          <AboutContent image={wtp4} />
        </div>
      ),
    },
  ];
  const fashionRecommenderSystem = [
    {
      title: "Project",
      value: "f1",
      content: (
        <div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900/80 to-black/70 backdrop-blur-lg border border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>Fashion Recommendation System</p>
            <Links
              github={"https://github.com/mrranger939/FashionRecommenderSystem"}
            />
          </div>
          <AboutContent para={allparas.fashionPara} />
        </div>
      ),
    },
    {
      title: "Tech Stack",
      value: "f2",
      content: (
<div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900/80 to-black/70 backdrop-blur-lg border border-white/10">
          <p>Tech Stack</p>
          <TechContent techitem={allTechStacks.fashionStack} />
        </div>
      ),
    },
    {
      title: "Image",
      value: "f3",
      content: (
<div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900/80 to-black/70 backdrop-blur-lg border border-white/10">
          <AboutContent image={fashion1} />
        </div>
      ),
    },
    {
      title: "Image",
      value: "f4",
      content: (
<div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900/80 to-black/70 backdrop-blur-lg border border-white/10">
          <AboutContent image={fashion2} />
        </div>
      ),
    },
    {
      title: "Image",
      value: "f5",
      content: (
<div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900/80 to-black/70 backdrop-blur-lg border border-white/10">
          <AboutContent image={fashion3} />
        </div>
      ),
    },
  ];
  const youtubeSum = [
    {
      title: "Project",
      value: "y1",
      content: (
        <div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900/80 to-black/70 backdrop-blur-lg border border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>YouTube Video Summarizer</p>
            <Links
              github={"https://github.com/mrranger939/YouTube-text-summarizer"}
            />
          </div>
          <AboutContent para={allparas.ysPara} />
        </div>
      ),
    },
    {
      title: "Tech Stack",
      value: "y2",
      content: (
<div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900/80 to-black/70 backdrop-blur-lg border border-white/10">
          <p>Tech Stack</p>
          <TechContent techitem={allTechStacks.ysStack} />
        </div>
      ),
    },
    {
      title: "Image",
      value: "y3",
      content: (
<div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900/80 to-black/70 backdrop-blur-lg border border-white/10">
          <AboutContent image={yts1} />
        </div>
      ),
    },
    {
      title: "Image",
      value: "y4",
      content: (
<div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900/80 to-black/70 backdrop-blur-lg border border-white/10">
          <AboutContent image={yts2} />
        </div>
      ),
    },
    {
      title: "Image",
      value: "y5",
      content: (
<div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900/80 to-black/70 backdrop-blur-lg border border-white/10">
          <AboutContent image={yts3} />
        </div>
      ),
    },
    {
      title: "Image",
      value: "y6",
      content: (
<div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900/80 to-black/70 backdrop-blur-lg border border-white/10">
          <AboutContent image={yts4} />
        </div>
      ),
    },
  ];
  const trustTribe = [
    {
      title: "Project",
      value: "tt1",
      content: (
        <div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900/80 to-black/70 backdrop-blur-lg border border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>TrustTribe</p>
            <Links
              github={"https://github.com/mrranger939/Community-Engagement"}
              live={"https://community-engagement.onrender.com/"}
            />
          </div>
          <AboutContent para={allparas.ttPara} image={null} />
        </div>
      ),
    },
    {
      title: "Tech Stack",
      value: "tt2",
      content: (
        <div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900/80 to-black/70 backdrop-blur-lg border border-white/10">
          <p>Tech Stack</p>
          <TechContent techitem={allTechStacks.ttStack} />
        </div>
      ),
    },
    {
      title: "Image",
      value: "tt3",
      content: (
        <div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900/80 to-black/70 backdrop-blur-lg border border-white/10">
          <AboutContent para={null} image={tt1} />
        </div>
      ),
    },
    {
      title: "Image",
      value: "tt4",
      content: (
        <div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900/80 to-black/70 backdrop-blur-lg border border-white/10">
          <AboutContent image={tt2} />
        </div>
      ),
    },
    {
      title: "Image",
      value: "tt5",
      content: (
        <div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900/80 to-black/70 backdrop-blur-lg border border-white/10">
          <AboutContent image={tt3} />
        </div>
      ),
    },
  ];
  const MDPS = [
    {
      title: "Project",
      value: "m1",
      content: (
        <div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900/80 to-black/70 backdrop-blur-lg border border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>Multiple Disease Prediction System</p>
            <Links
              github={"https://github.com/mrranger939/Multiple-disease-prediction-system"}
              live={"https://multiple-disease-prediction-system-fqcgwtfxauv6ztobudp5qj.streamlit.app/"}
            />
          </div>
          <AboutContent para={allparas.diseasePara} image={null} />
        </div>
      ),
    },
    {
      title: "Tech Stack",
      value: "m2",
      content: (
        <div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900/80 to-black/70 backdrop-blur-lg border border-white/10">
          <p>Tech Stack</p>
          <TechContent techitem={allTechStacks.diseasePredictionStack} />
        </div>
      ),
    },
    {
      title: "Image",
      value: "m3",
      content: (
        <div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900/80 to-black/70 backdrop-blur-lg border border-white/10">
          <AboutContent para={null} image={mdp1} />
        </div>
      ),
    },
    {
      title: "Image",
      value: "m4",
      content: (
        <div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900/80 to-black/70 backdrop-blur-lg border border-white/10">
          <AboutContent image={mdp2} />
        </div>
      ),
    },
    {
      title: "Image",
      value: "m5",
      content: (
        <div className="w-full max-lg:overflow-auto fixed h-full rounded-2xl p-10  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900/80 to-black/70 backdrop-blur-lg border border-white/10">
          <AboutContent image={mdp3} />
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
        <IconCircleXFilled className="w-9 h-9 hover:scale-110 transition-transform duration-100" />
      </button>
      <div className="flex flex-col gap-6">
        <TabsDemo tabs={streaming} />
        <TabsDemo tabs={sudoku} />
        <TabsDemo tabs={youtubeSum} />
        <TabsDemo tabs={tictactoe} />
        <TabsDemo tabs={maskDetection} />
        <TabsDemo tabs={WTPAnalysis} />
        <TabsDemo tabs={fashionRecommenderSystem} />
        <TabsDemo tabs={urlShortener} />
        <TabsDemo tabs={trustTribe} />
        <TabsDemo tabs={vision} />
        <TabsDemo tabs={MDPS} />
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
    <div className="flex flex-col h-full text-base">
      {para ? para : <></>}
      {image ? (
        <div className="flex-grow">
          <img
            src={image}
            alt="dummy image"
            className="w-full object-contain rounded-xl mx-auto md:h-[28rem]"
          />
        </div>
      ) : (
        <div></div>
      )}

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
            <IconBrandGithub className="mr-2" size={20} /> GitHub
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
            <IconLink className="mr-2" size={20} /> Live
          </button>
        </a>
      )}
    </div>
  );
};
