import React from 'react';
import './home.css'; // Make sure to add the corresponding CSS
import petadoption from './assets/petadoption.png';
import face1 from './assets/face1.jpg'; // Adjust the path if necessary
import face2 from './assets/face2.jpg'; // Adjust the path if necessary
import face3 from './assets/face3.jpg'; // Adjust the path if necessary

const Home = ({ setSection }) => { // Add setSection as a prop
  return (
    <div className="home-container">
      <div className="home-content">
        <img src={petadoption} alt="Pet Adoption" className="pet-image" />
        <div className="text-container">
          <h1 className="heading">Adopt Your New Best Friend Today!</h1>
          <p className="subheading">
            Find your Pet companion Today! We have a variety of pets to choose from.
          </p>
          <button className="adopt-button" onClick={() => setSection('pets')}>Adopt Now</button> {/* Update setSection to 'pets' */}
        </div>
      </div>
      
      {/* Reviews Section */}
      <div className="reviews-container">
        <h2 className="reviews-heading">What People Are Saying</h2>
        <div className="reviews">
          <div className="review">
            <img src={face1} alt="Person 1" className="review-face" />
            <p className="review-text">"The best decision I ever made!"</p>
          </div>
          <div className="review">
            <img src={face2} alt="Person 2" className="review-face" />
            <p className="review-text">"Adoption process was smooth!"</p>
          </div>
          <div className="review">
            <img src={face3} alt="Person 3" className="review-face" />
            <p className="review-text">"Adoption was easy and life-changing!"</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
