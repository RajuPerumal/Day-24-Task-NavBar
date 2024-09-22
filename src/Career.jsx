import React from 'react';

const Career = () => {
  return (
    <div className="row align-items-center min-vh-50 p-4">
        <div className="col text-center">
          <div className="bg-primary text-white h5 p-3 rounded-pill">
            WE'RE HIRING
          </div>
          <div className="d-flex flex-column align-items-center mt-4">
            <img
              src="https://tools-api.webcrumbs.org/image-placeholder/80/80/web-development/1"
              alt="Web Development Icon"
              className="img-fluid rounded-circle shadow"
              style={{ width: '80px', height: '80px' }}
            />
            <p className="mt-2">Web Development</p>
          </div>
        </div>

        <div className="col text-center">
          <img
            src="https://tools-api.webcrumbs.org/image-placeholder/800/500/teamwork-illustration/1"
            alt="Team Illustration"
            className="img-fluid"
          />
        </div>
      </div>
  );
};

export default Career;
