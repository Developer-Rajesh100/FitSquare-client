"use client";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    loginUser();

    // Reset The Form as empty form
    setFormData({
      username: "",
      password: "",
    });
  };

  // Login POST Request to the server http://127.0.0.1:8000/member/user/login/
  const loginUser = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/member/user/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      saveTokenUser(data.token, data.user_id);
      toast.success("User Login Successful!");
    } catch (error) {
      console.error("Error:", error.message);
      toast.error("Login Failed, please try again.");
    }
  };

  // Save token in the browser cookie
  const saveTokenUser = (token, userID) => {
    Cookies.set("authToken", token, { expires: 7 }); // Expires in 7 days
    Cookies.set("uderID", userID, { expires: 7 }); // Expires in 7 days
  };

  return (
    <div className="flex items-center justify-evenly min-h-screen">
      <div className="">
        <Image
          src="/login2.png"
          alt="Registration Image"
          width={600}
          height={600}
        />
      </div>
      <div className="">
        <form
          onSubmit={handleSubmit}
          className="w-[100%] mx-auto border p-8 rounded-lg"
        >
          <h1 className="text-3xl text-center font-medium">Login</h1>
          <label className="input input-bordered flex items-center gap-2 my-2">
            Username:
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="grow"
              placeholder="......."
              required
            />
          </label>

          <label className="input input-bordered flex items-center gap-2 my-2 w-full">
            Password:
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="grow"
              placeholder="......."
              required
            />
          </label>

          <input
            type="submit"
            value="Login"
            className="btn btn-primary w-full btn-sm my-2"
            required
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
