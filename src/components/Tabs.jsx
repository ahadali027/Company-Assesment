import React, { useState } from "react";


function Tabs() {
  
  return (
    <h1 className="border-2 border-primary-blue px-5 py-7 flex justify-center items-center gap-8 mt-10">
      <p className="border-b-4 border-[#ff0200]">1. company Information</p>
      <p>2. Directors / Shareholders</p>
      <p>3. Minutes Company</p>
    </h1>
  );
}

export default Tabs;
