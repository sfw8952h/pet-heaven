import React, { useRef, useState, useEffect } from 'react';
import './services.css';
import releasePetImage from './assets/releasepet.jpg'; // Import the image

const Services = () => {
  const topSectionRef = useRef(null);
  const bottomSectionRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const formRef = useRef(null); // Create a reference for the form

  const scrollToBottom = () => {
    bottomSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    topSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > 100);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form from refreshing the page
    alert("We will contact you shortly!"); // Show alert on form submission

    // Reset the form after submission
    formRef.current.reset(); // This will clear all the form fields
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="services-container">
      {/* Top Section with Large Image on Left and Form on Right */}
      <div className="top-section" ref={topSectionRef}>
        <div className="image-container">
          <img src={releasePetImage} alt="Release a Pet" className="release-pet-image" />
        </div>
        <div className="form-container">
          <h2 className="form-title">Release a Pet</h2>
          <form className="release-pet-form" onSubmit={handleSubmit} ref={formRef}>
            <div className="form-group">
              <label htmlFor="pet-name">Pet Name</label>
              <input type="text" id="pet-name" name="pet-name" required />
            </div>
            <div className="form-group">
              <label htmlFor="pet-age">Pet Age</label>
              <input type="number" id="pet-age" name="pet-age" required />
            </div>
            <div className="form-group">
              <label htmlFor="pet-type">Pet Type</label>
              <select id="pet-type" name="pet-type" required>
                <option value="">Select a type</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="breed">Breed</label>
              <input type="text" id="breed" name="breed" placeholder="Enter breed" required />
            </div>
            <div className="form-group">
              <label htmlFor="reason">Reason for Release</label>
              <textarea
                id="reason"
                name="reason"
                rows="4"
                placeholder="Explain the reason..."
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section: Pet Care Info with Videos Side by Side */}
      <div className="bottom-section" ref={bottomSectionRef}>
        <h1>Pet Care Services</h1>
        <p>
          Learn more about how we care for pets, our services, and how you can get involved.
        </p>

        {/* Video Section */}
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/Zb3Wzs2FcFE"
            title="Video 1"
            frameBorder="0"
            allowFullScreen
          ></iframe>

          <iframe
            src="https://www.youtube.com/embed/zPOAaDUzVDY"
            title="Video 2"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Scroll Buttons */}
      {!isScrolled && (
        <div className="scroll-button scroll-down" onClick={scrollToBottom}>
          <span>Pet Care Services &#8595;</span>
        </div>
      )}
      {isScrolled && (
        <div className="scroll-button scroll-up" onClick={scrollToTop}>
          &#8593;
        </div>
      )}
    </div>
  );
};

export default Services;
