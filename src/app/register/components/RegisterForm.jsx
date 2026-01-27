"use client";
import React from "react";
import Link from "next/link";
import { registerUser } from "@/app/actions/auth/registeruser";
import SocialLogin from "@/app/login/components/SocialLogin";

export default function RegisterForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    await registerUser({ name, email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg">
      {/* Name Field */}
      <div className="mb-6">
        <label className="block mb-2">
          <span className="font-bold text-black">Name</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full"
          name="name"
          required
        />
      </div>

      {/* Email Field */}
      <div className="mb-6">
        <label className="block mb-2">
          <span className="font-bold text-black">Email</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="Type here"
          className="input input-bordered w-full"
          required
        />
      </div>

      {/* Password Field */}
      <div className="mb-6">
        <label className="block mb-2">
          <span className="font-bold text-black">Password</span>
        </label>
        <input
          type="password"
          name="password"
          placeholder="Type here"
          className="input input-bordered w-full"
          required
        />
      </div>

      {/* Submit Button */}
      <button className="w-full h-12 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors mb-6">
        Sign Up
      </button>

      {/* Social Login Section */}
      <p className="text-center mb-4">Or Sign In with</p>
      <div className="mb-6">
        <SocialLogin />
      </div>

      {/* Login Link */}
      <p className="text-center">
        Already have an account?{" "}
        <Link href="/login" className="text-orange-500 font-bold hover:underline">
          Login
        </Link>
      </p>
    </form>
  );
}