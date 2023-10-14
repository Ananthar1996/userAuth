
import React from "react";

const UserProfile = ({ params }: any) => {
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
          <p className="flex flex-row pb-3">
            Profile page{" "}
            <span className="p-3 ml-3 rounded bg-accent text-black">
              {params.id}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
