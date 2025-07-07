"use client";

import { getDocsTocs } from "@/lib/markdown";
import clsx from "clsx";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

type Props = { data: Awaited<ReturnType<typeof getDocsTocs>> };

export default function TocObserver({ data }: Props) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      const visibleEntry = entries.find((entry) => entry.isIntersecting);
      if (visibleEntry) {
        setActiveId(visibleEntry.target.id);
      }
    };

    observer.current = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "-20px 0px 0px 0px",
      threshold: 0.1,
    });

    const elements = data.map((item) =>
      document.getElementById(item.href.slice(1))
    );

    elements.forEach((el) => {
      if (el && observer.current) {
        observer.current.observe(el);
      }
    });

    return () => {
      if (observer.current) {
        elements.forEach((el) => {
          if (el) {
            observer.current!.unobserve(el);
          }
        });
      }
    };
  }, [data]);

  return (
    <div className="relative flex flex-col gap-2.5 text-sm dark:text-stone-300/85 text-stone-800 ml-0.5">
      {/* Vertical line */}
      <span
        className="absolute left-0 top-0 h-full w-0.5 bg-stone-200 dark:bg-stone-700 pointer-events-none"
        aria-hidden="true"
        style={{ zIndex: 0 }}
      />
      {data.map(({ href, level, text }, index) => {
        const isActive = activeId == href.slice(1);
        return (
          <Link
            key={href + text + level + index}
            href={href}
            className={clsx(
              "relative flex items-center transition-colors duration-150 ml-4",
              {
                "pl-0": level == 2,
                "pl-4": level == 3,
                "pl-8": level == 4,
                "dark:font-medium font-semibold text-primary": isActive,
              }
            )}
            aria-current={isActive ? "location" : undefined}
            tabIndex={0}
          >
            {isActive && (
              <span
                className="absolute -left-4 top-0 h-full w-0.5 bg-primary pointer-events-none"
                aria-hidden="true"
                style={{ zIndex: 1 }}
              />
            )}
            <span>{text}</span>
          </Link>
        );
      })}
    </div>
  );
}
