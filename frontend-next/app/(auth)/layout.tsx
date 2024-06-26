import { ReactNode } from "react";
import { FC } from "react";
import "../globals.css";
import Navbar from "../Components/navbar";

interface Auth_LayoutProps {
  children: ReactNode;
}

const Auth_Layout: FC<Auth_LayoutProps> = ({ children }) => {
  return (
    <>
        <Navbar />
        <div className="flex h-screen flex-col justify-center items-center ">
        <div className="rounded-md bg-white p-10 items-center ">{children}</div>
        </div>
    </>
  );
};

export default Auth_Layout;
