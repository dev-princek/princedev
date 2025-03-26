'use client'
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Contact from '@/components/Contact'
import { useState } from 'react';
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
      default:
        return <Hero />;
    }
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <Header
        setActiveComponent={setActiveComponent}
        activeComponent={activeComponent}
      />

      {/* Animated Component Switching */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeComponent}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
        >
          {renderComponent()}
        </motion.div>
      </AnimatePresence>
    </div>

  );
}
