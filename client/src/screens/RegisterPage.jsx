import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function RegisterPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const googleAuth = (e) => {
    e.preventDefault();
    window.open(
      `${process.env.REACT_APP_API_URL}/auth/google/callback`,
      "_self"
    );
  };
  const githubAuth = async (e) => {
    e.preventDefault();
    window.open(`http://localhost:8000/auth/github/callback`, "_self");
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      let credentials = {
        email,
        password,
        name,
      };
      credentials = JSON.stringify(credentials);
      const response = await fetch("http://localhost:8000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: credentials,
      });
      const user = await response.json();

      if (user) {
        console.log("Registered successfully!");
        navigate("/login");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="relative bg-slate-200 flex flex-col justify-center min-h-screen overflow-hidden pt-10">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-red-400 uppercase">
          Sign up
        </h1>

        <form className="mt-5" onSubmit={handleRegister}>
          <div className="mb-2">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-800"
            >
              Name
            </label>
            <div className="flex flex-col items-start">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="name"
                className="block w-full px-4 py-2 mt-2 text-red-400 bg-white border rounded-md focus:border-red-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
          </div>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <div className="flex flex-col items-start">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                className="block w-full px-4 py-2 mt-2 text-red-400 bg-white border rounded-md focus:border-red-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <div className="flex flex-col items-start">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                className="block w-full px-4 py-2 mt-2 text-red-400 bg-white border rounded-md focus:border-red-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
          </div>
          <div className="mb-2">
            <label
              htmlFor="password_confirmation"
              className="block text-sm font-semibold text-gray-800"
            >
              Confirm Password
            </label>
            <div className="flex flex-col items-start">
              <input
                type="password"
                name="password_confirmation"
                className="block w-full px-4 py-2 mt-2 text-red-400 bg-white border rounded-md focus:border-red-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
          </div>

          <div className="flex items-center mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
            >
              Register
            </button>
          </div>
        </form>
        <div className="mt-8 text-xs font-light text-center text-gray-700">
          Already have an account?{" "}
          <span>
            <Link to="/login" className="text-red-400 hover:underline" href="#">
              Log in
            </Link>
          </span>
        </div>
        <div className="flex items-center w-full my-4">
          <hr className="w-full" />
          <p className="px-3 ">OR</p>
          <hr className="w-full" />
        </div>
        <div className="flex mt-4 gap-x-2">
          <button
            type="button"
            id="google-login"
            className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-red-400"
            onClick={googleAuth}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className="w-5 h-5 fill-current"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
          </button>
          <button
            type="button"
            id="github-login"
            onClick={githubAuth}
            className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-red-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
