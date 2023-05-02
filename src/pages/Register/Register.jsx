import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../providers/AuthProvider";

const Register = () => {
  const [user, setUser] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const { registerUser } = useContext(UserContext);

  const handleRegister = () => {
    if (!name || !email || !password || !photoUrl) {
      setError("Please fill in all fields");
      return;
    }
    // password validation check

    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
      setError("password not valid need 8 char ");
      return;
    }

    registerUser(email, password)
      .then((user) => {
        console.log(user.user);
        setUser(true);
        setSuccess("Registration Successful");
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
                {user ? (
                  <p className="text-success mb-2">{success}</p>
                ) : (
                  <p className="text-error mb-2">{error}</p>
                )}
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  onChange={(e) => setPhotoUrl(e.target.value)}
                  type="text"
                  name="photo-url"
                  placeholder="photo-url"
                  className="input input-bordered"
                />
              </div>
              <div onClick={handleRegister} className="form-control mt-6">
                <button className="btn bg-[#c84c30] hover:bg-[#cd320f] border-none">
                  Register
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
