import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home } from 'lucide-react';
import { Button } from '../components/common/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-24 px-4 bg-radial-hero">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-slate-900 border border-emerald-500/30 text-emerald-400 font-mono text-3xl font-black shadow-xl shadow-emerald-500/10">
          404
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            Page introuvable
          </h1>
          <p className="text-sm text-slate-400 leading-relaxed">
            La ressource ou l&apos;adresse demandée n&apos;existe pas ou a été réorganisée au sein du site officiel de Nexora237.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link to="/" className="w-full sm:w-auto">
            <Button variant="primary" leftIcon={<Home className="w-4 h-4" />} fullWidth>
              Retour à l&apos;accueil
            </Button>
          </Link>
          <Link to="/projets" className="w-full sm:w-auto">
            <Button variant="outline" leftIcon={<Compass className="w-4 h-4 text-cyan-400" />} fullWidth>
              Voir les projets
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
