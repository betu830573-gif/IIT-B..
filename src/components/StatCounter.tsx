import React, { useEffect, useRef, useState } from 'react';

interface StatCounterProps {
  value: number;
  suffix: string;
  decimals?: number;
  duration?: number; // duration of animation in ms
}

export default function StatCounter({ value, suffix, decimals = 0, duration = 1500 }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentVal = progress * value;
      setCount(currentVal);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };

    window.requestAnimationFrame(step);
  }, [hasAnimated, value, duration]);

  const formattedValue = count.toFixed(decimals);

  // For 1M+, display custom if it's counting to 1.2M
  let displayValue = formattedValue;
  if (value >= 1000000) {
    displayValue = (count / 1000000).toFixed(decimals ? decimals : 1) + 'M';
  }

  return (
    <div ref={elementRef} className="font-display text-4xl md:text-5xl font-black text-white text-glow-cyan tracking-wider">
      {displayValue}
      {suffix}
    </div>
  );
}
