"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { NextResponse } from "next/server";

const SignupPage = () => {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("SignUp success", response.data);
      router.push("/login");
    } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="card-title">
        {loading ? (
          <span className="loading loading-spinner loading-md"></span>
        ) : (
          "SignUp"
        )}
      </h1>
      <label className="card-title" htmlFor="username">
        username :{" "}
      </label>
      <input
        className="input input-bordered input-info w-full max-w-xs"
        id="username"
        type="username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="username"
      />

      <label className="card-title" htmlFor="email">
        email :{" "}
      </label>
      <input
        className="input input-bordered input-info w-full max-w-xs"
        id="email"
        type="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
      />

      <label className="card-title" htmlFor="password">
        password :{" "}
      </label>
      <input
        className="input input-bordered input-info w-full max-w-xs"
        id="password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
      />
      <button
        onClick={onSignup}
        className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-neutral-focus mt-5"
      >
        {buttonDisabled ? "No signup" : "Signup"}
      </button>
      <Link className="link link-primary mt-5" href="/login">
        Vist Login Page
      </Link>
    </div>
  );
};

export default SignupPage;
