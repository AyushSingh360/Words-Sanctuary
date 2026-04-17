'use client';

import React, { useState } from 'react';
import { galleryImages, GalleryImage } from './data';
import './gallery.css';

const categories = ['all', 'handwritten', 'typed', 'digital'] as const;
type Category = typeof categories[number];

export default function GalleryPage() {
  const [filter, setFilter] = useState<Category>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <div className="gallery-page">
      <div className="container">
        <header className="gallery-header">
          <span className="gallery-label">Visual Archive</span>
          <h1 className="gallery-title">Echoes in Frame</h1>
          <p className="gallery-subtitle">
            A curated collection of visual fragments—where paper, ink, and silence 
            come together to give weight to the words we carry.
          </p>
        </header>

        {/* Filters */}
        <div className="gallery-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="gallery-grid">
          {filteredImages.map((image) => (
            <div 
              key={image.id} 
              className="gallery-item"
              onClick={() => setSelectedImage(image)}
            >
              <div className="gallery-image-container">
                <img 
                  src={image.url} 
                  alt={image.title} 
                  className="gallery-img"
                  onError={(e) => {
                    // Fallback for missing images in development
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="gallery-overlay">
                  <h3 className="gallery-item-title">{image.title}</h3>
                  <p className="gallery-item-desc">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Basic Lightbox */}
      {selectedImage && (
        <div 
          className="gallery-modal-overlay"
          onClick={() => setSelectedImage(null)}
        >
          <div className="gallery-modal-content">
            <img 
              src={selectedImage.url} 
              alt={selectedImage.title} 
              className="gallery-modal-img"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
