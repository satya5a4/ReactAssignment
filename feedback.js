import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RatingForm = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const navigate = useNavigate();

  const handleRatingChange = (e) => {
    setRating(parseInt(e.target.value));
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the rating and feedback data to the backend

    // Display a confirmation message
    if (rating !== 0) {
        alert('Thank you for your feedback!');
        navigate('/booking')
    }
    else{
        alert('Please provide rating')
    }
  };

  return (
    <div className="container">
            <div className="form-box">
            <h1>Rideshare</h1>
            <h2>Rate and Provide Feedback</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="rating">Rating*</label>
                <select id="rating" value={rating} onChange={handleRatingChange} >
                <option value={1}>1 Star</option>
                <option value={2}>2 Stars</option>
                <option value={3}>3 Stars</option>
                <option value={4}>4 Stars</option>
                <option value={5}>5 Stars</option>
                </select>
                <br/>
                <label htmlFor="feedback">Feedback</label>
                <textarea id="feedback" value={feedback} onChange={handleFeedbackChange} />
                <br/>
                <button type="submit">Submit</button>
            </form>
    </div>
    </div>
  );
};

export default RatingForm;
