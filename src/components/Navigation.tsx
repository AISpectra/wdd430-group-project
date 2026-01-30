import Link from "next/link";

type NavigationProps = {
  active?: "home" | "about";
};

export default function Navigation({ active }: NavigationProps) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true" />
          <Link className="brand-name" href="/">
            WDD 430 Group Project
          </Link>
        </div>

        <nav className="nav" aria-label="Primary">
          <Link className={active === "home" ? "nav-active" : ""} href="/">
            Home
          </Link>
          <Link className={active === "about" ? "nav-active" : ""} href="/about">
            About
          </Link>
          <a className="nav-cta" href="#get-started">
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
}
