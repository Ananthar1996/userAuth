"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function VerifyEmailPage() {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const verifyUserEmail = async () => {
    try {
      await axios.post("/api/users/verifyemail", { token });
      setVerified(true);
    } catch (error: any) {
      setError(true);
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")
    [1];
    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    if (token.length > 0) {
     verifyUserEmail();
    }
  },[token]);

  return (
    <div className="flex flex-wrap items-center justify-center min-h-screen py-2">
    <div className="card w-fill bg-base-200 shadow-xl p-10">
      <h1 className="text-4xl">Verify Email</h1>
      <h2 className="w-min px-2 bg-secondary text-black rounded-lg">
        {token ? `${token}` : "no token"}
      </h2>
      {verified && (
        <div>
          <h2 className="text-2xl">Email Verified</h2>
          <Link href="/login">
            Login
          </Link>
        </div>
      )}
      {error && (
        <div>
          <h2 className="text-2xl bg-red-500 text-black rounded-lg">Error</h2>
        </div>
      )}
    </div>
    </div>
  );
}
