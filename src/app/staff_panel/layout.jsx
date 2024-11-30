import Sidebar from "@/components/staff/Sidebar";
import React from "react";

const StaffPanelLayout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Sidebar>{children}</Sidebar>
    </div>
  );
};

export default StaffPanelLayout;
