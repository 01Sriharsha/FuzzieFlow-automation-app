import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/logo.png";

const Navbar = () => {
  const routes = [
    {
      label: "Products",
      href: "/products",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Client",
      href: "/client",
    },
    {
      label: "Resources",
      href: "/resources",
    },
    {
      label: "Documentation",
      href: "/docs",
    },
    {
      label: "Enterprise",
      href: "/enterprise",
    },
  ];
  return (
    <header className="fixed top-0 right-0 left-0 w-full backdrop-blur-lg z-50 p-4 bg-black/40 flex items-center justify-between gap-2 border border-neutral-900">
      <aside>
        <Link href={"/"} className="flex items-center gap-1">
          <Image
            src={Logo}
            alt="logo"
            width={30}
            height={30}
            className="rounded-full"
          />
          <h1 className="font-semibold text-xl">FuzzieFlow</h1>
        </Link>
      </aside>
      <nav>
        <ul className="flex flex-wrap justify-center gap-4 list-none">
          {routes.map((route) => (
            <Link key={route.label} href={route.href}>
              <li className="capitalize">{route.label}</li>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
