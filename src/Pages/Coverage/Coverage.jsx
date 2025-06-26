import React, { useState } from "react";
import CoverageMap from "../../Pages/Coverage/CoverageMap";

const Coverage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFindDistrict = () => {
    if (searchTerm.trim()) {
      setSelectedDistrict(searchTerm.trim());
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-6">
        We are available in 64 districts
      </h1>

      {/* Search Box */}
      <div className="flex flex-col sm:flex-row gap-2 mb-6 items-center justify-center">
        <input
          type="text"
          placeholder="Enter district name..."
          value={searchTerm}
          onChange={handleSearch}
          className="input input-bordered w-full max-w-md"
        />
        <button
          onClick={handleFindDistrict}
          className="btn bg-[#CAEB66] w-full sm:w-auto"
        >
          Find District
        </button>
      </div>

      {/* Map */}
      <CoverageMap selectedDistrict={selectedDistrict} />
    </div>
  );
};

export default Coverage;
