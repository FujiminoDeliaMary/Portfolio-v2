"use client";
import React from 'react';
import { lora, supreme, inconsolata, lato } from '../app/styles/fonts';

import githubIcon from '../assets/icons/githubIcon.svg';
import linkIcon from '../assets/icons/linkIcon.svg';
import Image from 'next/image';

import db from '../api/db.json'
import Link from 'next/link';


const Projects = () => {

  const getImagePath = (fileName) => `/images/${fileName}.png`

  return (
    <section className='bg-background text-white py-10 px-6 md:px-20' id='projects'>
      <h2 className={`text-2xl font-bold ${lato.className} `}>
        <span className={` text-green ${inconsolata.className}`}>03.</span>
        Quelques uns de mes projets
      </h2>
      <div className=" pt-20 flex flex-col gap-32">
        {db.projects.map((project, index) => (
          <div className={`flex flex-col items-center justify-center gap-8 md:gap-24 ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`} key={index}>
            <div className={`relative w-full h-full md:h-auto lg:w-3/4 flex flex-col md:flex-row gap-6 md:gap-14 ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`} >
              <Link href={`project/${project.id}`} className="absolute inset-0 object-cover h-full w-full md:w-1/2 md:relative ">
                <Image
                    src={getImagePath(project.image)}
                    alt={project.titleKey}
                    className="absolute inset-0 object-cover h-full w-full md:relative "
                    width={430}
                    height={430}

                  />
              </Link>
            
              <div className="relative z-10 flex flex-col gap-6 bg-background  bg-opacity-90 md:bg-none md:relative md:bg-transparent p-4 md:p-0 md:w-1/2">
                <h3 className={`text-green text-2xl font-semibold ${supreme.className}`}>{`${project.name}`}</h3>
                <p className={` ${inconsolata.className}`}>{`${project.description}`}</p>
                <p className={`text-green ${lato.className}`}>{project.technos.join(', ')}</p>
                <div className="flex gap-3">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={linkIcon}
                      alt='Go to site'
                      className='hover:fill-green'
                    />
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={githubIcon}
                      alt='Go to github'
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects;
