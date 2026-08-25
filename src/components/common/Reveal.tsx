"use client";

import type { ReactNode } from "react";
import { useInView } from "../../hooks/useInView";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/** Fades and slides content up when it scrolls into view. */
export function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      data-reveal={inView ? "visible" : undefined}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
      className={className}
    >
      {children}
    </div>
  );
}
