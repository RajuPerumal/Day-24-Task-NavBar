import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import FullStack from './FullStack';
import DataScience from './DataScience';
import CyberSecurity from './CyberSecurity';
import Career from './Career';
import AllCourses from './AllCourses';
import './App.css';

const App = () => {
  return (
    <Router>
      <div id="webcrumbs" className="container mt-4"> 
        <div className="bg-light rounded-lg shadow-lg p-4">
          {/* Navigation Menu */}
          <nav className="border-bottom mb-4">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <NavLink 
                  className="nav-link font-weight-bold text-dark" 
                  to="/" 
                  activeClassName="bg-success text-white" // Use this for active state
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? 'lightgreen' : 'transparent'
                  })}
                >
                  ALL
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  className="nav-link text-dark" 
                  to="/fullstack" 
                  activeClassName="bg-success text-white"
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? 'lightgreen' : 'transparent'
                  })}
                >
                  FULL STACK DEVELOPMENT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  className="nav-link text-dark" 
                  to="/datascience" 
                  activeClassName="bg-success text-white"
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? 'lightgreen' : 'transparent'
                  })}
                >
                  DATA SCIENCE
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  className="nav-link text-dark" 
                  to="/cybersecurity" 
                  activeClassName="bg-success text-white"
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? 'lightgreen' : 'transparent'
                  })}
                >
                  CYBER SECURITY
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  className="nav-link text-dark" 
                  to="/career" 
                  activeClassName="bg-success text-white"
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? 'lightgreen' : 'transparent'
                  })}
                >
                  CAREER
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Content with Routes */}
          <Routes>
            <Route path="/" element={<AllCourses />} />
            <Route path="/fullstack" element={<FullStack />} />
            <Route path="/datascience" element={<DataScience />} />
            <Route path="/cybersecurity" element={<CyberSecurity />} />
            <Route path="/career" element={<Career />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
