import { useCart as useCartContext } from '@/context';

export const useCart = () => {
  const cart = useCartContext();
  return cart;
};
