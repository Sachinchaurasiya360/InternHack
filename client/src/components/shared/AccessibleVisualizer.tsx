import React from 'react';
import { useReducedMotion, MotionConfig } from 'framer-motion';

interface AccessibleVisualizerProps {
  children: React.ReactNode;
  onSwitchToTextMode?: () => void;
}

export const AccessibleVisualizer: React.FC<AccessibleVisualizerProps> = ({ 
  children, 
  onSwitchToTextMode 
}) => {
  // 1. Centralized check
  const prefersReducedMotion = useReducedMotion();

  return (
    // 2. MotionConfig automatically forces all nested Framer Motion 
    // components to use instant transitions if prefersReducedMotion is true!
    <MotionConfig reducedMotion="user">
      <div className="visualizer-container relative">
        
        {/* 3. The Centralized Fallback UI Banner */}
        {prefersReducedMotion && (
          <div className="absolute top-0 left-0 w-full z-10 p-3 mb-4 text-sm text-yellow-800 bg-yellow-50 border border-yellow-200 rounded-md flex justify-between items-center shadow-sm">
            <span>Animations disabled to save battery.</span>
            {onSwitchToTextMode && (
              <button 
                onClick={onSwitchToTextMode} 
                className="font-semibold underline hover:text-yellow-900 transition-colors"
              >
                Switch to step-by-step text mode →
              </button>
            )}
          </div>
        )}

        {/* The actual lesson content and animations */}
        <div className={prefersReducedMotion ? 'mt-14' : ''}>
          {children}
        </div>
      </div>
    </MotionConfig>
  );
};