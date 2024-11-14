import { UserButton } from "@clerk/nextjs";
import React from "react";

function DashboardHeader() {
  return (
    <div className="p-3 shadow-sm border-b flex justify-between items-center">
      <div></div>
      <div className="pt-2">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}

export default DashboardHeader; 
