import React from 'react';
import { useReducedMotion, MotionConfig } from 'framer-motion';
import { Button } from '../ui/button';

interface AccessibleVisualizerProps {
  children: React.ReactNode;
  onSwitchToTextMode?: () => void;
}

export const AccessibleVisualizer: React.FC<AccessibleVisualizerProps> = ({ 
  children, 
  onSwitchToTextMode 
}) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <MotionConfig reducedMotion="user">
      <div className="visualizer-container">
        
        {prefersReducedMotion && (
          <div className="mb-4 p-4 text-sm text-yellow-800 bg-yellow-50 border border-yellow-200 rounded-md flex justify-between items-center shadow-sm">
            <span>Animations are disabled to save battery or respect accessibility preferences.</span>
            {onSwitchToTextMode ? (
              <Button 
                onClick={onSwitchToTextMode} 
                variant="ghost"
                className="font-semibold underline hover:text-yellow-900"
              >
                Switch to step-by-step text mode →
              </Button>
            ) : (
              <span className="text-xs font-mono uppercase tracking-widest opacity-70">Safe Mode</span>
            )}
          </div>
        )}

        {children}
        
      </div>
    </MotionConfig>
  );
};