import React from "react";
import toast from "react-hot-toast";
import { useState } from "react";
const useSign = () => {
  const [loading, setLoading] = useState(false);

  const signup = async ({
    fullname,
    username,
    password,
    confirmPassword,
    gender,
    email,
  }) => {
    const success = handleErrors({
      fullname,
      username,
      password,
      confirmPassword,
      gender,
      email,
    });
    if (!success) return;
    console.log(`succcess : ${success}`);
    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullname,
          username,
          password,
          confirmPassword,
          gender,
          email
        }),
      });
      const data = await res.json();
      toast.success("signed up successfully.");
      console.log(`data signup.js : ${data}`);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, signup };
};

const handleErrors = ({
  fullname,
  username,
  password,
  confirmPassword,
  gender,
  email,
}) => {
  if (
    !fullname ||
    !username ||
    !password ||
    !confirmPassword ||
    !gender ||
    !email
  ) {
    toast.error("All fields are required!");
    return false;
  }
  if (password !== confirmPassword) {
    toast.error("Passwords do not match.");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password must be greater than 6 characters.");
    return false;
  }
  return true;
};
export default useSign;
