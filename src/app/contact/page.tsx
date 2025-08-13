'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Emails } from '@/sections/Emails';
import Navbar from '@/sections/Navbar';
import { Footer } from '@/sections/Footer';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex-grow flex items-center justify-center py-20"
      >
        <Emails />
      </motion.div>

      <Footer />
    </main>
  );
}
