import React, { useState } from 'react';
import './pets.css';

// Import pet images
import dog1 from './assets/dog1.jpg';
import dog2 from './assets/dog2.jpg';
import dog3 from './assets/dog3.jpg';
import cat1 from './assets/cat1.jpg';
import cat2 from './assets/cat2.jpg';
import cat3 from './assets/cat3.jpg';

const Pets = () => {
  const [selectedPet, setSelectedPet] = useState(null); // Track selected pet
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const petsData = [
    {
      id: 1,
      type: "Dog",
      name: "Tom",
      age: 1,
      breed: "Maltese",
      healthStatus: "Vaccinated, Dewormed",
      personality: "Friendly, Energetic",
      info: "Tom is very social and loves being around people. Great with children.",
      image: dog1
    },
    {
      id: 2,
      type: "Dog",
      name: "Max",
      age: 8,
      breed: "German Shepherd",
      healthStatus: "Vaccinated, Neutered",
      personality: "Loyal, Playful",
      info: "Max enjoys the outdoors. Would thrive in an active home.",
      image: dog2
    },
    {
      id: 3,
      type: "Dog",
      name: "Charlie",
      age: 2,
      breed: "Beagle",
      healthStatus: "Vaccinated, Microchipped",
      personality: "Smart, Curious",
      info: "Charlie is very smart and easy going. Loves to play fetch.",
      image: dog3
    },
    {
      id: 4,
      type: "Cat",
      name: "Whiskers",
      age: 4,
      breed: "Siamese",
      healthStatus: "Vaccinated, Dewormed",
      personality: "Independent, Affectionate",
      info: "Whiskers is a calm and loving cat.",
      image: cat1
    },
    {
      id: 5,
      type: "Cat",
      name: "Mittens",
      age: 2,
      breed: "Persian",
      healthStatus: "Vaccinated, Neutered",
      personality: "Playful, Gentle",
      info: "Mittens is a sweet and gentle cat. Loves to be petted.",
      image: cat2
    },
   
  ];

  const handleMoreInfo = (pet) => {
    setSelectedPet(pet); // Set selected pet when "More info" is clicked
  };

  const handleBack = () => {
    setSelectedPet(null); // Go back to pet list
    setFormData({
      name: '',
      email: '',
      message: ''
    }); // Reset the form data when going back to the list
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Appointment booked successfully! We will let you know the details via email.');
    // Here, you can send the form data to your server or any other processing logic.
    setFormData({
      name: '',
      email: '',
      message: ''
    }); // Reset the form after submission
  };

  return (
    <div>
      <br /><br /><br /><br />
      {selectedPet ? (
        <div className="pet-details">
          <img src={selectedPet.image} alt={selectedPet.name} className="pet-image" />
          <div className="pet-info">
            <br /><br />
            <h3>Name of {selectedPet.type}: {selectedPet.name}</h3>
            <p><b>Age:</b> {selectedPet.age}</p>
            <p><b>About:</b> {selectedPet.info}</p>
            <p><b>Breed:</b> {selectedPet.breed}</p>
            <p><b>Health Status:</b> {selectedPet.healthStatus}</p>
            <p><b>Personality:</b> {selectedPet.personality}</p>
            <button className="back-button" onClick={handleBack}>Back to List</button>
            
            {/* Appointment Booking Form */}
            <div className="appointment-form">
              <h4>Book an Appointment</h4>
              <form onSubmit={handleSubmit}>
                <div>
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="pets-container">
          {petsData.map(pet => (
            <div className="pet-card" key={pet.id}>
              <img src={pet.image} alt={pet.name} className="pet-image" />
              <h3>{pet.type} Name : {pet.name}</h3>
              <p><b>Age:</b> {pet.age}</p>
              <p><b>About:</b> {pet.info}</p>
              <button className="info-button" onClick={() => handleMoreInfo(pet)}>More info</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Pets;
