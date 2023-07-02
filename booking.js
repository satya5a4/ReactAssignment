import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './css/login.css';

const RideBookingForm = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [rideOptions, setRideOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isDriverAvailable, setIsDriverAvailable] = useState(true);
  const navigate = useNavigate();
  // Mock data for ride options (replace with actual API call)
  const mockRideOptions = [
    { id: 1, name: 'Standard', eta: '5 minutes', cost: '$10' },
    { id: 2, name: 'Premium', eta: '3 minutes', cost: '$15' },
    { id: 3, name: 'Luxury', eta: '2 minutes', cost: '$20' },
  ];

  const handlePickupLocationChange = (e) => {
    setPickupLocation(e.target.value);
  };

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const handleOptionChange = (e) => {
    setSelectedOption(parseInt(e.target.value));
  };

  const handleBooking = (e) => {
    e.preventDefault();
    // Perform ride booking and driver assignment
    if (pickupLocation !== '' & destination !== '' & rideOptions !== '') {
        // Display a success message or error message based on driver availability
        if (isDriverAvailable ) {
        alert('Ride booked successfully!');
        alert('Ride completed')
        navigate('/feedback')
        } else {
        alert('No drivers available for the selected ride option. Please try again later.');
        }
    }
    else{
        alert('Please select all the fields')
    }
  };

  useEffect(() => {
    // Fetch available ride options based on pickupLocation and destination
    // You can replace this with your actual API call to fetch ride options
    const fetchRideOptions = () => {
      // Simulating API call delay
      setTimeout(() => {
        setRideOptions(mockRideOptions);
      }, 1000);
    };

    // Call the fetchRideOptions function when pickupLocation or destination changes
    if (pickupLocation && destination) {
      fetchRideOptions();
    }
  }, [pickupLocation, destination]);

  return (
    <div className="container">
        <div className="form-box">
            <Link to="/"><h4>logout</h4></Link>
            <h1>Rideshare</h1>
            <h2>Ride Booking</h2>
            <form onSubmit={handleBooking} className="ride-booking-form">
                <label htmlFor="pickupLocation">Pickup Location*</label>
                <input
                type="text"
                id="pickupLocation"
                value={pickupLocation}
                onChange={handlePickupLocationChange}
                />
                <br/>
                <label htmlFor="destination">Destination*</label>
                <input
                type="text"
                id="destination"
                value={destination}
                onChange={handleDestinationChange}
                />
                <br/>
                <label htmlFor="rideOptions">Ride Options*</label>
                <select id="rideOptions" value={selectedOption} onChange={handleOptionChange}>
                    <option value="" disabled>Select an option</option>
                    {rideOptions.map((option) => (
                        <option key={option.id} value={option.id}>
                        {option.name} - ETA: {option.eta}, Cost: {option.cost}
                        </option>
                    ))}
                </select>
                <br/>
                <button type="submit">Book Ride</button>
            </form>       
    </div>
    </div>
  );
};

export default RideBookingForm;
