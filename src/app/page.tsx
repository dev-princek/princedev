'use client';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Project from '@/components/Project';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [activeComponent, setActiveComponent] = useState('home');

  
 

  const renderComponent = () => {
    switch (activeComponent) {
      case 'home':
        return <Hero />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'project':
        return <Project />;
      default:
        return <Hero />;
    }
  };

 

  return (
    <div className="relative h-screen overflow-y-auto scrollbar-thin scrollbar-color-yellow-500 scrollbar-track-gray-800">
      <Header
        setActiveComponent={setActiveComponent}
        activeComponent={activeComponent}
      />
      <div className="container h-screen ">
        {/* Animated Component Switching */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeComponent}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
            id={activeComponent}  // Add ID for smooth scroll targeting
          >
            {renderComponent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
