import { Service, Package, GalleryItem } from './types';

export const COLORS = {
  SMOKY_BLACK: '#11120D',
  OLIVE_DRAB: '#565449',
  BONE: '#D8CFBC',
  FLORAL_WHITE: '#FFFFF4',
  GOLD_ACCENT: '#C5A059'
};

export const SERVICES: Service[] = [
  {
    id: 'boarding',
    title: 'Luxury Boarding',
    description: 'Private suites with orthopedic bedding, 24/7 monitoring, and soothing ambient music.',
    longDescription: 'Our Luxury Boarding experience is redefined for the modern canine. Each guest enjoys a private, climate-controlled suite featuring orthopedic memory foam bedding and ambient calming playlists curated by animal behaviorists. With 24/7 webcams, you can check in on your furry friend anytime. The stay includes three guided relief walks daily and a bedtime tuck-in service.',
    icon: 'home',
    image: 'https://images.unsplash.com/photo-1591946614720-90a587da4a36?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'grooming',
    title: 'Spa & Grooming',
    description: 'Full-service spa treatments including blueberry facials, pawdicures, and aromatherapy.',
    longDescription: 'Indulge your pet in our world-class Spa & Grooming salon. We use only organic, hypoallergenic products. Our services range from breed-specific cuts to luxurious treatments like blueberry facials, mud baths for joint relief, and aromatherapy paw massages. Every session ends with a hand-dry and a spritz of our signature pet-safe cologne.',
    icon: 'scissors',
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'training',
    title: 'Elite Training',
    description: 'Positive reinforcement training from certified behaviorists focusing on obedience and agility.',
    longDescription: 'Unlock your dog’s full potential with our Elite Training programs. Led by certified behaviorists, we focus on positive reinforcement techniques. Whether it is basic obedience, leash reactivity, or advanced agility coursing, we customize a curriculum to your dog’s learning style. Detailed progress reports and handover sessions ensure the training sticks at home.',
    icon: 'award',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'adventure',
    title: 'Adventure Treks',
    description: 'Guided hikes and swim sessions in Hong Kong’s most beautiful nature trails.',
    longDescription: 'For the high-energy explorer, our Adventure Treks offer the ultimate escape. We take small groups on guided hikes through Hong Kong’s most scenic trails, from Sai Kung’s beaches to the Dragon’s Back. Safety is paramount, with GPS trackers on every dog and a 1:3 handler-to-dog ratio. Includes swim sessions (weather permitting) and a post-adventure cleanup.',
    icon: 'map-pin',
    image: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=800&auto=format&fit=crop'
  }
];

export const PACKAGES: Package[] = [
  {
    id: 'daycare',
    name: 'Day Escape',
    price: '$450 HKD',
    features: ['8 Hours of Play', 'Socialization', 'Mid-day Snack', 'Grooming Touch-up']
  },
  {
    id: 'suite',
    name: 'Executive Suite',
    price: '$850 HKD / Night',
    features: ['Private Room', 'Webcam Access', '3 Walks Daily', 'Gourmet Dinner'],
    highlight: true
  },
  {
    id: 'villa',
    name: 'Royal Villa',
    price: '$1200 HKD / Night',
    features: ['Large Private Garden', 'Therapeutic Massage', '24/7 Butler', 'Chauffeur Service']
  },
  {
    id: 'training_camp',
    name: 'Scholar Camp',
    price: '$5000 HKD / Week',
    features: ['Intensive Training', 'Boarding Included', 'Daily Progress Video', 'Graduation Photo']
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: '1', src: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&w=800', alt: 'Dog running', category: 'play' },
  { id: '2', src: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=800', alt: 'Dog jumping', category: 'play' },
  { id: '3', src: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=800&auto=format&fit=crop', alt: 'Grooming', category: 'grooming' },
  { id: '4', src: 'https://images.unsplash.com/photo-1510771463146-e89e6e86560e?q=80&w=800', alt: 'Sleeping dog', category: 'boarding' },
  { id: '5', src: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=800', alt: 'Cute puppy', category: 'boarding' },
  { id: '6', src: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=800', alt: 'Training session', category: 'training' }
];