import { useState, useEffect } from 'react';

export const useActiveSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observers = new Map<string, IntersectionObserver>();
    
    // Store visibility ratios to determine which section is "most" visible
    const visibilityMap = new Map<string, number>();

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        visibilityMap.set(entry.target.id, entry.intersectionRatio);
      });

      // Find the section with the highest intersection ratio
      let maxRatio = 0;
      let mostVisibleSection = '';
      
      visibilityMap.forEach((ratio, id) => {
        if (ratio > maxRatio) {
          maxRatio = ratio;
          mostVisibleSection = id;
        }
      });

      // If at top of page, force home active
      if (window.scrollY < 100) {
        setActiveSection('home');
      } else if (maxRatio > 0.2 && mostVisibleSection) {
        setActiveSection(mostVisibleSection);
      }
    };

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        const observer = new IntersectionObserver(handleIntersect, {
          root: null,
          rootMargin: '-10% 0px -40% 0px',
          threshold: [0, 0.2, 0.5, 0.8, 1.0],
        });
        observer.observe(element);
        observers.set(id, observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sectionIds]);

  return activeSection;
};
