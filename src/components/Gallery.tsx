import { FC, useState } from 'react';
import { GalleryImage } from '@types/index';
import '../styles/components/Gallery.css';

interface GalleryProps {
  images: GalleryImage[];
  title?: string;
}

const Gallery: FC<GalleryProps> = ({ images, title }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrev = () => {
    setSelectedIndex((prev) =>
      prev === null ? 0 : (prev - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setSelectedIndex((prev) =>
      prev === null ? 0 : (prev + 1) % images.length
    );
  };

  return (
    <div className="gallery-container">
      {title && <h3 className="gallery-title">{title}</h3>}

      {selectedIndex !== null && (
        <div className="gallery-modal" onClick={() => setSelectedIndex(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[selectedIndex].src}
              alt={images[selectedIndex].label}
              className="modal-image"
            />
            <p className="image-label">{images[selectedIndex].label}</p>
            <div className="modal-controls">
              <button onClick={handlePrev} className="nav-button">
                ← Prev
              </button>
              <span className="image-counter">
                {selectedIndex + 1} / {images.length}
              </span>
              <button onClick={handleNext} className="nav-button">
                Next →
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="gallery-grid">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="gallery-item"
            onClick={() => setSelectedIndex(idx)}
          >
            <img src={img.src} alt={img.label} />
            <p className="item-label">{img.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
