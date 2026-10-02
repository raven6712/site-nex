import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Compass, 
  ShieldCheck, 
  HeartHandshake, 
  Sparkles, 
  ArrowRight, 
  Code2, 
  HelpCircle,
  Linkedin,
  Github
} from 'lucide-react';
import { AnimatedSection } from '../components/common/AnimatedSection';
import { SectionHeader } from '../components/common/SectionHeader';
import { Badge } from '../components/common/Badge';
import { Card } from '../components/common/Card';

export const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-400" />,
      title: 'Excellence & Rigueur',
      description: 'Nous refusons le code jetable. Chaque prototype suit les règles de l\'art du génie logiciel : typage, tests, architecture découplée et maintenabilité.'
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-cyan-400" />,
      title: 'Transmission & Partage',
      description: 'Le savoir numérique n\'a de valeur que s\'il est partagé. L\'entraide entre aînés et juniors est le socle absolu de notre communauté.'
    },
    {
      icon: <Target className="w-6 h-6 text-amber-400" />,
      title: 'Impact Réel & Terrain',
      description: 'Nous ciblons des problèmes vitaux pour le Cameroun (agriculture avec AgriLucid, santé de proximité, inclusion financière) plutôt que des gadgets éphémères.'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-purple-400" />,
      title: 'Intégrité & Transparence',
      description: 'Nous parlons vrai : nos réalisations en production sont célébrées, nos prototypes en R&D sont étiquetés en toute honnêteté intellectuelle.'
    }
  ];

  const milestones = [
    {
      year: 'Genèse',
      title: 'Le Constat du Terrain',
      description: 'Rencontre informelle entre plusieurs développeurs camerounais à Yaoundé et Douala. Constat partagé d\'une fracture entre l\'enseignement théorique et les besoins réels du secteur technologique.'
    },
    {
      year: 'Fondation',
      title: 'Lancement du Collectif Nexora237',
      description: 'Création d\'un espace d\'entraide technique sur Discord, premiers ateliers de pair-programming et fixation d\'une charte d\'exigence orientée production.'
    },
    {
      year: 'R&D',
      title: 'Lancement du Chantier AgriLucid',
      description: 'Constitution d\'une taskforce bénévole dédiée à l\'application de la vision par ordinateur aux pathologies foliaires des cultures vivrières du Cameroun.'
    },
    {
      year: 'Aujourd\'hui',
      title: 'Ouverture aux Partenaires & Croissance',
      description: 'Structuration de la plateforme officielle, mise en place des briques open source et partenariats avec les acteurs locaux pour amplifier l\'impact.'
    }
  ];

  const teamMembers = [
    {
      role: 'Coordination Générale & Vision',
      name: '[Nom du Coordinateur]',
      bio: 'Ingénieur logiciel passionné par le développement économique africain à travers les nouvelles technologies.',
      isPlaceholder: true,
      tag: 'Direction'
    },
    {
      role: 'Lead Architecte Frontend & Systèmes',
      name: '[Nom Lead Développeur]',
      bio: 'Spécialiste React, TypeScript et architectures résilientes pour environnements à contrainte de connectivité.',
      isPlaceholder: true,
      tag: 'Ingénierie'
    },
    {
      role: 'Responsable R&D AgriTech & IA',
      name: '[Nom Chercheur / Lead IA]',
      bio: 'Data scientist spécialisé dans les modèles de vision par ordinateur appliqués à l\'agronomie tropicale.',
      isPlaceholder: true,
      tag: 'Recherche'
    },
    {
      role: 'Responsable Communauté & Événements',
      name: '[Nom Responsable Communauté]',
      bio: 'Organisateur des meetups, animateur du réseau Discord et coordinateur des hackathons régionaux.',
      isPlaceholder: true,
      tag: 'Animation'
    },
    {
      role: 'Lead UI/UX & Design System',
      name: '[Nom Lead Designer]',
      bio: 'Designer d\'interfaces épurées et accessibles, fervent défenseur de l\'ergonomie mobile-first.',
      isPlaceholder: true,
      tag: 'Design'
    },
    {
      role: 'Vous ? (Rejoignez l\'équipe)',
      name: 'Rejoindre les Bâtisseurs',
      bio: 'Nexora237 recherche en permanence des mentors, des contributeurs open source et des organisateurs motivés.',
      isPlaceholder: false,
      tag: 'Recrutement Ouvert'
    }
  ];

  return (
    <div className="w-full">
      {/* 1. Page Header */}
      <section className="relative py-20 sm:py-28 bg-radial-hero overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Badge variant="amber" dot size="md" className="mb-6">
            Manifeste & Identité
          </Badge>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight mb-6">
            Bâtir une tech camerounaise{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300">
              utile, rigoureuse et souveraine.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Nexora237 est née d&apos;une conviction simple : l&apos;Afrique Centrale ne doit plus seulement consommer les logiciels créés ailleurs, mais forger ses propres outils avec les standards techniques les plus élevés.
          </p>
        </div>
      </section>

      {/* 2. Contexte & Genèse */}
      <AnimatedSection className="py-20 bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <SectionHeader
                badgeText="Le Contexte"
                badgeVariant="cyan"
                title="Pourquoi avons-nous créé"
                highlightedWord="Nexora237 ?"
                align="left"
                className="mb-6"
              />

              <p className="text-slate-300 text-base leading-relaxed">
                Au Cameroun, les universités et écoles d&apos;ingénieurs forment des esprits brillants. Pourtant, une fois diplômés, beaucoup de talents se heurtent à un marché fragmenté, à un manque de projets ambitieux ou à des technologies déconnectées de nos réalités économiques.
              </p>

              <p className="text-slate-300 text-base leading-relaxed">
                Parallèlement, nos secteurs clés — à commencer par l&apos;agriculture, l&apos;accès aux soins ou le commerce de proximité — manquent cruellement de solutions logicielles adaptées aux coûts locaux de connexion et aux coupures d&apos;électricité.
              </p>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-sm text-slate-300 flex items-start gap-3">
                <Code2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Notre réponse :</strong> Créer une pépinière ouverte où la théorie se transforme en code fonctionnel, et où chaque ligne produite répond à une utilité démontrée.
                </span>
              </div>
            </div>

            {/* Visual representation of Mission & Vision cards */}
            <div className="space-y-6">
              <Card hoverGlow="amber" className="p-8 border-blue-500/20 bg-slate-900/90">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Notre Mission</h3>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Fédérer, former et équiper les bâtisseurs du numérique au Cameroun afin de concevoir des applications résilientes, open-source ou commercialisables, capables de résoudre des défis locaux majeurs.
                </p>
              </Card>

              <Card hoverGlow="cyan" className="p-8 border-cyan-500/20 bg-slate-900/90">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Compass className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Notre Vision</h3>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Faire émerger un pôle d&apos;ingénierie et d&apos;innovation technologique crédible, respecté à l&apos;international pour sa rigueur technique et admiré pour son ancrage profond au cœur des besoins africains.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 3. Valeurs Fondamentales */}
      <AnimatedSection className="py-20 bg-slate-900/40 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badgeText="Principes directeurs"
            badgeVariant="amber"
            title="Les valeurs qui guident chacune de nos"
            highlightedWord="décisions."
            description="Ces piliers définissent la culture de Nexora237 et la manière dont nous collaborons avec la communauté et nos partenaires."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <Card
                key={v.title}
                interactive
                hoverGlow="amber"
                className="flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center mb-6">
                    {v.icon}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 tracking-tight">
                    {v.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* 4. Notre Approche & Frise Chronologique */}
      <AnimatedSection className="py-20 bg-slate-950 border-t border-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badgeText="Méthode & Trajectoire"
            badgeVariant="cyan"
            title="Une démarche progressive et"
            highlightedWord="éprouvée."
            description="De la genèse de l'idée aux chantiers d'aujourd'hui, découvrez comment nous construisons cette communauté pas à pas."
          />

          <div className="relative border-l border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
            {milestones.map((m) => (
              <div key={m.year} className="relative group">
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-blue-400 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
                    {m.year}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                    {m.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed max-w-2xl">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* 5. Chiffres & Impact */}
      <AnimatedSection className="py-16 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <span className="block text-3xl sm:text-5xl font-black text-blue-400 font-mono mb-2">500+</span>
              <span className="text-xs sm:text-sm font-semibold text-white">Membres & Passionnés</span>
              <p className="text-[11px] text-slate-500 mt-1">Développeurs, designers et chercheurs</p>
            </div>
            <div>
              <span className="block text-3xl sm:text-5xl font-black text-cyan-400 font-mono mb-2">04</span>
              <span className="text-xs sm:text-sm font-semibold text-white">Projets Actifs</span>
              <p className="text-[11px] text-slate-500 mt-1">AgriTech, Santé, EdTech & FinTech</p>
            </div>
            <div>
              <span className="block text-3xl sm:text-5xl font-black text-amber-400 font-mono mb-2">12+</span>
              <span className="text-xs sm:text-sm font-semibold text-white">Événements & Ateliers</span>
              <p className="text-[11px] text-slate-500 mt-1">À Yaoundé, Douala et en distanciel</p>
            </div>
            <div>
              <span className="block text-3xl sm:text-5xl font-black text-purple-400 font-mono mb-2">100%</span>
              <span className="text-xs sm:text-sm font-semibold text-white">Engagement Communautaire</span>
              <p className="text-[11px] text-slate-500 mt-1">Projets bâtis avec intégrité</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 6. Section Équipe */}
      <AnimatedSection className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badgeText="Gouvernance & Bénévoles"
            badgeVariant="purple"
            title="Le comité de coordination et"
            highlightedWord="l'équipe."
            description="Une équipe pluridisciplinaire dévouée au bon fonctionnement des projets, des formations et des partenariats."
          />

          <div className="max-w-2xl mx-auto mb-10 p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 flex items-center gap-2.5">
            <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              <strong>Note de gouvernance :</strong> Conformément à notre politique de transparence, les noms réels et profils définitifs seront renseignés lors de l&apos;Assemblée Générale d&apos;investiture.
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <Card
                key={member.role}
                hoverGlow={member.isPlaceholder ? 'none' : 'amber'}
                className="flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant={member.isPlaceholder ? 'slate' : 'amber'

                    } size="sm">
                      {member.tag}
                    </Badge>
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <Linkedin className="w-3.5 h-3.5" />
                      <Github className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-blue-400 mb-3">
                    {member.role}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 mt-4 text-[11px] text-slate-500">
                  {member.isPlaceholder ? (
                    <span className="italic text-slate-500">[Profil en cours d'actualisation]</span>
                  ) : (
                    <Link to="/contact" className="text-blue-400 hover:underline flex items-center gap-1 font-semibold">
                      Postuler ou devenir mentor <ArrowRight className="w-3 h-3" />
                    </Link>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default AboutPage;
