"use client";
import React from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import SignIn from "@/components/SignIn";

const page = () => {
  return (
    <div className="flex min-h-screen">
      <div className="items-center justify-center w-8/12 hidden sm:flex">
        <h1 className="font-bold text-7xl">Board.</h1>
      </div>
      <div className="flex items-center justify-center w-full bg-neutral-100 text-black p-4">
        <div>
          <div className="my-4">
            <div className="my-4">
              <h2 className="text-4xl font-bold mb-2">Sign In</h2>
              <p className="font-normal text-base">Sign in to your account</p>
            </div>
            <div className="gap-2 flex sm:gap-8 ">
              <button
                className="bg-white px-3 py-2 rounded-xl text-sm text-gray-400 inline-flex gap-2 items-center "
                onClick={() =>
                  signIn("google", {
                    callbackUrl: "http://localhost:3000",
                  })
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={14}
                  height={14}
                  fill="none"
                >
                  <g clipPath="url(#a)">
                    <path
                      fill="#4285F4"
                      d="M13.993 7.131c0-.574-.048-.992-.151-1.426H7.139v2.589h3.935c-.08.643-.508 1.612-1.46 2.263l-.013.087 2.119 1.604.147.014c1.348-1.217 2.126-3.007 2.126-5.131Z"
                    />
                    <path
                      fill="#34A853"
                      d="M7.14 13.952c1.927 0 3.545-.62 4.727-1.69l-2.253-1.705c-.603.41-1.412.697-2.475.697a4.288 4.288 0 0 1-4.06-2.898l-.084.007L.79 10.029l-.029.078c1.174 2.28 3.585 3.845 6.377 3.845Z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M3.078 8.356c-.15-.434-.238-.9-.238-1.38 0-.48.087-.946.23-1.38l-.004-.092L.836 3.81l-.074.034a6.853 6.853 0 0 0-.761 3.131C0 8.1.278 9.162.762 10.107l2.316-1.751Z"
                    />
                    <path
                      fill="#EB4335"
                      d="M7.14 2.697c1.34 0 2.244.566 2.76 1.039l2.014-1.922C10.678.69 9.068 0 7.14 0 4.347 0 1.936 1.566.762 3.845L3.07 5.595a4.306 4.306 0 0 1 4.07-2.899Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h14v14H0z" />
                    </clipPath>
                  </defs>
                </svg>
                Sign in with Google
              </button>
              <button className="bg-white px-3 py-2 rounded-xl text-sm text-gray-400 inline-flex gap-2 items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={12}
                  height={14}
                  fill="none"
                >
                  <g clipPath="url(#a)">
                    <path
                      fill="#999"
                      d="M6.345 1.22C7.272.007 8.561 0 8.561 0s.191 1.14-.73 2.238c-.983 1.173-2.1.98-2.1.98s-.21-.921.614-2ZM5.85 4.018c.476 0 1.361-.65 2.513-.65 1.983 0 2.763 1.4 2.763 1.4S9.6 5.542 9.6 7.42c0 2.119 1.9 2.85 1.9 2.85s-1.329 3.71-3.123 3.71c-.824 0-1.465-.551-2.333-.551-.885 0-1.763.572-2.335.572C2.07 14 0 10.48 0 7.65c0-2.784 1.752-4.244 3.396-4.244 1.068 0 1.897.611 2.453.611Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h11.5v14H0z" />
                    </clipPath>
                  </defs>
                </svg>
                Sign in with Apple
              </button>
            </div>
          </div>
          <SignIn />
          <h2 className="text-black text-center my-5">
            Dont have an account?{" "}
            <Link href="#" className="font-semibold text-blue-600">
              Register here
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default page;
