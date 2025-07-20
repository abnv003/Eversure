import React, { useEffect, useRef, useState } from 'react';

interface ScrollSectionProps {
  children: React.ReactNode;
  className?: string;
  imageLeft?: boolean;
}

const ScrollSection: React.FC<ScrollSectionProps> = ({ 
  children, 
  className = "", 
  imageLeft = false 
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (rect.top < windowHeight && rect.bottom > 0) {
        const progress = Math.min(
          Math.max((windowHeight - rect.top) / (windowHeight + rect.height), 0),
          1
        );
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getTransform = (isImage: boolean) => {
    if (!isVisible) return 'translateX(0px)';
    
    const baseOffset = 100;
    const progress = Math.min(scrollProgress * 2, 1);
    const offset = baseOffset * (1 - progress);
    
    if (imageLeft) {
      return isImage 
        ? `translateX(-${offset}px)` 
        : `translateX(${offset}px)`;
    } else {
      return isImage 
        ? `translateX(${offset}px)` 
        : `translateX(-${offset}px)`;
    }
  };

  return (
    <div 
      ref={sectionRef} 
      className={`scroll-section ${className}`}
      style={{
        '--image-transform': getTransform(true),
        '--text-transform': getTransform(false),
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

export default ScrollSection;