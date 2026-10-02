import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Github, 
  Linkedin, 
  MessageSquare, 
  HelpCircle 
} from 'lucide-react';
import { ContactFormData, ContactSubject, SubmissionStatus } from '../types/contact';
import { sendContactMessage } from '../services/contactService';
import { AnimatedSection } from '../components/common/AnimatedSection';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    subject: 'Question générale',
    message: '',
  });

  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState<string>('');

  const subjects: ContactSubject[] = [
    'Partenariat & Sponsoring',
    'Rejoindre la communauté',
    'Proposer un projet',
    'Demande d\'intervention / Formation',
    'Question générale'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setFeedbackMessage('');

    try {
      const response = await sendContactMessage(formData);
      setStatus('success');
      setFeedbackMessage(response.message);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: 'Question générale',
        message: '',
      });
    } catch (err: unknown) {
      setStatus('error');
      setFeedbackMessage(err instanceof Error ? err.message : 'Une erreur inattendue est survenue.');
    }
  };

  return (
    <div className="w-full pb-24">
      {/* 1. Page Header */}
      <section className="relative py-20 sm:py-28 bg-radial-hero overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Badge variant="emerald" dot size="md" className="mb-6">
            Liaison & Échanges
          </Badge>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight mb-6">
            Entrons en contact avec{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-teal-400">
              Nexora237.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Vous souhaitez rejoindre le collectif, proposer une collaboration technologique, devenir sponsor ou poser une question ? Notre équipe vous répond avec attention.
          </p>
        </div>
      </section>

      {/* 2. Contact Form & Info Grid */}
      <AnimatedSection className="py-12 bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Form */}
            <div className="lg:col-span-7">
              <Card className="p-8 sm:p-10 bg-slate-900/90 border-slate-800">
                <h2 className="text-2xl font-bold text-white tracking-tight mb-2">
                  Envoyez-nous un message
                </h2>
                <p className="text-xs text-slate-400 mb-8 leading-relaxed">
                  Remplissez ce formulaire et notre équipe de coordination prendra contact avec vous dans les plus brefs délais.
                </p>

                {status === 'success' && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-start gap-3 mb-6">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block mb-1">Message envoyé avec succès !</span>
                      <p className="text-slate-300 leading-relaxed">{feedbackMessage}</p>
                    </div>
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-start gap-3 mb-6">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block mb-1">Échec de transmission</span>
                      <p className="text-slate-300 leading-relaxed">{feedbackMessage}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Nom complet <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Samuel Eto'o / Marie Kamga"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full text-xs px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Adresse Email <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="votre.email@domaine.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full text-xs px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Téléphone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="+237 6XX XX XX XX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full text-xs px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Objet de votre message <span className="text-emerald-400">*</span>
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value as ContactSubject })}
                        className="w-full text-xs px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                      >
                        {subjects.map((sub) => (
                          <option key={sub} value={sub}>{sub}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-semibold text-slate-300">
                        Votre Message <span className="text-emerald-400">*</span>
                      </label>
                      <span className="text-[10px] text-slate-500">
                        {formData.message.length} caractères
                      </span>
                    </div>
                    <textarea
                      required
                      rows={5}
                      placeholder="Expliquez-nous votre projet, vos motivations ou vos questions avec un maximum de contexte..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full text-xs px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors resize-y leading-relaxed"
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      fullWidth
                      isLoading={status === 'submitting'}
                      rightIcon={<Send className="w-4 h-4" />}
                    >
                      Transmettre le message
                    </Button>
                  </div>
                </form>
              </Card>
            </div>

            {/* Right Column: Information & Channels */}
            <div className="lg:col-span-5 space-y-6">
              {/* Official Coordinates Card */}
              <Card className="p-8 bg-slate-900 border-slate-800 space-y-6">
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Informations Générales
                </h3>

                <div className="space-y-4 text-xs text-slate-300">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-white block">Pôles d&apos;activité</span>
                      <p className="text-slate-400 leading-relaxed">
                        Douala (Akwa) & Yaoundé (Bastos), Cameroun
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-white block">Courrier Électronique</span>
                      <a href="mailto:contact@nexora237.cm" className="text-cyan-400 hover:underline">
                        contact@nexora237.cm
                      </a>
                      <p className="text-[10px] text-slate-500 mt-0.5">
                        [Placeholder officiel en attente de déploiement DNS définitif]
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Community Channels */}
                <div className="pt-6 border-t border-slate-800 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    Canaux Numériques Communautaires
                  </span>

                  <div className="grid grid-cols-3 gap-3">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-center hover:border-slate-600 transition-colors group"
                    >
                      <Github className="w-5 h-5 text-slate-400 group-hover:text-white mx-auto mb-1" />
                      <span className="text-[11px] font-medium text-slate-300">GitHub</span>
                    </a>

                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-center hover:border-slate-600 transition-colors group"
                    >
                      <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 mx-auto mb-1" />
                      <span className="text-[11px] font-medium text-slate-300">LinkedIn</span>
                    </a>

                    <a
                      href="https://discord.com"
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-center hover:border-slate-600 transition-colors group"
                    >
                      <MessageSquare className="w-5 h-5 text-slate-400 group-hover:text-indigo-400 mx-auto mb-1" />
                      <span className="text-[11px] font-medium text-slate-300">Discord</span>
                    </a>
                  </div>
                </div>
              </Card>

              {/* Quick FAQ / FAQ Express */}
              <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <HelpCircle className="w-4 h-4" />
                  Questions Fréquentes
                </span>

                <div className="space-y-3 text-xs text-slate-400">
                  <div>
                    <h4 className="font-semibold text-slate-200 mb-0.5">L&apos;adhésion est-elle payante ?</h4>
                    <p>Non, rejoindre la communauté Nexora237 et participer à nos meetups généraux est entièrement gratuit.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-200 mb-0.5">Puis-je proposer une idée de projet ?</h4>
                    <p>Absolument. Utilisez ce formulaire ou venez en discuter lors d&apos;un samedi Code Labs à Yaoundé ou sur Discord.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default ContactPage;
