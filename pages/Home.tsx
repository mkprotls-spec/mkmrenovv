
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Clock, Award, Hammer, ArrowRight, Star, ChevronDown } from 'lucide-react';
import { SERVICES, REVIEWS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section - Refined with animations */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover scale-105 animate-[pulse_10s_ease-in-out_infinite]"
            alt="Charpente de prestige"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/40 to-slate-950/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-8 animate-in fade-in slide-in-from-bottom duration-1000">
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-ping" />
              <span className="text-[10px] text-white uppercase tracking-[0.3em] font-bold">Artisans Charpentiers Certifiés</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-bold text-white leading-[0.9] mb-10 tracking-tighter animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
              Bâtir votre <br />
              <span className="text-amber-500 italic font-serif serif">Héritage</span>.
            </h1>
            <p className="text-xl text-slate-200 mb-12 leading-relaxed max-w-xl animate-in fade-in slide-in-from-bottom duration-1000 delay-400">
              MKM Rénov fusionne ingénierie de précision et savoir-faire ancestral pour des structures qui défient le temps.
            </p>
            <div className="flex flex-wrap gap-6 animate-in fade-in slide-in-from-bottom duration-1000 delay-600">
              <Link to="/contact" className="relative group overflow-hidden bg-amber-600 text-white px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest transition-all">
                <span className="relative z-10">Lancer mon projet</span>
                <div className="absolute inset-0 bg-slate-900 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
              <Link to="/realisations" className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest transition-all border border-white/20 flex items-center gap-2">
                Nos Réalisations <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 flex flex-col items-center gap-2 animate-bounce cursor-pointer">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Découvrir</span>
          <ChevronDown size={20} />
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            <div className="lg:w-1/2 relative reveal">
              <div className="aspect-[4/5] relative z-10 overflow-hidden rounded-2xl group">
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  alt="Travail artisanal"
                />
                <div className="absolute inset-0 bg-amber-900/10 group-hover:bg-transparent transition-colors" />
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-slate-950 p-8 rounded-2xl flex flex-col justify-center animate-float hidden md:flex">
                <span className="text-4xl font-bold text-amber-500 mb-2">100%</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Matériaux <br />Éco-Responsables</span>
              </div>
            </div>
            <div className="lg:w-1/2 reveal">
              <div className="w-12 h-1 bg-amber-600 mb-10" />
              <h2 className="text-5xl md:text-7xl font-bold mb-10 text-slate-950 leading-tight">La Signature de l'Excellence.</h2>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed font-medium">
                Notre approche repose sur trois piliers : la noblesse des matériaux, la rigueur technique et une écoute client privilégiée. Chaque projet est traité comme une pièce unique du patrimoine local.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                <div className="border-t border-slate-100 pt-8">
                  <h4 className="font-bold text-slate-950 text-xl mb-4">Ingénierie</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">Calculs de charge précis et modélisation 3D pour une structure pérenne.</p>
                </div>
                <div className="border-t border-slate-100 pt-8">
                  <h4 className="font-bold text-slate-950 text-xl mb-4">Artisanat</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">Taillage traditionnel et finitions manuelles par nos experts compagnons.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Services Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 reveal">
            <div className="max-w-xl">
              <span className="text-amber-600 font-bold uppercase tracking-[0.4em] text-xs mb-4 block">Département Technique</span>
              <h2 className="text-5xl md:text-6xl font-bold text-slate-950">Expertises Métiers</h2>
            </div>
            <Link to="/services" className="text-slate-900 font-bold text-sm uppercase tracking-widest flex items-center gap-2 group hover:text-amber-600 transition-colors">
              Tous nos services <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {SERVICES.slice(0, 3).map((service, idx) => (
              <div 
                key={service.id}
                className={`reveal group bg-white p-2 rounded-3xl transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl border border-slate-100 ${idx === 1 ? 'md:translate-y-12' : ''}`}
              >
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-8">
                   <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 transition-colors" />
                </div>
                <div className="p-8 pt-0">
                  <h3 className="text-2xl font-bold mb-4 text-slate-950">{service.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8">{service.description}</p>
                  <div className="w-full h-px bg-slate-100 mb-8" />
                  <Link to="/services" className="inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-amber-600 group/btn">
                    Voir les détails 
                    <div className="w-10 h-10 rounded-full border border-amber-600 flex items-center justify-center group-hover/btn:bg-amber-600 group-hover/btn:text-white transition-all">
                      <ArrowRight size={14} />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Accreditations */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
         <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-600/5 -skew-x-12 translate-x-1/2" />
         <div className="max-w-7xl mx-auto px-6 relative z-10">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-20 items-center">
             <div className="reveal">
               <ShieldCheck size={48} className="text-amber-500 mb-8" />
               <h4 className="text-2xl font-bold mb-4">Garantie Totale</h4>
               <p className="text-slate-400 text-sm leading-relaxed">Tous nos ouvrages structurels sont couverts par une assurance décennale premium AXA.</p>
             </div>
             <div className="reveal" style={{ transitionDelay: '200ms' }}>
               <Clock size={48} className="text-amber-500 mb-8" />
               <h4 className="text-2xl font-bold mb-4">Précision Suisse</h4>
               <p className="text-slate-400 text-sm leading-relaxed">Nous livrons chaque étape du chantier à la date convenue, sans aucun compromis.</p>
             </div>
             <div className="reveal" style={{ transitionDelay: '400ms' }}>
               <Award size={48} className="text-amber-500 mb-8" />
               <h4 className="text-2xl font-bold mb-4">Certification RGE</h4>
               <p className="text-slate-400 text-sm leading-relaxed">Expert reconnu garant de l'environnement, ouvrant droit aux aides d'État.</p>
             </div>
           </div>
         </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 mb-20 reveal">
          <h2 className="text-5xl font-bold mb-8 text-slate-950">Projets Récents</h2>
          <div className="w-20 h-1.5 bg-amber-600" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-4">
          <div className="reveal group relative aspect-video overflow-hidden rounded-3xl cursor-pointer">
            <img src="https://images.unsplash.com/photo-1513584684374-8bdb7489feef?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Villa" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
            <div className="absolute bottom-10 left-10 text-white translate-y-4 group-hover:translate-y-0 transition-transform">
              <span className="text-amber-500 text-[10px] uppercase tracking-widest font-bold mb-2 block">Villa Contemporaine - Valras</span>
              <h3 className="text-3xl font-bold">Charpente à Tenon & Mortaise</h3>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="reveal group relative aspect-square overflow-hidden rounded-3xl cursor-pointer">
              <img src="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Cuisine" />
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <span className="text-white text-xs font-bold uppercase tracking-widest border border-white/40 px-6 py-3 rounded-full backdrop-blur-sm">Voir Projet</span>
              </div>
            </div>
            <div className="reveal group relative aspect-square overflow-hidden rounded-3xl cursor-pointer">
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Hangar" />
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <span className="text-white text-xs font-bold uppercase tracking-widest border border-white/40 px-6 py-3 rounded-full backdrop-blur-sm">Voir Projet</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Refined */}
      <section className="py-32 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-20 reveal">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-950 italic font-serif">"L'excellence est notre seul standard."</h2>
            <div className="flex gap-1 text-amber-500">
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {REVIEWS.map((review, idx) => (
              <div key={review.id} className="reveal bg-white p-12 rounded-3xl shadow-sm border border-slate-100 relative" style={{ transitionDelay: `${idx * 200}ms` }}>
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center text-white text-4xl font-serif">“</div>
                <p className="text-slate-700 italic mb-10 text-xl leading-relaxed">
                  {review.comment}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-400 uppercase">
                    {review.author[0]}
                  </div>
                  <div>
                    <p className="font-bold text-slate-950 uppercase tracking-widest text-xs">{review.author}</p>
                    <p className="text-[10px] text-slate-400 uppercase tracking-tighter">{review.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium CTA */}
      <section className="py-40 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative p-12 md:p-24 rounded-[3rem] overflow-hidden bg-slate-950 text-center reveal">
            <div className="absolute inset-0 z-0">
               <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover opacity-20" />
            </div>
            <div className="relative z-10">
              <span className="text-amber-500 font-bold uppercase tracking-[0.5em] text-[10px] mb-8 block">Prochaine étape</span>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-10 leading-tight">Votre demeure mérite <br /> le meilleur.</h2>
              <p className="text-slate-400 mb-12 text-lg max-w-2xl mx-auto">
                Contactez notre bureau d'études pour une consultation privée et recevez un devis détaillé sous 48 heures.
              </p>
              <Link to="/contact" className="inline-flex group items-center gap-4 bg-amber-600 hover:bg-white hover:text-amber-600 text-white px-12 py-6 rounded-full font-bold text-xs uppercase tracking-widest transition-all shadow-xl">
                Demander mon étude gratuite 
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
