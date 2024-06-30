"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import './styles/globals.css';


import React from 'react'
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div className='bg-primary'>
       <Header />
       <Hero />
       <Skills />
       <Projects />
       <Contact />
       <Footer />
    </div>
   
  )
}

export default page
