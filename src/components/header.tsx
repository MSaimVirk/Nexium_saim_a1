"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { ModeToggle } from "../components/DarkModeToogle";

export default function Header() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/random-quote", label: "Random Quotes" },
    { href: "/search", label: "Search Quotes" },
  ];

  return (
    <header className="w-full border-b bg-gray-500 dark:bg-black py-6">
      <nav className="flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={clsx(
              "text-sm font-medium px-3 py-2 rounded transition-colors duration-200",
              "hover:bg-[#f9f9f9] hover:text-black",
              pathname === href
                ? "bg-gray-500 text-white"
                : "text-gray-800 dark:text-gray-300"
            )}
          >
            {label}
          </Link>
        ))}
        </ div>
        <div className="flex items-center gap-4">
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
