import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { COLORS } from '../constants';

const CustomCursor: React.FC = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isClicking, setIsClicking] = useState(false);
  const [trails, setTrails] = useState<{ x: number; y: number; id: number }[]>([]);
  const requestRef = useRef<number>();
  const idCounter = useRef(0);

  // Smooth spring physics for the main cursor
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // Add trail points less frequently for performance
      if (Math.random() > 0.8) {
         setTrails(prev => [
          ...prev.slice(-15), // Keep last 15
          { x: e.clientX, y: e.clientY, id: idCounter.current++ }
        ]);
      }
    };

    const mouseDown = () => setIsClicking(true);
    const mouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', mouseDown);
    window.addEventListener('mouseup', mouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', mouseDown);
      window.removeEventListener('mouseup', mouseUp);
    };
  }, [cursorX, cursorY]);

  // Cleanup trails
  useEffect(() => {
    const cleanup = setInterval(() => {
      setTrails(prev => prev.slice(1));
    }, 100);
    return () => clearInterval(cleanup);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
      {/* Main Cursor Circle */}
      <motion.div
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className={`fixed top-0 left-0 w-8 h-8 rounded-full border border-[${COLORS.FLORAL_WHITE}] mix-blend-difference flex items-center justify-center`}
        animate={{
          scale: isClicking ? 0.8 : 1,
          backgroundColor: isClicking ? COLORS.FLORAL_WHITE : 'transparent'
        }}
      >
        <div className="w-1 h-1 bg-white rounded-full" />
      </motion.div>

      {/* Paw Prints Trail */}
      {trails.map((trail) => (
        <motion.div
          key={trail.id}
          initial={{ opacity: 0.6, scale: 0.5 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 1 }}
          style={{ left: trail.x, top: trail.y }}
          className="fixed w-4 h-4 -ml-2 -mt-2 text-[#D8CFBC]"
        >
             <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full opacity-50">
               <path d="M12,2A3,3 0 0,1 15,5A3,3 0 0,1 12,8A3,3 0 0,1 9,5A3,3 0 0,1 12,2M19,7A3,3 0 0,1 22,10A3,3 0 0,1 19,13A3,3 0 0,1 16,10A3,3 0 0,1 19,7M5,7A3,3 0 0,1 8,10A3,3 0 0,1 5,13A3,3 0 0,1 2,10A3,3 0 0,1 5,7M9,11.5A3.5,3.5 0 0,1 12.5,15A3.5,3.5 0 0,1 9,18.5A3.5,3.5 0 0,1 5.5,15A3.5,3.5 0 0,1 9,11.5M15,11.5A3.5,3.5 0 0,1 18.5,15A3.5,3.5 0 0,1 15,18.5A3.5,3.5 0 0,1 11.5,15A3.5,3.5 0 0,1 15,11.5Z" />
             </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default CustomCursor;
