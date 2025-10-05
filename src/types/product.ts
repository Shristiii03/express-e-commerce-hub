export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'skincare' | 'haircare' | 'bodycare' | 'giftsets';
  image: string;
  isNew?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}
