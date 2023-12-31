import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  const getUsers = async (e) => {
    e.preventDefault();
    try {
      setError(false);
      const response = await fetch("https://reqres.in/api/login");
      const res = await response.json();
      setData(res);
      if (data) {
        navigate("/users");
      }
    } catch (error) {
      setError(true);
    }
  };

  if (error) {
    return (
      <div className="bg-black min-h-screen flex justify-center items-center flex-col text-white text-2xl">
        <h1>Something went wrong</h1>
        <h2>Please retry</h2>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-center bg-blue-600 text-white m-8 text-3xl h-12 justify-center rounded-lg">
        Login to proceed
      </h1>
      <div className="bg-blue-400 py-48 text-2xl flex flex-row justify-center items-center">
        <form onSubmit={getUsers} className="flex justify-center">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" placeholder="Enter Email" />
          <br />
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" placeholder="Enter Password" />
          <br />
          <button
            type="submit"
            value="Submit"
            className="rounded-r-lg px-3 py-1 bg-blue-900 text-white shrink-0 hover:bg-green-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
