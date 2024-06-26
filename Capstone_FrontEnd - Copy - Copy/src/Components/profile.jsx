// import { useState, useEffect } from "react";
// import { Navigate } from "react-router-dom";

// const Profile = () => {
//   const [data, setData] = useState({
//     userName: "",
//     email: "",
//     phoneNumber: "",
//     age: "",
//     gender: "",
//   });
//   const [loggedIn, setLoggedIn] = useState(true);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const response = await fetch(`http://localhost:3000/profile`, {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         });
//         if (response.status === 200) {
//           const profileData = await response.json();
//           setData(profileData);
//         } else {
//           setLoggedIn(false);
//         }
//       } catch (err) {
//         console.log(err);
//         setLoggedIn(false);
//       }
//     };
//     fetchProfile();
//   }, []);

//   const handleChange = (ele) => {
//     const { name, value } = ele.target;
//     setData({
//       ...data,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (ele) => {
//     ele.preventDefault();
//     try {
//       const response = await fetch(`http://localhost:3000/profile`, {
//         method: "PUT",
//         body: JSON.stringify(data),
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });
//       if (response.status === 200) {
//         alert("Profile updated successfully.");
//       } else {
//         alert("Error updating profile.");
//       }
//     } catch (err) {
//       console.log(err);
//       alert("Error while updating profile");
//     }
//   };

//   if (!loggedIn) {
//     return <Navigate to={"/login"} replace />;
//   }

//   return (
//     <div
//       style={{
//         backgroundImage: 'url("/highway.jpg")',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         minHeight: '100vh',
//         backgroundColor: '#d1e0e0',
//       }}
//     >
//       <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#3d5c5c' }}>
//         <div className="container-fluid">
//           <h2 className="navbar-brand" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '24px', color: '#141f1f' }}>JourneyJet Bus Booking</h2>
//         </div>
//       </nav>
//       <div className="container mt-5">
//         <div className="row justify-content-center">
//           <div className="col-md-6">
//             <div className="card transparent-form" style={{ borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
//               <div className="card-body">
//                 <h4 className="card-title text-center mb-4" style={{ color: '#1f2e2e', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>Profile</h4>
//                 <form onSubmit={handleSubmit}>
//                   <div className="mb-3">
//                     <label htmlFor="userName" className="form-label">Name:</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="userName"
//                       name="userName"
//                       value={data.userName}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="email" className="form-label">Email:</label>
//                     <input
//                       type="email"
//                       className="form-control"
//                       id="email"
//                       name="email"
//                       value={data.email}
//                       onChange={handleChange}
//                       readOnly
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="phoneNumber" className="form-label">Phone Number:</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="phoneNumber"
//                       name="phoneNumber"
//                       value={data.phoneNumber}
//                       onChange={handleChange}
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="age" className="form-label">Age:</label>
//                     <input
//                       type="number"
//                       className="form-control"
//                       id="age"
//                       name="age"
//                       value={data.age}
//                       onChange={handleChange}
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="gender" className="form-label">Gender:</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="gender"
//                       name="gender"
//                       value={data.gender}
//                       onChange={handleChange}
//                     />
//                   </div>
//                   <div className="d-grid">
//                     <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#1f2e2e', border: 'none' }}>Update Profile</button>
//                   </div>
//                 </form>
//                 <div className="text-center mt-3">
//                   <Link to="/" className="text-decoration-none" style={{ color: '#1f2e2e', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>Back to Home</Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

// import React, { useState, useEffect } from "react";
// import { Link, Navigate } from "react-router-dom";

// const Profile = () => {
//   const [user, setUser] = useState(null); // State to hold user data
//   const [loading, setLoading] = useState(true); // State to manage loading state

//   useEffect(() => {
//     // Function to fetch user data (replace with your actual logic)
//     const fetchUserData = async () => {
//       try {
//         // Example: Fetch user data from backend or local storage
//         const userData = JSON.parse(localStorage.getItem("user")); // Assuming user data stored in localStorage
//         setUser(userData);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//         setLoading(false);
//       }
//     };

//     fetchUserData();
//   }, []);

//   // If loading, you can show a loading spinner or message
//   if (loading) {
//     return <p>Loading user profile...</p>;
//   }

//   // If user is not logged in (redirect to login page)
//   if (!user) {
//     return <Navigate to="/login" replace />;
//   }

//   return (
//     <div className="container mt-5">
//       <div className="row justify-content-center">
//         <div className="col-md-6">
//           <div className="card" style={{ borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
//             <div className="card-body">
//               <h2 className="card-title text-center mb-4">User Profile</h2>
//               <div className="mb-3">
//                 <label htmlFor="userName" className="form-label">Name:</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="userName"
//                   value={user.userName}
//                   disabled
//                 />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="email" className="form-label">Email:</label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="email"
//                   value={user.email}
//                   disabled
//                 />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="phoneNumber" className="form-label">Phone Number:</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="phoneNumber"
//                   value={user.phoneNumber}
//                   disabled
//                 />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="age" className="form-label">Age:</label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="age"
//                   value={user.age}
//                   disabled
//                 />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="gender" className="form-label">Gender:</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="gender"
//                   value={user.gender}
//                   disabled
//                 />
//               </div>
//               <div className="d-grid">
//                 <Link to="/" className="btn btn-primary" style={{ backgroundColor: '#1f2e2e', border: 'none' }}>Back to Home</Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

// import React, { useState, useEffect } from "react";
// import { Link, Navigate } from "react-router-dom";

