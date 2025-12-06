import { Prompt, Category } from './types';

export const CATEGORIES: Category[] = ['All', 'Art', 'Portraits', '3D', 'Animals', 'Landscape', 'Cyberpunk'];

export const PROMPTS: Prompt[] = [
  {
    id: '1',
    title: 'Neon Cyber Samurai',
    description: 'Ultra-detailed cyberpunk samurai in rain-soaked neon city.',
    price: 4.99,
    image: 'https://picsum.photos/id/237/800/800', // Replaced with placeholders in app, logic handles real visuals
    category: 'Cyberpunk',
    rating: 4.8,
    fullPrompt: 'A futuristic samurai standing in a rainy neon city, cyberpunk aesthetic, glowing katana, detailed armor, 8k resolution, unreal engine 5 render.',
    negativePrompt: 'blurry, low quality, deformed hands, missing limbs',
  },
  {
    id: '2',
    title: 'Ethereal Forest Spirit',
    description: 'Mystical glowing deer in a bioluminescent ancient forest.',
    price: 3.50,
    image: 'https://picsum.photos/id/1003/800/800',
    category: 'Animals',
    rating: 4.9,
    fullPrompt: 'Bioluminescent deer wandering through an ancient mystical forest, glowing mushrooms, fireflies, ethereal atmosphere, cinematic lighting.',
  },
  {
    id: '3',
    title: 'Pixar Style Pup',
    description: 'Cute 3D rendered puppy with big eyes in animation style.',
    price: 2.99,
    image: 'https://picsum.photos/id/1025/800/800',
    category: '3D',
    rating: 4.7,
    fullPrompt: 'Adorable puppy, 3d render, pixar style, disney animation, fluffy fur, big expressive eyes, studio lighting, octane render.',
  },
  {
    id: '4',
    title: 'Abstract Fluid Art',
    description: 'Swirling colors of liquid gold and obsidian marble.',
    price: 1.99,
    image: 'https://picsum.photos/id/106/800/800',
    category: 'Art',
    rating: 4.5,
  },
  {
    id: '5',
    title: 'Vintage Film Portrait',
    description: 'Cinematic 1980s style portrait with grain and light leaks.',
    price: 3.99,
    image: 'https://picsum.photos/id/64/800/800',
    category: 'Portraits',
    rating: 4.6,
  },
  {
    id: '6',
    title: 'Futuristic Mars Base',
    description: 'Colony on Mars with red dust and high-tech domes.',
    price: 5.99,
    image: 'https://picsum.photos/id/164/800/800',
    category: 'Landscape',
    rating: 4.8,
  }
];

// Provide distinct images for visual variety in the mock
export const MOCK_IMAGES: Record<string, string> = {
  '1': 'https://images.unsplash.com/photo-1615751072497-5f5169febe33?q=80&w=800&auto=format&fit=crop', // Cyberpunk
  '2': 'https://images.unsplash.com/photo-1485627698386-46c218606328?q=80&w=800&auto=format&fit=crop', // Forest
  '3': 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800&auto=format&fit=crop', // Dog
  '4': 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=800&auto=format&fit=crop', // Abstract
  '5': 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop', // Portrait
  '6': 'https://images.unsplash.com/photo-1614728853975-6663335d112e?q=80&w=800&auto=format&fit=crop', // Mars
};