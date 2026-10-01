import React, { use } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Profile = () => {
    const {user, updateUserProfile, setUser} =use(AuthContext);

    const handleUpdateProfile =(e)=>{
        e.preventDefault();
        const form = e.target;
        const name= form.name.value;
        const photoURL = form.photoURL.value;

        updateUserProfile(name,photoURL)
        .then((updatedUser)=>{
            setUser(updatedUser);

            Swal.fire({
                        title: 'Profile Updated!',
                        text: 'Your profile has been updated successfully.',
                        icon: 'success',
                        confirmButtonColor:'#86be5c',
                        confirmButtonText: 'Continue'
                    });
        })
        .catch((error)=>{
            Swal.fire({
                title: 'Update Failed',
                text: error.message,
                icon: 'error',
                 confirmButtonColor:'#86be5c',
                confirmButtonText: 'Try Again',

            })
        })
    }

    return (
          <div className="min-h-screen flex justify-center items-center bg-[#f7fbeF] px-4 py-10">
      <div className="card bg-white w-full max-w-md shadow-xl">
        <div className="card-body">

          <h2 className="text-2xl font-bold text-center text-[#37561e] mb-5">
            My Profile
          </h2>

          {/* Profile Image */}
          <div className="flex justify-center mb-5">
            <img
              src={
                user?.photoURL ||
                "https://i.ibb.co/5GzXkwq/user.png"
              }
              alt="Profile"
              className="w-28 h-28 rounded-full object-cover border-4 border-[#86be5c]"
            />
          </div>

          {/* User Information */}
          <div className="space-y-2 mb-6">
            <p className="text-[#324324]">
              <span className="font-bold">Name:</span>{" "}
              {user?.displayName || "No name added"}
            </p>

            <p className="text-[#324324]">
              <span className="font-bold">Email:</span>{" "}
              {user?.email}
            </p>

            <p className="text-[#324324]">
              <span className="font-bold">Photo URL:</span>{" "}
              {user?.photoURL || "No photo URL added"}
            </p>
          </div>

          {/* Update Form */}
          <form onSubmit={handleUpdateProfile}>
            <label className="label text-[#548031] font-semibold">
              Update Name
            </label>

            <input
              type="text"
              name="name"
              defaultValue={user?.displayName || ""}
              className="input w-full"
              placeholder="Enter your name"
              required
            />

            <label className="label text-[#548031] font-semibold mt-3">
              Update Photo URL
            </label>

            <input
              type="text"
              name="photoURL"
              defaultValue={user?.photoURL || ""}
              className="input w-full"
              placeholder="Enter photo URL"
              required
            />

            <button
              type="submit"
              className="btn w-full bg-[#86be5c] text-[#324324] font-bold mt-5"
            >
              Save Changes
            </button>
          </form>

        </div>
      </div>
    </div>
    );
};

export default Profile;