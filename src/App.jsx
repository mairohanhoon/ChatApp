import { useState } from "react";
import List from "./components/list/List";
import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import Login from "./components/login/Login";
import { Notification } from "./components/notification/Notification";

function App() {
  const user = false;

  return (
    <div className=" flex items-center justify-center bg-slate-900 w-auto h-screen ">
      {user ? (
        <div className="flex bg-white/10 w-[90%] h-[90%] overflow-auto rounded-2xl shadow-xl p-6 backdrop-blur-2xl border border-white/20 ring-1 ring-white/10">
          <List />
          <div className="w-px bg-gray-700 mx-4 rounded-full" />
          <Chat />
          <div className="w-px bg-gray-700 mx-4 rounded-full" />
          <Detail />
        </div>
      ) : (
        <Login />
      )}
      <Notification/>
    </div>
  );
}

export default App;
