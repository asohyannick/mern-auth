import { useSelector } from "react-redux";
export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <img
          src={currentUser.profilePicture}
          alt="profile"
          className="cursor-pointer object-cover rounded-full mt-4 h-24 w-24 self-center"
        />
        <input
          type="text"
          id="username"
          className="p-3 rounded-lg-3 bg-slate-100"
          defaultValue={currentUser.username}
        />
        <input
          type="email"
          defaultValue={currentUser.email}
          id="email"
          className="p-3 rounded-lg-3 bg-slate-100"
        />

        <input
          type="password"
          id="email"
          className="p-3 rounded-lg-3 bg-slate-100"
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          Update
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete Account</span>
        <span className="text-red-700 cursor-pointer">Sign Out</span>
      </div>
    </div>
  );
}
