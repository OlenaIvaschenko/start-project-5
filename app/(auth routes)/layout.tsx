"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();

  useEffect(() => {
    router.refresh();
  }, [router]);
  
  return <>{children}</>;
}
