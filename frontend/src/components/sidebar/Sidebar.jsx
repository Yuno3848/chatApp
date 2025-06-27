import React from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";

const Sidebar = () => {
  return (
    <div className="w-full max-w-xs p-4 space-y-4">
      <SearchInput />
      <div className="divider px-3 before:bg-white/20 after:bg-white/20 text-white/70"></div>
      <Conversations />
      {/* <LogoutButton />  */}
    </div>
  );
};

export default Sidebar;
