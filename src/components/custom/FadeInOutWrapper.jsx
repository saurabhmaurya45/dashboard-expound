import { AnimatePresence, motion, easeInOut } from "framer-motion";
import React from "react";

const FadeInOutWrapper = ({ isOpen, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.8, 0.08, 0.08, 0.86] }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FadeInOutWrapper;