// const Profile = () => {
//   const [user, setUser] = useState(null); // State to hold user data
//   const [loading, setLoading] = useState(true); // State to manage loading state

//   useEffect(() => {
//     // Function to fetch user data (replace with your actual logic)
//     const fetchUserData = async () => {
//       try {
//         // Example: Fetch user data from backend or local storage
//         const userData = JSON.parse(localStorage.getItem("user")); // Assuming user data stored in localStorage
//         setUser(userData);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//         setLoading(false);
//       }
//     };

//     fetchUserData();
//   }, []);

//   // If loading, you can show a loading spinner or message
//   if (loading) {
//     return <p>Loading user profile...</p>;
//   }

//   // If user is not logged in (redirect to login page)
//   if (!user) {
//     return <Navigate to="/login" replace />;
//   }

//   return (
//     <div className="container mt-5">
//       <div className="row justify-content-center">
//         <div className="col-md-6">
//           <div className="card" style={{ borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
//             <div className="card-body">
//               <h2 className="card-title text-center mb-4">User Profile</h2>
//               <div className="mb-3">
//                 <label htmlFor="userName" className="form-label">Name:</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="userName"
//                   value={user.userName}
//                   disabled
//                 />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="email" className="form-label">Email:</label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="email"
//                   value={user.email}
//                   disabled
//                 />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="phoneNumber" className="form-label">Phone Number:</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="phoneNumber"
//                   value={user.phoneNumber}
//                   disabled
//                 />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="age" className="form-label">Age:</label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="age"
//                   value={user.age}
//                   disabled
//                 />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="gender" className="form-label">Gender:</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="gender"
//                   value={user.gender}
//                   disabled
//                 />
//               </div>
//               <div className="d-grid">
//                 <Link to="/" className="btn btn-primary" style={{ backgroundColor: '#1f2e2e', border: 'none' }}>Back to Home</Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

// import React, { useState, useEffect } from "react";
// import { Link, Navigate } from "react-router-dom";

// const Profile = () => {
//   const [user, setUser] = useState(null); // State to hold user data
//   const [loading, setLoading] = useState(true); // State to manage loading state

//   useEffect(() => {
//     // Function to fetch user data based on registerId (replace with your actual logic)
//     const fetchUserData = async () => {
//       try {
//         // Example: Fetch user data from backend based on registerId
//         const registerId = localStorage.getItem("registerId"); // Assuming registerId stored in localStorage after registration
//         const response = await fetch(`http://localhost:3000/user/${registerId}`); // Adjust endpoint URL as per your backend

//         if (response.ok) {
//           const userData = await response.json();
//           setUser(userData);
//           setLoading(false);
//         } else {
//           console.error("Failed to fetch user data");
//           setLoading(false);
//         }
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//         setLoading(false);
//       }
//     };

//     fetchUserData();
//   }, []);

//   // If loading, you can show a loading spinner or message
//   if (loading) {
//     return <p>Loading user profile...</p>;
//   }

//   // If user is not logged in (redirect to login page)
//   if (!user) {
//     return <Navigate to="/login" replace />;
//   }

//   return (
//     <div className="container mt-5">
//       <div className="row justify-content-center">
//         <div className="col-md-6">
//           <div className="card" style={{ borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
//             <div className="card-body">
//               <h2 className="card-title text-center mb-4">User Profile</h2>
//               <div className="mb-3">
//                 <label htmlFor="userName" className="form-label">Name:</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="userName"
//                   value={user.userName}
//                   disabled
//                 />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="email" className="form-label">Email:</label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="email"
//                   value={user.email}
//                   disabled
//                 />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="phoneNumber" className="form-label">Phone Number:</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="phoneNumber"
//                   value={user.phoneNumber}
//                   disabled
//                 />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="age" className="form-label">Age:</label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="age"
//                   value={user.age}
//                   disabled
//                 />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="gender" className="form-label">Gender:</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="gender"
//                   value={user.gender}
//                   disabled
//                 />
//               </div>
//               <div className="d-grid">
//                 <Link to="/" className="btn btn-primary" style={{ backgroundColor: '#1f2e2e', border: 'none' }}>Back to Home</Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null); // State to hold user data

  useEffect(() => {
    // Function to fetch user data (replace with your actual logic)
    const fetchUserData = async () => {
      try {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (!storedUser) {
          // Handle case where user data is not found in localStorage
          console.error("User data not found");
          return;
        }
        
        // Example: Fetch user data from backend based on stored user ID or email
        const response = await fetch(`http://localhost:3000/register/${storedUser.email}`); // Adjust endpoint URL as per your backend
        
        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        } else {
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  if (!localStorage.getItem("user")) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card" style={{ borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
            <div className="card-body">
              <h2 className="card-title text-center mb-4">User Profile</h2>
              {user && (
                <div>
                  <div className="mb-3">
                    <label htmlFor="userName" className="form-label">Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="userName"
                      value={user.userName}
                      disabled
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={user.email}
                      disabled
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phoneNumber" className="form-label">Phone Number:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="phoneNumber"
                      value={user.phoneNumber}
                      disabled
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="role" className="form-label">Role:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="role"
                      value={user.role}
                      disabled
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="gender" className="form-label">Gender:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="gender"
                      value={user.gender}
                      disabled
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="age" className="form-label">Age:</label>
                    <input
                      type="number"
                      className="form-control"
                      id="age"
                      value={user.age}
                      disabled
                    />
                  </div>
                </div>
              )}
              <div className="d-grid">
                <Link to="/" className="btn btn-primary" style={{ backgroundColor: '#1f2e2e', border: 'none' }}>Back to Home</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
