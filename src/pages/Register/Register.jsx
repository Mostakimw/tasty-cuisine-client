import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="hero bg-base-100">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Register Please</h1>
          </div>
          <div className="card w-full lg:w-[800px] max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control pt-5">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  name="photo-url"
                  placeholder="photo-url"
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
                  Already have an account? Please{" "}
                  <Link to="/login" className="text-[#1c5c7c] hover:underline">
                    Login
                  </Link>
                </p>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
