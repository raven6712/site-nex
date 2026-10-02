import React, { useState, useMemo } from 'react';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Video, 
  Check 
} from 'lucide-react';
import { EVENTS_DATA } from '../data/eventsData';
import { EventItem } from '../types/event';
import { formatDateFR, formatDateShortFR } from '../utils/formatters';
import { AnimatedSection } from '../components/common/AnimatedSection';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { Modal } from '../components/common/Modal';

export const EventsPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'upcoming' | 'past'>('all');
  const [activeRegisterEvent, setActiveRegisterEvent] = useState<EventItem | null>(null);
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [registerLoading, setRegisterLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', whatsapp: '' });

  const filteredEvents = useMemo(() => {
    if (selectedFilter === 'upcoming') {
      return EVENTS_DATA.filter((e) => e.status === 'upcoming' || e.status === 'ongoing');
    }
    if (selectedFilter === 'past') {
      return EVENTS_DATA.filter((e) => e.status === 'past');
    }
    return EVENTS_DATA;
  }, [selectedFilter]);

  const handleOpenRegister = (event: EventItem) => {
    setActiveRegisterEvent(event);
    setRegisterSuccess(false);
    setFormData({ name: '', email: '', whatsapp: '' });
  };

  const handleSubmitRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    setRegisterLoading(true);
    setTimeout(() => {
      setRegisterLoading(false);
      setRegisterSuccess(true);
    }, 1000);
  };

  return (
    <div className="w-full pb-24">
      {/* 1. Header Section */}
      <section className="relative py-20 sm:py-28 bg-radial-hero overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Badge variant="amber" dot size="md" className="mb-6">
            Rassemblements & Ateliers
          </Badge>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight mb-6">
            Événements, Meetups &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-emerald-300 to-cyan-400">
              Hackathons 237.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Rejoignez des centaines de passionnés de technologie lors de nos rendez-vous réguliers à Yaoundé, Douala et en ligne pour coder, échanger et innover ensemble.
          </p>
        </div>
      </section>

      {/* 2. Filter Navigation */}
      <AnimatedSection className="py-8 bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setSelectedFilter('all')}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                selectedFilter === 'all'
                  ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                  : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              Tous les événements ({EVENTS_DATA.length})
            </button>
            <button
              type="button"
              onClick={() => setSelectedFilter('upcoming')}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                selectedFilter === 'upcoming'
                  ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                  : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              À venir & En cours ({EVENTS_DATA.filter((e) => e.status !== 'past').length})
            </button>
            <button
              type="button"
              onClick={() => setSelectedFilter('past')}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                selectedFilter === 'past'
                  ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                  : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              Éditions passées ({EVENTS_DATA.filter((e) => e.status === 'past').length})
            </button>
          </div>
        </div>
      </AnimatedSection>

      {/* 3. Events Grid */}
      <AnimatedSection className="py-12 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredEvents.map((event) => {
              const isPast = event.status === 'past';

              return (
                <div
                  key={event.id}
                  className={`rounded-3xl bg-slate-900/80 border overflow-hidden transition-all duration-300 flex flex-col justify-between hover:shadow-xl ${
                    isPast
                      ? 'border-slate-800/80 opacity-90'
                      : 'border-slate-700/80 hover:border-amber-500/50 shadow-md shadow-black/20'
                  }`}
                >
                  {/* Top Image & Status */}
                  <div className="relative h-56 sm:h-64 w-full bg-slate-800 overflow-hidden">
                    <img
                      src={event.imageUrl}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <Badge variant="slate" size="sm" className="bg-slate-950/90 backdrop-blur-md">
                        {event.category}
                      </Badge>
                      {event.isOnline && (
                        <Badge variant="cyan" size="sm" className="bg-slate-950/90 backdrop-blur-md">
                          <Video className="w-3 h-3 mr-1" />
                          En ligne
                        </Badge>
                      )}
                    </div>

                    <div className="absolute top-4 right-4">
                      <Badge
                        variant={isPast ? 'slate' : 'amber'}
                        size="sm"
                        dot={!isPast}
                      >
                        {isPast ? 'Événement passé' : 'Inscriptions ouvertes'}
                      </Badge>
                    </div>

                    {/* Quick Date pill */}
                    <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-xl bg-slate-950/90 border border-slate-700/80 backdrop-blur-md flex items-center gap-2 text-xs font-mono text-white">
                      <Calendar className="w-3.5 h-3.5 text-amber-400" />
                      <span className="font-semibold">{formatDateShortFR(event.date)}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                        {event.title}
                      </h3>

                      <p className="text-sm text-slate-300 leading-relaxed">
                        {event.longDescription || event.description}
                      </p>
                    </div>

                    {/* Metadata & Speakers */}
                    <div className="space-y-4 pt-4 border-t border-slate-800">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-400">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span className="truncate">{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2 font-mono">
                          <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                          <span>{event.startTime} - {event.endTime}</span>
                        </div>
                      </div>

                      {/* Speakers list if any */}
                      {event.speakers && event.speakers.length > 0 && (
                        <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs">
                          <span className="text-slate-400 font-semibold block mb-1.5">
                            Intervenants confirmés :
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {event.speakers.map((sp) => (
                              <span
                                key={sp.name}
                                className="px-2 py-0.5 rounded bg-slate-800 text-slate-200 border border-slate-700/60 text-[11px]"
                              >
                                {sp.name} ({sp.role})
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Action Button */}
                      <div className="pt-2">
                        {isPast ? (
                          <div className="p-3 rounded-xl bg-slate-950/40 border border-slate-800 text-xs text-slate-400 text-center">
                            Session terminée • Replay et compte-rendu disponibles sur le Discord Nexora237
                          </div>
                        ) : (
                          <Button
                            variant="primary"
                            fullWidth
                            size="md"
                            onClick={() => handleOpenRegister(event)}
                          >
                            Participer à cet événement (Gratuit)
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* 4. Registration Modal */}
      <Modal
        isOpen={!!activeRegisterEvent}
        onClose={() => setActiveRegisterEvent(null)}
        title={registerSuccess ? 'Confirmation d\'inscription' : `Inscription : ${activeRegisterEvent?.title}`}
        maxWidth="md"
      >
        {registerSuccess ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mx-auto flex items-center justify-center">
              <Check className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-white">Votre place est réservée !</h4>
            <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
              Un message de confirmation avec les accès et les détails de localisation à <strong className="text-white">{activeRegisterEvent?.location}</strong> vous a été envoyé.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setActiveRegisterEvent(null)}
            >
              Fermer la fenêtre
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmitRegistration} className="space-y-4">
            <p className="text-xs text-slate-400">
              Lieu : <strong className="text-slate-200">{activeRegisterEvent?.location}</strong> • Date : <strong className="text-slate-200">{activeRegisterEvent && formatDateFR(activeRegisterEvent.date)}</strong>
            </p>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">Nom & Prénom</label>
              <input
                type="text"
                required
                placeholder="Ex: Paul Biya Fotso"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">Adresse Email</label>
              <input
                type="email"
                required
                placeholder="votre.email@domaine.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">Numéro WhatsApp (pour le groupe de l&apos;événement)</label>
              <input
                type="tel"
                required
                placeholder="+237 6XX XX XX XX"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                variant="primary"
                fullWidth
                isLoading={registerLoading}
              >
                Confirmer mon inscription gratuite
              </Button>
            </div>
          </form>
        )}
      </Modal>
    </div>
  );
};

export default EventsPage;
