import { HoverEffect } from "./ui/card-hover-effect";
import python from "../assets/python.webp"
import javascript from "../assets/js.png"
import bootstrap from "../assets/bootstrap.jpg"
import css from "../assets/css.png"
import expresspng from "../assets/express.png"
import flaskpng from "../assets/flask.webp"
import gitpng from "../assets/git.png"
import github from "../assets/github.svg"
import htmlpng from "../assets/html.png"
import mongo from "../assets/mongo.webp"
import nodejspng from "../assets/nodejs.webp"
import np from "../assets/np.png"
import pandas from "../assets/pandas.png"
import reactpng from "../assets/react.png"
import sk from "../assets/sklearn.png"
import sql from "../assets/sql.png"
import tailwind from "../assets/tailwind.png"
import cl from "../assets/c.png"
import cpp from "../assets/cpp.webp"
import java from "../assets/java.png"
import tensorflow from '../assets/tensorflow.png'
import keras from '../assets/keras.png'
import kafka from '../assets/kafka.png'
import docker from '../assets/docker.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
export function CardHoverEffectDemo({onClose}) {
  return (
    (<div className=" px-8 ">
              <button
        onClick={onClose}
        className="fixed text-neutral-200 text-sm  top-0 left-0 right-0 w-fit mx-auto py-2 px-4 bg-transparent rounded-md"
      >
        <FontAwesomeIcon icon={faCircleXmark} className="text-3xl hover:text-4xl transition-all duration-100" />
      </button>
      <HoverEffect items={projects} />
    </div>)
  );
}
export const projects = [
  {
    title: "Python",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
    image: python,
  },
  {
    title: "Javascript",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
    image: javascript,
  },
  {
    title: "C",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
    image: cl,
  },
  {
    title: "HTML",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
    image: htmlpng,
  },
  {
    title: "CSS",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
    image: css,
  },
  {
    title: "Bootstrap",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
    image: bootstrap,
  },
  {
    title: "React",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
    image: reactpng,
  },
  {
    title: "Tailwind",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
    image: tailwind,
  },
  {
    title: "NodeJS",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
    image: nodejspng,
  },
    {
    title: "ExpressJS",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
    image: expresspng,
  },
  {
    title: "Flask",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
    image: flaskpng,
  },
  {
    title: "MongoDB",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
    image: mongo,
  },  {
    title: "SQL",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
    image: sql,
  },
  {
    title: "Scikit-Learn",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
    image: sk,
  },
  {
    title: "Pandas",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
    image: pandas,
  },
  {
    title: "Numpy",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
    image: np,
  },
  {
    title: "Git",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
    image: gitpng,
  },
  {
    title: "Github",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
    image: github,
  },
  {
    title: "Java",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
    image: java,
  },
  {
    title: "C++",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
    image: cpp,
  },
  {
  title: "TensorFlow",
  description: "...",
  link: "https://www.tensorflow.org/",
  image: tensorflow,
},
{
  title: "Keras",
  description: "...",
  link: "https://keras.io/",
  image: keras,
},
{
  title: "Kafka",
  description: "...",
  link: "https://kafka.apache.org/",
  image: kafka,
},
{
  title: "Docker",
  description: "...",
  link: "https://www.docker.com/",
  image: docker,
},
];
