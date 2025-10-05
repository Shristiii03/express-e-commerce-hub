import { Product } from '@/types/product';
import giftSetRose from '@/assets/gift-set-rose.jpg';
import giftSetGold from '@/assets/gift-set-gold.jpg';
import productHair from '@/assets/product-hair-1.jpg';
import productSkincare from '@/assets/product-skincare-1.jpg';
import productBody from '@/assets/product-body-1.jpg';

export const products: Product[] = [
  {
    id: '1',
    name: 'Rose Gold Ritual Gift Set',
    description: 'A luxurious haircare collection featuring our signature shampoo, conditioner, and nourishing hair serum. Infused with precious botanicals and rose essence for silky, luminous hair.',
    price: 185,
    category: 'giftsets',
    image: giftSetRose,
    isNew: true,
  },
  {
    id: '2',
    name: 'Golden Hour Body Collection',
    description: 'Complete body care indulgence with nourishing body cream, intensive hand treatment, and signature roller perfume. Enriched with gold-infused oils for radiant, soft skin.',
    price: 165,
    category: 'giftsets',
    image: giftSetGold,
    isNew: true,
  },
  {
    id: '3',
    name: 'Luminous Hair Elixir',
    description: 'Premium hair oil treatment enriched with rare botanical extracts. Repairs damage, adds brilliant shine, and protects against environmental stressors.',
    price: 68,
    category: 'haircare',
    image: productHair,
  },
  {
    id: '4',
    name: 'Radiance Revival Serum',
    description: 'Advanced anti-aging face serum with 24K gold peptides and hyaluronic acid. Visibly reduces fine lines while deeply hydrating and brightening the complexion.',
    price: 125,
    category: 'skincare',
    image: productSkincare,
  },
  {
    id: '5',
    name: 'Silk Body Cream',
    description: 'Ultra-rich moisturizing cream with shea butter and vitamin E. Melts into skin for all-day hydration and a subtle, sophisticated fragrance.',
    price: 58,
    category: 'bodycare',
    image: productBody,
  },
  {
    id: '6',
    name: 'Velvet Cleansing Balm',
    description: 'Gentle yet effective makeup remover and cleanser. Dissolves impurities while maintaining skin\'s natural moisture barrier.',
    price: 52,
    category: 'skincare',
    image: productSkincare,
  },
  {
    id: '7',
    name: 'Revitalizing Shampoo',
    description: 'Sulfate-free formula with keratin and argan oil. Cleanses gently while strengthening and adding volume to all hair types.',
    price: 45,
    category: 'haircare',
    image: productHair,
  },
  {
    id: '8',
    name: 'Hydrating Body Mist',
    description: 'Refreshing body spray with hyaluronic acid and aloe vera. Instantly hydrates and perfumes skin with delicate floral notes.',
    price: 38,
    category: 'bodycare',
    image: productBody,
  },
];

export const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'giftsets', name: 'Gift Sets' },
  { id: 'skincare', name: 'Skincare' },
  { id: 'haircare', name: 'Haircare' },
  { id: 'bodycare', name: 'Body Care' },
];
