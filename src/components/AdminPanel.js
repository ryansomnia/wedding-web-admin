import React from "react";
import Sidebar from "./Sidebar";
import "../../src/components/AdminPanel.css";

const AdminPanel = () => {
  return (
    <div className="admin-panel">
    <Sidebar/>
      <div className="content">
        <h1>Ini Content</h1>
      </div>
    </div>
  );
};

export default AdminPanel;
