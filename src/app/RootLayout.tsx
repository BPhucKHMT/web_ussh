import { useEffect } from "react";
import { Outlet } from "react-router";
import { ChapterNav } from "./components/ChapterNav";
import { ScrollRestoration } from "react-router";
import { preloadChapterImages } from "./imagePreload";

export function RootLayout() {
  useEffect(() => {
    preloadChapterImages();
  }, []);
  return (
    <div className="relative bg-[var(--ivory)] min-h-screen" style={{ fontFamily: "var(--font-sans)" }}>
      <ChapterNav />
      <Outlet />
      <ScrollRestoration />
    </div>
  );
}
