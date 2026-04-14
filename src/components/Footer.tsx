import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Industries", href: "#", isRoute: false },
  { label: "Solutions", href: "/solutions", isRoute: true },
  { label: "Technical Gallery", href: "/technical-gallery", isRoute: true },
  { label: "About Us", href: "/about", isRoute: true },
  { label: "Careers", href: "#", isRoute: false },
  { label: "Contact", href: "#contact", isRoute: false },
];

const Footer = () => {
  return (
    <footer className="relative z-[1] bg-card border-t border-border py-10 px-4 sm:px-8 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6 md:flex-row md:justify-between">
        <div className="flex items-center gap-3">
          <img src="/btlogonew.png" alt="Batara Techno Solutions" className="h-16 w-auto" />
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
          {footerLinks.map((link) =>
            link.isRoute ? (
              <Link key={link.label} to={link.href} className="text-silver text-xs uppercase tracking-wider hover:text-foreground transition-colors">
                {link.label}
              </Link>
            ) : (
              <a key={link.label} href={link.href} className="text-silver text-xs uppercase tracking-wider hover:text-foreground transition-colors">
                {link.label}
              </a>
            )
          )}
        </div>
        <div className="font-mono text-[10px] text-silver tracking-wider text-center md:text-right space-y-1">
          <p>© 2026 Batara Techno Solutions. All rights reserved.</p>
          <p>
            Designed by{" "}
            <a
              href="https://www.cybaemtech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              CybaemTech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
