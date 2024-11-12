"use client";
import ReduxProvider from "@/providers/ReduxProvider";
import { FC, ReactNode } from "react";
import LayoutSite from "@/AppPages/site/layout/LayoutSite";
import { usePathname } from "next/navigation";

interface LayoutClientProps {
    children: ReactNode;
}

const LayoutClient: FC<LayoutClientProps> = ({ children }) => {
    const pathname = usePathname();

    const disableLayoutSite = pathname === "/auth/SignUpPage";

    return (
        <ReduxProvider>
            {disableLayoutSite ? children : <LayoutSite>{children}</LayoutSite>}
        </ReduxProvider>
    );
};

export default LayoutClient;
