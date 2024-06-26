import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./Components/login/Register";
import { Login } from "./Components/login/Login";
import { Forgot } from "./Components/login/Forgot";
import { Reset } from "./Components/login/Reset";
import  Home1  from "./Components/Home1";
import PrivateRouted from "./PrivatedRoute";
import Apps from "./Apps";
import App2 from "./Components/Customers_log/App2";
import Profile from "./Components/profile";

function App() {
  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route>
          <Route index path="/*" element={<PrivateRouted element={<App2 />} />} />
          {/* <Route path="/*" element={<Profile />} /> */}
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot" element={<Forgot />} />
            <Route path="/reset" element={<Reset />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;




// import React from "react";
// import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import "./App.css";
// import Register from "./Components/login/Register";
// import { Login } from "./Components/login/Login";
// import { Forgot } from "./Components/login/Forgot";
// import { Reset } from "./Components/login/Reset";
// import Home1 from "./Components/Home1";
// import PrivateRoute from "../src/PrivatedRoute";
// import Apps from "./Apps";
// import App2 from "./Components/Customers_log/App2";
// import Profile from "./Components/profile";

// function App() {
//   const userData = JSON.parse(localStorage.getItem('user'));
//   const role = userData ? userData.role : '';

//   return (
//     <BrowserRouter>
//       <Routes>
//         {role === 'admin' ? (
//           <Route path="/" element={<PrivateRoute element={<Apps />} />} />
//         ) : (
//           <Route path="/" element={<PrivateRoute element={<App2 />} />} />
//         )}
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/forgot" element={<Forgot />} />
//         <Route path="/reset" element={<Reset />} />
//         <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
//         {/* Add more routes as needed */}
//         <Route path="/*" element={<Navigate to="/" />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// import React from "react";
// import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import "./App.css";
// import Register from "./Components/login/Register";
// import { Login } from "./Components/login/Login";
// import { Forgot } from "./Components/login/Forgot";
// import { Reset } from "./Components/login/Reset";
// import Home1 from "./Components/Home1";
// import PrivateRoute from "../src/PrivatedRoute";
// import Apps from "./Apps";
// import App2 from "./Components/Customers_log/App2";
// import Profile from "./Components/profile";

// function App() {
//   const userData = JSON.parse(localStorage.getItem('user'));
//   const role = userData ? userData.role : '';

//   return (
//     <BrowserRouter>
//       <Routes>
//         {role === 'admin' ? (
//           <Route path="/" element={<PrivateRoute element={<Apps />} />} />
//         ) : (
//           <Route path="/" element={<PrivateRoute element={<App2 />} />} />
//         )}
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/forgot" element={<Forgot />} />
//         <Route path="/reset" element={<Reset />} />
//         <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
//         {/* Add more routes as needed */}
//         <Route path="/*" element={<Navigate to="/" />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// import React from "react";
// import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import "./App.css";
// import Register from "./Components/login/Register";
// import { Login } from "./Components/login/Login";
// import { Forgot } from "./Components/login/Forgot";
// import { Reset } from "./Components/login/Reset";
// import Home1 from "./Components/Home1";
// import PrivateRoute from "../src/PrivatedRoute";
// import Apps from "./Apps";
// import App2 from "./Components/Customers_log/App2";
// import Profile from "./Components/profile";

// function App() {
//   const userData = JSON.parse(localStorage.getItem('user'));
//   const role = userData ? userData.role : '';

//   return (
//     <BrowserRouter>
//       <Routes>
//         {role === 'admin' ? (
//           <Route path="/" element={<PrivateRoute element={<Apps />} />} />
//         ) : (
//           <Route path="/" element={<PrivateRoute element={<App2 />} />} />
//         )}
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/forgot" element={<Forgot />} />
//         <Route path="/reset" element={<Reset />} />
//         <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
//         {/* Add more routes as needed */}
//         <Route path="/*" element={<Navigate to="/" />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// import React from "react";
// import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import "./App.css";
// import Register from "./Components/login/Register";
// import { Login } from "./Components/login/Login";
// import { Forgot } from "./Components/login/Forgot";
// import { Reset } from "./Components/login/Reset";
// import Home1 from "./Components/Home1";
// import PrivateRoute from "../src/PrivatedRoute";
// import Apps from "./Apps";
// import App2 from "./Components/Customers_log/App2";
// import Profile from "./Components/profile";

// function App() {
//   const userData = JSON.parse(localStorage.getItem('user'));
//   const role = userData ? userData.role : '';

//   // Print role in console
//   console.log('user role giri:', role);

//   return (
//     <BrowserRouter>
//       <Routes>
//         {role === 'admin' ? (
//           <Route path="/" element={<PrivateRoute element={<Apps />} />} />
//         ) : (
//           <Route path="/" element={<PrivateRoute element={<App2 />} />} />
//         )}
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/forgot" element={<Forgot />} />
//         <Route path="/reset" element={<Reset />} />
//         <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
//         {/* Add more routes as needed */}
//         <Route path="/*" element={<Navigate to="/" />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// import React, { useEffect, useState } from "react";
// import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import "./App.css";
// import Register from "./Components/login/Register";
// import { Login } from "./Components/login/Login";
// import { Forgot } from "./Components/login/Forgot";
// import { Reset } from "./Components/login/Reset";
// import Home1 from "./Components/Home1";
// import PrivateRoute from "../src/PrivatedRoute";
// import Apps from "./Apps";
// import App2 from "./Components/Customers_log/App2";
// import Profile from "./Components/profile";

// function App() {
//   const [role, setRole] = useState('');

//   useEffect(() => {
//     const userData = JSON.parse(localStorage.getItem('user'));
//     if (userData && userData.role) {
//       setRole(userData.role);
//     }
//   }, []);

//   // Print role in console
//   console.log('user role giri1:', role);

//   return (
//     <BrowserRouter>
//       <Routes>
//         {role === 'admin' ? (
//           <Route path="/" element={<PrivateRoute element={<Apps />} />} />
//         ) : (
//           <Route path="/" element={<PrivateRoute element={<App2 />} />} />
//         )}
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/forgot" element={<Forgot />} />
//         <Route path="/reset" element={<Reset />} />
//         <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
//         {/* Add more routes as needed */}
//         <Route path="/*" element={<Navigate to="/" />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// App.js


// import React, { useEffect, useState } from "react";
// import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import "./App.css";
// import Register from "./Components/login/Register";
// import { Login } from "./Components/login/Login";
// import { Forgot } from "./Components/login/Forgot";
// import { Reset } from "./Components/login/Reset";
// import PrivateRoute from "../src/PrivatedRoute";
// import Apps from "./Apps";
// import App2 from "./Components/Customers_log/App2";
// import Profile from "./Components/profile";

// function App() {
//   const [role, setRole] = useState("");

//   useEffect(() => {
//     // Fetch user data from localStorage on component mount
//     const userData = JSON.parse(localStorage.getItem("user"));
//     if (userData && userData.role) {
//       setRole(userData.role);
//     }
//   }, []);

//   // Print role in console to verify
//   console.log("User role:", role);

//   return (
//     <BrowserRouter>
//       <Routes>
//         {role === "admin" ? (
//           <Route path="/" element={<PrivateRoute element={<Apps />} />} />
//         ) : (
//           <Route path="/" element={<PrivateRoute element={<App2 />} />} />
//         )}
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/forgot" element={<Forgot />} />
//         <Route path="/reset" element={<Reset />} />
//         <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
//         {/* Add more routes as needed */}
//         <Route path="/*" element={<Navigate to="/" />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// App.js


// import React, { useEffect, useState } from "react";
// import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import "./App.css";
// import Register from "./Components/login/Register";
// import { Login } from "./Components/login/Login";
// import { Forgot } from "./Components/login/Forgot";
// import { Reset } from "./Components/login/Reset";
// import PrivateRoute from "./PrivatedRoute"; // Adjust the path to PrivatedRoute
// import Apps from "./Apps";
// import App2 from "./Components/Customers_log/App2";
// import Profile from "./Components/profile";

// function App() {
//   const [role, setRole] = useState("");

//   useEffect(() => {
//     // Fetch user data from localStorage on component mount
//     const userData = JSON.parse(localStorage.getItem("user"));
//     if (userData && userData.role) {
//       setRole(userData.role);
//     }
//   }, []); // Empty dependency array ensures this effect runs only once on component mount

//   // Print role in console to verify
//   console.log("User role:", role);

//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Public routes */}
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/forgot" element={<Forgot />} />
//         <Route path="/reset" element={<Reset />} />
        
//         {/* Protected route */}
//         <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
        
//         {/* Conditional rendering based on user role */}
//         {role === "admin" ? (
//           <Route path="/" element={<PrivateRoute element={<Apps />} />} />
//         ) : (
//           <Route path="/" element={<PrivateRoute element={<App2 />} />} />
//         )}
        
//         {/* Fallback route */}
//         <Route path="/*" element={<Navigate to="/" />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;



// import React, { useEffect, useState } from "react";
// import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import "./App.css";
// import Register from "./Components/login/Register";
// import { Login } from "./Components/login/Login";
// import { Forgot } from "./Components/login/Forgot";
// import { Reset } from "./Components/login/Reset";
// import PrivateRoute from "./PrivatedRoute"; // Adjust the path to PrivatedRoute
// import Apps from "./Apps";
// import App2 from "./Components/Customers_log/App2";
// import Profile from "./Components/profile";

// function App() {
//   const [role, setRole] = useState("");

//   useEffect(() => {
//     // Fetch user data from localStorage on component mount
//     const userData = JSON.parse(localStorage.getItem("user"));
//     if (userData && userData.role) {
//       setRole(userData.role);
//     }
//   }, []); // Empty dependency array ensures this effect runs only once on component mount

//   // Print role in console to verify
//   console.log("User role:", role);

//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Public routes */}
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/forgot" element={<Forgot />} />
//         <Route path="/reset" element={<Reset />} />
        
//         {/* Protected route */}
//         <Route
//           path="/profile"
//           element={<PrivateRoute element={<Profile />} />}
//         />
        
//         {/* Conditional rendering based on user role */}
//         {role === "admin" ? (
//           <Route path="/" element={<PrivateRoute element={<Apps />} />} />
//         ) : (
//           <Route path="/" element={<PrivateRoute element={<App2 />} />} />
//         )}
        
//         {/* Fallback route */}
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


// import React, { useEffect, useState } from "react";
// import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import "./App.css";
// import Register from "./Components/login/Register";
// import { Login } from "./Components/login/Login";
// import { Forgot } from "./Components/login/Forgot";
// import { Reset } from "./Components/login/Reset";
// import PrivateRoute from "./PrivatedRoute"; // Adjust the path to PrivatedRoute
// import Apps from "./Apps";
// import App2 from "./Components/Customers_log/App2";
// import Profile from "./Components/profile";

// function App() {
//   const [role, setRole] = useState(""); // State for user role
//   const [roleInitialized, setRoleInitialized] = useState(false); // State to track role initialization

//   useEffect(() => {
//     // Fetch user data from localStorage on component mount
//     const userData = JSON.parse(localStorage.getItem("user"));
//     if (userData && userData.role) {
//       setRole(userData.role);
//       setRoleInitialized(true);
//     }
//   }, []); // Empty dependency array ensures this effect runs only once on component mount

//   // Print role in console to verify
//   console.log("User role:", role);

//   // Render loading state until role is initialized
//   if (!roleInitialized) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Public routes */}
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/forgot" element={<Forgot />} />
//         <Route path="/reset" element={<Reset />} />
        
//         {/* Protected route */}
//         <Route
//           path="/profile"
//           element={<PrivateRoute element={<Profile />} />}
//         />
        
//         {/* Conditional rendering based on user role */}
//         {role === "admin" ? (
//           <Route path="/" element={<PrivateRoute element={<Apps />} />} />
//         ) : (
//           <Route path="/" element={<PrivateRoute element={<App2 />} />} />
//         )}
        
//         {/* Fallback route */}
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


// import React, { useEffect, useState } from "react";
// import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import "./App.css";
// import Register from "./Components/login/Register";
// import { Login } from "./Components/login/Login";
// import { Forgot } from "./Components/login/Forgot";
// import { Reset } from "./Components/login/Reset";
// import PrivateRoute from "../src/PrivatedRoute"; // Adjust the path to PrivatedRoute
// import Apps from "./Apps";
// import App2 from "../src/Components/Customers_log/App2";
// import Profile from "./Components/profile";

// function App() {
//   const [role, setRole] = useState(""); // State for user role
//   const [roleInitialized, setRoleInitialized] = useState(false); // State to track role initialization

//   useEffect(() => {
//     // Fetch user data from localStorage on component mount
//     const userData = JSON.parse(localStorage.getItem("user"));
//     if (userData && userData.role) {
//       setRole(userData.role);
//       setRoleInitialized(true);
//     }
//   }, []); // Empty dependency array ensures this effect runs only once on component mount

//   // Print role in console to verify
//   console.log("User role:", role);

//   // Render loading state until role is initialized
//   if (!roleInitialized) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Public routes */}
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/forgot" element={<Forgot />} />
//         <Route path="/reset" element={<Reset />} />
        
//         {/* Protected route */}
//         <Route
//           path="/profile"
//           element={<PrivateRoute element={<Profile />} />}
//         />
        
//         {/* Conditional rendering based on user role */}
//         {role === "admin" ? (
//           <Route path="/" element={<PrivateRoute element={<Apps />} />} />
//         ) : (
//           <Route path="/" element={<PrivateRoute element={<App2 />} />} />
//         )}
        
//         {/* Fallback route */}
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// import React, { useEffect, useState } from "react";
// import { BrowserRouter, Route, Routes, Navigate, Link } from "react-router-dom";
// import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
// import "./App.css";
// import Register from "./Components/login/Register";
// import { Login } from "./Components/login/Login";
// import { Forgot } from "./Components/login/Forgot";
// import { Reset } from "./Components/login/Reset";
// import PrivateRoute from "./PrivatedRoute"; // Adjust the path to PrivatedRoute
// import Profile from "./Components/profile";
// import CustomerList from './Components/Customer/CustomerList';
// import CustomerForm from './Components/Customer/CustomerForm';
// import CustomerEdit from './Components/Customer/CustomerEdit';
// import CustomerDelete from './Components/Customer/CustomerDelete';
// import ProductList from './Components/Products/ProductList';
// import ProductForm from './Components/Products/ProductForm';
// import ProductEdit from './Components/Products/ProductEdit';
// import ProductDelete from './Components/Products/ProductDelete';
// import BusDetails from './Components/BusDetails';
// import Billing from './Components/Billing';
// import BusSearch from './Components/BusSearch';

// function App() {
//   const [role, setRole] = useState(""); // State for user role
//   const [roleInitialized, setRoleInitialized] = useState(false); // State to track role initialization

//   useEffect(() => {
//     // Fetch user data from localStorage on component mount
//     const userData = JSON.parse(localStorage.getItem("user"));
//     if (userData && userData.role) {
//       setRole(userData.role);
//       setRoleInitialized(true);
//     }
//   }, []); // Empty dependency array ensures this effect runs only once on component mount

//   // Print role in console to verify
//   console.log("User role:", role);

//   // Render loading state until role is initialized
//   if (!roleInitialized) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <BrowserRouter>
//       <div className="container-fluid p-0">
//         <Navbar expand="lg" bg="primary" variant="dark" style={{ borderBottom: '1px solid #ccc', width: '100%' }}>
//           <Container fluid>
//             <Navbar.Brand as={Link} to="/">GK Inventory Billing App</Navbar.Brand>
//             <Navbar.Toggle aria-controls="navbarNavDropdown" />
//             <Navbar.Collapse id="navbarNavDropdown">
//               <Nav className="me-auto mb-2 mb-lg-0">
//                 <Nav.Link as={Link} to="/">Home</Nav.Link>
//                 <Nav.Link as={Link} to="/billing">Invoice</Nav.Link>

//                 <NavDropdown title="Products" id="navbarScrollingDropdown">
//                   <NavDropdown.Item as={Link} to="/ProductList">View Products</NavDropdown.Item>
//                   <NavDropdown.Item as={Link} to="/ProductForm">Create a New Product</NavDropdown.Item>
//                   <NavDropdown.Item as={Link} to="/ProductEdit">Edit / Update a Product</NavDropdown.Item>
//                   <NavDropdown.Item as={Link} to="/ProductDelete">Delete a Product</NavDropdown.Item>
//                 </NavDropdown>

//                 <NavDropdown title="Customers" id="navbarScrollingDropdown">
//                   <NavDropdown.Item as={Link} to="/CustomerList">View Customers</NavDropdown.Item>
//                   <NavDropdown.Item as={Link} to="/CustomerForm">Create a New Customer</NavDropdown.Item>
//                   <NavDropdown.Item as={Link} to="/EditCustomer">Edit / Update a Customer</NavDropdown.Item>
//                   <NavDropdown.Item as={Link} to="/DeleteCustomer">Delete a Customer</NavDropdown.Item>
//                 </NavDropdown>
//               </Nav>

//               <Form className="d-flex">
//                 <FormControl
//                   type="search"
//                   placeholder="Search"
//                   className="me-2"
//                   aria-label="Search"
//                 />
//                 <Button variant="outline-success">Search</Button>
//               </Form>
//             </Navbar.Collapse>
//           </Container>
//         </Navbar>

//         <Routes>
//           {/* Public routes */}
//           <Route path="/register" element={<Register />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/forgot" element={<Forgot />} />
//           <Route path="/reset" element={<Reset />} />
          
//           {/* Protected route */}
//           <Route
//             path="/profile"
//             element={<PrivateRoute element={<Profile />} />}
//           />
          
//           {/* Conditional rendering based on user role */}
//           {role === "admin" ? (
//             <>
//               <Route path="/" element={<PrivateRoute element={<Apps />} />} />
//               {/* Additional admin routes */}
//               <Route path="/ProductList" element={<ProductList />} />
//               <Route path="/ProductForm" element={<ProductForm />} />
//               <Route path="/ProductEdit" element={<ProductEdit />} />
//               <Route path="/ProductDelete" element={<ProductDelete />} />
//               <Route path="/CustomerList" element={<CustomerList />} />
//               <Route path="/EditCustomer" element={<CustomerEdit />} />
//               <Route path="/DeleteCustomer" element={<CustomerDelete />} />
//             </>
//           ) : (
//             <>
//               <Route path="/" element={<PrivateRoute element={<App2 />} />} />
//               {/* Additional non-admin routes */}
//             </>
//           )}
          
//           {/* Fallback route */}
//           <Route path="*" element={<Navigate to="/" />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;


// import React from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Register from "./Components/login/Register";
// import Login from "./Components/login/Login";
// import Forgot from "./Components/login/Forgot";
// import Reset from "./Components/login/Reset";
// import Home1 from "./Components/Home1";
// import PrivateRoute from "../src/PrivatedRoute";
// import Apps from "./Apps";
// import App2 from "./Components/Customers_log/App2";
// import Profile from "./Components/profile";

// function App() {
//   // Function to retrieve user role from localStorage
//   const getUserRole = () => {
//     const user = localStorage.getItem('user');
//     if (user) {
//       const userData = JSON.parse(user);
//       return userData.role; // Assuming role is stored in user data
//     }
//     return null; // Return null if no user data found
//   };

//   // Define routes based on user role
//   const role = getUserRole();

//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Public routes accessible to all users */}
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/forgot" element={<Forgot />} />
//         <Route path="/reset" element={<Reset />} />

//         {/* Private routes based on user role */}
//         {/* Example: Redirect based on user role */}
//         {role === 'admin' && (
//           <>
//             <Route path="/" element={<Navigate to="/dashboard" replace />} />
//             <PrivateRoute path="/dashboard" element={<Apps />} />
//           </>
//         )}

//         {role === 'customer' && (
//           <>
//             <Route path="/" element={<Navigate to="/customer" replace />} />
//             <PrivateRoute path="/customer" element={<App2 />} />
//           </>
//         )}

//         {/* Fallback route for other cases */}
//         <Route path="/" element={<Home1 />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
