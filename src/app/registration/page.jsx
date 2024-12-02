"use client";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
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
    console.log(formData);
    console.log(JSON.stringify(formData));
    registerUser();

    // Reset The Form as empty form
    setFormData({
      username: "",
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirm_password: "",
    });
  };

  // Registration POST Request to the server http://127.0.0.1:8000/member/user/registration/
  const registerUser = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/member/user/registration/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      toast.success(
        "Registration Successful, please check your email to verify your account."
      );
    } catch (error) {
      console.error("Error:", error.message);
      toast.error("Registration Failed, please try again.");
    }
  };

  return (
    <div className="flex items-center min-h-screen">
      <div className="w-[55%]">
        <form
          onSubmit={handleSubmit}
          className="w-[85%] mx-auto border p-8 rounded-lg"
        >
          <h1 className="text-3xl text-center font-medium">Registration</h1>
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
          <div className="flex gap-4">
            <label className="input input-bordered flex items-center gap-2 my-2 w-full">
              First Name:
              <input
                type="text"
                id="first_name"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                className="grow"
                placeholder="......."
                required
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 my-2 w-full">
              Last Name:
              <input
                type="text"
                id="last_name"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                className="grow"
                placeholder="......."
                required
              />
            </label>
          </div>
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

          <div className="flex gap-4">
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
                id="confirm_password"
                name="confirm_password"
                value={formData.confirm_password}
                onChange={handleChange}
                className="grow"
                placeholder="......."
                required
              />
            </label>
          </div>
          <input
            type="submit"
            value="Register"
            className="btn btn-primary w-full btn-sm my-2"
            required
          />
        </form>
      </div>
      <div className="w-[45%]">
        <Image
          src="/registration_img.png"
          alt="Registration Image"
          width={700}
          height={700}
        />
      </div>
    </div>
  );
};

export default Register;
