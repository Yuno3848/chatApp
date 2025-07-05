import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center px-4">
      <div className="w-full max-w-md p-10 bg-white/10 border border-white/20 rounded-3xl shadow-2xl backdrop-blur-lg">
        <h2 className="text-5xl font-extrabold text-center text-white mb-8 drop-shadow">
          Login to <span className="text-cyan-400">ChatChai</span>
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="form-control mb-6">
            <label className="label">
              <span className="label-text text-white text-base">Email</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="input input-bordered input-md bg-white/30 text-white placeholder-white/70 border-white/30"
              value={email}
              onChange={() => setEmail(e.target.value)}
            />
          </div>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-white text-base">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="input input-bordered input-md bg-white/30 text-white placeholder-white/70 border-white/30"
              value={password}
              onChange={() => setPassword(e.target.value)}
            />
          </div>
          <Link
            to="/signup"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Don't have an account?
          </Link>

          <button
            className="btn btn-primary btn-md w-full hover:scale-[1.02] transition-transform"
            disabled={loading}
          >
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
