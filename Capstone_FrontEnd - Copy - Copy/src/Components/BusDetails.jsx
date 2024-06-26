

import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../BusDetails.css'; // Custom CSS for additional styling

const API_URL = 'http://localhost:3000'; // Adjust this URL to match your backend URL

const BusDetails = () => {
  const location = useLocation();
  const busId = location.state?.busId;
  const navigate = useNavigate();

  const [bus, setBus] = useState(null);
  const [numPassengers, setNumPassengers] = useState(1);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [customerDetails, setCustomerDetails] = useState(null);
  const [discount, setDiscount] = useState(0);

  const fetchBusDetails = async (busId) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${API_URL}/bus/${busId}`);
      setBus(response.data);
    } catch (error) {
      setError('Error fetching bus details. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (busId) {
      fetchBusDetails(busId);
    }
  }, [busId]);

  useEffect(() => {
    setNumPassengers(selectedSeats.length);
  }, [selectedSeats]);

  const handleSeatSelection = (seat) => {
    setSelectedSeats((prevSelectedSeats) => {
      if (prevSelectedSeats.includes(seat)) {
        return prevSelectedSeats.filter((s) => s !== seat);
      } else {
        return [...prevSelectedSeats, seat];
      }
    });
  };

  const cartSubtotal = selectedSeats.length * bus?.fare || 0;
  const discountAmount = cartSubtotal * (discount / 100);
  const cartTotalBeforeGST = cartSubtotal - discountAmount;
  const GST = cartTotalBeforeGST * 0.05;
  const cartTotal = cartTotalBeforeGST + GST;

  const handleBooking = () => {
    // Navigate to Billing page with booking details
    const bookingDetails = {
      selectedSeats,
      bus,
      numPassengers,
      discount,
      discountAmount,
      GST,
      cartTotal
    };

    navigate('/billing', { state: { bookingDetails, customerDetails } });
  };

  if (isLoading) {
    return <div className="container">Loading...</div>;
  }

  if (error) {
    return <div className="container alert alert-danger">{error}</div>;
  }

  if (!bus) {
    return <div>No bus details available</div>;
  }

  const halfCapacity = Math.ceil(bus.capacity / 2);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="mb-4">
            <h5>Select Seats</h5>
            <div className="mb-3">
              <h6>Lower Half</h6>
              <div className="seat-selection">
                {[...Array(halfCapacity).keys()].map((seat) => (
                  <button
                    key={seat}
//                     className={`btn ${selectedSeats.includes(seat) ? 'btn-success' : 'btn-outline-primary'} m-1`}
// style={{ borderColor: '#3d5c5c', color: '#3d5c5c' }}
className={`btn ${selectedSeats.includes(seat) ? 'btn-success' : 'btn-outline-primary'} m-1`}
style={{ borderColor: '#3d5c5c', color: selectedSeats.includes(seat) ? '#fff' : '#3d5c5c' }}


                    onClick={() => handleSeatSelection(seat)}
                    disabled={selectedSeats.includes(seat)}
                  >
                    {seat + 1}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-3">
              <h6>Upper Half</h6>
              <div className="seat-selection">
                {[...Array(bus.capacity - halfCapacity).keys()].map((seat) => (
                  <button
                    key={seat + halfCapacity}
                    className={`btn ${selectedSeats.includes(seat + halfCapacity) ? 'btn-success' : 'btn-outline-primary'} m-1`}
                    style={{ borderColor: '#3d5c5c', color: '#3d5c5c' }}
                    
                    onClick={() => handleSeatSelection(seat + halfCapacity)}
                    disabled={selectedSeats.includes(seat + halfCapacity)}
                  >
                    {seat + 1 + halfCapacity}
                  </button>
                ))}
              </div>
            </div>
            
          </div>
          <div className="mb-4">
            <label htmlFor="discount" className="form-label">Discount (%)</label>
            <input
              type="number"
              id="discount"
              className="form-control"
              value={discount}
              onChange={(e) => setDiscount(parseFloat(e.target.value))}
            />
          </div>
         

          
        </div>
        <div className="col-md-6">
  <div className="card mb-4">
    <div className="card-body">
      <h5 className="card-title">{bus.busName}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{bus.busNumber}</h6>
      
      <table className="table table-bordered">
        <tbody>
          <tr>
            <td>From - To</td>
            <td>{bus.from} - {bus.to}</td>
          </tr>
          <tr>
            <td>Bus Type</td>
            <td>{bus.busType}</td>
          </tr>
          <tr>
            <td>Departure</td>
            <td>{new Date(bus.departure).toLocaleString()}</td>
          </tr>
          <tr>
            <td>Arrival</td>
            <td>{new Date(bus.arrival).toLocaleString()}</td>
          </tr>
          <tr>
            <td>Fare</td>
            <td>₹ {bus.fare.toLocaleString()}</td>
          </tr>
          <tr>
            <td>Remaining Capacity</td>
            <td>{bus.capacity - selectedSeats.length}</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
          <div className="mb-4">
            <label htmlFor="numPassengers" className="form-label">Number of Passengers</label>
            <input
              type="number"
              id="numPassengers"
              className="form-control"
              value={numPassengers}
              readOnly
            />
          </div>
         

          <button className="btn btn-primary" onClick={handleBooking}>Confirm Booking</button>
        </div>
        
      </div>
    </div>
  );
};

export default BusDetails;


