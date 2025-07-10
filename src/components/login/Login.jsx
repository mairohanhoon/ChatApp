import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { doc, setDoc } from "firebase/firestore";

export default function Login() {
  const fileInputRef = useRef(null);
  const [avatar, setAvatar] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [email1, setEmail1] = useState("");
  const [password1, setPassword1] = useState("");
  const [proImage, setProImage] = useState(null);
  const [inProcess, setInProcess] = useState(false);
  const [inProcess1, setInProcess1] = useState(false);
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProImage(file);
      const reader = new FileReader();
      reader.onload = (ev) => setAvatar(ev.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleLogin = async(e) => {
    e.preventDefault();
    setInProcess1(true)
    try{
      await signInWithEmailAndPassword(auth, email1, password1)
      toast.success("Login Successfully !!")
      setInProcess(false)
    }
    catch(err){
      console.log(err);
      toast.error(err.code)
    }
    finally{
      setInProcess1(false)
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setInProcess(true);
    console.log(username, email, password, proImage);
    if (!username || !email || !password || !proImage) {
      toast.warn("Fill all feilds carefully !!");
      setInProcess(false);
      return;
    }
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      // Cloudinary part for image upload
      const data = new FormData();
      data.append("file", proImage);
      data.append("upload_preset", "ReactChatApp");
      data.append("cloud_name", "dojqd1yzs");

      const avatarResponse = await fetch(
        "https://api.cloudinary.com/v1_1/dojqd1yzs/image/upload",
        {
          method: "POST",
          body: data,
        }
      );

      const avatarData = await avatarResponse.json();

      await setDoc(doc(db, "users", res.user.uid), {
        username,
        email,
        id: res.user.uid,
        blocked: [],
        avatar: avatarData.url,
      });

      await setDoc(doc(db, "userchats", res.user.uid), {
        chats: [],
      });

      toast.success("Register Successfully !!");
    } catch (err) {
      console.log("Error in REGISTER : ", err );
      toast.error(err.code);
    } finally {
      setInProcess(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="flex w-full max-w-3xl bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        {/* Left: Login */}
        <div className="flex-1 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Login
          </h2>
          <form className="space-y-4" onSubmit={(e) => handleLogin(e)}>
            <div>
              <label className="block text-gray-300 mb-1">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                onChange={(e) => setEmail1(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-1">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                onChange={(e) => setPassword1(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 mt-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded transition-colors"
            >
              {
                (!inProcess1) ? "Login" : "Loading ..."
              }
            </button>
          </form>
        </div>
        {/* Divider */}
        <div className="w-px bg-gray-700 my-8" />
        {/* Right: Register */}
        <div className="flex-1 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Register
          </h2>
          <form className="space-y-4" onSubmit={(e) => handleRegister(e)}>
            <div>
              <label className="block text-gray-300 mb-1">Username</label>
              <input
                type="text"
                className="w-full px-3 py-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Choose a username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-1">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-1">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Create a password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-1">Avatar</label>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="w-full text-gray-300 bg-gray-700 rounded px-3 py-2"
                onChange={handleAvatarChange}
              />
              {avatar && (
                <div className="flex justify-center mt-2">
                  <img
                    src={avatar}
                    alt="Avatar Preview"
                    className="w-16 h-16 rounded-full object-cover border-2 border-gray-600"
                  />
                </div>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-2 mt-2 bg-green-600 hover:bg-green-500 text-white font-semibold rounded transition-colors"
            >
              {!inProcess ? "Register" : "Loading ..."}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
