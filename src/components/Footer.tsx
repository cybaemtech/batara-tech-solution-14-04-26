import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate("/", { state: { scrollTo: "contact" } });
  };

  return (
    <footer className="relative z-[1] bg-card border-t border-border py-10 px-4 sm:px-8 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6 md:flex-row md:justify-between">
        <div className="flex items-center gap-3">
          <img src="/btlogonew.png" alt="Batara Techno Solutions" className="h-16 w-auto" />
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
          <Link to="/industries" className="text-silver text-xs uppercase tracking-wider hover:text-foreground transition-colors">Industries</Link>
          <Link to="/solutions" className="text-silver text-xs uppercase tracking-wider hover:text-foreground transition-colors">Solutions</Link>
          <Link to="/technical-gallery" className="text-silver text-xs uppercase tracking-wider hover:text-foreground transition-colors">Technical Gallery</Link>
          <Link to="/about" className="text-silver text-xs uppercase tracking-wider hover:text-foreground transition-colors">About Us</Link>
          <Link to="/careers" className="text-silver text-xs uppercase tracking-wider hover:text-foreground transition-colors">Careers</Link>
          <button onClick={goToContact} className="text-silver text-xs uppercase tracking-wider hover:text-foreground transition-colors">Contact</button>
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
