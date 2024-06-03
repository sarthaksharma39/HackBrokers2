import { ReactNode } from "react";
import { FC } from "react";
import "../globals.css";
import Navbar from "../Components/navbar";
import { SessionProvider } from "next-auth/react";

interface Auth_LayoutProps {
  children: ReactNode;
}

const Auth_Layout: FC<Auth_LayoutProps> = ({ children }) => {
  return (
    <>
        <Navbar />
        <div className="rounded-md bg-gray-600 p-10">{children}</div>
    </>
  );
};

export default Auth_Layout;
