import "@/styles/globals.scss";
import { cn } from "@/utils/classnames";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RICOBOT",
  description:
    "Charge into a brand-new supersized adventure with RICO across 50 exciting and diverse worlds, available now on PS5!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("bg-white")}>
      <body className={cn("pt-24 md:pt-28 pb-32")}>{children}</body>
    </html>
  );
}
