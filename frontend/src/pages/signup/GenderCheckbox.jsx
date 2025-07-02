import React from "react";

const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="form-control mb-5 text-left">
      <label className="label">
        <span className="label-text text-white text-base">Gender</span>
      </label>
      <div className="flex gap-6 mt-2">
        {["male", "female", "other"].map((gender) => (
          <label
            key={gender}
            className="flex items-center gap-2 text-white capitalize"
          >
            <input
              type="radio"
              name="gender"
              value={gender}
              checked={selectedGender === gender}
              onChange={() => onCheckboxChange(gender)}
              className="radio radio-sm border-white/40 bg-white/20 checked:bg-cyan-400"
            />
            {gender}
          </label>
        ))}
      </div>
    </div>
  );
};

export default GenderCheckbox;
