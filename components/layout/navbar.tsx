"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { Container } from "@/components/ui/container";
import { navigation } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-navy/85 backdrop-blur-xl">
      <Container className="flex h-[72px] items-center justify-between">
        <Link
          href="/"
          className="focus-ring inline-flex items-center gap-3 rounded-md"
          aria-label="Sandra portfolio home"
        >
          <span className="grid size-9 place-items-center rounded-lg bg-teal text-sm font-black text-navy">
            S
          </span>
          <span className="text-sm font-bold tracking-wide text-copy">
            SANDRA<span className="text-teal">.</span>OS
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
                      "focus-ring rounded-md px-2.5 py-2 text-xs font-medium transition lg:px-3 lg:text-sm",
                      isActive
                        ? "text-teal"
                        : "text-muted hover:bg-surface hover:text-copy",
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
