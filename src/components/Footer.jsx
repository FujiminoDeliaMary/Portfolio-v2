import React from 'react'
import githubIcon from '../assets/icons/githubIcon.svg';
import Image from 'next/image';
import { supreme, inconsolata } from '../app/styles/fonts'
import { Linkedin} from 'lucide-react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  return (
    
    <footer className='flex justify-center lg:justify-between items-end px-10 pt-28 pb-10 bg-background text-white'>
        <div className='hidden lg:flex flex-col flex-1 gap-3 '>
            <p className="text-xl text-green">Marilyne</p>
            <p className={` lg:w-2/3 text-secondary text-sm ${inconsolata.className}`}>Je suis marilyne - jeune développeuse web full Stack . Merci d’avoir visité mon site et à bientôt !</p>
            <div className='flex gap-2'>
                <a href="https://www.linkedin.com/in/marilyne-tsene/" rel='noopener' className='hover:text-green' target='_BLANK'>
                    <Linkedin />
                </a>
                
                <a href="https://github.com/FujiminoDeliaMary" rel='noopener' target='_BLANK' className='hover:text-green'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
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
