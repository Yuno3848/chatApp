import React from "react";

const GenderCheckbox = () => {
  return (
    <div className="form-control mb-5 text-left">
      <label className="label">
        <span className="label-text text-white text-base">Gender</span>
      </label>
      <div className="flex gap-6 mt-2">
        <label className="flex items-center gap-2 text-white">
          <input
            type="radio"
            name="gender"
            value="male"
            className="radio radio-sm border-white/40 bg-white/20 checked:bg-cyan-400"
          />
          Male
        </label>

        <label className="flex items-center gap-2 text-white">
          <input
            type="radio"
            name="gender"
            value="female"
            className="radio radio-sm border-white/40 bg-white/20 checked:bg-cyan-400"
          />
          Female
        </label>

        <label className="flex items-center gap-2 text-white">
          <input
            type="radio"
            name="gender"
            value="other"
            className="radio radio-sm border-white/40 bg-white/20 checked:bg-cyan-400"
          />
          Other
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
