
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Instagram, Facebook, ArrowUpRight } from 'lucide-react';

const Logo = ({ scrolled, isHome }: { scrolled: boolean; isHome: boolean }) => {
  const isDark = scrolled || !isHome;
  const primaryColor = isDark ? '#c29d59' : '#ffffff';
  const textColor = isDark ? '#0f172a' : '#ffffff';

  return (
    <svg width="180" height="50" viewBox="0 0 180 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 35L25 10L40 35H10Z" stroke={primaryColor} strokeWidth="2.5" />
      <path d="M18 35L25 20L32 35" stroke={primaryColor} strokeWidth="1.5" />
      <text x="50" y="28" fill={textColor} style={{ font: 'bold 20px Montserrat', letterSpacing: '-0.05em' }}>MKM RÉNOV</text>
      <text x="50" y="42" fill={isDark ? '#64748b' : '#cbd5e1'} style={{ font: '500 8px Montserrat', letterSpacing: '0.4em', textTransform: 'uppercase' }}>Charpente & Maçonnerie</text>
    </svg>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Présentation', path: '/presentation' },
    { name: 'Services', path: '/services' },
    { name: 'Réalisations', path: '/realisations' },
    { name: 'Avis', path: '/avis' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Bar - Disappears on scroll for cleaner look */}
      <div className={`bg-slate-900 text-white text-[10px] py-1.5 px-6 flex justify-between items-center transition-all duration-500 ${isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'}`}>
        <div className="flex gap-6 font-medium">
          <span className="flex items-center gap-2 hover:text-amber-500 cursor-pointer transition-colors"><Phone size={10} /> 04 67 00 00 00</span>
          <span className="flex items-center gap-2 hover:text-amber-500 cursor-pointer transition-colors"><Mail size={10} /> contact@mkm-renov.fr</span>
        </div>
        <div className="flex gap-6 items-center uppercase tracking-widest">
          <span>Valras-Plage, Hérault</span>
          <div className="flex gap-3">
            <Facebook size={12} className="cursor-pointer hover:text-amber-500 transition-colors" />
            <Instagram size={12} className="cursor-pointer hover:text-amber-500 transition-colors" />
          </div>
        </div>
      </div>

      {/* Glassmorphism Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200 py-3 shadow-sm' : 'bg-transparent py-8'} ${isScrolled ? 'top-0' : 'top-8 md:top-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center transition-transform hover:scale-105 active:scale-95 duration-300">
            <Logo scrolled={isScrolled} isHome={isHome} />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[13px] font-semibold uppercase tracking-wider transition-all hover-underline ${
                  location.pathname === link.path 
                    ? 'text-amber-600' 
                    : !isScrolled && isHome ? 'text-white' : 'text-slate-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="group relative overflow-hidden bg-slate-900 text-white px-7 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all hover:bg-amber-600">
              <span className="relative z-10 flex items-center gap-2">
                Devis Gratuit <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden p-2 rounded-full hover:bg-slate-100 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} className={!isScrolled && isHome ? 'text-white' : 'text-slate-900'} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-white/98 backdrop-blur-2xl z-[60] flex flex-col p-10 animate-in fade-in duration-300">
            <div className="flex justify-between items-center mb-16">
              <Logo scrolled={true} isHome={false} />
              <button onClick={() => setIsMenuOpen(false)}><X size={32} /></button>
            </div>
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-3xl font-bold text-slate-900 hover:text-amber-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <Link to="/contact" className="mt-auto bg-slate-900 text-white text-center py-5 rounded-full font-bold text-lg" onClick={() => setIsMenuOpen(false)}>
              Demander un Devis
            </Link>
          </div>
        )}
      </nav>

      <main className="flex-grow pt-0">{children}</main>

      {/* Luxury Footer */}
      <footer className="bg-slate-950 text-white pt-32 pb-12 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent opacity-30" />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 border-b border-slate-900 pb-20 mb-12">
          <div>
            <div className="mb-8">
               <Logo scrolled={false} isHome={false} />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              L'excellence artisanale au service de l'architecture. MKM Rénov réalise vos charpentes et vos structures de gros œuvre avec la rigueur d'un maître d'ouvrage haut de gamme.
            </p>
            <div className="flex gap-5">
              <Facebook className="hover:text-amber-500 cursor-pointer transition-all hover:-translate-y-1" />
              <Instagram className="hover:text-amber-500 cursor-pointer transition-all hover:-translate-y-1" />
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-amber-500 font-bold mb-8">Expertises</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-2"><div className="w-1 h-1 bg-amber-600 rounded-full" /> Charpente Traditionnelle</li>
              <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-2"><div className="w-1 h-1 bg-amber-600 rounded-full" /> Restauration Patrimoine</li>
              <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-2"><div className="w-1 h-1 bg-amber-600 rounded-full" /> Couverture & Zinguerie</li>
              <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-2"><div className="w-1 h-1 bg-amber-600 rounded-full" /> Traitement Curatif</li>
              <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-2"><div className="w-1 h-1 bg-amber-600 rounded-full" /> Maçonnerie de Luxe</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-amber-500 font-bold mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link to="/presentation" className="hover:text-white transition-colors">Notre Vision</Link></li>
              <li><Link to="/realisations" className="hover:text-white transition-colors">Galerie Projets</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">Espace Client</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Pro</Link></li>
              <li className="hover:text-white transition-colors cursor-pointer">Confidentialité</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-amber-500 font-bold mb-8">Bureau d'études</h4>
            <ul className="space-y-6 text-sm text-slate-400">
              <li className="flex items-start gap-4">
                <Phone size={16} className="text-amber-500 shrink-0 mt-1" />
                <span className="text-white font-medium">04 67 00 00 00</span>
              </li>
              <li className="flex items-start gap-4">
                <Mail size={16} className="text-amber-500 shrink-0 mt-1" />
                <span className="text-white font-medium">contact@mkm-renov.fr</span>
              </li>
              <li className="flex items-start gap-4">
                <MapPinIcon size={16} className="text-amber-500 shrink-0 mt-1" />
                <span className="leading-relaxed">Avenue de la Méditerranée<br />34350 Valras-Plage</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-600 uppercase tracking-widest font-bold">
          <p>© 2024 MKM Rénov. Artisans Constructeurs.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <span className="hover:text-slate-400 cursor-pointer">Mentions Légales</span>
            <span className="hover:text-slate-400 cursor-pointer">Cookies</span>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <div className="fixed bottom-10 right-10 z-40 group">
        <div className="absolute inset-0 bg-amber-600 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
        <Link to="/contact" className="relative w-16 h-16 bg-slate-900 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-amber-600 hover:-translate-y-2 transition-all duration-300 overflow-hidden">
          <Mail size={22} className="relative z-10" />
        </Link>
      </div>
    </div>
  );
};

const MapPinIcon = ({ size, className }: { size: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);

export default Layout;
