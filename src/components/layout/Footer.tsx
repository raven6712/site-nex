import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, MessageSquare, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-400 text-sm relative z-10">
      {/* Decorative top border gradient */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Column 1: Brand & Presentation */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2.5">
              
              <img src="/logo.png" alt="NEXORA" className="w-10 h-10 object-contain" />
              <span className="text-xl font-black text-white tracking-tight">NEXORA<span className="text-blue-400">237</span></span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Communauté technologique camerounaise dédiée à la transmission de compétences, à l'émulation collective et au développement de solutions digitales à fort impact.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Nexora237"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Nexora237"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Discord Nexora237"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 flex items-center justify-center text-slate-400 hover:text-indigo-400 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-emerald-400 transition-colors">Accueil</Link>
              </li>
              <li>
                <Link to="/a-propos" className="hover:text-emerald-400 transition-colors">À propos de nous</Link>
              </li>
              <li>
                <Link to="/projets" className="hover:text-emerald-400 transition-colors">Projets & R&D</Link>
              </li>
              <li>
                <Link to="/evenements" className="hover:text-emerald-400 transition-colors">Événements & Meetups</Link>
              </li>
              <li>
                <Link to="/boutique" className="hover:text-emerald-400 transition-colors">Boutique & Goodies</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-400 transition-colors">Nous contacter</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Projets Clés */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">Projets Émergents</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/projets#agrilucid" className="group flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>AgriLucid (IA & Agri)</span>
                </Link>
              </li>
              <li>
                <Link to="/projets#afrihealth-connect" className="hover:text-emerald-400 transition-colors">AfriHealth Connect</Link>
              </li>
              <li>
                <Link to="/projets#mboacode-academy" className="hover:text-emerald-400 transition-colors">MboaCode Academy</Link>
              </li>
              <li>
                <Link to="/projets#kamerpay-sdk" className="hover:text-emerald-400 transition-colors">KamerPay Unified SDK</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Localisation */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">Contact & Base</h3>
            <div className="space-y-2.5 text-sm">
              <div className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Douala & Yaoundé, Cameroun</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="mailto:contact@nexora237.cm" className="hover:text-white transition-colors">
                  contact@nexora237.cm
                </a>
              </div>
              <p className="text-[11px] text-slate-500 pt-1 leading-normal">
                [Note de configuration : l'adresse email officielle est un placeholder et sera mise à jour lors du déploiement définitif].
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <span>© 2026 Nexora237. Tous droits réservés.</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1 text-slate-400">
              Conçu avec rigueur au Cameroun <span className="text-amber-400 font-bold">★ 237</span>
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-slate-300 transition-colors">Mentions Légales</Link>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">Confidentialité</Link>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">Partenaires</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
