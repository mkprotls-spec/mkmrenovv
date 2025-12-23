
import React from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div>
            <h1 className="text-5xl font-bold mb-8">Parlons de votre projet</h1>
            <p className="text-slate-600 text-lg mb-12">
              Besoin d'un devis précis ou d'un conseil technique ? Notre équipe vous répond sous 24h.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white rounded-sm shadow-sm flex items-center justify-center text-amber-600 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Téléphone</h4>
                  <p className="text-slate-600">04 67 00 00 00</p>
                  <p className="text-slate-400 text-sm">Lun-Ven, 8h00 - 18h00</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white rounded-sm shadow-sm flex items-center justify-center text-amber-600 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Email</h4>
                  <p className="text-slate-600">contact@mkm-renov.fr</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white rounded-sm shadow-sm flex items-center justify-center text-amber-600 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Localisation</h4>
                  <p className="text-slate-600">Avenue de la Méditerranée<br />34350 Valras-Plage</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-80 bg-slate-200 rounded-sm overflow-hidden relative shadow-inner">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11634.34110325062!2d3.2954845!3d43.2458925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b109677e52b213%3A0x407882116127110!2s34350%20Valras-Plage!5e0!3m2!1sfr!2sfr!4v1709123456789!5m2!1sfr!2sfr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
              />
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-8 md:p-12 rounded-sm shadow-xl">
            <h3 className="text-2xl font-bold mb-8">Formulaire de Devis</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Nom Complet</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 p-4 rounded-sm focus:border-amber-600 outline-none transition-all" placeholder="Jean Dupont" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Téléphone</label>
                  <input type="tel" className="w-full bg-slate-50 border border-slate-200 p-4 rounded-sm focus:border-amber-600 outline-none transition-all" placeholder="06 00 00 00 00" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Email</label>
                <input type="email" className="w-full bg-slate-50 border border-slate-200 p-4 rounded-sm focus:border-amber-600 outline-none transition-all" placeholder="jean@exemple.fr" />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Type de Projet</label>
                <select className="w-full bg-slate-50 border border-slate-200 p-4 rounded-sm focus:border-amber-600 outline-none transition-all">
                  <option>Rénovation de charpente</option>
                  <option>Couverture</option>
                  <option>Traitement bois</option>
                  <option>Maçonnerie générale</option>
                  <option>Autre</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Description du besoin</label>
                <textarea rows={5} className="w-full bg-slate-50 border border-slate-200 p-4 rounded-sm focus:border-amber-600 outline-none transition-all" placeholder="Décrivez votre projet en quelques lignes..."></textarea>
              </div>

              <button className="w-full bg-amber-600 text-white py-5 rounded-sm font-bold flex items-center justify-center gap-3 hover:bg-slate-900 transition-all">
                Envoyer ma demande <Send size={20} />
              </button>
              
              <p className="text-xs text-slate-400 text-center">
                En envoyant ce formulaire, vous acceptez d'être recontacté dans le cadre de votre projet.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
