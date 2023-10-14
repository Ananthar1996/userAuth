"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const router = useRouter();
  const [data, setData] = useState("nothing");
  const logout = async () => {
    try {
      await axios.get("api/users/logout");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me");
    setData(res.data.data._id);
  };

  return (
    <div className="flex flex-col items-center min-h-screen py-2 justify-center">
      <div className="card w-96 bg-base-200 shadow-xl">
        <div className="card-body">
          <div className="avatar placeholder">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
              <span className="text-2xl">A</span>
            </div>
          </div>
          <h2 className="card-title">Profile</h2>
          <p>Profile page</p>
          <h2 className="pb-4">
            {data === "nothing" ? (
              "Nothing"
            ) : (
              <Link href={`/profile/${data}`}>{data}</Link>
            )}
          </h2>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={logout}>
              Logout
            </button>
            <button className="btn btn-secondary" onClick={getUserDetails}>
              GetUser Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
