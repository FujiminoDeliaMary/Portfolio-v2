import React from 'react'
import linkedinIcon from '../assets/icons/linkedin.svg';
import githubIcon from '../assets/icons/githubIcon.svg';
import Image from 'next/image';
import {  lora, supreme, inconsolata, lato } from '../app/styles/fonts'
import { Linkedin } from 'lucide-react';
import Link from 'next/link';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  return (
    
    <footer className='flex justify-center lg:justify-between items-end px-10 pt-28 pb-10 bg-background text-white'>
        <div className='hidden lg:flex flex-col flex-1 gap-3 '>
            <p className="text-xl text-green">Marilyne</p>
            <p className={` lg:w-2/3 text-secondary text-sm ${inconsolata.className}`}>Je suis marilyne - jeune développeuse web full Stack . Merci d’avoir visité mon site et à bientôt !</p>
            <div className='flex gap-2'>
                <a href="" rel='noopener' target='_BLANK'>
                    <Linkedin />
                </a>
                
                <a href="https://github.com/FujiminoDeliaMary" rel='noopener' target='_BLANK'>
                    <Image 
                        src={githubIcon}
                        alt='Compte Github'
                    />
                </a>
               
            </div>
            <p className=' text-secondary hover:text-green'>© 2024 Marilyne Tsene</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-5'>
          <p className={`flex-1  text-center text-secondary hover:text-green cursor-pointer ${inconsolata.className}`}>Designed and build by Marilyne Delia with NextJs, tailwind and a lot of redbull.</p>
          <div className='flex gap-2  md:hidden'>
                <a href="https://www.linkedin.com/in/marilyne-tsene/" rel='noopener' target='_BLANK'>
                    <Linkedin />
                </a>
                
                <a href="https://github.com/FujiminoDeliaMary" rel='noopener' target='_BLANK'>
                    <Image 
                        src={githubIcon}
                        alt='Compte Github'
                    />
                </a>
               
            </div>
        </div>
        
        <nav className={`hidden ml-auto items-end justify-stretch self-start lg:flex flex-col flex-1  p-3  ${inconsolata.className}`}>
          <h2 className={`text-green font-bold ${supreme.className}`}>
          Menu
         </h2>
        <ul className="flex flex-col text-secondary">
          <li className='cursor-pointer hover:text-green'><ScrollLink to="apropos" smooth={true} duration={500}>A propos</ScrollLink></li>
          <li className='cursor-pointer hover:text-green'><ScrollLink to="skills" smooth={true} duration={500}>Compétences</ScrollLink></li>
          <li className='cursor-pointer hover:text-green'><ScrollLink to="projects" smooth={true} duration={500}>Projets</ScrollLink></li>
          <li className='cursor-pointer hover:text-green'><ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink></li>
        </ul>
    </nav>
    </footer>

  )
}

export default Footer
