import React from 'react'
import { supreme, inconsolata } from '../app/styles/fonts'
import { Linkedin } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  return (
    <footer className='bg-background text-white px-10 pt-20 pb-10'>
      
      {/* Partie haute */}
      <div className='flex flex-col lg:flex-row justify-between gap-16 pb-10 border-b border-white/10'>
        
        {/* Colonne 1 — Identité */}
        <div className='flex flex-col gap-4 lg:w-1/4'>
          <p className={`text-2xl text-green font-bold ${supreme.className}`}>Marilyne</p>
          <p className={`text-secondary text-sm leading-relaxed ${inconsolata.className}`}>
            Développeuse Full Stack & Data Scientist, passionnée par la création de solutions innovantes.
          </p>
          <div className='flex gap-3 mt-2'>
            <a href="https://www.linkedin.com/in/marilyne-tsene/" rel='noopener' className='text-secondary hover:text-green transition-colors duration-300' target='_BLANK'>
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/FujiminoDeliaMary" rel='noopener' target='_BLANK' className='text-secondary hover:text-green transition-colors duration-300'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
          </div>
        </div>

        {/* Colonne 2 — Navigation */}
        <div className='hidden lg:flex flex-col gap-4 lg:w-1/4'>
          <p className={`text-green text-sm font-bold uppercase tracking-widest ${supreme.className}`}>Navigation</p>
          <ul className={`flex flex-col gap-2 text-secondary text-sm ${inconsolata.className}`}>
            <li className='cursor-pointer hover:text-green transition-colors duration-300'><ScrollLink to="apropos" smooth={true} duration={500}>A propos</ScrollLink></li>
            <li className='cursor-pointer hover:text-green transition-colors duration-300'><ScrollLink to="skills" smooth={true} duration={500}>Compétences</ScrollLink></li>
            <li className='cursor-pointer hover:text-green transition-colors duration-300'><ScrollLink to="projects" smooth={true} duration={500}>Projets</ScrollLink></li>
            <li className='cursor-pointer hover:text-green transition-colors duration-300'><ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink></li>
          </ul>
        </div>

        {/* Colonne 3 — Langues */}
        <div className='flex flex-col gap-4 lg:w-1/4'>
          <p className={`text-green text-sm font-bold uppercase tracking-widest ${supreme.className}`}>Langues</p>
          <ul className={`flex flex-col gap-2 text-secondary text-sm ${inconsolata.className}`}>
            <li>🇫🇷 Français — Natif</li>
            <li>🇺🇸 Anglais — C1</li>
          </ul>
        </div>

        {/* Colonne 4 — CV */}
        <div className='flex flex-col gap-4 lg:w-1/4'>
          <p className={`text-green text-sm font-bold uppercase tracking-widest ${supreme.className}`}>Mon CV</p>
          <p className={`text-secondary text-sm ${inconsolata.className}`}>Intéressé.e par mon profil ? Téléchargez mon CV.</p>
          
          <a
            href="/Marilyne_Tsene_CV.pdf"
            target="_blank"
            rel="noopener"
            className={`border border-green text-green px-5 py-2 text-sm w-fit hover:bg-green hover:text-background transition-all duration-300 ${inconsolata.className}`}
          >
            Télécharger mon CV
          </a>
        </div>

      </div>

      {/* Partie basse */}
      <div className='flex flex-col md:flex-row justify-between items-center gap-4 pt-6 text-secondary text-xs'>
        <p className={`${inconsolata.className}`}>© 2026 Marilyne Tsene</p>
        <p className={`text-center ${inconsolata.className}`}>Designed and built by Marilyne Delia with NextJs, Tailwind and a lot of redbull. ☕</p>
      </div>

    </footer>
  )
}

export default Footer