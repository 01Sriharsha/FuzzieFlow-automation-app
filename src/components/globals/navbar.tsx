import Link from "next/link";

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
      <aside></aside>
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
