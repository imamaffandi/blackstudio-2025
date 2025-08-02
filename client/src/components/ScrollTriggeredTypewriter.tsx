import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface ScrollTriggeredTypewriterProps {
  text: string;
  className?: string;
  delay?: number;
}

export function ScrollTriggeredTypewriter({ 
  text, 
  className = '', 
  delay = 0
}: ScrollTriggeredTypewriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isInView && !isComplete) {
      // Type in when entering view with 0.4s duration
      timeoutId = setTimeout(() => {
        const chars = text.split('');
        const typeInterval = 400 / chars.length; // 0.4s total duration
        
        let index = 0;
        const typeIn = () => {
          if (index < chars.length) {
            setDisplayText(text.substring(0, index + 1));
            index++;
            setTimeout(typeIn, typeInterval);
          } else {
            setIsComplete(true);
          }
        };
        
        typeIn();
      }, delay);
    } else if (!isInView && displayText) {
      // Type out when leaving view with 0.4s duration
      setIsComplete(false);
      const chars = displayText.split('');
      const typeInterval = 400 / chars.length; // 0.4s total duration
      
      let index = chars.length;
      const typeOut = () => {
        if (index > 0) {
          setDisplayText(text.substring(0, index - 1));
          index--;
          setTimeout(typeOut, typeInterval);
        } else {
          setDisplayText('');
        }
      };
      
      typeOut();
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isInView, text, delay, displayText, isComplete]);

  return (
    <span ref={ref} className={className}>
      {displayText}
    </span>
  );
}