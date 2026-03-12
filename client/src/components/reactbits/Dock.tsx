import React from 'react';
import './Dock.css';

export type DockItemData = {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  className?: string;
};

export type DockProps = {
  items: DockItemData[];
  className?: string;
  baseItemSize?: number;
  panelHeight?: number;
  magnification?: number;
  distance?: number;
  dockHeight?: number;
};

export default function Dock({ items, className = '', baseItemSize = 50 }: DockProps) {
  return (
    <div className={`dock-panel ${className}`}>
      {items.map((item, index) => (
        <button
          key={index}
          onClick={item.onClick}
          className={`dock-item ${item.className ?? ''}`}
          style={{ width: baseItemSize, height: baseItemSize }}
          title={item.label}
          aria-label={item.label}
        >
          <div className="dock-icon">{item.icon}</div>
        </button>
      ))}
    </div>
  );
}
