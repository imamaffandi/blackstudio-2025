import { useState, useEffect, useCallback } from "react";

export function useNavigation(totalChapters: number) {
  const [currentChapter, setCurrentChapter] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const navigateToChapter = useCallback((chapterIndex: number) => {
    if (chapterIndex < 0 || chapterIndex >= totalChapters) return;
    setCurrentChapter(chapterIndex);
  }, [totalChapters]);

  const navigateNext = useCallback(() => {
    if (currentChapter < totalChapters - 1) {
      navigateToChapter(currentChapter + 1);
    }
  }, [currentChapter, totalChapters, navigateToChapter]);

  const navigatePrev = useCallback(() => {
    if (currentChapter > 0) {
      navigateToChapter(currentChapter - 1);
    }
  }, [currentChapter, navigateToChapter]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") {
        navigatePrev();
      } else if (e.key === "ArrowDown") {
        navigateNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [navigateNext, navigatePrev]);

  // Mouse drag navigation (vertical) - with strict single-step control
  useEffect(() => {
    let startY = 0;
    let currentY = 0;
    let startX = 0;
    let currentX = 0;
    let hasTriggered = false;

    const handleMouseDown = (e: MouseEvent) => {
      // Don't trigger drag if user is selecting text or clicking on interactive elements
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'BUTTON' || 
          target.tagName === 'A' || target.closest('button') || target.closest('a') || 
          target.closest('[contenteditable]') || (window.getSelection()?.toString().length || 0) > 0) {
        return;
      }
      
      setIsDragging(true);
      startY = e.clientY;
      startX = e.clientX;
      hasTriggered = false;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || hasTriggered) return;
      currentY = e.clientY;
      currentX = e.clientX;
      const deltaY = currentY - startY;
      const deltaX = currentX - startX;

      // Only trigger once per drag and if vertical movement is dominant
      if (Math.abs(deltaY) > 150 && Math.abs(deltaY) > Math.abs(deltaX) * 2) {
        hasTriggered = true;
        if (deltaY > 0) {
          navigateNext();
        } else {
          navigatePrev();
        }
        setIsDragging(false);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      hasTriggered = false;
    };

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, navigateNext, navigatePrev]);

  // Touch navigation (vertical) - increased sensitivity
  useEffect(() => {
    let touchStartY = 0;
    let touchStartX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
      touchStartX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY;
      const touchEndX = e.changedTouches[0].clientX;
      const deltaY = touchStartY - touchEndY;
      const deltaX = touchStartX - touchEndX;

      // Only trigger if vertical movement is dominant and significant
      if (Math.abs(deltaY) > 100 && Math.abs(deltaY) > Math.abs(deltaX) * 2) {
        if (deltaY > 0) {
          navigateNext();
        } else {
          navigatePrev();
        }
      }
    };

    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [navigateNext, navigatePrev]);

  // Scroll wheel navigation with very strict single-step control
  useEffect(() => {
    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout;

    const handleWheel = (e: WheelEvent) => {
      // Don't prevent default if user is selecting text or on interactive elements
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || 
          target.closest('[contenteditable]') || (window.getSelection()?.toString().length || 0) > 0) {
        return;
      }

      e.preventDefault();
      
      // If already scrolling, ignore all further scroll events
      if (isScrolling) return;
      
      // Only trigger on significant scroll movement
      if (Math.abs(e.deltaY) > 50) {
        isScrolling = true;
        
        if (e.deltaY > 0) {
          navigateNext();
        } else {
          navigatePrev();
        }
        
        // Very long lockout period to ensure only one section change
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          isScrolling = false;
        }, 1500); // 1.5 second lockout - enough time for transition to complete
      }
    };

    document.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      document.removeEventListener("wheel", handleWheel);
      clearTimeout(scrollTimeout);
    };
  }, [navigateNext, navigatePrev]);

  return {
    currentChapter,
    navigateToChapter,
    navigateNext,
    navigatePrev,
  };
}
