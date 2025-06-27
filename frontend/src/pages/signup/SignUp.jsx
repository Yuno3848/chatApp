import React from "react";
import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center px-4">
      <div className="w-full max-w-md p-10 bg-white/10 border border-white/20 rounded-3xl shadow-2xl backdrop-blur-lg">
        <h2 className="text-4xl font-extrabold text-white mb-8 drop-shadow text-left">
          Sign Up <span className="text-cyan-400">ChatChai</span>
        </h2>

        <form>
          <div className="form-control mb-5 text-left">
            <label className="label">
              <span className="label-text text-white text-base">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="input input-bordered input-md bg-white/30 text-white placeholder-white/70 border-white/30"
            />
          </div>

          <div className="form-control mb-5 text-left">
            <label className="label">
              <span className="label-text text-white text-base">Username</span>
            </label>
            <input
              type="text"
              placeholder="johndoe"
              className="input input-bordered input-md bg-white/30 text-white placeholder-white/70 border-white/30"
            />
          </div>

          <div className="form-control mb-5 text-left">
            <label className="label">
              <span className="label-text text-white text-base">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="input input-bordered input-md bg-white/30 text-white placeholder-white/70 border-white/30"
            />
          </div>

          <div className="form-control mb-4 text-left">
            <label className="label">
              <span className="label-text text-white text-base">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="input input-bordered input-md bg-white/30 text-white placeholder-white/70 border-white/30"
            />
          </div>
          <GenderCheckbox />
          <div className="mb-4 text-left">
            <a href="#" className="text-sm text-cyan-400 hover:underline">
              Already have an account?
            </a>
          </div>

          <button className="btn btn-primary btn-md w-full hover:scale-[1.02] transition-transform">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
