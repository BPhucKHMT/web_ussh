import { Outlet } from "react-router";
import { ChapterNav } from "./components/ChapterNav";
import { ScrollRestoration } from "react-router";

export function RootLayout() {
  return (
    <div className="relative bg-[var(--ivory)] min-h-screen" style={{ fontFamily: "var(--font-sans)" }}>
      <ChapterNav />
      <Outlet />
      <ScrollRestoration />
    </div>
  );
}
