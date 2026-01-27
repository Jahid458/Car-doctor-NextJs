"use client";
import { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { FaGithub } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function SocialLogin() {
  const router = useRouter();
  const session = useSession()

  const handleSocialLogin = async(providerName) => {
     await signIn(providerName)
  }


  useEffect(()=>{
    if(session?.status == 'authenticated'){
      router.push('/');
      toast.success('Sucess Login');
    }
  },[session?.status])

  return (
    <div className="flex justify-center gap-8">
      <p onClick={() => handleSocialLogin("google")} className="bg-slate-200 rounded-full p-3">
        <FaGoogle type="button" />
      </p>
      <p onClick={() =>handleSocialLogin("github")} className="bg-slate-200 rounded-full p-3">
        <FaGithub type="button" />
      </p>
    </div>
  );
}
