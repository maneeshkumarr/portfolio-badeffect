"use client";

import Calendar from "./Calendar";

export default function Profile() {
  const username = "ManeeshGowda";

  return (
    <div className="p-6 bg-gray-900 text-white rounded-2xl shadow-lg">
      <div className="flex items-center gap-4">
        <img
          src="https://avatars.githubusercontent.com/u/000000?v=4"
          className="w-16 h-16 rounded-full border border-gray-700"
        />
        <div>
          <h2 className="text-xl font-bold">DevManeesh</h2>
          <p className="text-gray-400">India</p>
          <a
            href="https://maneesh-portfolio.vercel.app"
            className="text-green-400 underline"
          >
            Portfolio
          </a>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-6 grid grid-cols-3 gap-4 text-center">
        <div className="bg-gray-800 p-4 rounded-xl">
          <p className="text-2xl font-bold">395</p>
          <p className="text-sm text-gray-400">Submissions</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-xl">
          <p className="text-2xl font-bold">142</p>
          <p className="text-sm text-gray-400">Active Days</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-xl">
          <p className="text-2xl font-bold">26</p>
          <p className="text-sm text-gray-400">Max Streak</p>
        </div>
      </div>

      {/* Calendar */}
      <div className="mt-6">
        <Calendar username={username} />
      </div>
    </div>
  );
}
