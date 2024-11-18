import React from 'react';
import dog1 from './assets/dog1.jpg';
import dog2 from './assets/dog2.jpg';
import dog3 from './assets/dog3.jpg';
import cat1 from './assets/cat1.jpg';
import cat2 from './assets/cat2.jpg';
import cat3 from './assets/cat3.jpg';
import './About.css';

const About = () => {
  const petImages = [dog1, dog2, dog3, cat1, cat2,cat3];

  return (
    <div>
      {/* Header Section */}
      <header className="about-header">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
        <h2>About Us</h2>
        <p>At Pet Heaven, we are a pet adoption center dedicated to rescuing and rehoming abandoned pets. All the pets here are provided with 
          medical treatment and properly cared for before finding them a forever home.</p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
          <h2>Our Mission</h2>
        <p>To find a suitable home for the rescued and abandoned pets and have them lead a better life. </p>
      </header>

      {/* First Row: Scroll left */}
      <div className="wrapper">
        {petImages.concat(petImages).map((image, index) => (
          <div
            key={index}
            className={`itemLeft item${index + 1}`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>

      {/* Second Row: Scroll right */}
      <div className="wrapper">
        {petImages.concat(petImages).map((image, index) => (
          <div
            key={index}
            className={`itemRight item${index + 1}`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>

      {/* Third Row: Scroll left */}
      <div className="wrapper">
        {petImages.concat(petImages).map((image, index) => (
          <div
            key={index}
            className={`itemLeft-third item${index + 1}`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default About;
