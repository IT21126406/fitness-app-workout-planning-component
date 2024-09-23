
import axios from 'axios';
import { useState } from "react";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
        
                                         
 
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8082/api/v1/member';
const backgroundImageUrl = 'https://img.freepik.com/free-photo/front-view-male-boxer-posing_23-2148615042.jpg?t=st=1715437334~exp=1715440934~hmac=428c308acb0d880563de2e40a0a40f8f3a78b14868f4dfbbe4c8900d4b101c1b&w=1380'; // URL of your online image
  
function AddPlan() {
  const [rotine, setRotine] = useState('');
  const [exercise, setExercise] = useState(''); // Change to useState for exercise
  const [repetitions, setRepetitions] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post(`${API_URL}/save`, {
        rotine,
        exercise, // Include exercise in the request
        repetitions,
      });
      alert('Plan Added Successfully!');
      setRotine('');
      setExercise('');
      setRepetitions('');
      navigate('/');
    } catch (error) {
      setError('Error saving details');
    }
  };

  return (
    <div style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', minHeight: '100vh' }}>
      <Navbar />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h1 style={{ color: 'white' }}>Add Workout Plan</h1>
           
            <form onSubmit={handleSubmit}>
              <div className="form-group">
              <label htmlFor="rotine" style={{ color: 'white' }}>Routine</label>

                <input
                  type="text"
                  className="form-control"
                  id="rotine"
                  value={rotine}
                  onChange={(event) => setRotine(event.target.value)}
                  required
                />
              </div>
              <div className="form-group">
              <label htmlFor="exercise" style={{ color: 'white' }}>Exercise</label>

                <select
                  className="form-control"
                  id="exercise"
                  value={exercise}
                  onChange={(event) => setExercise(event.target.value)}
                  required
                >
                  <option value="">Select an exercise</option>
                  <option value="Push-ups">Push-ups</option>
                  <option value="Sit-ups">Sit-ups</option>
                  <option value="Squats">Squats</option>
                  <option value="Lunges">Lunges</option>
                  <option value="Jumping Jacks">Jumping Jacks</option>
                  <option value="Plank">Plank</option>
                  {/* Add more exercise options as needed */}
                </select>
              </div>
              <div className="form-group">
              <label htmlFor="repetitions" style={{ color: 'white' }}>Repetitions</label>

                <input
                  type="text"
                  className="form-control"
                  id="repetitions"
                  value={repetitions}
                  onChange={(event) => setRepetitions(event.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary mt-4">
                Add Workout Plan
              </button>
            </form>
            {error && <div className="alert alert-danger">{error}</div>}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AddPlan;
