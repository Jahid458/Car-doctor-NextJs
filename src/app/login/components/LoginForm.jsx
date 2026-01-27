'use client';
import React from "react";
import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";
import toast from "react-hot-toast";
import SocialLogin from "./SocialLogin";
import { useRouter } from "next/navigation";

export default function LoginForm() {
   const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    toast('Submitting...')

    try {
       const response =  await signIn("credentials",{email, password, callbackUrl: '/', redirect: false})
        console.log({email, password});
        if(response.ok){
            toast.success('Login Confirmed...')
            router.push('/')
            form.reset();
        }else{
            toast.error('Authentication failed')
        }
    } catch (error) {
        console.log(error)
        alert('Authenticated Failed')
    }



  };



  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-8">
      <label className="form-control w-full">
        <div className="label w-full">
          <span className="label-text  font-bold">Email</span>
        </div>
        <input
          type="text"
          name="email"
          placeholder="Type here"
          className="input input-bordered w-full mb-4"
        />
      </label>
      <label className="form-control w-full">
        <div className="label w-full">
          <span className="label-text font-bold">Password</span>
        </div>
        <input
          type="password"
          name="password"
          placeholder="Type here"
          className="input input-bordered w-full mb-4"
        />
      </label>
      <button className="w-full h-12 bg-orange-500 text-white font-bold">
        Sign In
      </button>
      <p className="text-center">Or Sign In with</p>
      <SocialLogin />
      <p className="text-center">
        Already have an account?{" "}
        <Link href="/register" className="text-orange-500 font-bold">
          Register
        </Link>
      </p>
    </form>
  );
}