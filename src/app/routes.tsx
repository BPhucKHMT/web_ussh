import { createBrowserRouter } from "react-router";
import { RootLayout } from "./RootLayout";
import { IntroPage } from "./pages/IntroPage";
import { Chapter1Page } from "./pages/Chapter1Page";
import { Chapter2Page } from "./pages/Chapter2Page";
import { Chapter3Page } from "./pages/Chapter3Page";
import { ConclusionPage } from "./pages/ConclusionPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: IntroPage },
      { path: "chuong-1", Component: Chapter1Page },
      { path: "chuong-2", Component: Chapter2Page },
      { path: "chuong-3", Component: Chapter3Page },
      { path: "ket", Component: ConclusionPage },
    ],
  },
]);
