
import React, { useState } from 'react';
import { FAQ } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Questions Fréquentes</h1>
          <p className="text-slate-500">
            Retrouvez toutes les informations pratiques pour bien préparer votre projet de rénovation.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ.map((item, index) => (
            <div key={index} className="border border-slate-100 rounded-sm overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-lg text-slate-800">{item.question}</span>
                {openIndex === index ? <ChevronUp size={20} className="text-amber-600" /> : <ChevronDown size={20} className="text-slate-400" />}
              </button>
              {openIndex === index && (
                <div className="p-6 pt-0 text-slate-600 leading-relaxed animate-in slide-in-from-top-2 duration-300">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 bg-slate-900 text-white rounded-sm text-center">
          <h3 className="text-2xl font-bold mb-4">D'autres questions ?</h3>
          <p className="text-slate-400 mb-8">N'hésitez pas à nous appeler directement pour une réponse immédiate.</p>
          <a href="tel:0467000000" className="inline-block bg-amber-600 px-8 py-3 rounded-sm font-bold hover:bg-amber-700 transition-colors">
            Appeler le 04 67 00 00 00
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
