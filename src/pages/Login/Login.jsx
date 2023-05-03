import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../providers/AuthProvider";
import {
  FaCopyright,
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaTwitter,
} from "react-icons/fa";

const Login = () => {
  const { loginUser, googleLogin, githubLogin } = useContext(UserContext);
  const [user, setUser] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const loginHandle = () => {
    loginUser(email, password)
      .then((user) => {
        console.log(user.user);
        navigate(from);
      })
      .catch((err) => {
        setError("Email Or Password doesn't match");
      });
  };
  const handleGoogleLogin = () => {
    googleLogin()
      .then((user) => {
        console.log(user);
      })
      .catch((err) => console.log(err));
  };

  const handleGithubLogin = () => {
    githubLogin()
      .then((user) => console.log(user))
      .catch((err) => console.log(err));
  };

  return (
    <div className="hero bg-base-100">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card w-full lg:w-[800px] max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control pt-5">
              <p className="text-error mb-2">{user || error}</p>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button
                onClick={loginHandle}
                className="btn bg-[#c84c30] hover:bg-[#cd320f] border-none"
              >
                Login
              </button>
            </div>

            <label className="label">
              <p href="#" className="label-text-alt">
                New to <span className="text-[#c84c30]">Tasty Cuisine</span>?
                Please{" "}
                <Link to="/register" className="text-[#1c5c7c] hover:underline">
                  Register
                </Link>
              </p>
            </label>

            <div className="form-control">
              <button
                onClick={handleGoogleLogin}
                className="flex items-center border-2 rounded-md p-2"
              >
                <img
                  src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                  alt=""
                  height={"35px"}
                  width={"35px"}
                />
                Continue with Google
              </button>
              <button
                onClick={handleGithubLogin}
                className="flex items-center bg-gray-950 text-white mt-3  py-2 px-4 rounded-md"
              >
                {" "}
                <FaGithub className="mr-2 text-xl"></FaGithub> Continue with
                Github
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
