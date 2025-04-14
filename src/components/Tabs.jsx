import React, { useState } from "react";

function Tabs() {
  return (
    <div className="border-2 border-primary-blue px-3 sm:px-5 py-4 sm:py-7 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mt-6 sm:mt-10">
      <p className="text-sm sm:text-base border-b-4 border-[#ff0200] px-2 sm:px-4 py-1 sm:py-2">1. Company Information</p>
      <p className="text-sm sm:text-base px-2 sm:px-4 py-1 sm:py-2">2. Directors / Shareholders</p>
      <p className="text-sm sm:text-base px-2 sm:px-4 py-1 sm:py-2">3. Minutes Company</p>
    </div>
  );
}

export default Tabs;
