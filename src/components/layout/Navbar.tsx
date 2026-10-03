import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, ShoppingBag, ArrowUpRight, Sparkles } from 'lucide-react';
import { useCart } from '../../hooks/useCart';
import { MobileMenu } from './MobileMenu';
import { cn } from '../../utils/cn';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, openCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Accueil', to: '/' },
    { label: 'À propos', to: '/a-propos' },
    { label: 'Projets', to: '/projets' },
    { label: 'Événements', to: '/evenements' },
    { label: 'Boutique', to: '/boutique' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          isScrolled
            ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3.5'
            : 'bg-transparent py-5'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link
              to="/"
              className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-bluez-400 rounded-lg"
            >
              <img src="/logo.png" alt="NEXORA" className="w-10 h-10 object-contain" />
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-lg font-black tracking-tight text-white group-hover:text-blue-400 transition-colors">
                    NEXORA
                  </span>
                  <span className="text-xs font-mono font-extrabold px-1.5 py-0.2 rounded bg-emerald-500/10 text-green-400 ">
                    2
                  </span>
                  <span className="text-xs font-mono font-extrabold px-1.5 py-0.2 rounded bg-emerald-500/10 text-red-400 ">
                    3
                  </span>
                  <span className="text-xs font-mono font-extrabold px-1.5 py-0.2 rounded bg-emerald-500/10 text-yellow-400 ">
                    7
                  </span>
                </div>
                <span className="text-[12px] tracking-widest uppercase text-slate-400 font-medium">
                  Cameroun Tech
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 px-4 py-1.5 rounded-full backdrop-blur-md">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    cn(
                      'text-xs font-medium px-3.5 py-2 rounded-full transition-all duration-200',
                      isActive
                        ? 'bg-slate-800 text-white font-semibold shadow-sm'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Right Actions: Cart & CTA */}
            <div className="flex items-center gap-3">
              {/* Cart Button */}
              <button
                type="button"
                onClick={openCart}
                aria-label={`Panier avec ${totalItems} article${totalItems > 1 ? 's' : ''}`}
                className="relative p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 text-[10px] font-bold text-slate-950 font-mono ring-2 ring-slate-950">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Desktop CTA Button */}
              <Link
                to="/contact"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-xl bg-blue-500 hover:bg-blue-400 text-slate-950 shadow-md shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-200"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Rejoindre</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-0.5 opacity-70" />
              </Link>

              {/* Mobile Hamburger Toggle */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Ouvrir le menu de navigation"
                className="lg:hidden p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};
