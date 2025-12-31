import React, { useEffect, useRef } from 'react';
import './Gallery.css';
import lineDivider from '../assets/line.png';
import photo1 from '../assets/1.jpg';
import photo3 from '../assets/3.jpg';
import photo4 from '../assets/4.jpg';
import photo5 from '../assets/5.jpg';
import sample1 from '../assets/gallery/sample-1.png';
import sample2 from '../assets/gallery/sample-2.png';
import sample3 from '../assets/gallery/sample-3.png';
import sample4 from '../assets/gallery/sample-4.png';
import sample5 from '../assets/gallery/sample-5.png';
import sample6 from '../assets/gallery/sample-6.png';
import sample7 from '../assets/gallery/sample-7.png';
import sample8 from '../assets/gallery/sample-8.png';
import sample9 from '../assets/gallery/sample-9.png';
import sample10 from '../assets/gallery/sample-10.png';
import sample11 from '../assets/gallery/sample-11.png';
import work1 from '../assets/work-1.png';
import work2 from '../assets/work-2.png';
import work3 from '../assets/work-3.png';

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
    { src: photo1, alt: 'Photo 1' },
    { src: photo3, alt: 'Photo 2' },
    { src: photo4, alt: 'Photo 3' },
    { src: photo5, alt: 'Photo 4' },
  ];

  const journalSamples = [
    { src: sample8, alt: 'Sample 1' },
    { src: sample10, alt: 'Sample 2' },
    { src: sample11, alt: 'Sample 3' },
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
          <img src={lineDivider} alt="Divider" />
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
          <img src={lineDivider} alt="Divider" />
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

