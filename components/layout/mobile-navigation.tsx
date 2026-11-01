"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";
import { navigation } from "@/data/site";
export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  return (
    <div
      className="md:hidden"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setIsOpen(false);
          button.current?.focus();
        }
      }}
    >
      <button
        ref={button}
        type="button"
        className="focus-ring inline-flex size-11 items-center justify-center rounded-lg border border-line bg-surface text-copy"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((v) => !v)}
      >
        {isOpen ? (
          <CloseIcon className="size-5" />
        ) : (
          <MenuIcon className="size-5" />
        )}
      </button>
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!isOpen}
        className="absolute inset-x-0 top-[74px] border-b border-line bg-surface px-6 py-5 shadow-lg"
      >
        <ul className="space-y-1">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={
                  pathname.startsWith(item.href) ? "page" : undefined
                }
                onClick={() => setIsOpen(false)}
                className="focus-ring block rounded px-3 py-3 text-base text-copy hover:bg-navy"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
