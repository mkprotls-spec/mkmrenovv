
import React from 'react';
import { SERVICES } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-20 text-center">
          <h1 className="text-5xl font-bold mb-6">Nos Prestations</h1>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Expertise technique et matériaux de haute qualité. Nous intervenons sur tous les aspects de la charpente bois et du gros œuvre.
          </p>
        </div>

        <div className="space-y-32">
          {SERVICES.map((service, index) => (
            <div key={service.id} className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2">
                <div className="relative">
                  <img src={service.image} alt={service.title} className="w-full aspect-[4/3] object-cover rounded-sm shadow-2xl" />
                  <div className={`absolute -bottom-8 ${index % 2 === 0 ? '-right-8' : '-left-8'} bg-amber-600 text-white p-8 rounded-sm hidden sm:block`}>
                    <p className="font-bold text-2xl">Excellence</p>
                    <p className="text-xs uppercase tracking-widest text-amber-100">Garantie 10 ans</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <span className="text-amber-600 font-bold text-sm uppercase tracking-widest mb-4 block">Service 0{index + 1}</span>
                <h2 className="text-4xl font-bold mb-6">{service.title}</h2>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  {service.detailedDescription}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {['Matériaux Durables', 'Artisans Qualifiés', 'Étude Personnalisée', 'Nettoyage Chantier'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                      <CheckCircle2 className="text-amber-600" size={20} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="p-6 bg-slate-50 border-l-4 border-slate-900">
                  <p className="text-slate-900 font-bold mb-1">Tarifs indicatifs</p>
                  <p className="text-slate-500 text-sm italic">Sur devis uniquement - Étude et déplacement gratuits</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
