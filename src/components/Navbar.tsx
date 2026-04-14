import { useState } from "react";
import {
  Menu, X, ChevronDown, Shield, ArrowRight,
  Plane, Car, Cog, Cpu, Zap, Truck,
  Factory, Film, Compass, GitBranch, CircuitBoard, LucideIcon,
} from "lucide-react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";

const WA_LINK = "https://wa.me/918105111599";

type NavItem = { label: string; desc: string; href: string; icon: LucideIcon };

const industriesLeft: NavItem[] = [
  { label: "Aerospace", desc: "High-precision engineering for flight-critical systems.", href: "/industries#aerospace", icon: Plane },
  { label: "Automotive", desc: "Module design & vehicle engineering across all segments.", href: "/industries#automotive", icon: Car },
  { label: "Industrial Machinery", desc: "Purpose-built equipment for complex industrial environments.", href: "/industries#industrial-machinery", icon: Cog },
];

const industriesRight: NavItem[] = [
  { label: "Industrial Automation", desc: "Modernising production through smart digital integration.", href: "/industries#industrial-automation", icon: Cpu },
  { label: "Electro-Mechanical", desc: "Integrated systems at the intersection of mechanics & electronics.", href: "/industries#electro-mechanical", icon: Zap },
  { label: "Heavy Machinery", desc: "Structural engineering for the most demanding operating conditions.", href: "/industries#heavy-machinery", icon: Truck },
];

const servicesLeft: NavItem[] = [
  { label: "Manufacturing Engineering", desc: "BIW, mould design & sheet metal fabrication.", href: "/services#manufacturing-engineering", icon: Factory },
  { label: "Technical Animation & Publication", desc: "3D renders, exploded views & technical documentation.", href: "/services#technical-animation", icon: Film },
];

