"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/certificates", label: "Certificados" },
  { href: "/institutions", label: "Instituições" },
  { href: "/courses", label: "Cursos" },
  { href: "/badges", label: "Selos" },
  { href: "/help", label: "Ajuda" },
];

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b bg-[#FCFCFC] sticky top-0 z-50 h-16 shadow-[0px_4px_4px_0px_#00000026]">
      <div className="container mx-auto flex h-full w-full items-center justify-between px-4 md:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Validação Brasil"
            width={163}
            height={40}
            priority
          />
        </Link>

        {/* Desktop Navigation & Actions */}
        <div className="hidden items-center gap-8 lg:flex">
          <nav className="flex items-center gap-6 text-sm font-medium">
            {navItems.map((item) => {
              const isActive =
                item.href === "/certificates"
                  ? pathname === "/" || pathname.startsWith("/certificates")
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    "rounded-[7px] px-4 py-3 transition-colors font-raleway font-normal text-base leading-none tracking-normal " +
                    (isActive
                      ? "bg-[#B0CFF1] text-[#004894]"
                      : "text-[#004894] hover:text-blue-600")
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3 ">
            <button className="flex h-[39px] w-[120px] items-center justify-center rounded-[7px] border border-[#0065D1] text-sm font-semibold text-[#0065D1] transition-colors hover:bg-blue-50 cursor-pointer">
              Cadastrar
            </button>
            <button className="flex h-[39px] w-[120px] items-center justify-center rounded-[7px] bg-[#0065D1] text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 cursor-pointer">
              Entrar
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-slate-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b shadow-lg lg:hidden flex flex-col p-4 gap-4">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive =
                item.href === "/certificates"
                  ? pathname === "/" || pathname.startsWith("/certificates")
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    "rounded-[4px] px-4 py-3 transition-colors text-base font-medium font-raleway font-normal leading-none tracking-normal " +
                    (isActive
                      ? "bg-[#B0CFF1] text-[#004894]"
                      : "text-[#004894] hover:bg-slate-50")
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex flex-col gap-3 pt-2 border-t">
            <button className="flex h-[44px] w-full items-center justify-center rounded-[4px] border border-[#0065D1] text-sm font-semibold text-[#0065D1] transition-colors hover:bg-blue-50">
              Cadastrar
            </button>
            <button className="flex h-[44px] w-full items-center justify-center rounded-[4px] bg-[#0065D1] text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700">
              Entrar
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
