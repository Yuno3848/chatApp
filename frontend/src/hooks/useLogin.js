import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const login = async (email, password) => {
    const success = handleErrors({
      email,
      password,
    });
    if (!success) return;
    console.log(`succcess : ${success}`);
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, login };
};
const handleErrors = ({ password, email }) => {
  if (!password || !email) {
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
export default useLogin;
