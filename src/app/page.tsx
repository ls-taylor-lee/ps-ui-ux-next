"use client";

import BackgroundWithImageOverlay from "@/components/BackgroundWithImageOverlay";
import InfoBox from "@/components/ui/InfoBox";
import { cn } from "@/utils/classnames";
import Link from "next/link";

export default function Home() {
  return (
    <div className={cn("main-content", "relative overflow-hidden")}>
      <div className={cn("container px-8 py-6 pad:p-16 relative z-10")}>
        <div className="mb-24 pad:mb-20">
          <p className="text-header-mobile pad:text-header-desktop">MORE FROM</p>
          <p className="text-header-mobile pad:text-header-desktop">RICO THE DOG</p>
        </div>
        <div className="mb-2">
          <InfoBox type="info" message="RICO IS BACK!" />
        </div>
        <h1 className="text-title-mobile pad:text-title-desktop leading-tight">RICOBOT</h1>
        <div className="text-paragraph-mobile pad:text-paragraph-desktop w-4/5 pad:w-5/12 mb-8">
          Charge into a brand-new supersized adventure with RICO across 50 exciting and diverse worlds, available now on
          PS5!
        </div>
        <Link
          className={cn(
            "!text-cta-foreground",
            "bg-cta-background",
            "text-cta-mobile pad:text-cta-desktop",
            "p-3 rounded-full",
            "mb-8"
          )}
          target="__blank"
          href={"https://playstation.com"}
        >
          LEARN MORE
        </Link>
      </div>
      <BackgroundWithImageOverlay imgSrc="/images/1-background.png" />
    </div>
  );
}
