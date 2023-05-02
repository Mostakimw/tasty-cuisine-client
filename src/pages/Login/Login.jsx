import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="hero bg-base-100">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#c84c30] hover:bg-[#cd320f] border-none">
                Login
              </button>
            </div>

            <label className="label">
              <p href="#" className="label-text-alt">
                New to Tasty Quisine? Please{" "}
                <Link to="/register" className="text-[#1c5c7c] hover:underline">
                  Register
                </Link>
              </p>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
