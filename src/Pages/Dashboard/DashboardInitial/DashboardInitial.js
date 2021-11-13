import React from 'react';
import useAuth from '../../../hooks/useAuth';

const DashboardInitial = () => {
  const { user } = useAuth();
  return (
    <div className=" mt-5">
      <h2>
        Hello! <span className="text-success fw-bold">{user.displayName}</span>,
        Welcome to <span className="text-danger fw-bold">Dashboard</span>
      </h2>
      <h6 className="text-secondary fw-bold">
        Here you will get all of your activities you have made in SkyCloud!
      </h6>
      <img
        src="https://i.ibb.co/DLhc5FH/office-workers-analyzing-researching-business-data-74855-4445.jpg"
        alt=""
        className="img-fluid"
      />
    </div>
  );
};

export default DashboardInitial;
