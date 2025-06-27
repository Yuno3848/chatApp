import React from "react";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-3 px-4 py-2 bg-white/10 rounded-xl backdrop-blur-md border border-white/20 shadow-md">
      <input
        type="text"
        placeholder="Search..."
        className="flex-1 input border-none bg-transparent text-white placeholder-white/70 focus:outline-none"
      />
      <button
        type="submit"
        className="btn btn-circle bg-cyan-500 hover:bg-cyan-600 text-white border-none"
      >
        🔍
      </button>
    </form>
  );
};

export default SearchInput;
