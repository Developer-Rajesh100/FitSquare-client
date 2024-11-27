"use client";
import Image from "next/image";
import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
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
    console.log(formData);

    // Reset The Form as empty form
    setFormData({
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
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
                id="firstName"
                name="firstName"
                value={formData.firstName}
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
                id="lastName"
                name="lastName"
                value={formData.lastName}
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
          {/* <div className="flex gap-4">
            <label className="input input-bordered flex items-center gap-2 my-2 w-full">
              Height:
              <input
                type="text"
                className="grow"
                placeholder="......."
                required
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 my-2 w-full">
              Width:
              <input
                type="text"
                className="grow"
                placeholder="......."
                required
              />
            </label>
          </div> */}
          {/* <label className="input input-bordered flex items-center gap-2 my-2">
            Phone Number:
            <input
              type="number"
              className="grow"
              placeholder="......."
              required
            />
          </label>
          <div className="flex gap-4">
            <label className="input input-bordered flex items-center gap-2 my-2 w-full">
              Date of Birth:
              <input
                type="date"
                className="grow"
                placeholder="......."
                required
              />
            </label>
            <select
              className="select input input-bordered flex items-center gap-2 my-2 w-full text-[medium]"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Select your Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <select
            className="select input input-bordered flex items-center gap-2 my-2 w-full text-[medium]"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Select your Blood Group
            </option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select> */}
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
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
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