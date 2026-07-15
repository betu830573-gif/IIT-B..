import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 450, mass: 0.4 };
  const cursorRingX = useSpring(cursorX, springConfig);
  const cursorRingY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Detect mobile touch screen
    const checkMobile = () => {
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsMobile(isTouch);
    };
    checkMobile();

    if (isMobile) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('.interactive-hover') ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.getAttribute('role') === 'button';
      
      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    document.body.classList.add('custom-cursor-active');

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.classList.remove('custom-cursor-active');
    };
  }, [cursorX, cursorY, isVisible, isMobile]);

  if (isMobile || !isVisible) return null;

  return (
    <>
      {/* Outer Magnetic Ring */}
      <motion.div
        style={{
          left: cursorRingX,
          top: cursorRingY,
          x: '-50%',
          y: '-50%',
        }}
        animate={{
          scale: isHovered ? 1.6 : 1,
          borderColor: isHovered ? '#7A00FF' : '#00F5FF',
          backgroundColor: isHovered ? 'rgba(122, 0, 255, 0.1)' : 'rgba(0, 245, 255, 0)',
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.2 }}
        className="fixed w-9 h-9 border border-[#00F5FF]/50 rounded-full pointer-events-none z-50 pointer-events-none mix-blend-screen shadow-[0_0_12px_rgba(0,245,255,0.2)]"
      />

      {/* Inner Glowing Core */}
      <motion.div
        style={{
          left: cursorX,
          top: cursorY,
          x: '-50%',
          y: '-50%',
        }}
        animate={{
          scale: isHovered ? 0.5 : 1,
          backgroundColor: isHovered ? '#00FF9D' : '#00F5FF',
        }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.15 }}
        className="fixed w-2 h-2 rounded-full pointer-events-none z-50 pointer-events-none mix-blend-screen shadow-[0_0_8px_rgba(0,245,255,0.8)]"
      />
    </>
  );
}
