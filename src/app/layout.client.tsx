"use client";
import ReduxProvider from "@/providers/ReduxProvider";
import { FC, ReactNode } from "react";
import LayoutSite from "@/AppPages/site/layout/LayoutSite";

interface LayoutClientProps {
  children: ReactNode;
}

const LayoutClient: FC<LayoutClientProps> = ({ children }) => {
  return (
    <ReduxProvider>
      <LayoutSite>{children}</LayoutSite>
    </ReduxProvider>
  );
};

export default LayoutClient;
