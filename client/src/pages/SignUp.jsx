import React  from "react";
import OAuth from "../components/OAuth";
import { Link, useNavigate } from "react-router-dom";
const SignUp = () => {
  const [formData, setFormData] = React.useState({});
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      setLoading(false);
      if (data.success === false) {
        setError(true);
        return;
      }
      navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col  gap-4" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          id="username"
          placeholder="johndoe"
          className="bg-slate-100 p-3 rounded-lg"
        />
        <input
          onChange={handleChange}
          type="email"
          id="email"
          placeholder="johndoe@gmail.com"
          className="bg-slate-100 p-3 rounded-lg"
        />
        <input
          onChange={handleChange}
          placeholder="************"
          type="password"
          id="password"
          className="bg-slate-100 p-3 rounded-lg"
        />
        <button
          disabled={loading}
          className="bg-slate-700 p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>
      </form>
      <OAuth />
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to="/sign-in">
          <span className="text-blue-500">Sign In</span>
        </Link>
      </div>
      <p className="text-red-500 mt-5">{error && "Something went wrong!"}</p>
    </div>
  );
};

export default SignUp;
