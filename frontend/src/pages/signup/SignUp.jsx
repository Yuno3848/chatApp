import React, { useState } from "react";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import useSign from "../../hooks/useSignup";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
    email: "",
  });
  const { loading, signup } = useSign();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    await signup(inputs);
  };

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center px-4">
      <div className="w-full max-w-md p-10 bg-white/10 border border-white/20 rounded-3xl shadow-2xl backdrop-blur-lg">
        <h2 className="text-4xl font-extrabold text-white mb-8 drop-shadow text-left">
          Sign Up <span className="text-cyan-400">ChatChai</span>
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="form-control mb-5 text-left">
            <label className="label">
              <span className="label-text text-white text-base">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="input input-bordered input-md bg-white/30 text-white placeholder-white/70 border-white/30"
              value={inputs.fullname}
              onChange={(e) =>
                setInputs({ ...inputs, fullname: e.target.value })
              }
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
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>
          <div className="form-control mb-5 text-left">
            <label className="label">
              <span className="label-text text-white text-base">Email</span>
            </label>
            <input
              type="text"
              placeholder="Enter Password"
              className="input input-bordered input-md bg-white/30 text-white placeholder-white/70 border-white/30"
              value={inputs.email}
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
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
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
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
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>
          <GenderCheckbox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />
          <div className="mb-4 text-left">
            <Link to="/login" className="text-sm text-cyan-400 hover:underline">
              Already have an account?
            </Link>
          </div>

          <button
            className="btn btn-primary btn-md w-full hover:scale-[1.02] transition-transform"
            disabled={loading}
          >
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Sign Up"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
