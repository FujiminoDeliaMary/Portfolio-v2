import React from 'react'
import {  lora, supreme, inconsolata, lato } from '../app/styles/fonts'
import sendIcon from '../assets/icons/send.svg'
import Image from 'next/image'

const Contact = () => {
  return (
    <section id="contact" className='flex flex-col justify-center items-center gap-10 bg-background text-white pb-10 pt-24'>
        <h2 className={`text-2xl font-bold ${inconsolata.className} text-center `}>
            <span className={` text-green ${inconsolata.className}  `}>04.</span>
            Intéressé.e ?
        </h2>
        <a className='text-4xl text-center text-green' href='mailto:marilynedelia@gmail.com'>Contactez-Moi</a>
        <p className={`${supreme.className} w-1/2 text-center`} >Je suis actuellement à la recherche d’alternance, en développement web ou dans tout autre domaine tournant autour de ce métier. Donc si vous avez des opportunités à me proposer ou tout simplement me proposer une collaboration, je suis toujours ouverte à la discussion.</p>

        
        <a className='flex gap-5 border-2 border-green px-4 py-2' href='mailto:marilynedelia@gmail.com'>
            <p className={`text-green ${lato.className}`}>Message</p>
            <Image
            src={sendIcon}
            alt='Envoyer un email'
            />
        </a>
    </section>
  )
}

export default Contact
