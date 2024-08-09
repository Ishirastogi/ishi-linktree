import React from 'react';

function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex w-full max-w-4xl p-8">
        {/* Left Side */}
        <div className="w-1/2 bg-white p-8">
          <h1 className="text-4xl font-bold">Welcome back!</h1>
          <p className="text-gray-600 mt-2">Log in to your Linktree.</p>

          <form className="mt-8">
            <div>
              <label className="block text-gray-700">Email or username</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded mt-1"
                placeholder="Email or username"
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full p-3 border border-gray-300 rounded mt-1"
                placeholder="Password"
              />
            </div>
            <div className="flex justify-between mt-4 text-sm text-purple-600">
              <a href="#">Log in with phone number</a>
            </div>
            <button className="w-full bg-purple-600 text-white p-3 rounded-full mt-6">
              Log in
            </button>
            <div className="mt-4 flex justify-between text-sm text-gray-600">
              <a href="#">Forgot password?</a>
              <a href="#">Forgot username?</a>
            </div>
          </form>

          <div className="mt-6 text-center text-gray-600">OR</div>

          <button className="w-full bg-white border border-gray-300 text-gray-600 p-3 rounded mt-4 flex justify-center items-center rounded-full">
            <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google Logo" className="mr-2"/>
            Continue with Google
          </button>

          <button className="w-full max-w-sm flex items-center justify-center bg-white text-black border border-gray-300 py-3 rounded-full ">
        <img
          src="https://img.icons8.com/ios-filled/50/ffffff/mac-os.png"
          alt="Apple Logo"
          className="w-5 h-5 mr-2"
        />
        Continue with Apple
      </button>

      <p className="mt-6 text-sm text-gray-600">
        Don't have an account?{' '}
        <a href="#" className="text-purple-600 underline">
          Sign up.
        </a>
      </p>

      <p className="mt-2 text-sm text-gray-600">
        You can also{' '}
        <a href="#" className="text-purple-600 underline">
          log in with a phone number
        </a>
      </p>
        </div>

        {/* Right Side */}
        <div className="w-1/2 relative">
          <div className="bg-purple-600 rounded-lg h-full flex items-center justify-center p-8">
            {/* Your image and design elements here */}
            <div className="relative">
              <img
                src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2023/06/pexels-nataliya-vaitkevich-6214474.png"
                alt="Shopping"
                className="rounded-lg"
              />
              <div className="absolute bottom-8 left-8 bg-white p-2 rounded text-purple-600"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
