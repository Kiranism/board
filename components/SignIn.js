import Link from "next/link";
import React from "react";

const SignIn = () => {
  return (
    <div className="flex items-center justify-center text-black ">
      <div className="sm:w-96 w-full">
        <form>
          <div className="p-8 space-y-5 bg-white rounded-xl">
            <div>
              <label htmlFor="" className="text-base font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-gray-200 focus:bg-gray-200 w-full h-10 flex rounded-[10px] px-3 py-2"
                />
              </div>
            </div>
            <div>
              <label htmlFor="" className="text-base font-medium text-gray-900">
                Password
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="bg-gray-200 w-full h-10 flex rounded-[10px] px-3 py-2"
                />
              </div>
            </div>
            <div>
              <Link
                href="#"
                className="text-sm font-semibold text-blue-600 hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <div>
              <button
                type="button"
                className="w-full px-3 py-2 font-medium text-white bg-black rounded-lg"
              >
                Sign In
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
