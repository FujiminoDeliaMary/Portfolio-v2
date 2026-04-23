"use client"

import { supreme, lato, inconsolata, poppins } from '../../styles/fonts';
import { usePathname } from 'next/navigation';
import React from 'react';
import db from '../../../api/db.json'
import Image from 'next/image';
import coworking from '../../../assets/images/coworking.png';
import artfullcode from '../../../assets/images/artfullcode.png';
import portfolio from '../../../assets/images/portfoliov2.png';
import lettres from '../../../assets/images/lettreenlumiere.png'
import carriera from '../../../assets/images/carriera.png'
import { House, Github, ExternalLink, Calendar, Code2 } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay }
  })
};

const Page = () => {
  const images = {
    artfullcode,
    portfoliov2: portfolio,
    lettreenlumiere: lettres,
    coworking,
    carriera
  }

  const pathName = usePathname();
  const id = pathName.split('/').pop();
  const currentProject = db.projects.find(p => p.id == id);
  const image = images[currentProject.image]
  const getGifPath = (imageName) => `/images/${imageName}.gif`

  const sections = [
    { title: "Pourquoi ce projet ?", content: currentProject.why, html: false },
    { title: "Méthodes de réalisation", content: currentProject.methods, html: true },
    { title: "Comment ?", content: currentProject.how, html: true },
    { title: "Mes ressentis", content: currentProject.feelings, html: false },
  ].filter(s => s.content && s.content !== "-");

  return (
    <div className='bg-background min-h-screen text-white'>

      {/* Header */}
      <header className='px-10 py-5 flex justify-between items-center border-b border-white/10'>
        <p className={`text-3xl font-bold ${supreme.className}`}>
          <span className='text-green'>Ma</span>rilyne
        </p>
        <Link href='/' className='flex items-center gap-2 text-secondary hover:text-green transition-colors duration-300 text-sm'>
          <House size={16} />
          <span>Retour</span>
        </Link>
      </header>

      <main>

        {/* Hero */}
        <section className='relative px-5 md:px-20 pt-20 pb-32 overflow-hidden'>
          <div className='absolute top-0 right-0 w-96 h-96 bg-green opacity-5 rounded-full blur-3xl -z-0' />

          <div className='relative z-10 flex flex-col lg:flex-row gap-16 items-center justify-between'>
            <motion.div
              className='flex flex-col gap-6 lg:w-1/2'
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0}
            >
              <span className={`flex items-center gap-2 text-green text-sm w-fit border border-green/30 px-3 py-1 rounded-full ${inconsolata.className}`}>
                <Calendar size={14} />
                {currentProject.date}
              </span>

              <h1 className={`text-5xl md:text-6xl font-bold ${supreme.className}`}>
                {currentProject.name}
              </h1>

              <p className={`text-secondary text-lg leading-relaxed ${poppins.className}`}
                dangerouslySetInnerHTML={{ __html: currentProject.description }}
              />

              <div className='flex flex-wrap gap-2'>
                {currentProject.technos.map((techno, i) => (
                  <span
                    key={i}
                    className={`text-xs text-green border border-green/30 px-3 py-1 bg-green/5 hover:bg-green/10 transition-colors duration-300 ${inconsolata.className}`}
                  >
                    {techno}
                  </span>
                ))}
              </div>

              <div className='flex gap-4 mt-2'>
                {currentProject.link && currentProject.link !== "/" && (
                  <a
                    href={currentProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 border border-green text-green px-5 py-2 text-sm hover:bg-green hover:text-background transition-all duration-300 ${inconsolata.className}`}
                  >
                    <ExternalLink size={14} />
                    Voir le site
                  </a>
                )}
                {currentProject.githubLink && currentProject.githubLink !== "/" && (
                  <a
                    href={currentProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 border border-white/20 text-secondary px-5 py-2 text-sm hover:border-green hover:text-green transition-all duration-300 ${inconsolata.className}`}
                  >
                    <Github size={14} />
                    GitHub
                  </a>
                )}
              </div>
            </motion.div>

            <motion.div
              className='lg:w-1/2 relative'
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <div className='absolute -inset-1 bg-green/20 blur-xl rounded-2xl' />
              <Image
                src={image}
                alt={`Bannière de ${currentProject.name}`}
                width={600}
                height={400}
                className='relative rounded-2xl object-cover w-full shadow-2xl'
              />
            </motion.div>
          </div>
        </section>

        {/* GIF démo */}
        {currentProject.gif === "true" && (
          <motion.section
            className='px-5 md:px-20 py-20 border-t border-white/10 flex flex-col items-center gap-10'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
          >
            <div className='flex items-center gap-3'>
              <div className='h-px w-10 bg-green' />
              <h2 className={`text-green text-sm uppercase tracking-widest ${inconsolata.className}`}>Démonstration</h2>
              <div className='h-px w-10 bg-green' />
            </div>
            <Image
              src={getGifPath(currentProject.image)}
              alt={`Démo de ${currentProject.name}`}
              width={900}
              height={550}
              unoptimized
              className='rounded-2xl shadow-2xl border border-white/10 w-full max-w-4xl'
            />
          </motion.section>
        )}

        {/* Sections dynamiques */}
        <section className='px-5 md:px-20 py-20 border-t border-white/10'>
          <div className='flex flex-col gap-32'>
            {sections.map((section, index) => (
              <motion.div
                key={index}
                className='flex flex-col md:flex-row gap-10 items-start'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                custom={0.1}
              >
                {/* Numéro décoratif — toujours à gauche */}
                <div className='hidden md:flex flex-col items-center gap-4 pt-2'>
                  <span className={`text-6xl font-bold text-green/10 ${supreme.className}`}>
                    0{index + 1}
                  </span>
                  <div className='w-px h-32 bg-green/20' />
                </div>

                {/* Contenu */}
                <div className='flex flex-col gap-6 flex-1'>
                  <div className='flex items-center gap-3'>
                    <Code2 size={18} className='text-green' />
                    <h2 className={`text-2xl font-bold ${lato.className}`}>{section.title}</h2>
                  </div>
                  {section.html ? (
                    <div
                      className={`text-secondary leading-relaxed ${poppins.className}`}
                      dangerouslySetInnerHTML={{ __html: section.content }}
                    />
                  ) : (
                    <p className={`text-secondary leading-relaxed ${poppins.className}`}>
                      {section.content}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}

export default Page;