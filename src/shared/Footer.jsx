import React from "react";
import {
  FaCopyright,
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-neutral mt-20">
      <footer className="footer p-10  text-neutral-content lg:w-[1300px] mx-auto">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Chefs</a>
          <a className="link link-hover">Special</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <ul className="flex gap-3">
            <li className="link">
              <FaGoogle></FaGoogle>
            </li>
            <li className="link">
              <FaGithub></FaGithub>
            </li>
            <li className="link">
              <FaFacebook></FaFacebook>
            </li>
            <li className="link">
              <FaTwitter></FaTwitter>
            </li>
          </ul>
        </div>
      </footer>
      <p className=" text-white py-3 flex items-center justify-center">
        <FaCopyright className="inline mr-1"></FaCopyright> Copyright By Tasty
        Cuisine
      </p>
    </div>
  );
};

export default Footer;
