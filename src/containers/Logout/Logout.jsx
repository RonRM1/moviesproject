import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import TokenStorageService from "../../_services/TokenStorageService";

export default function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    TokenStorageService.logOut();
    navigate("/");
  };
  return (
    <div>
      <button onClick={handleLogout}>Press Logout </button>
    </div>
  );
}
