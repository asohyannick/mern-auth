import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const SignIn = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type" : "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      setLoading(false)
      if(data.success === false) {
        setError(false);
        return;
      }
      navigate('/')
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form className="flex flex-col  gap-4" onSubmit={handleSubmit}>
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
        <button disabled={loading} className="bg-slate-700 p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          {loading ? 'Loading...' : 'Sign In'}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Dont Have an account?</p>
        <Link to="/sign-up">
          <span>Sign Up</span>
        </Link>
      </div>
      <p className="text-red-500 mt-5">{error  && 'Something went wrong'}</p>
    </div>
  );
};

export default SignIn;
