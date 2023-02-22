import { useRef } from "react";
import LogIn from "./components/LogIn/LogIn";

export default function App() {
  const data = [
    {
      username: "admin",
      password: "123456",
    },
    {
      username: "admin2",
      password: "111111",
    },
  ];
  const refUsername = useRef("");
  const refPassword = useRef("");

  return (
    <div className="h-screen w-screen bg-[#ebebeb] font-poppins">
      <LogIn data={data} refUsername={refUsername} refPassword={refPassword} />
    </div>
  );
}
