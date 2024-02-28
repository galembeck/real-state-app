import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const navigationList = [
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "Contact",
    href: "/contact",
  },
]

export function Navigation() {
  return (
    <nav className="fixed w-screen px-4 top-2 z-50">
      <div className="py-3 container flex items-center justify-between bg-background rounded-md z-50">
        <p className="font-bold italic">EState</p>

        <ul className="flex items-center gap-4">
          {navigationList.map(nav => {
            return (
              <li key={nav.title}>
                <Link href={nav.href} className="text-muted-foreground hover:text-primary hover:underline">
                  {nav.title}
                </Link>
              </li>
            );
          })}
        </ul>

        <div>
          <Avatar>
            {/* <AvatarImage src="" /> */}
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>
  );
}