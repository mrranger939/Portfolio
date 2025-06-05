"use client";
import React, { useEffect, useState } from "react";
import { Timeline } from "./ui/timeline";
import cbit_logo from "../assets/CBIT_LOGO.png"
import cbit_front from "../assets/cbit_front.jpeg"
import pjc_logo from "../assets/pjc_logo.png"
import pjc_map from "../assets/pjc_map.png"
import pv_logo from "../assets/pv_logo.png"
import pv from "../assets/pv.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

export function Background2({ onClose }) {
/*   const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []); */
  
  const data = [
    {
      title: "2022 - 2026",
      content: (
        <div>
          <h1 className="text-neutral-200 transition-transform duration-300 font-semibold text-xl hover:scale-110 hover:translate-x-10 ">Chaitanya Bharathi Institute of Technology</h1><br />
          <div className="text-neutral-200 text-xs md:text-sm font-normal mb-8 ">
          <span className="font-bold">B.E in Computer Science and Engineering </span><br />
          CGPA: <span className="font-bold">9.63</span> <br />
          Hyderabad, Telangana
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg  overflow-hidden ">
            <img
              src={cbit_logo}
              alt="startup template"
              width={500}
              height={500}
              className="object-contain transition-transform duration-300 ease-in-out hover:scale-110 bg-white h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            </div>
            <div className="rounded-lg  overflow-hidden ">
            <img
              src={cbit_front}
              alt="startup template"
              width={500}
              height={500}
              className="transition-transform duration-300 ease-in-out hover:scale-110 object-contain bg-white h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2020 - 2022",
      content: (
        <div>
          <h1 className="text-neutral-200 transition-transform duration-300 font-semibold text-xl hover:scale-110 hover:translate-x-10 ">Prathibha Junior College</h1><br />
          <div className="text-neutral-200 text-xs md:text-sm font-normal mb-8 ">
          Mathematics, Physics and Chemistry <br />
          CGPA: <span className="font-bold">9.89</span> <br />
          Mahabubnagar, Telangana
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg  overflow-hidden ">
            <img
              src={pjc_logo}
              alt="startup template"
              width={500}
              height={500}
              className="transition-transform duration-300 ease-in-out hover:scale-110 object-contain bg-white h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            </div>
            <div className="rounded-lg  overflow-hidden ">
            <img
              src={pjc_map}
              alt="startup template"
              width={500}
              height={500}
              className="transition-transform duration-300 ease-in-out hover:scale-110 object-contain bg-white h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2020 ",
      content: (
        <div>
          <h1 className="text-neutral-200 transition-transform duration-300 font-semibold text-xl hover:scale-110 hover:translate-x-10 ">
          Panchavati Vidyalaya</h1><br />
          <div className="text-neutral-200 text-xs md:text-sm font-normal mb-8 ">
          10th SSC BOARD <br />
          GPA: <span className="font-bold">10</span><br />
          Mahabubnagar, Telangana
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg  overflow-hidden ">
            <img
              src={pv_logo}
              alt="startup template"
              width={500}
              height={500}
              className="transition-transform duration-300 ease-in-out hover:scale-110 object-contain bg-white h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            </div>
            <div className="rounded-lg  overflow-hidden ">
            <img
              src={pv}
              alt="startup template"
              width={500}
              height={500}
              className="transition-transform duration-300 ease-in-out hover:scale-110 object-contain bg-white h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            </div>
          </div>
        </div>
      ),
    }
  ];
  return (
    <>
      <div className="w-full">
        <Timeline data={data} />
      </div>
      <button
        onClick={onClose}
        className="text-neutral-200  text-sm absolute top-1 left-0 right-0 w-fit mx-auto py-2 px-4 bg-transparent rounded-md"
      >
       <FontAwesomeIcon icon={faCircleXmark} className="text-3xl hover:text-4xl transition-all duration-100" />
      </button>
    </>
  );
}
