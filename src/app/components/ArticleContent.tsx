import { ReactNode } from "react";

interface ArticleContentProps {
  children: ReactNode;
  maxWidth?: string;
}

export function ArticleContent({ children, maxWidth = "760px" }: ArticleContentProps) {
  return (
    <div className="bg-[var(--ivory)] py-16 px-6">
      <div className="mx-auto" style={{ maxWidth }}>
        <div
          className="prose prose-lg text-[var(--deep-brown)]"
          style={{ fontFamily: "var(--font-sans)", fontSize: "1.125rem", lineHeight: 1.8 }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export function DropCap({ children }: { children: string }) {
  const firstLetter = children.charAt(0);
  const rest = children.slice(1);

  return (
    <p className="text-[var(--deep-brown)] leading-relaxed mb-6">
      <span
        className="float-left text-[5rem] leading-[0.8] mr-3 mt-2 text-[var(--bronze)]"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        {firstLetter}
      </span>
      {rest}
    </p>
  );
}

export function PullQuote({ children, author }: { children: ReactNode; author?: string }) {
  return (
    <div className="my-12 bg-[var(--wood-brown)]/5 p-8 rounded-lg border-l-4 border-[var(--bronze)]">
      <blockquote
        className="text-[var(--deep-brown)] italic"
        style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", lineHeight: 1.6 }}
      >
        {children}
      </blockquote>
      {author && (
        <div className="mt-4 text-[var(--wood-brown)]" style={{ fontFamily: "var(--font-sans)" }}>
          — {author}
        </div>
      )}
    </div>
  );
}

export function Subhead({ children }: { children: ReactNode }) {
  return (
    <h3
      className="mt-12 mb-6 text-[var(--deep-brown)]"
      style={{ fontFamily: "var(--font-serif)", fontSize: "1.75rem", fontWeight: 600 }}
    >
      {children}
    </h3>
  );
}
