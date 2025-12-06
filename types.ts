export interface Prompt {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  fullPrompt?: string;
  negativePrompt?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  purchasedPrompts: string[]; // IDs of purchased prompts
}

export type Category = 'All' | 'Art' | 'Portraits' | '3D' | 'Animals' | 'Landscape' | 'Cyberpunk';

export interface CartItem extends Prompt {
  quantity: number;
}