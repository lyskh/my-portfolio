import React, { useEffect, useRef } from 'react';
import './Gallery.css';
import lineImg from '../assets/line.png';

const Gallery = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current);
      }
    };
  }, []);

  const photos = [
    { src: '/gallery/1.jpg', alt: 'Photo 1' },
    { src: '/gallery/3.jpg', alt: 'Photo 2' },
    { src: '/gallery/4.jpg', alt: 'Photo 3' },
    { src: '/gallery/5.jpg', alt: 'Photo 4' },
  ];

  const journalSamples = [
    { src: '/gallery/sample-8.png', alt: 'Sample 1' },
    { src: '/gallery/sample-10.png', alt: 'Sample 2' },
    { src: '/gallery/sample-11.png', alt: 'Sample 3' },
  ];

  const liveProjects = [
    {
      url: 'https://theeverythingjournal.netlify.app/',
      title: 'The Everything Journal',
      iframe: 'https://theeverythingjournal.netlify.app/'
    },
    {
      url: 'https://lyskh.github.io/ACS/',
      title: 'Organization Website',
      iframe: 'https://lyskh.github.io/ACS/'
    },
    {
      url: 'https://lyskh.github.io/my-portfolio/',
      title: 'This Site',
      iframe: 'https://lyskh.github.io/my-portfolio/'
    }
  ];

  return (
    <section className="gallery-section" id="samples" ref={galleryRef}>
      <div className="container">
        <div className="section-divider">
          <img src={lineImg} alt="Divider" />
        </div>
        
        <h1 className="section-title">Sample Works and Photographs</h1>
        
        <div className="gallery">
          {photos.map((photo, index) => (
            <div key={index} className="gallery-item">
              <img src={photo.src} alt={photo.alt} loading="lazy" />
            </div>
          ))}
        </div>

        <h6 className="gallery-subtitle">The Everything Journal</h6>
        
        <div className="gallery journal-gallery">
          {journalSamples.map((sample, index) => (
            <div key={index} className="gallery-item">
              <img src={sample.src} alt={sample.alt} loading="lazy" />
            </div>
          ))}
        </div>

        <div className="section-divider">
          <img src={lineImg} alt="Divider" />
        </div>

        <h1 className="section-title">Live Sites</h1>

        {liveProjects.map((project, index) => (
          <div key={index} className="live-project">
            <div className="iframe-container">
              <iframe
                src={project.iframe}
                title={project.title}
                frameBorder="0"
                loading="lazy"
              />
            </div>
            <div className="live-project-button">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-dark"
              >
                {project.title}
              </a>
            </div>
            {index < liveProjects.length - 1 && <hr />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;

