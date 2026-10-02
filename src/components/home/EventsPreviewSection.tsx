import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, ArrowRight, Users } from 'lucide-react';
import { EVENTS_DATA } from '../../data/eventsData';
import { formatDateShortFR } from '../../utils/formatters';
import { AnimatedSection } from '../common/AnimatedSection';
import { SectionHeader } from '../common/SectionHeader';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';

export const EventsPreviewSection: React.FC = () => {
  const upcomingEvents = EVENTS_DATA.filter((e) => e.status === 'upcoming').slice(0, 3);

  return (
    <AnimatedSection className="py-24 bg-slate-900/50 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeader
            badgeText="Agenda & Communauté"
            badgeVariant="amber"
            title="Les prochains rendez-vous de"
            highlightedWord="l'écosystème."
            description="Rejoignez-nous lors de nos hackathons, masterclasses et meetups à Douala, Yaoundé ou en ligne."
            align="left"
            className="mb-0"
          />

          <Link to="/evenements" className="shrink-0">
            <Button variant="outline" rightIcon={<ArrowRight className="w-4 h-4 text-amber-400" />}>
              Tous les événements
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="rounded-2xl bg-slate-900/80 border border-slate-800/90 overflow-hidden hover:border-slate-700 transition-all flex flex-col justify-between hover:-translate-y-1 shadow-md shadow-black/20"
            >
              {/* Event Image */}
              <div className="relative h-44 w-full bg-slate-800 overflow-hidden">
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                <div className="absolute top-3 left-3">
                  <Badge variant="amber" size="sm">
                    {event.category}
                  </Badge>
                </div>
              </div>

              {/* Event Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1 text-blue-400 font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDateShortFR(event.date)}
                    </span>
                    <span>•</span>
                    <span>{event.startTime} - {event.endTime}</span>
                  </div>

                  <h3 className="text-base font-bold text-white leading-snug line-clamp-2">
                    {event.title}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {event.description}
                  </p>
                </div>

                <div className="space-y-4 pt-3 border-t border-slate-800/60">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1 truncate max-w-[200px]">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="truncate">{event.location}</span>
                    </span>

                    {event.currentAttendees && (
                      <span className="flex items-center gap-1 font-mono text-[11px] text-slate-500">
                        <Users className="w-3 h-3 text-slate-400" />
                        {event.currentAttendees} inscrits
                      </span>
                    )}
                  </div>

                  <Link to="/evenements" className="block">
                    <Button
                      variant="secondary"
                      size="sm"
                      fullWidth
                      rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                    >
                      Détails & Inscription
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};
