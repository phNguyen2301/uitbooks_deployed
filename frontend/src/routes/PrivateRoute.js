import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";

const ProtectedRoute = ({ isAdmin, children }) => {
  const { user } = useSelector((state) => state.user);
  return (
    <>
      {/* { !user && <Navigate to="/signin" /> }
        { isAdmin && user.role !== 'admin' && <Navigate to='/signin' /> } */}
      {isAdmin ? (
        user ? (
          user.role !== "admin" ? (
            <Navigate to="/signin" />
          ) : (
            <>{children}</>
          )
        ) : (
          <Navigate to="/signin" />
        )
      ) : !user ? (
        <Navigate to="/signin" />
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default ProtectedRoute;
