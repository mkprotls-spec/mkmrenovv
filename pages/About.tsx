
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-32">
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold mb-8">Plus qu'une entreprise, une famille d'artisans.</h1>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Fondée à Valras-Plage, MKM Rénov est née d'une passion pour le bois et la belle ouvrage. Notre mission est de préserver le patrimoine bâti de l'Hérault tout en proposant des solutions modernes et durables.
            </p>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              Chaque poutre posée, chaque toit rénové est pour nous une promesse de qualité. Nous travaillons avec des essences locales et des techniques qui ont fait leurs preuves depuis des siècles, adaptées aux défis climatiques d'aujourd'hui.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-slate-100 pt-10">
              <div>
                <h4 className="font-bold text-slate-900 text-xl mb-2">Qualité</h4>
                <p className="text-slate-500 text-sm">Utilisation exclusive de bois certifiés et de matériaux premium.</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-xl mb-2">Engagement</h4>
                <p className="text-slate-500 text-sm">Respect scrupuleux des délais et des devis annoncés.</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=400" className="w-full aspect-square object-cover rounded-sm" alt="Atelier" />
              <img src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=400" className="w-full aspect-square object-cover rounded-sm mt-8" alt="Bois" />
            </div>
          </div>
        </div>

        {/* Team Section */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold mb-16 text-center">Les Visages de MKM</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: 'Marc K.', role: 'Fondateur & Maître Charpentier', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400' },
              { name: 'Karim M.', role: 'Expert Gros Œuvre', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400' },
              { name: 'Julien T.', role: 'Chef de Chantier Couverture', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400' },
            ].map((member) => (
              <div key={member.name} className="text-center group">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-slate-50 group-hover:border-amber-600 transition-all duration-300">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-xl font-bold">{member.name}</h4>
                <p className="text-amber-600 font-medium text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
