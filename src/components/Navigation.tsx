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
          <Link
            href="/"
            className={active === "home" ? "nav-active" : ""}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={active === "about" ? "nav-active" : ""}
          >
            About
          </Link>

          <Link
            href="/#get-started"
            className="nav-cta"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}
