"use client";

import { usePathname } from "next/navigation";

type HideAtProps = {
  paths: string[];
  children: React.ReactNode;
};

export function HideAt({ children, paths }: HideAtProps) {
  const pathname = usePathname();
  const hideMe = paths.find(
    (path) =>
      path.includes(pathname) || pathname.includes(path) || path === pathname,
  );

  if (hideMe) {
    return null;
  }

  return <>{children}</>;
}
