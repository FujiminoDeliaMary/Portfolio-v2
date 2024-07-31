"use client"

import React, { useEffect, useState } from 'react';
import { ScrollLink } from 'react-scroll';
import { supreme, inconsolata, } from '../app/styles/fonts';

const Menu = () => {

    const [isOpen, setIsOpen] = useState(false);
    const navItems = [
        { name: 'A propos', link: 'apropos' },
        { name: 'Compétences', link: 'skills' },
        { name: 'Projets', link: 'projects' },
        { name: 'Contact', link: 'contact' },
      ];

      console.log(navItems)

      useEffect(() => {
        if (isOpen) {
          document.body.style.overflow = 'hidden'; // Empêcher le défilement lorsque le menu est ouvert
          document.body.classList.add('blurr');
        } else {
          document.body.style.overflow = 'auto'; // Réactiver le défilement lorsque le menu est fermé
          document.body.classList.remove('blurr');
        }
    
        // Nettoyer les effets lorsqu'il y a un changement
        return () => {
          document.body.style.overflow = 'auto';
          document.body.classList.remove('blurr');
        };
      }, [isOpen]);

  return (
    <nav className={`flex justify-between items-center p-3 ${inconsolata.className} overflow-x-hidden`}>
          <h2 className={`text-4xl font-bold ${supreme.className}`}>
            <span className={`text-green`}>Ma</span>rilyne
          </h2>
          <div className="md:hidden flex flex-col gap-10">
            <div className=''>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative z-50 flex flex-col justify-center items-end"
              >
                <span
                  className={`bg-green block transition-all duration-300 ease-out 
                    h-0.5 w-8 rounded-sm ${isOpen ? 
                    'rotate-45 translate-y-1' : '-translate-y-0.5'
                  }`}
                ></span>
                <span
                  className={`bg-green block transition-all duration-300 ease-out 
                    h-0.5 w-7 rounded-sm my-0.5 ${isOpen ? 
                    'opacity-0' : 'opacity-100'
                  }`}
                ></span>
                <span
                  className={`bg-green block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${isOpen ? 
                    '-rotate-45 -translate-y-1 w-8'  : 'translate-y-0.5'
                  }`}
                ></span>
              </button>
            </div>
          
            <nav
              className={`flex-col z-40 absolute top-0 bottom-0 h-full transition-all duration-500 ease-out bg-background px-20 py-40 gap-6 md:flex-row right-0 ${isOpen ? 'translate-x-0' : 'translate-x-full  '}`}
            >
              <ol className='list-decimal text-xl mt-16 flex flex-col gap-20 justify-center items-center md:flex-row'>
                {navItems.map((item, idx) => (
                  <li className='relative cursor-pointer' key={idx}>
                    <ScrollLink to={item.link} smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                      {item.name}
                    </ScrollLink>
                  </li>
                ))}
              </ol>
            </nav>
          
          </div>

          <ul className="md:flex hidden gap-6">
            {navItems.map((item, idx) => (
              <li key={idx} className='cursor-pointer'>
                <ScrollLink to={item.link} smooth={true} duration={500}>
                  <span className={`text-green`} onClick={() => setIsOpen(false)}>{`0${idx + 1}`}</span>.{item.name}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </nav>
  )
}

export default Menu