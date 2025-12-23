
import { Service, Project, Review, FAQItem } from './types';

export const COLORS = {
  wood: '#A67C52',
  woodDark: '#8C6239',
  slate: '#334155',
  blue: '#1E3A8A',
};

export const SERVICES: Service[] = [
  {
    id: 'renovation',
    title: 'Rénovation de charpente',
    description: 'Redonnez vie à votre structure avec nos experts en rénovation complète.',
    detailedDescription: 'Nous intervenons sur tous types de charpentes anciennes pour renforcer, modifier ou réparer les structures bois endommagées par le temps ou les insectes xylophages.',
    image: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'couverture',
    title: 'Charpentier couvreur',
    description: 'Une protection optimale pour votre maison, de la structure aux tuiles.',
    detailedDescription: 'Expertise complète alliant charpente et couverture pour assurer l\'étanchéité et la pérennité de votre toiture.',
    image: 'https://images.unsplash.com/photo-1635424710928-0544e8512eea?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'bois',
    title: 'Vente de bois de charpente',
    description: 'Qualité premium pour vos projets de construction et menuiserie.',
    detailedDescription: 'Sélection rigoureuse d\'essences de bois adaptées au climat méditerranéen pour vos besoins en construction neuve.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'traitement',
    title: 'Traitement de charpente',
    description: 'Prévention et protection contre les termites et champignons.',
    detailedDescription: 'Traitements curatifs et préventifs certifiés pour garantir la longévité de vos structures en bois.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'restauration',
    title: 'Restauration de charpentes',
    description: 'Préservation du patrimoine architectural et des techniques ancestrales.',
    detailedDescription: 'Restauration minutieuse de charpentes historiques dans le respect des traditions et du savoir-faire artisanal.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800',
  },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Villa Valras-Plage',
    category: 'charpente',
    imageAfter: 'https://images.unsplash.com/photo-1513584684374-8bdb7489feef?auto=format&fit=crop&q=80&w=800',
    description: 'Création d\'une charpente traditionnelle en chêne pour une villa de luxe.',
  },
  {
    id: '2',
    title: 'Rénovation Béziers',
    category: 'renovation',
    imageAfter: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=800',
    description: 'Rénovation lourde d\'une maison de ville, gros œuvre et charpente.',
  },
  {
    id: '3',
    title: 'Hangar Agricole',
    category: 'couverture',
    imageAfter: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
    description: 'Couverture complète et structure bois pour bâtiment professionnel.',
  },
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Jean-Pierre M.',
    rating: 5,
    comment: 'Un travail d\'orfèvre sur notre charpente. Ponctualité et professionnalisme irréprochables.',
    date: '12/10/2023',
  },
  {
    id: '2',
    author: 'Sophie L.',
    rating: 5,
    comment: 'MKM Rénov a sauvé notre maison après une invasion de termites. Merci encore !',
    date: '05/01/2024',
  },
];

export const FAQ: FAQItem[] = [
  {
    question: 'Quels sont les moyens de paiement acceptés ?',
    answer: 'Nous acceptons les virements bancaires, chèques et cartes bancaires. Des facilités de paiement peuvent être discutées pour les gros chantiers.',
  },
  {
    question: 'Quels types de bois utilisez-vous ?',
    answer: 'Nous travaillons principalement avec du chêne, du sapin du Nord, et du douglas, sélectionnés pour leur résistance et leur esthétique.',
  },
  {
    question: 'Combien de temps prend une rénovation ?',
    answer: 'Cela dépend de l\'ampleur. Une rénovation partielle peut prendre 1 semaine, tandis qu\'un remplacement complet peut durer de 3 à 6 semaines.',
  },
];