const servicesRight: NavItem[] = [
  { label: "Engineering Design & Analysis", desc: "FEA, CFD & integrated project delivery.", href: "/services#engineering-design", icon: Compass },
  { label: "Integrated Project Delivery", desc: "Electronics, mechanical & additive manufacturing unified.", href: "/services#integrated-project-delivery", icon: GitBranch },
  { label: "Electronics Manufacturing", desc: "PCB design & electromechanical assembly.", href: "/services#electronics-manufacturing", icon: CircuitBoard },
];

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleRequestPrototype = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileOpen(false);
    if (location.pathname === "/") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const megaBg = "bg-[#1a4f8c]";
  const megaBorder = "border border-white/10";

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 lg:px-10 h-[76px] bg-card/95 backdrop-blur-xl border-b border-border">
      <Link to="/" className="flex items-center shrink-0">
        <img src="/btlogonew.png" alt="Batara Techno Solutions" className="h-[62px] w-auto" />
      </Link>

      <ul className="hidden lg:flex items-center gap-6 list-none">

        {/* ── Industries mega dropdown ── */}
        <li className="relative group">
          <button className={`flex items-center gap-1 text-[13px] font-medium tracking-wider uppercase transition-colors py-2 ${location.pathname === "/industries" ? "text-primary" : "text-silver hover:text-foreground"}`}>
            Industries
            <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
          </button>

          <div className={`absolute top-full left-0 mt-2 w-[820px] ${megaBg} ${megaBorder} rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[200] flex overflow-hidden`}>
            {/* Left: plain list */}
            <div className="w-[220px] shrink-0 p-6 border-r border-white/10">
              <p className="text-[9px] font-semibold tracking-[0.18em] uppercase text-white/40 mb-4">Industries</p>
              {industriesLeft.map((item, i) => (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    className="flex items-start gap-2.5 py-3 rounded-md hover:bg-white/5 transition-colors px-1 group/pi"
                  >
                    <span className="w-8 h-8 shrink-0 mt-0.5 rounded-lg bg-white/10 flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-white/80" />
                    </span>
                    <div>
                      <p className="text-[13px] font-medium text-white/85 group-hover/pi:text-white transition-colors leading-snug">{item.label}</p>
                      <p className="text-[11px] text-white/40 leading-snug mt-0.5">{item.desc}</p>
                    </div>
                  </Link>
                  {i < industriesLeft.length - 1 && <div className="h-px bg-white/10 mx-1" />}
                </div>
              ))}
            </div>

            {/* Middle: card list */}
            <div className="flex-1 p-6">
              <p className="text-[9px] font-semibold tracking-[0.18em] uppercase text-white/40 mb-4">Automation &amp; Electronics</p>
              <div className="flex flex-col gap-2.5">
                {industriesRight.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="flex items-start gap-3 p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all group/card"
                  >
                    <span className="w-8 h-8 shrink-0 mt-0.5 rounded-lg bg-white/10 flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-white/80" />
                    </span>
                    <div>
                      <p className="text-[13px] font-medium text-white/85 group-hover/card:text-white transition-colors leading-snug">{item.label}</p>
                      <p className="text-[11px] text-white/40 leading-snug mt-0.5">{item.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right: feature card */}
            <div className="w-[200px] shrink-0 m-4 bg-white rounded-xl p-5 flex flex-col justify-between">
              <div>
                <p className="font-bold text-[#0e1c2f] text-[18px] leading-tight mb-3">Multi-sector engineering depth.</p>
                <p className="text-[11.5px] text-slate-500 leading-relaxed">From aerospace tolerances to heavy machinery load cases — precision engineered across every vertical we serve.</p>
              </div>
              <Link to="/industries" className="flex items-center gap-1.5 text-[13px] font-medium text-[#0e1c2f] hover:text-blue-600 transition-colors mt-4">
                Explore industries <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </li>

        {/* ── Services mega dropdown ── */}
        <li className="relative group">
          <button className={`flex items-center gap-1 text-[13px] font-medium tracking-wider uppercase transition-colors py-2 ${["/solutions", "/services"].includes(location.pathname) ? "text-primary" : "text-silver hover:text-foreground"}`}>
            Services
            <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
          </button>

          <div className={`absolute top-full left-0 mt-2 w-[820px] ${megaBg} ${megaBorder} rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[200] flex overflow-hidden`}>
            {/* Left: plain list */}
            <div className="w-[240px] shrink-0 p-6 border-r border-white/10">
              <p className="text-[9px] font-semibold tracking-[0.18em] uppercase text-white/40 mb-4">Core Services</p>
              {servicesLeft.map((item, i) => (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    className="flex items-start gap-2.5 py-3 rounded-md hover:bg-white/5 transition-colors px-1 group/pi"
                  >
                    <span className="w-8 h-8 shrink-0 mt-0.5 rounded-lg bg-white/10 flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-white/80" />
                    </span>
                    <div>
                      <p className="text-[13px] font-medium text-white/85 group-hover/pi:text-white transition-colors leading-snug">{item.label}</p>
                      <p className="text-[11px] text-white/40 leading-snug mt-0.5">{item.desc}</p>
                    </div>
                  </Link>
                  {i < servicesLeft.length - 1 && <div className="h-px bg-white/10 mx-1" />}
                </div>
              ))}
            </div>

            {/* Middle: card list */}
            <div className="flex-1 p-6">
              <p className="text-[9px] font-semibold tracking-[0.18em] uppercase text-white/40 mb-4">Design &amp; Electronics</p>
              <div className="flex flex-col gap-2.5">
                {servicesRight.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="flex items-start gap-3 p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all group/card"
                  >
                    <span className="w-8 h-8 shrink-0 mt-0.5 rounded-lg bg-white/10 flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-white/80" />
                    </span>
                    <div>
                      <p className="text-[13px] font-medium text-white/85 group-hover/card:text-white transition-colors leading-snug">{item.label}</p>
                      <p className="text-[11px] text-white/40 leading-snug mt-0.5">{item.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right: feature card */}
            <div className="w-[200px] shrink-0 m-4 bg-white rounded-xl p-5 flex flex-col justify-between">
              <div>
                <p className="font-bold text-[#0e1c2f] text-[18px] leading-tight mb-3">End-to-end. No handoff gaps.</p>
                <p className="text-[11.5px] text-slate-500 leading-relaxed">Design, analyse, animate and manufacture under one roof — ISO-certified quality from first sketch to final delivery.</p>
              </div>
              <Link to="/services" className="flex items-center gap-1.5 text-[13px] font-medium text-[#0e1c2f] hover:text-blue-600 transition-colors mt-4">
                See all services <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </li>

        <li>
          <NavLink
            to="/mould-design"
            className={({ isActive }) =>
              `text-[13px] font-medium tracking-wider uppercase transition-colors ${isActive ? "text-primary" : "text-silver hover:text-foreground"}`
            }
          >
            Project Portfolio
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/technical-gallery"
            className={({ isActive }) =>
              `text-[13px] font-medium tracking-wider uppercase transition-colors ${isActive ? "text-primary" : "text-silver hover:text-foreground"}`
            }
          >
            Technical Gallery
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/careers"
            className={({ isActive }) =>
              `text-[13px] font-medium tracking-wider uppercase transition-colors ${isActive ? "text-primary" : "text-silver hover:text-foreground"}`
            }
          >
            Careers
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-[13px] font-medium tracking-wider uppercase transition-colors ${isActive ? "text-primary" : "text-silver hover:text-foreground"}`
            }
          >
            About Us
          </NavLink>
        </li>
      </ul>

      <div className="hidden lg:flex items-center gap-3">
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-9 h-9 border border-primary/30 rounded bg-primary/5 text-primary hover:bg-primary/10 hover:border-primary transition-all"
          title="WhatsApp Us"
        >
          <WhatsAppIcon />
        </a>
        <button
          onClick={handleRequestPrototype}
          className="flex items-center gap-2 px-5 py-2 bg-primary rounded text-primary-foreground text-[13px] font-semibold tracking-wide hover:brightness-110 hover:-translate-y-px hover:shadow-[0_6px_20px_hsl(214_72%_37%/0.35)] transition-all"
        >
          <Shield className="w-3.5 h-3.5" />
          Request Prototype
        </button>
      </div>

      <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
        {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {mobileOpen && (
        <div className="absolute top-[76px] left-0 right-0 lg:hidden max-h-[82vh] overflow-y-auto"
          style={{ background: "linear-gradient(180deg, #0b1629 0%, #060c1a 100%)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div className="px-5 py-4 flex flex-col gap-0.5">

            {/* Mobile — Industries */}
            <button
              className="flex items-center justify-between w-full text-[13px] font-semibold uppercase tracking-widest text-white/70 hover:text-white transition-colors py-3 px-1 border-b border-white/[0.06]"
              onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
            >
              Industries
              <ChevronDown className={`w-4 h-4 text-primary transition-transform duration-200 ${mobileIndustriesOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileIndustriesOpen && (
              <div className="flex flex-col gap-0.5 py-2 px-2 mb-1 rounded-xl mt-1"
                style={{ background: "rgba(30,60,120,0.18)", border: "1px solid rgba(255,255,255,0.06)" }}>
                {[...industriesLeft, ...industriesRight].map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="flex flex-col py-2.5 px-3 rounded-lg text-[13px] text-white/60 hover:text-white transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    <span className="font-medium text-white/80">{item.label}</span>
                    <span className="text-[11px] text-white/40 mt-0.5">{item.desc}</span>
                  </Link>
                ))}
              </div>
            )}

            {/* Mobile — Services */}
            <button
              className="flex items-center justify-between w-full text-[13px] font-semibold uppercase tracking-widest text-white/70 hover:text-white transition-colors py-3 px-1 border-b border-white/[0.06]"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            >
              Services
              <ChevronDown className={`w-4 h-4 text-primary transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileServicesOpen && (
              <div className="flex flex-col gap-0.5 py-2 px-2 mb-1 rounded-xl mt-1"
                style={{ background: "rgba(30,60,120,0.18)", border: "1px solid rgba(255,255,255,0.06)" }}>
                {[...servicesLeft, ...servicesRight].map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="flex flex-col py-2.5 px-3 rounded-lg text-[13px] text-white/60 hover:text-white transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    <span className="font-medium text-white/80">{item.label}</span>
                    <span className="text-[11px] text-white/40 mt-0.5">{item.desc}</span>
                  </Link>
                ))}
              </div>
            )}

            <NavLink
              to="/mould-design"
              className={({ isActive }) =>
                `text-[13px] font-semibold uppercase tracking-widest transition-colors py-3 px-1 border-b border-white/[0.06] ${isActive ? "text-primary" : "text-white/70 hover:text-white"}`
              }
              onClick={() => setMobileOpen(false)}
            >
              Project Portfolio
            </NavLink>

            <NavLink
              to="/technical-gallery"
              className={({ isActive }) =>
                `text-[13px] font-semibold uppercase tracking-widest transition-colors py-3 px-1 border-b border-white/[0.06] ${isActive ? "text-primary" : "text-white/70 hover:text-white"}`
              }
              onClick={() => setMobileOpen(false)}
            >
              Technical Gallery
            </NavLink>

            <NavLink
              to="/careers"
              className={({ isActive }) =>
                `text-[13px] font-semibold uppercase tracking-widest transition-colors py-3 px-1 border-b border-white/[0.06] ${isActive ? "text-primary" : "text-white/70 hover:text-white"}`
              }
              onClick={() => setMobileOpen(false)}
            >
              Careers
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-[13px] font-semibold uppercase tracking-widest transition-colors py-3 px-1 ${isActive ? "text-primary" : "text-white/70 hover:text-white"}`
              }
              onClick={() => setMobileOpen(false)}
            >
              About Us
            </NavLink>

            <div className="flex flex-col gap-3 mt-4 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-primary text-[13px] font-semibold tracking-wide transition-all"
                style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.25)" }}
              >
                <WhatsAppIcon />
                WhatsApp Us
              </a>
              <button
                onClick={handleRequestPrototype}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-primary rounded-lg text-white text-[13px] font-semibold tracking-wide hover:brightness-110 transition-all"
              >
                <Shield className="w-4 h-4" />
                Request Prototype
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
