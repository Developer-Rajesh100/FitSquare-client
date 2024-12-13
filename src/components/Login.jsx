"use client";
import Image from "next/image";
import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    // Reset The Form as empty form
    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
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
          <label className="input input-bordered flex items-center gap-2 my-2">
            Email:
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
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
          <label className="input input-bordered flex items-center gap-2 my-2 w-full">
            Confirm Password:
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
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
