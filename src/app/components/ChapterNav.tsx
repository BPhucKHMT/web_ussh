import { motion } from "motion/react";
import { useLocation, useNavigate } from "react-router";

interface Chapter {
  id: string;
  path: string;
  title: string;
  label: string;
}

const chapters: Chapter[] = [
  { id: "mo", path: "/", title: "Mở", label: "Mở" },
  { id: "chuong-1", path: "/chuong-1", title: "Chương 1", label: "Chương 1" },
  { id: "chuong-2", path: "/chuong-2", title: "Chương 2", label: "Chương 2" },
  { id: "chuong-3", path: "/chuong-3", title: "Chương 3", label: "Chương 3" },
  { id: "ket", path: "/ket", title: "Kết", label: "Kết" },
];

export function ChapterNav() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const currentPath = location.pathname;
  const activeChapter = chapters.find(c => c.path === currentPath)?.id || "mo";

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <div className="flex flex-col items-end gap-6">
        {chapters.map((chapter, index) => (
          <div 
            key={chapter.id} 
            className="flex items-center gap-3 group cursor-pointer" 
            onClick={() => navigate(chapter.path)}
          >
            <div
              className={`text-sm whitespace-nowrap px-3 py-1 rounded bg-[var(--bronze)] text-[var(--ivory)] transition-all duration-300 ${
                activeChapter === chapter.id 
                  ? "opacity-100 translate-x-0" 
                  : "opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"
              }`}
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {chapter.label}
            </div>
            <div className="relative">
              <div className="w-3 h-3 rounded-full border-2 border-[var(--bronze)] bg-[var(--ivory)] group-hover:bg-[var(--bronze)] transition-all">
                {activeChapter === chapter.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 rounded-full bg-[var(--bronze)]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </div>
              {index < chapters.length - 1 && (
                <div className="absolute left-1/2 top-full -translate-x-1/2 w-px h-10 bg-[var(--bronze)] opacity-30" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
