import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Cart Page",
  description:
    "A simple and modern food menu app that displays a collection of traditional Egyptian dishes.",
};

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <main>{children}</main>;
};

export default Layout;
