"use client";
import { cn } from "@/lib/utils";
import Logo from "@/public/images/logo.png";
import { ShoppingBag, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Product", href: "/product" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];
  return (
    <nav className="flex justify-between items-center py-4 px-6">
      <div className="">
        <Image src={Logo} alt="logo" width={120} height={64} />
      </div>

      <div className="flex gap-8">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "px-6  py-2 text-black ",
              pathname === item.href
                ? "hover:bg-gray-100 border rounded-full"
                : "hover:text-gray-600"
            )}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <div className="flex gap-4 items-center">
        <Link href="/cart" aria-label="Shopping cart">
          <ShoppingBag />
        </Link>
        <Link href="/profile" aria-label="User profile">
          <UserRound />
        </Link>
      </div>
    </nav>
  );
}

export default Header;
