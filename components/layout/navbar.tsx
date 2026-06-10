"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { Container } from "@/components/ui/container";
import { BlossomIcon } from "@/components/ui/icons";
import { navigation } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-navy/88 backdrop-blur-xl">
      <Container className="flex h-[74px] items-center justify-between">
        <Link
          href="/"
          className="focus-ring inline-flex items-center gap-3 rounded-md"
          aria-label="Sandra portfolio home"
        >
          <span className="grid size-10 place-items-center rounded-full bg-gradient-to-br from-[#e890b4] to-teal text-navy shadow-[0_8px_22px_rgba(194,79,124,0.22)]">
            <BlossomIcon className="size-5" />
          </span>
          <span className="font-display text-lg font-semibold tracking-[0.04em] text-copy">
            Sandra<span className="text-teal">.</span>OS
          </span>
        </Link>

        <nav className="hidden md:block" aria-label="Primary navigation">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "focus-ring rounded-full px-2.5 py-2 text-xs font-medium transition lg:px-3 lg:text-sm",
                      isActive
                        ? "bg-teal/9 text-teal"
                        : "text-muted hover:bg-surface/90 hover:text-copy",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <MobileNavigation />
      </Container>
    </header>
  );
}
