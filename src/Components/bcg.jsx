"use client";
import React, { useEffect, useState } from "react";
import { Timeline } from "./ui/timeline";
import cbit_logo from "../assets/CBIT_LOGO.png";
import cbit_front from "../assets/CBIT_front.jpeg";
import pjc_logo from "../assets/pjc_logo.png";
import pjc_map from "../assets/pjc_map.png";
import pv_logo from "../assets/pv_logo.png";
import pv from "../assets/pv.jpg";
import {
  IconCircleXFilled  
} from "@tabler/icons-react";
// Placeholders for company logos - you can replace these with your actual imports
import grapplTech from "../assets/internpixel_logo.jfif";
import prasunet from "../assets/prasunet_company_logo.jfif";
import ybi from "../assets/ybi.jfif";

export function UpperTime({ onClose }) {
  const data = [
    // --- Experience Section ---
    {
      title: "Nov 2024 - Dec 2024",
      content: (
        <div>
          <h1 className="text-neutral-200 transition-transform duration-300 font-semibold text-xl hover:scale-110 hover:translate-x-10">
            YBI Foundation
          </h1>
          <div className="text-neutral-200 text-xs md:text-sm font-normal my-4">
            <span className="font-bold">
              Artificial Intelligence and Machine Learning Intern
            </span>{" "}
            (Remote) <br />
            <p className="mt-2">
              Engaged in the end-to-end machine learning project lifecycle,
              including data analysis, feature engineering, model selection,
              training, and performance evaluation.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              src={ybi}
              alt="YBI Foundation logo"
              width={500}
              height={500}
              className="object-contain transition-transform duration-300 ease-in-out hover:scale-110 bg-white h-20 md:h-44 lg:h-60 w-1/2 rounded-lg shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Jul 2024 - Aug 2024",
      content: (
        <div>
          <h1 className="text-neutral-200 transition-transform duration-300 font-semibold text-xl hover:scale-110 hover:translate-x-10">
            PRASUNET
          </h1>
          <div className="text-neutral-200 text-xs md:text-sm font-normal my-4">
            <span className="font-bold">Web Development Intern</span> (Remote){" "}
            <br />
            <p className="mt-2">
              Applied a versatile web technology stack to solve diverse
              technical challenges and build user-centric features, earning
              commendation for dedication and communication.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              src={prasunet}
              alt="Prasunet logo"
              width={500}
              height={500}
              className="object-contain rounded-lg transition-transform duration-300 ease-in-out hover:scale-110 bg-white h-20 md:h-44 lg:h-60 w-1/2 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Jun 2024 - Jul 2024",
      content: (
        <div>
          <h1 className="text-neutral-200 transition-transform duration-300 font-semibold text-xl hover:scale-110 hover:translate-x-10">
            GrapplTech
          </h1>
          <div className="text-neutral-200 text-xs md:text-sm font-normal my-4">
            <span className="font-bold">Software Engineer Intern</span> (Remote){" "}
            <br />
            <p className="mt-2">
              Developed modular and reusable UI components using core web
              technologies to improve development efficiency and ensure visual
              consistency across web applications.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              src={grapplTech}
              alt="GrapplTech logo"
              width={250}
              height={500}
              className="object-contain rounded-lg transition-transform duration-300 ease-in-out hover:scale-110 bg-white h-20 md:h-44 lg:h-60 w-1/2 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    // --- Education Section ---
    {
      title: "2022 - 2026",
      content: (
        <div>
          <h1 className="text-neutral-200 transition-transform duration-300 font-semibold text-xl hover:scale-110 hover:translate-x-10 ">
            Chaitanya Bharathi Institute of Technology
          </h1>
          <div className="text-neutral-200 text-xs md:text-sm font-normal my-4">
            <span className="font-bold">
              B.E in Computer Science and Engineering{" "}
            </span>
            <br />
            CGPA: <span className="font-bold">9.4</span> <br />
            Hyderabad, Telangana
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden">
              <img
                src={cbit_logo}
                alt="CBIT logo"
                width={500}
                height={500}
                className="object-contain transition-transform duration-300 ease-in-out hover:scale-110 bg-white h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src={cbit_front}
                alt="CBIT campus"
                width={500}
                height={500}
                className="transition-transform duration-300 ease-in-out hover:scale-110 object-cover bg-white h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
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
          <h1 className="text-neutral-200 transition-transform duration-300 font-semibold text-xl hover:scale-110 hover:translate-x-10 ">
            Prathibha Junior College
          </h1>
          <div className="text-neutral-200 text-xs md:text-sm font-normal my-4">
            Mathematics, Physics and Chemistry <br />
            CGPA: <span className="font-bold">9.89</span> <br />
            Mahabubnagar, Telangana
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden">
              <img
                src={pjc_logo}
                alt="PJC logo"
                width={500}
                height={500}
                className="transition-transform duration-300 ease-in-out hover:scale-110 object-contain bg-white h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src={pjc_map}
                alt="PJC map"
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
            Panchavati Vidyalaya
          </h1>
          <div className="text-neutral-200 text-xs md:text-sm font-normal my-4">
            10th SSC BOARD <br />
            GPA: <span className="font-bold">10</span>
            <br />
            Mahabubnagar, Telangana
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden">
              <img
                src={pv_logo}
                alt="PV logo"
                width={500}
                height={500}
                className="transition-transform duration-300 ease-in-out hover:scale-110 object-contain bg-white h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src={pv}
                alt="PV campus"
                width={500}
                height={500}
                className="transition-transform duration-300 ease-in-out hover:scale-110 object-cover bg-white h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="w-full">
        <Timeline data={data} />
      </div>
      <button
        onClick={onClose}
        className="text-neutral-200 text-sm absolute top-1 left-0 right-0 w-fit mx-auto py-2 px-4 bg-transparent rounded-md"
      >
        <IconCircleXFilled className="w-9 h-9 hover:scale-110 transition-transform duration-100" />
      </button>
    </>
  );
}
