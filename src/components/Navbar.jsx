"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import axios from "axios";
import useAuthStore from "@/context/AuthStore";
import Image from "next/image";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  // Set the initial state of isAuthenticated to false
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const setIsAuthenticated = useAuthStore((state) => state.setIsAuthenticated);

  const getCookiesData = () => {
    const token = Cookies.get("authToken");
    const userID = Cookies.get("userID");

    console.log(token, userID);

    if (token && userID) {
      setIsAuthenticated(true);
    }
  };

  useEffect(() => {
    getCookiesData();
  }, []);

  // Logout function to remove the cookies and set the isAuthenticated state to false
  const logout = async () => {
    const authToken = Cookies.get("authToken");

    if (!authToken) {
      console.error("No authToken found! User might already be logged out.");
      return;
    }

    try {
      const options = {
        headers: {
          Authorization: `token ${authToken}`,
        },
      };
      await axios.get("http://127.0.0.1:8000/member/user/logout/", options);
      Cookies.remove("authToken");
      Cookies.remove("userID");
      setIsAuthenticated(false);
      toast.success("User Logged out successfully");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="navbar bg-slate-300 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              {!isAuthenticated && (
                <>
                  <li>
                    <Link href={"/registration"}>Registration</Link>
                  </li>
                  <li>
                    <Link href={"/login"}>Login</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <Link href={"/"} className="btn btn-ghost text-xl">
            FitSquare
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            {!isAuthenticated && (
              <>
                <li>
                  <Link href={"/registration"}>Registration</Link>
                </li>
                <li>
                  <Link href={"/login"}>Login</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="navbar-end pr-5">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="m-1">
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <Link href={"/profile"}>Profile</Link>
              </li>
              <li>
                <Link href={"/staff_panel"}>Staff Panel</Link>
              </li>
              {isAuthenticated && (
                <li>
                  <Link onClick={logout} href={"/"}>
                    Logout
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
