


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Bus.css'; // Custom CSS for additional styling

const API_URL = 'http://localhost:3000'; // Adjust this URL to match your backend URL

const BusSearch = () => {
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [date, setDate] = useState('');
  const [buses, setBuses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [noBusesFound, setNoBusesFound] = useState(false); // State to track if no buses are found

  const navigate = useNavigate();

  const fetchAllBuses = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${API_URL}/bus`);
      setBuses(response.data);
    } catch (error) {
      setError('Error fetching bus data. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAllBuses(); // Fetch all buses when component mounts
  }, []); // Empty dependency array ensures this effect runs once

  const handleSearch = async () => {
    setIsLoading(true);
    setError(null);
    setNoBusesFound(false); // Reset noBusesFound state

    try {
      const response = await axios.get(`${API_URL}/bus`, {
        params: { from: pickup, to: dropoff, datesAvailable: date }
      });

      if (response.data.length === 0) {
        setNoBusesFound(true); // Set state to true if no buses are found
      } else {
        setBuses(response.data);
      }
    } catch (error) {
      setError('Error fetching bus data. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBookNow = (busId) => {
    navigate('/bus-details', { state: { busId } });
  };

  return (
    <div className="container">
     

      <section className="search-section" style={{ borderBlock:'black' }}>
        <div className="row justify-content-center mb-4" >
          <div className="col-md-3">
            <label htmlFor="pickup" className="form-label">Pick Up</label>
            <input
              type="text"
              id="pickup"
              className="form-control"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              placeholder="Enter pickup location"
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="dropoff" className="form-label">Drop Off</label>
            <input
              type="text"
              id="dropoff"
              className="form-control"
              value={dropoff}
              onChange={(e) => setDropoff(e.target.value)}
              placeholder="Enter drop off location"
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="datepicker" className="form-label">Select Date</label>
            <input
              type="date"
              id="datepicker"
              className="form-control"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <button
              type="button"
              onClick={handleSearch}
              disabled={isLoading}
              className="btn btn-primary btn-block mt-4"
            >
              {isLoading ? 'Searching...' : 'Search'}
            </button>
          </div>
        </div>
      </section>

      <hr />

      <section className="results-section">
        {error && <div className="alert alert-danger">{error}</div>}

        {noBusesFound && <div className="alert alert-warning">No buses available for the selected criteria.</div>}

        {buses.length > 0 && (
          <div className="row">
            {buses.map(bus => (
              <div key={bus.busId} className="col-md-12 mb-4">
                <div className="card h-100 d-flex flex-column">
                  <div className="card-body">
                    <div className="d-flex justify-content-between mb-3" >
                      <h5 className="card-title">{bus.busName}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">{bus.busNumber}</h6>
                    </div>

                    <div className="d-flex justify-content-between mb-3">
                      <p className="card-text">
                        <p>{bus.from} - {bus.to}</p>
                        <p>{bus.busType}</p>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">Departure: {new Date(bus.departure).toLocaleString()}</small><br />
                        <small className="text-muted">Arrival: {new Date(bus.arrival).toLocaleString()}</small>
                      </p>
                    </div>
                    
                    <div className="d-flex justify-content-between">
                      <p className="card-text">Fare: ₹ {bus.fare}</p>
                      <p className="card-text">Capacity: {bus.capacity}</p>
                      <button className="btn btn-primary" onClick={() => handleBookNow(bus.busId)}>Book Now</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!isLoading && buses.length === 0 && (
          <div className="row">
            <div className="col">
              <p className="text-center">All Buses</p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default BusSearch;


// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../Bus.css'; // Custom CSS for additional styling

// const API_URL = 'http://localhost:3000'; // Adjust this URL to match your backend URL

// const BusSearch = () => {
//   const [pickup, setPickup] = useState('');
//   const [dropoff, setDropoff] = useState('');
//   const [date, setDate] = useState('');
//   const [buses, setBuses] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [noBusesFound, setNoBusesFound] = useState(false); // State to track if no buses are found

//   const navigate = useNavigate();

//   const fetchAllBuses = async () => {
//     setIsLoading(true);
//     setError(null);

//     try {
//       const response = await axios.get(`${API_URL}/bus`);
//       setBuses(response.data);
//     } catch (error) {
//       setError('Error fetching bus data. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchAllBuses(); // Fetch all buses when component mounts
//   }, []); // Empty dependency array ensures this effect runs once

//   const handleSearch = async () => {
//     setIsLoading(true);
//     setError(null);
//     setNoBusesFound(false); // Reset noBusesFound state

//     try {
//       const response = await axios.get(`${API_URL}/bus`, {
//         params: { from: pickup, to: dropoff, datesAvailable: date }
//       });

//       if (response.data.length === 0) {
//         setNoBusesFound(true); // Set state to true if no buses are found
//       } else {
//         setBuses(response.data);
//       }
//     } catch (error) {
//       setError('Error fetching bus data. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleBookNow = (busId) => {
//     navigate('/bus-details', { state: { busId } });
//   };

//   return (
//     <div className="container-fluid">
      

//       <section className="search-section py-4 bg-light">
//         <div className="container">
//           <div className="row justify-content-center mb-4">
//             <div className="col-md-3">
//               <label htmlFor="pickup" className="form-label">Pick Up</label>
//               <input
//                 type="text"
//                 id="pickup"
//                 className="form-control"
//                 value={pickup}
//                 onChange={(e) => setPickup(e.target.value)}
//                 placeholder="Enter pickup location"
//               />
//             </div>
//             <div className="col-md-3">
//               <label htmlFor="dropoff" className="form-label">Drop Off</label>
//               <input
//                 type="text"
//                 id="dropoff"
//                 className="form-control"
//                 value={dropoff}
//                 onChange={(e) => setDropoff(e.target.value)}
//                 placeholder="Enter drop off location"
//               />
//             </div>
//             <div className="col-md-3">
//               <label htmlFor="datepicker" className="form-label">Select Date</label>
//               <input
//                 type="date"
//                 id="datepicker"
//                 className="form-control"
//                 value={date}
//                 onChange={(e) => setDate(e.target.value)}
//               />
//             </div>
//             <div className="col-md-3 d-flex align-items-end">
//               <button
//                 type="button"
//                 onClick={handleSearch}
//                 disabled={isLoading}
//                 className="btn btn-primary btn-block w-100"
//               >
//                 {isLoading ? 'Searching...' : 'Search'}
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       <hr />

//       <section className="results-section py-4">
//         <div className="container">
//           {error && <div className="alert alert-danger">{error}</div>}

//           {noBusesFound && <div className="alert alert-warning">No buses available for the selected criteria.</div>}
//           {buses.length > 0 && (
//           <div className="row">
//             {buses.map(bus => (
//               <div key={bus.busId} className="col-md-12 mb-4">
//                 <div className="card h-100 d-flex flex-column">
//                   <div className="card-body">
//                     <div className="d-flex justify-content-between mb-3">
//                       <h5 className="card-title">{bus.busName}</h5>
//                       <h6 className="card-subtitle mb-2 text-muted">{bus.busNumber}</h6>
//                     </div>

//                     <div className="d-flex justify-content-between mb-3">
//                       <p className="card-text">
//                         <p>{bus.from} - {bus.to}</p>
//                         <p>{bus.busType}</p>
//                       </p>
//                       <p className="card-text">
//                         <small className="text-muted">Departure: {new Date(bus.departure).toLocaleString()}</small><br />
//                         <small className="text-muted">Arrival: {new Date(bus.arrival).toLocaleString()}</small>
//                       </p>
//                     </div>
                    
//                     <div className="d-flex justify-content-between">
//                       <p className="card-text">Fare: ₹ {bus.fare}</p>
//                       <p className="card-text">Capacity: {bus.capacity}</p>
//                       <button className="btn btn-primary" onClick={() => handleBookNow(bus.busId)}>Book Now</button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//           {!isLoading && buses.length === 0 && (
//             <div className="row">
//               <div className="col">
//                 <p className="text-center">All Buses</p>
//               </div>
//             </div>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default BusSearch;
