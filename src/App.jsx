// import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
// import Home from"./pages/Home"
// import Login from "./pages/Login"
// import About from "./pages/About"
// // import Navbar from "./components/Navbar";
// import AdminPage from "./pages/AdminPage";
// import Profile from "./pages/Profile";
// import Userpage from "./pages/Userpage";

// function App(){
//   return (
//     <div>
//     {/* <Navbar/> */}
//     <Router>
      
//       <Routes>
//         <Route path="/" element={<Home/>}/>
//         <Route path="/About" element={<About/>}/>
//         <Route path="/Login" element={<Login/>}/>
//         <Route path="/AdminPage" element={<AdminPage/>}/>
//         <Route path="/Profile" element={<Profile/>}/>
//         <Route path="/UserPage" element={<Userpage/>}/>
//       </Routes>
//     </Router>
//    </div>
//   );
// }
// export default App;
import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Contact from './pages/Contact';
import Rechargeplan from "./pages/Rechargeplan";
import UserList from './pages/UserList';

// Import the components using React.lazy
const Login = lazy(() => import('./pages/Login'));
const About = lazy(() => import('./pages/About'));
const RechargePlanPageAdmin = lazy(() => import('./pages/RechargePlanPageAdmin'));
const Profile = lazy(() => import('./pages/Profile'));
const Userpage = lazy(() => import('./pages/Userpage'));

// Create a fallback UI (preloader)
const Preloader = () => <div>Loading...</div>;

function App() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div>
      <Router>
        <Suspense fallback={<Preloader />}>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/About" element={<About />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/RechargePlanPageAdmin" element={<RechargePlanPageAdmin />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/UserPage" element={<Userpage />} />
            <Route path="/Contactpage" element={<Contact />} />
            <Route path="/UserList" element={<UserList />} />

            <Route
              path="/Rechargeplan"
              element={<Rechargeplan selectedPlan={selectedPlan} onPlanSelect={handlePlanSelect} />}
            />
          </Routes>
          {selectedPlan && (
            <div>
              <h2>Selected Plan</h2>
              <p>Name: {selectedPlan.name}</p>
              <p>Amount: Rs.{selectedPlan.amount}</p>
              <p>Validity: {selectedPlan.validity}</p>
            </div>
          )}
        </Suspense>
      </Router>
    </div>
  );
}

export default App;

// import React, { useState, lazy, Suspense } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import UserProfile from './pages/UserProfile';
// import './x.css';

// // Direct import for the Home component
// import Home from './pages/Home';

// // Lazy-loaded components
// const Contact = lazy(() => import('./pages/Contact'));
// const Login = lazy(() => import('./pages/Login'));
// const Signup = lazy(() => import('./pages/Signup'));
// const Admin = lazy(() => import('./components/Admin'));
// const User = lazy(() => import('./components/User'));
// const About = lazy(() => import('./pages/About'));
// import RechargePlan from './pages/RechargePlanPage';

// const App = () => {
//   // Initialize state for selectedPlan and rechargePlans
//   const [selectedPlan, setSelectedPlan] = useState(null);
//   const [rechargePlans, setRechargePlans] = useState([
//     // Default recharge plans or fetched from an API
//     { id: 1, name: 'Basic Plan', amount: 10, validity: '30 days' },
//     { id: 2, name: 'Standard Plan', amount: 20, validity: '60 days' },
//     { id: 3, name: 'Premium Plan', amount: 30, validity: '90 days' },
//   ]);

//   // Function to handle plan selection
//   const handlePlanSelect = (plan) => {
//     setSelectedPlan(plan);
//   };

//   return (
//     <Router>
//       <div className="app-container">
//         <div className="container">
//           <Suspense fallback={<div>Loading...</div>}>
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/contact" element={<Contact />} />
//               <Route path="/login" element={<Login />} />
//               <Route path="/signup" element={<Signup />} />
//               <Route path="/admin" element={<Admin />} />
//               <Route path="/user" element={<User />} />
//               <Route path="/about" element={<About />} />
//               <Route path="/userProfile" element={<UserProfile />} />
//               {/* Use camelCase for route paths and match with the component name */}
//               <Route path="/ReachargePlanPage" element={<RechargePlanPage plans={rechargePlans} selectedPlan={selectedPlan} onPlanSelect={handlePlanSelect} />} />
//             </Routes>
//           </Suspense>
//           {selectedPlan && (
//             <div>
//               <h2>Selected Plan</h2>
//               <p>Name: {selectedPlan.name}</p>
//               <p>Amount: ${selectedPlan.amount}</p>
//               <p>Validity: {selectedPlan.validity}</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;