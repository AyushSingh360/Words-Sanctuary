'use client';

import React, { CSSProperties } from 'react';
import './BorderGlow.css';

interface BorderGlowProps {
  children: React.ReactNode;
  className?: string;
  edgeSensitivity?: number;
  glowColor?: string;
  backgroundColor?: string;
  borderRadius?: number;
  glowRadius?: number;
  glowIntensity?: number;
  coneSpread?: number;
  animated?: boolean;
  colors?: string[];
}

const BorderGlow: React.FC<BorderGlowProps> = ({ 
  children, 
  className = '', 
  animated = true,
  borderRadius = 12,
  glowRadius = 15,
  glowIntensity = 1,
  coneSpread = 45,
  backgroundColor = 'var(--surface-bg)',
  colors = ['var(--accent-gold)', 'var(--accent-purple)', 'var(--accent-green)'],
}) => {
  const style = {
    '--border-radius': `${borderRadius}px`,
    '--glow-radius': `${glowRadius}px`,
    '--glow-intensity': glowIntensity,
    '--cone-spread': `${coneSpread}deg`,
    '--bg-color': backgroundColor,
    '--color-1': colors[0] || 'var(--accent-gold)',
    '--color-2': colors[1] || 'var(--accent-purple)',
    '--color-3': colors[2] || 'var(--accent-green)',
  } as CSSProperties;

  return (
    <div 
      className={`border-glow-container ${className} ${animated ? 'animated' : ''}`}
      style={style}
    >
      <div className="border-glow-inner">
        {children}
      </div>
      <div className="glow-edge"></div>
    </div>
  );
};

export default BorderGlow;
