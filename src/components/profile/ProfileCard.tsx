"use client";
import { useEffect, useState } from "react";
import { getProfile } from "@/services/userservices";

export default function ProfileCard({ user }: { user: any }) {
  if (!user) {
    return (
      <section className="bg-white rounded-xl shadow-sm p-6 flex items-center gap-6 animate-pulse">
        <div className="w-20 h-20 rounded-full bg-gray-200" />
        <div className="flex-1 space-y-2">
          <div className="h-6 bg-gray-200 rounded w-1/2" />
          <div className="h-4 bg-gray-100 rounded w-1/3" />
          <div className="h-3 bg-gray-100 rounded w-1/4" />
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white rounded-xl shadow-sm p-6 flex items-center gap-6">
      <div>
        <img
          src={user.image_url?.String || "/profile-demo.jpg"}
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover border-4 border-gray-100"
        />
      </div>
      <div className="flex-1">
        <h2 className="font-bold text-xl text-gray-900 mb-1">
          {user.username}
        </h2>
        <div className="text-gray-500 text-sm mb-2">
          {user.email}
        </div>
        <div className="flex items-center gap-2 mb-1">
          <span className="bg-[#2563eb] text-white text-xs font-bold rounded-full px-2 py-0.5">
            {user.exp_point?.String || 0}
          </span>
          <span className="text-xs text-gray-500">XP Progress</span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-2 bg-[#2563eb] rounded-full"
            style={{ width: "81.6%" }}
          />
        </div>
        <div className="flex justify-end text-xs text-[#2563eb] font-semibold mt-1">
          {user.exp_point?.String || 0} / 3,000 XP
        </div>
      </div>
    </section>
  );
}