"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

export const FramerWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        // Use w-full and remove any fixed heights
        className="w-full" 
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};