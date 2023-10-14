import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Welcome to the user login page, made with mongodb, jws token and bcryptjs.
              Features SignIn, LoginIn, GetUserData and user Verification.
              Forgotten password will be added soon...
            </p>
            <Link href="/login" className="btn btn-outline mr-4">LogIn</Link>
            <Link href="/signup" className="btn btn-outline">SignUp</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
